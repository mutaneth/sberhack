package ru.sbrf.school21.sberhack.controller;

import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.sbrf.school21.sberhack.dao.Properties;
import ru.sbrf.school21.sberhack.entity.JiraOAuthGetAccessToken;
import ru.sbrf.school21.sberhack.entity.JiraOAuthGetTemporaryToken;
import com.google.api.client.auth.oauth.OAuthAuthorizeTemporaryTokenUrl;
import com.google.api.client.auth.oauth.OAuthCredentialsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import ru.sbrf.school21.sberhack.service.TokenFactory;

@Controller
public class AuthController {
    private String authorizationUrl;

    @Autowired
    private TokenFactory tokenFactory;

    public AuthController() {
        authorizationUrl = Properties.getJiraHome() + "/plugins/servlet/oauth/authorize";
    }

    /**
     * Делает запрос временного токена и ссылки для его авторизации.
     */
    @RequestMapping(value = "auth/temp", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<String> getAndAuthorizeTemporaryToken() {
        try {
            final JiraOAuthGetTemporaryToken temporaryToken = tokenFactory.getTemporaryToken();
            final OAuthCredentialsResponse response = temporaryToken.execute();
            final OAuthAuthorizeTemporaryTokenUrl authorizationURL = new OAuthAuthorizeTemporaryTokenUrl(authorizationUrl);
            authorizationURL.temporaryToken = response.token;

            final JSONObject JSONresponse = new JSONObject();
            JSONresponse.put("token", response.token);
            JSONresponse.put("authorizationURL", authorizationURL.toString());
            return JiraController.newResponseEntity(JSONresponse);
        } catch (Exception e) {
            final JSONObject errorResponse = new JSONObject();
            errorResponse.put("error", e.toString());
            return JiraController.newResponseEntity(errorResponse);
        }
    }

    /**
     * Получает постоянный токен
     */
    @RequestMapping(value = "auth/norm", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<String> getAccessToken(@RequestParam String tmptoken, @RequestParam String secret) {
        try {
            final JiraOAuthGetAccessToken oAuthAccessToken = tokenFactory.getAccessToken(tmptoken, secret);
            final OAuthCredentialsResponse response = oAuthAccessToken.execute();
            final JSONObject JSONresponse = new JSONObject();
            JSONresponse.put("token", response.token);
            return JiraController.newResponseEntity(JSONresponse);
        } catch (Exception e) {
            final JSONObject errorResponse = new JSONObject();
            errorResponse.put("error", e.toString());
            return JiraController.newResponseEntity(errorResponse);
        }
    }
}
