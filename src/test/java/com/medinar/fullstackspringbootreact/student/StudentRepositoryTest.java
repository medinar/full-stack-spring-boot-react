package com.medinar.fullstackspringbootreact.student;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.assertj.core.api.Assertions.assertThat;

class StudentRepositoryTest {

    @Autowired
    private StudentRepository underTest;

    @Test
    void itShouldCheckIfEmailExists() {
        // given
        String email = "rommel.d.medina@gmail.com";
        Student student = new Student(
                "Rommel",
                email,
                Gender.MALE
        );
        underTest.save(student);

        // when
        boolean expected = underTest.existsByEmail(email);

        // then
        assertThat(expected).isTrue();

    }
}