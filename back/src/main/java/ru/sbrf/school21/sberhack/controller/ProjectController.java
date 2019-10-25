package ru.sbrf.school21.sberhack.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sbrf.school21.sberhack.service.ProjectService;

@RestController
public class ProjectController extends JiraController{
    @Autowired
    ProjectService projectService;

    @RequestMapping(value = "projects/getProjectsByBoardId", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody ResponseEntity<String> getProjectsByBoardId(@RequestParam String token, @RequestHeader String secret, @RequestParam Integer boardId){
        initTokens(token, secret);
        return JiraController.newResponseEntity(projectService.getProjectByBoardId(boardId));
    }
}
