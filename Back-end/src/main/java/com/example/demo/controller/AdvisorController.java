package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Advisor;
import com.example.demo.service.AdvisorService;

@CrossOrigin("*")
@RestController
@RequestMapping("/advisor")
public class AdvisorController {
	@Autowired
	private AdvisorService service;
	
	
	@GetMapping("/get")
	public List<Advisor> GetAdvisor(){
		return service.getAdvisor();
	}
	
	@GetMapping("/find/{aid}")
	public Optional<Advisor> FindAdvisor(@PathVariable int aid){
		return service.findAdvisor(aid);
	}
	
	@PostMapping("/add")
	public Advisor AddAdvisor(@RequestBody Advisor advisor) {
		return service.addAdvisor(advisor);
	}
	@PutMapping("/edit/{aid}")
	public Advisor EditAdvisor(@RequestBody Advisor advisor,@PathVariable int aid) {
		return service.editAdvisor(advisor,aid);
	}
	@DeleteMapping("/delete/{aid}")
	public String DeleteAdvisor(@PathVariable int aid) {
		return service.deleteAdvisor(aid);
	}
	
}