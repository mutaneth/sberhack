package ru.sbrf.school21.sberhack.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class SprintService extends JiraService {
    private static final String GET_ALL_SPRINTS = "/rest/agile/1.0/board/{boardId}/sprint";

    private final static String SPRINTS = "sprints";
    private final static String ACTIVE = "active";
    private final static String STATE = "state";

    @Override
    Integer getCount(JSONObject response) {
        return response.getJSONArray(VALUES).length();
    }

    @Override
    JSONObject objectFormat(JSONObject sprintInfo) {
        return sprintInfo;
    }

    @Override
    String getObjNames() {
        return SPRINTS;
    }

    private JSONObject getActual(JSONObject jiraResponse) {
        try {
            final JSONArray values = jiraResponse.getJSONArray(VALUES);
            for (int i = 0; i < values.length(); i++) {
                final JSONObject sprint = (JSONObject)values.get(i);
                if (sprint.get(STATE).equals(ACTIVE))
                    return sprint;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public Integer getActualSprint(Integer boardId){
        try {
            JSONObject actualSprint = getActualSprintByBoardId(boardId);
            return (Integer) actualSprint.get(ID);
        }
        catch (Exception e){
            return null;
        }
    }

    public JSONObject getSprintByBoardId(Integer boardId){
        return format(getJiraResponseByBoard(boardId, GET_ALL_SPRINTS));
    }

    public JSONObject getActualSprintByBoardId(Integer boardId){
        return getActual(getJiraResponseByBoard(boardId, GET_ALL_SPRINTS));
    }
}
