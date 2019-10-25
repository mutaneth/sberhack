package ru.sbrf.school21.sberhack.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sbrf.school21.sberhack.dao.Properties;
import ru.sbrf.school21.sberhack.service.*;

@RestController
public class BoardController extends JiraController{
    @Autowired
    BoardService boardService;
    @Autowired
    ProjectService projectService;
    @Autowired
    SprintService sprintService;
    @Autowired
    IssueService issueService;

    @RequestMapping(value = "boards/getBoards", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getBoards(@RequestParam String token, @RequestParam String secret){
        initTokens(token, secret);
        return JiraController.newResponseEntity(boardService.getBoards());
    }

    @RequestMapping(value = "boards/getActualInfoByBoard", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getActualInfoByBoard(@RequestParam String token, @RequestParam String secret, @RequestParam Integer boardId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(boardService.getActualInfoByBoard(boardId));
    }

    @RequestMapping(value = "projects/getStandsStatisticByBoard", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getStandsStatisticByBoard(@RequestParam String token, @RequestParam String secret, @RequestParam Integer boardId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(boardService.getStandsStatisticByBoard(boardId));
    }

}
