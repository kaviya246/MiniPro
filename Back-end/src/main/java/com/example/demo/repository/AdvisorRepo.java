package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Advisor;

@Repository
public interface AdvisorRepo extends JpaRepository<Advisor,Integer> {

}
