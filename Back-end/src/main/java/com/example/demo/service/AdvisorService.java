package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Advisor;
import com.example.demo.repository.AdvisorRepo;


@Service
public class AdvisorService {
	@Autowired
	private AdvisorRepo prepo;
	
	public List<Advisor> getAdvisor() {
		return prepo.findAll();
	}
	public Optional<Advisor> findAdvisor(int aid) {
		return prepo.findById(aid);
	}
	public Advisor addAdvisor(Advisor advisor) {
		return prepo.save(advisor);
	}
	
	public Advisor editAdvisor(Advisor advisor,int aid) {
		Advisor xadvisor = prepo.findById(aid).orElse(null);
		if(xadvisor !=null) {
			xadvisor.setFirstname(advisor.getFirstname());
			xadvisor.setLastname(advisor.getLastname());
			xadvisor.setEmailid(advisor.getEmailid());
			xadvisor.setMobileno(advisor.getMobileno());
			xadvisor.setGender(advisor.getGender());
			xadvisor.setAge(advisor.getAge());
			xadvisor.setEducationqualification(advisor.getEducationqualification());
			xadvisor.setYearsofexperience(advisor.getYearsofexperience());
			xadvisor.setStream(advisor.getStream());
			xadvisor.setPassword(advisor.getPassword());
			xadvisor.setConfirmpassword(advisor.getConfirmpassword());
			return prepo.saveAndFlush(xadvisor);
		}
		else {
			return null;
		}
	}
	
	public String deleteAdvisor(int aid) {
		Advisor xadvisor = prepo.findById(aid).orElse(null);
		
		if(xadvisor !=null) {
			prepo.deleteById(aid);
			return " advisor deleted"+ aid;
		}
		else {
			return "invalid userID";
		}
	}
}