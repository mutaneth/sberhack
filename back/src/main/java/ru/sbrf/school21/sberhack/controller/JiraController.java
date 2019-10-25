package ru.sbrf.school21.sberhack.controller;

import org.json.JSONObject;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import ru.sbrf.school21.sberhack.service.JiraService;

public abstract class JiraController {

    /**
     * Возвращает стандартный ответ с тегом
     */
    static ResponseEntity<java.lang.String> newResponseEntity(JSONObject body){
        if (body == null)
            return new ResponseEntity<>(HttpStatus.I_AM_A_TEAPOT);
        HttpStatus status = HttpStatus.OK;
        HttpHeaders headers = new HttpHeaders();
        headers.add("Access-Control-Allow-Origin", "*");
        headers.add("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
        headers.add("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
        headers.add("Access-Control-Max-Age", "1728000");

        return new ResponseEntity<>(body.toString(), headers, status);
    }

    void initTokens(String token, String secret){
//        token = "9JdgzMbMvwSNu8bQN6fNRPEVzWUxzeC0";
//        secret = "Np85e0";
        JiraService.setToken(token);
        JiraService.setSecret(secret);
    }
}
