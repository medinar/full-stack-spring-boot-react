package com.medinar.fullstackspringbootreact.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        return Arrays.asList(
                new Student(1L, "Jamila", "jamila@medinar.com", Gender.FEMALE.name()),
                new Student(2L, "Alex", "alex@medinar.com", Gender.FEMALE.name())
        );
    }
}
