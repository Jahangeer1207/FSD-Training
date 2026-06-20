package com.sms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.*;

import com.sms.entity.Student;
import com.sms.service.StudentService;

@SuppressWarnings("unused")
@Controller
@RequestMapping("/students")
public class StudentController {

    private final StudentService service;

    StudentController(StudentService service) {
        this.service = service;
    }

    // View Students
    @GetMapping
    public String getStudents(Model model) {

        model.addAttribute(
                "students",
                service.getAllStudents());

        return "students";
    }

    // Add Form
    @GetMapping("/add")
    public String addStudent(Model model) {

        model.addAttribute(
                "student",
                new Student());

        return "add-student";
    }

    // Save Student
    @PostMapping("/save")
    public String saveStudent(
            @ModelAttribute Student student) {

        service.saveStudent(student);

        return "redirect:/students";
    }

    // Edit Form
    @GetMapping("/edit/{id}")
    public String editStudent(
            @PathVariable Long id,
            Model model) {

        model.addAttribute(
                "student",
                service.getStudentById(id));

        return "edit-student";
    }

    // Update Student
    @PostMapping("/update")
    public String updateStudent(
            @ModelAttribute Student student) {

        service.saveStudent(student);

        return "redirect:/students";
    }

    // Delete Student
    @GetMapping("/delete/{id}")
    public String deleteStudent(
            @PathVariable Long id) {

        service.deleteStudent(id);

        return "redirect:/students";
    }
}