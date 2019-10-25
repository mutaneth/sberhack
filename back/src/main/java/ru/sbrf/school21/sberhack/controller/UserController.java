package ru.sbrf.school21.sberhack.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.sbrf.school21.sberhack.service.UserService;

@RestController
public class UserController extends JiraController {
    @Autowired
    UserService userService;

    @RequestMapping(value = "user/getCurrentUser", produces = "application/json;charset=UTF-8", method = RequestMethod.GET)
    public @ResponseBody
    ResponseEntity<String> getCurrentUser(@RequestParam String token, @RequestParam String secret) {
        initTokens(token, secret);
        return JiraController.newResponseEntity(userService.getMyself());
    }
}
