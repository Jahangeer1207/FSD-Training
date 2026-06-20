package com.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.entity.Student;
import com.sms.repository.StudentRepository;

@SuppressWarnings("unused")
@Service
public class StudentService {

    private final StudentRepository repository;

    StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public Student getStudentById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}