package ru.sbrf.school21.sberhack.service;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import ru.sbrf.school21.sberhack.dao.Properties;

public abstract class JiraService {
    final static String TOTAL = "total";
    final static String VALUES = "values";
    final static String COUNT = "count";
    final static String NAME = "name";
    final static String ID = "id";
    final static String BUG_STAND = "bug_stand";
    final static String ISSUE_TYPE = "issuetype";
    final static String BUG = "Bug";

    private static String token;
    private static String secret;

    @Autowired
    RequestService requestService;

    public JSONObject format(JSONObject response) {
        try {
            final JSONObject result = new JSONObject();
            final JSONArray resultValues = new JSONArray();

            final JSONArray values = getValues(response);
            for (int i = 0; i < values.length(); i++) {
                try {
                    resultValues.put(objectFormat((JSONObject) values.get(i)));
                } catch (Exception e) {
                }
            }
            result.put(getObjNames(), resultValues);
            result.put(COUNT, resultValues.length());
            return result;
        } catch (Exception e) {
            return null;
        }
    }

    abstract JSONObject objectFormat(JSONObject object);

    abstract String getObjNames();

    Integer getCount(JSONObject response){
        return response.getInt(TOTAL);
    }

    JSONArray getValues(JSONObject response){
        return response.getJSONArray(VALUES);
    }


    private String getUrlForIssue(String issueIdOrKey, String jiraApi) {
        String url = Properties.getJiraHome() + jiraApi;
        url = url.replace("{issueIdOrKey}", issueIdOrKey);
        return url;
    }

    /**
     * Возвращает url для конкретного апи и дашборда
     * @param boardId
     * @param jiraApi
     * @return
     */
    private String getUrlForBoard(Integer boardId, String jiraApi) {
        String url = Properties.getJiraHome() + jiraApi;
        url = url.replace("{boardId}", boardId.toString());
        return url;
    }

    protected JSONObject getJiraResponseByIssue(String issueIdOrKey, String jiraApi){
        String url = getUrlForIssue(issueIdOrKey, jiraApi);
        JSONObject response = requestService.request(token, secret, url);
        return response;
    }

    /**
     * Возвращает результат запроса в Jira для конкретного борда и api
     * @param boardId
     * @param jiraApi
     * @return
     */
    protected JSONObject getJiraResponseByBoard(Integer boardId, String jiraApi){
        String url = getUrlForBoard(boardId, jiraApi);
        JSONObject response = requestService.request(token, secret, url);
        return response;
    }

    /**
     * Возвращает результат запроса в Jira для конкретного борда и api
     * @param jiraApi
     * @return
     */
    protected JSONObject getJiraResponse(String jiraApi){
        final String url = Properties.getJiraHome() + jiraApi;
        return requestService.request(token, secret, url);
    }

    public static void setToken(String token) {
        JiraService.token = token;
    }

    public static void setSecret(String secret) {
        JiraService.secret = secret;
    }
}
