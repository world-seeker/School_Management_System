package com.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.model.Student;

public interface StudentRepository extends JpaRepository<Student,Long> {

}
