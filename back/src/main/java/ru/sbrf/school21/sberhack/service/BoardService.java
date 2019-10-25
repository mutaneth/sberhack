package ru.sbrf.school21.sberhack.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BoardService extends JiraService {
    private static final String GET_ALL_BORADS = "/rest/agile/1.0/board";

    private final static String BOARDS = "boards";
    private final static String PROJECT = "project";
    private final static String SPRINT = "sprint";
    private final static String ISSUES = "issues";

    @Autowired
    ProjectService projectService;
    @Autowired
    SprintService sprintService;
    @Autowired
    IssueService issueService;

    @Override
    public String getObjNames(){
        return BOARDS;
    }

    @Override
    public JSONObject objectFormat(JSONObject object){
        return boardFormat(object);
    }

    private JSONObject boardFormat(JSONObject boardInfo){
        final JSONObject formattedBord = new JSONObject();
        formattedBord.put(NAME, boardInfo.get(NAME));
        formattedBord.put(ID, boardInfo.get(ID));
        return formattedBord;
    }

    public JSONObject getActualInfoByBoard(Integer boardId){
        final JSONObject response = new JSONObject();
        response.put(PROJECT, projectService.getActualProjectByBoardId(boardId));
        response.put(SPRINT, sprintService.getActualSprintByBoardId(boardId));
        response.put(ISSUES, issueService.getActualSortedIssuesByBoardId(boardId));
        return response;
    }

    public JSONObject getBoards(){
        return format(getJiraResponse(GET_ALL_BORADS));
    }

    public JSONObject getStandsStatisticByBoard(Integer boardId){
        final JSONArray issues = issueService.getIssuesByBoard(boardId).getJSONArray(ISSUES);
        final JSONObject response = new JSONObject();
        for(int i =0; i<issues.length();i++){
            try {
                final JSONObject issue = (JSONObject)issues.get(i);
                if (issue.getString(ISSUE_TYPE).equals(BUG)) {
                    final String bugStand = issue.getString(BUG_STAND);
                    if (response.has(bugStand)) {
                        response.put(bugStand, response.getInt(bugStand) + 1);
                    } else {
                        response.put(bugStand, 1);
                    }
                }
            } catch (Exception e){
            }
        }
        return response;
    }
}
