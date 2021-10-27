package com.medinar.fullstackspringbootreact.student;

import com.medinar.fullstackspringbootreact.student.exception.BadRequestException;
import com.medinar.fullstackspringbootreact.student.exception.NotFoundException;
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

    public void addStudent(Student student) throws BadRequestException {
        Boolean emailExists = studentRepository.existsByEmail(student.getEmail());
        if (emailExists) {
            throw new BadRequestException(String.format(
                    "Email `%s` already exist",
                    student.getEmail()
            ));
        }
        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        if(!studentRepository.existsById(studentId)) {
            throw new NotFoundException(
                    "Student with id " + studentId + " does not exists");
        }
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
