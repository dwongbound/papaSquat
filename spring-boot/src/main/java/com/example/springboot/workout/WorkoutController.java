package com.example.springboot.workout;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WorkoutController {

    @RequestMapping("/hello")
    public String sayHi() {
        return "{'Name': 'Dylan'}";
    }

}