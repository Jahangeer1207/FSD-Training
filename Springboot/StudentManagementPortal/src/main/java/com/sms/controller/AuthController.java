package com.sms.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.sms.entity.User;
import com.sms.service.UserService;

@Controller
public class AuthController {

    private final UserService userService;

    AuthController(UserService userService) {
        this.userService = userService;
    }

    // Registration Page
    @GetMapping("/register")
    public String registerPage(Model model) {

        model.addAttribute("user", new User());

        return "register";
    }

    // Save User
    @PostMapping("/saveUser")
    public String saveUser(
            @ModelAttribute User user,
            Model model) {

        try {

            userService.registerUser(user);

            model.addAttribute(
                    "success",
                    "Registration Successful");

            return "login";

        } catch (Exception e) {

            model.addAttribute(
                    "error",
                    e.getMessage());

            return "register";
        }
    }

    // Login Page
    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }
}