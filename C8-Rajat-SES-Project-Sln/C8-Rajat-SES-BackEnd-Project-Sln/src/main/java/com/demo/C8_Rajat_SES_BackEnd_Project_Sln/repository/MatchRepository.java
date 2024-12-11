package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchRepository extends JpaRepository<Match, Integer> {
}
