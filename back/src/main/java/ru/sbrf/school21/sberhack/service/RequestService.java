package ru.sbrf.school21.sberhack.service;

import com.google.api.client.auth.oauth.OAuthParameters;
import com.google.api.client.http.GenericUrl;
import com.google.api.client.http.HttpRequest;
import com.google.api.client.http.HttpRequestFactory;
import com.google.api.client.http.HttpResponse;
import com.google.api.client.http.javanet.NetHttpTransport;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.sbrf.school21.sberhack.entity.JiraOAuthGetAccessToken;

import java.io.IOException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Scanner;

@Service
public class RequestService {
    @Autowired
    private TokenFactory tokenFactory;

    public JSONObject request(String token, String secret, String url){
        try
        {
            OAuthParameters parameters = getParameters(token, secret);
            HttpResponse response = getResponseFromUrl(parameters, new GenericUrl(url));
            return (parseResponse(response));
        } catch (Exception e) {
            return (new JSONObject(e));
        }
    }

    private JSONObject parseResponse(HttpResponse response) throws IOException {
        Scanner s = new Scanner(response.getContent()).useDelimiter("\\A");
        String result = s.hasNext() ? s.next() : "";
        try {
            return (new JSONObject(result));
        } catch (Exception e) {
            return (new JSONObject(e));
        }
    }

    private static HttpResponse getResponseFromUrl(OAuthParameters parameters, GenericUrl jiraUrl) throws IOException {
        HttpRequestFactory requestFactory = new NetHttpTransport().createRequestFactory(parameters);
        HttpRequest request = requestFactory.buildGetRequest(jiraUrl);
        return request.execute();
    }

    public OAuthParameters getParameters(String tmpToken, String secret) throws NoSuchAlgorithmException, InvalidKeySpecException {
        JiraOAuthGetAccessToken oAuthAccessToken = tokenFactory.getAccessToken(tmpToken, secret);
        oAuthAccessToken.verifier = secret;
        return oAuthAccessToken.createParameters();
    }
}
