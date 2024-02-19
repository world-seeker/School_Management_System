package com.management.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.model.Marks;
import com.management.repository.MarksRepository;

@RestController
@RequestMapping("/api/marks")
public class MarksController {

    @Autowired
    private MarksRepository marksRepository;

    // Get all marks
    @GetMapping
    public ResponseEntity<List<Marks>> getAllMarks() {
        List<Marks> marksList = marksRepository.findAll();
        return new ResponseEntity<>(marksList, HttpStatus.OK);
    }

    // Get marks by student ID
    @GetMapping("/{studentId}")
    public ResponseEntity<Marks> getMarksByStudentId(@PathVariable Long studentId) {
        Optional<Marks> marksOptional = marksRepository.findBystudent_id(studentId);
        return marksOptional.map(marks -> new ResponseEntity<>(marks, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Add marks for a student
    @PostMapping
    public ResponseEntity<Marks> addMarks(@RequestBody Marks marks) {
        Marks savedMarks = marksRepository.save(marks);
        return new ResponseEntity<>(savedMarks, HttpStatus.CREATED);
    }

    // Update marks for a student
    @PutMapping("/{studentId}")
    public ResponseEntity<Object> updateMarks(@PathVariable Long studentId, @RequestBody Marks marks) {
        Optional<Marks> marksOptional = marksRepository.findByStudentId(studentId);
        if (marksOptional.isPresent()) {
            Marks existingMarks = marksOptional.get();
            
            // Update marks based on the provided data
            existingMarks.setEnglishMarks(marks.getEnglishMarks());
            existingMarks.setMathsMarks(marks.getMathsMarks());
            existingMarks.setPhysicsMarks(marks.getPhysicsMarks());
            // Update other subject marks as needed
           String name = existingMarks.getStudent().getFirstName();
            // Save the updated marks
            Marks updatedMarks = marksRepository.save(existingMarks);
            
            // Return a JSON response with a success message
            return ResponseEntity.ok().body("{\"message\": \"Marks for student with ID " +studentId+" Name: "+ name + " updated successfully.\"}");
        } else {
            // Return a JSON response with an error message
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Marks for student with ID " + studentId + " not found.\"}");
        }
    }


    // Delete marks for a student
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteMarks(@PathVariable Long id) {
        marksRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
