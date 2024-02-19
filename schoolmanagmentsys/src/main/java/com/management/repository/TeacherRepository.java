package com.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.management.model.Teacher;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {
    // You can define custom query methods here if needed
}
