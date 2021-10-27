package com.medinar.fullstackspringbootreact.student;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public void addStudent(Student student) {
        // check if email is taken
        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        // check if student exist
        studentRepository.deleteById(studentId);
    }

    public Student getStudentById(Long studentId) {
        // check if student exist
        return studentRepository.getById(studentId);
    }

    public void updateStudent(Student student) {
        studentRepository.save(student);
    }
}