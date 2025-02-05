package top.codejourney.blogs.controller;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @PostMapping("login")
    public String test(@RequestBody String test) {
        System.out.println(test);
        JSONObject jsonObject = JSONObject.parseObject(test);
        return "hello, " + jsonObject.get("username");
    }
}
