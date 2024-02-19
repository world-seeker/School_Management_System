package com.management.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Marks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "student_id", referencedColumnName = "id")
    private Student student;

    private int englishMarks;
    private int mathsMarks;
    private int physicsMarks;
    // other subject marks
    
    
    
	public Long getId() {
		return id;
	}
	
	public Marks(Student student, int englishMarks, int mathsMarks, int physicsMarks) {
		super();
		this.student = student;
		this.englishMarks = englishMarks;
		this.mathsMarks = mathsMarks;
		this.physicsMarks = physicsMarks;
	}
	
	
	public Marks() {
		
	}

	public void setId(Long id) {
		this.id = id;
	}
	public Student getStudent() {
		return student;
	}
	public void setStudent(Student student) {
		this.student = student;
	}
	public int getEnglishMarks() {
		return englishMarks;
	}
	public void setEnglishMarks(int englishMarks) {
		this.englishMarks = englishMarks;
	}
	public int getMathsMarks() {
		return mathsMarks;
	}
	public void setMathsMarks(int mathsMarks) {
		this.mathsMarks = mathsMarks;
	}
	public int getPhysicsMarks() {
		return physicsMarks;
	}
	public void setPhysicsMarks(int physicsMarks) {
		this.physicsMarks = physicsMarks;
	}

    // Getters and setters
}

