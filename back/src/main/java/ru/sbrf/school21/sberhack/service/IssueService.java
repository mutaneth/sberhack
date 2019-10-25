package ru.sbrf.school21.sberhack.service;

import org.apache.commons.codec.binary.StringUtils;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IssueService extends JiraService {
    private static final String GET_ALL_ISSUES = "/rest/agile/1.0/board/{boardId}/issue";
    private static final String GET_ISSUE_BY_ID_OR_KEY = "/rest/api/3/issue/{issueIdOrKey}";
    private static final String EDIT_ISSUE_BY_ID_OR_KEY = "/rest/api/3/issue/{issueIdOrKey}";
    private static final String GET_ISSUE_CHANGELOG_BY_ID_OR_KEY = "/rest/api/3/issue/{issueIdOrKey}/changelog";

    private final static String ISSUES = "issues";
    private final static String KEY = "key";
    private final static String FIELDS = "fields";
    private final static String SPRINT = "sprint";
    private final static String STATUS = "status";
    private final static String DESCRIPTION = "description";
    private final static String CONFLUENCE = "confluence";
    private final static String BUG_STAND_FIELD = "customfield_10027";

    @Autowired
    SprintService sprintService;

    @Override
    public String getObjNames() {
        return ISSUES;
    }

    @Override
    public JSONObject objectFormat(JSONObject object) {
        return issueFormat(object);
    }

    private JSONObject issueFormat(JSONObject issueInfo) {
        final JSONObject formattedIssue = new JSONObject();
        formattedIssue.put(NAME, issueInfo.get(KEY));
        formattedIssue.put(ID, issueInfo.get(ID));
        final JSONObject fields = (JSONObject) issueInfo.get(FIELDS);
        final JSONObject sprint = (JSONObject) fields.get(SPRINT);
        formattedIssue.put(SPRINT, sprint.getInt(ID));
        final JSONObject status = fields.getJSONObject(STATUS);
        formattedIssue.put(STATUS, status.get(NAME));
        formattedIssue.put(DESCRIPTION, fields.get(DESCRIPTION));
        final JSONObject issueType = fields.getJSONObject(ISSUE_TYPE);
        final String issueTypeName = issueType.getString(NAME);
        if (issueTypeName.equals(BUG)){
            formattedIssue.put(ISSUE_TYPE, BUG);
            formattedIssue.put(BUG_STAND, fields.get(BUG_STAND_FIELD));
        }
        return formattedIssue;
    }

    @Override
    JSONArray getValues(JSONObject response) {
        return response.getJSONArray(ISSUES);
    }

    public JSONObject getIssuesByBoardAndSprint(JSONObject jiraResponse, Integer sprintId) {
        final JSONArray issues = jiraResponse.getJSONArray(ISSUES);
        final JSONArray filtredIssues = new JSONArray();
        for (int i = 0; i < issues.length(); i++) {
            try {
                final JSONObject issue = (JSONObject) issues.get(i);
                final JSONObject fields = (JSONObject) issue.get(FIELDS);
                final JSONObject sprint = (JSONObject) fields.get(SPRINT);
                if (sprint.get(ID) == sprintId)
                    filtredIssues.put(issueFormat(issue));
            } catch (Exception e) {
            }
        }
        JSONObject result = new JSONObject();
        result.put(COUNT, filtredIssues.length());
        result.put(ISSUES, filtredIssues);
        return result;
    }

    public JSONObject getIssuesByBoardAndSprintId(Integer boardId, Integer sprintId) {
        try {
            final JSONArray issues = getIssuesByBoard(boardId).getJSONArray(ISSUES);
            final JSONArray actualIssues = new JSONArray();
            for (int i = 0; i < issues.length(); i++) {
                if (((JSONObject) issues.get(i)).get(SPRINT).equals(sprintId))
                    actualIssues.put(issues.get(i));
            }
            final JSONObject response = new JSONObject();
            response.put(COUNT, actualIssues.length());
            response.put(ISSUES, actualIssues);
            return response;
        }
        catch (Exception e){
            return null;
        }
    }

    public JSONObject getActualIssuesByBoardId(Integer boardId) {
        final Integer actualSprint = sprintService.getActualSprint(boardId);
        return getIssuesByBoardAndSprintId(boardId, actualSprint);
    }

    public JSONObject getActualSortedIssuesByBoardId(Integer boardId) {
        try {
            final JSONArray actualIssues = getActualIssuesByBoardId(boardId).getJSONArray(ISSUES);
            final JSONObject sortedIssues = new JSONObject();
            for (int i = 0; i < actualIssues.length(); i++) {
                final String state = (String) ((JSONObject) actualIssues.get(i)).get(STATUS);
                if (sortedIssues.has(state)) {
                    ((JSONArray) (sortedIssues.get(state))).put(actualIssues.get(i));
                } else {
                    final JSONArray typedIssues = new JSONArray();
                    typedIssues.put(actualIssues.get(i));
                    sortedIssues.put(state, typedIssues);
                }
            }
            return sortedIssues;
        }
        catch (Exception e){
            return null;
        }
    }

    public JSONObject getIssuesByBoard(Integer boardId) {
        return format(getJiraResponseByBoard(boardId, GET_ALL_ISSUES));
    }

    public JSONObject updateIssueState(String issueByIdOrKey, String oldState, String newState){
        final JSONObject issue = getIssueByIdOrKey(issueByIdOrKey);
        final JSONObject fields = issue.getJSONObject(FIELDS);
        final JSONObject state = fields.getJSONObject(STATUS);
        final String name = state.getString(NAME);
        if (!StringUtils.equals(name,oldState))
            return null;
        return changeState(issue, issueByIdOrKey, newState);
    }

    private JSONObject changeState(JSONObject issue, String issueByIdOrKey, String newState){
        final JSONObject updateBody = new JSONObject();
        final JSONObject id = new JSONObject();
        id.put(ID, "10011");
        final JSONObject state = new JSONObject();
        state.put(STATUS, id);
        updateBody.put(FIELDS, state);
        getJiraResponseByIssue(issueByIdOrKey, EDIT_ISSUE_BY_ID_OR_KEY);
        return updateBody;
    }

    public JSONObject getIssueByIdOrKey(String issueByIdOrKey){
        return getJiraResponseByIssue(issueByIdOrKey, GET_ISSUE_BY_ID_OR_KEY);
    }

    public JSONObject getIssueChangelogByIdOrKey(String issueByIdOrKey){
        return getJiraResponseByIssue(issueByIdOrKey, GET_ISSUE_CHANGELOG_BY_ID_OR_KEY);
    }
}
