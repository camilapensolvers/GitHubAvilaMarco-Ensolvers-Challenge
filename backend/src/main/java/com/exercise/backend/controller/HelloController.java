package com.exercise.backend.controller;

import com.exercise.backend.dto.HelloDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.OK;

@RestController
@CrossOrigin
public class HelloController {

    @GetMapping("/hello")
    public ResponseEntity<?> hello() {
        var res = new HelloDTO("Hello World!");
        return new ResponseEntity<>(res, OK);
    }
}
