package ru.sbrf.school21.sberhack.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sbrf.school21.sberhack.service.SprintService;

@RestController
public class SprintCotroller extends JiraController{
    @Autowired
    SprintService sprintService;

    @RequestMapping(value = "sprints/getAllForBoardId", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getSprintsByBoard(@RequestParam String token, @RequestParam String secret, @RequestParam Integer boardId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(sprintService.getSprintByBoardId(boardId));
    }

    @RequestMapping(value = "sprints/getActualByBoard", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getActualSprintByBoard(@RequestParam String token, @RequestParam String secret, @RequestParam Integer boardId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(sprintService.getActualSprintByBoardId(boardId));
    }
}
