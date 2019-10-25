package ru.sbrf.school21.sberhack.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sbrf.school21.sberhack.service.IssueService;

@RestController
public class IssueController extends JiraController {

    @Autowired
    IssueService issueService;

    @RequestMapping(value = "issues/getIssuesByBoardId", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getIssuesByBoard(@RequestParam String token, @RequestParam String secret, @RequestParam Integer boardId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(issueService.getIssuesByBoard(boardId));
    }

    @RequestMapping(value = "issues/getIssuesByBoardAndSprintId", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getIssuesByBoardAndSprint(@RequestParam String token, @RequestParam String secret, @RequestParam Integer boardId, @RequestParam Integer sprintId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(issueService.getIssuesByBoardAndSprintId(boardId, sprintId));
    }

    @RequestMapping(value = "issues/getActualIssuesByBoard", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getActualIssuesByBoard(@RequestParam String token, @RequestParam String secret, @RequestParam Integer boardId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(issueService.getActualIssuesByBoardId(boardId));
    }

    @RequestMapping(value = "issues/getActualSortedIssuesByBoardId", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getActualSortedIssuesByBoardId(@RequestParam String token, @RequestParam String secret, @RequestParam Integer boardId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(issueService.getActualSortedIssuesByBoardId(boardId));
    }

    @RequestMapping(value = "issues/getIssueByIdOrKey", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getIssueByIdOrKey(@RequestParam String token, @RequestParam String secret, @RequestParam String issueIdOrKey){
        initTokens(token, secret);
        return JiraController.newResponseEntity(issueService.getIssueByIdOrKey(issueIdOrKey));
    }

    @RequestMapping(value = "issues/getIssueChangelogByIdOrKey", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getIssueChangelogByIdOrKey(@RequestParam String token, @RequestParam String secret, @RequestParam String issueIdOrKey){
        initTokens(token, secret);
        return JiraController.newResponseEntity(issueService.getIssueChangelogByIdOrKey(issueIdOrKey));
    }
}