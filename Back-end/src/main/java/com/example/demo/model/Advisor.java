package com.example.demo.model;



import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Advisor {
	@Id
	private Long avid; 
	private String firstname;
	private String lastname;
	private String emailid;
	private Long mobileno;
	private String gender;
	private int age;
	private String educationqualification;
	private int yearsofexperience;
	private String stream;
	private String password;
	private String confirmpassword;
	public Long getAvid() {
		return avid;
	}
	public void setAvid(Long avid) {
		this.avid = avid;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public Long getMobileno() {
		return mobileno;
	}
	public void setMobileno(Long mobileno) {
		this.mobileno = mobileno;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getEducationqualification() {
		return educationqualification;
	}
	public void setEducationqualification(String educationqualification) {
		this.educationqualification = educationqualification;
	}
	public int getYearsofexperience() {
		return yearsofexperience;
	}
	public void setYearsofexperience(int yearsofexperience) {
		this.yearsofexperience = yearsofexperience;
	}
	public String getStream() {
		return stream;
	}
	public void setStream(String stream) {
		this.stream = stream;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmpassword() {
		return confirmpassword;
	}
	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	

}