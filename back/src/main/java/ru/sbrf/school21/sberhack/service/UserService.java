package ru.sbrf.school21.sberhack.service;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class UserService extends JiraService {
    private static final String GET_CURRENT_USER = "/rest/api/3/myself";

    public JSONObject getMyself() {
        return getJiraResponse(GET_CURRENT_USER);
    }

    @Override
    JSONObject objectFormat(JSONObject object) {
        return null;
    }

    @Override
    String getObjNames() {
        return null;
    }
}
