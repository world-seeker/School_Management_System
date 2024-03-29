

package com.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.model.Marks;
import com.management.model.Student;
import com.management.repository.MarksRepository;
import com.management.repository.StudentRepository;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;
    
    @Autowired
    private MarksRepository marksRepository;

    // GET all students
    @GetMapping
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    // GET student by ID
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
    }

    // POST create a new student
    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Student savedStudent = studentRepository.save(student);

        // Automatically create marks for the new student
        Marks marks = new Marks();
        marks.setStudent(savedStudent);
        marks.setEnglishMarks(0);
        marks.setMathsMarks(0);
        marks.setPhysicsMarks(0);
        // Set marks for other subjects as needed

        marksRepository.save(marks);

        return ResponseEntity.ok(savedStudent);
    }

    // DELETE a student by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteStudent(@PathVariable Long id) {
        try {
        	marksRepository.deleteById(id);
            studentRepository.deleteById(id);
            // Return a JSON object with success message
            return ResponseEntity.ok().body("{\"message\": \"Student with ID: " + id + " deleted successfully.\"}");
        } catch (Exception e) {
            // Return a JSON object with error message
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("{\"error\": \"Error deleting student with ID: " + id + "\"}");
        }
    }

}
