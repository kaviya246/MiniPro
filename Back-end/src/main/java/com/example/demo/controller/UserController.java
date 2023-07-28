package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;


@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService service;
	
	@GetMapping("/get")
	public List<User> GetUser(){
		return service.getUser();
	}
	
	@PostMapping("/add")
	public User AddUser(@RequestBody User user) {
		return service.addUser(user);
	}
	@PutMapping("/edit/{uid}")
	public User EditUser(@RequestBody User user,@PathVariable int uid) {
		return service.editUser(user,uid);
	}
	@DeleteMapping("/delete/{uid}")
	public String DeleteUser(@PathVariable int uid) {
		return service.deleteUser(uid);
	}
	
}