package com.management.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.model.Marks;
import com.management.model.Student;

public interface MarksRepository extends JpaRepository<Marks, Long> {
	Optional<Marks> findBystudent_id(Long id);
	Optional<Marks>  findByStudentId(Long studentId);
	void deleteByStudent(Student student);
}
