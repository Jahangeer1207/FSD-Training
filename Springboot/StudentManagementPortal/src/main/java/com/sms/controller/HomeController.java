package com.sms.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;

import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;


import com.sms.entity.User;

import com.sms.service.UserService;



@SuppressWarnings("unused")
@Controller
public class HomeController {


private final UserService userService;


  HomeController(UserService userService) {
    this.userService = userService;
  }



@GetMapping("/")
public String home(){

    return "redirect:/login";

}



@GetMapping("/dashboard")
public String dashboard(
        Authentication authentication,
        Model model){


    String email =
            authentication.getName();


    User user =
            userService.findByEmail(email);


    model.addAttribute(
            "user",
            user);


    return "dashboard";

}



@GetMapping("/profile")
public String profile(
        Authentication authentication,
        Model model){


    String email =
            authentication.getName();


    User user =
            userService.findByEmail(email);


    model.addAttribute(
            "user",
            user);


    return "profile";

}



@GetMapping("/contact")
public String contact(){

    return "contact";

}


}