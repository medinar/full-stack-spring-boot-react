package com.medinar.fullstackspringbootreact.student;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class StudentRepositoryTest {

    @Autowired
    private StudentRepository underTest;

    @AfterEach
    void tearDown() {
        underTest.deleteAll();
    }

    @Test
    void itShouldCheckWhenStudentEmailExists() {
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

    @Test
    void itShouldCheckWhenStudentEmailDoesNotExists() {
        // given
        String email = "rommel.d.medina@gmail.com";


        // when
        boolean expected = underTest.existsByEmail(email);

        // then
        assertThat(expected).isFalse();

    }
}