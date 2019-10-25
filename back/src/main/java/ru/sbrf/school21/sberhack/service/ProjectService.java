package ru.sbrf.school21.sberhack.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class ProjectService extends JiraService{
    private final static String PROJECTS = "projects";
    private static final String GET_ALL_PROJECTS = "/rest/agile/1.0/board/{boardId}/project";

    @Override
    public String getObjNames(){
        return PROJECTS;
    }

    @Override
    public JSONObject objectFormat(JSONObject object){
        return projectFormat(object);
    }

    private JSONObject projectFormat(JSONObject boardInfo){
        final JSONObject formattedBord = new JSONObject();
        formattedBord.put(NAME, boardInfo.get(NAME));
        formattedBord.put(ID, boardInfo.get(ID));
        return formattedBord;
    }

    public JSONObject getProjectByBoardId(Integer boardId){
        return format(getJiraResponseByBoard(boardId, GET_ALL_PROJECTS));
    }

    public JSONObject getActualProjectByBoardId(Integer boardId){
        final JSONArray values = getJiraResponseByBoard(boardId, GET_ALL_PROJECTS).getJSONArray(VALUES);
        if(values.length() != 0)
            return values.getJSONObject(0);
        return null;
    }
}
