package com.demoweb.Controller.Request;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RequestBody {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
