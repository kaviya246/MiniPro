package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;



@Service
public class UserService {
	@Autowired
	private UserRepo urepo;
	
	public List<User> getUser() {
		return urepo.findAll();
	}
	public User addUser(User user) {
		return urepo.save(user);
	}
	
	public User editUser(User user,int uid) {
		User xuser = urepo.findById(uid).orElse(null);
		if(xuser !=null) {
			xuser.setFirstname(user.getFirstname());
			xuser.setLastname(user.getLastname());
			xuser.setEmailid(user.getEmailid());
			xuser.setMobileno(user.getMobileno());
			xuser.setGender(user.getGender());
			xuser.setAge(user.getAge());
			xuser.setSalary(user.getSalary());
			xuser.setCountry(user.getCountry());
			xuser.setState(user.getState());
			xuser.setPassword(user.getPassword());
			xuser.setConfirmpassword(user.getConfirmpassword());
			return urepo.saveAndFlush(xuser);
		}
		else {
			return null;
		}
	}
	
	public String deleteUser(int uid) {
		User xuser = urepo.findById(uid).orElse(null);
		
		if(xuser !=null) {
			urepo.deleteById(uid);
			return "user deleted"+ uid;
		}
		else {
			return "invalid userID";
		}
		
	}
}