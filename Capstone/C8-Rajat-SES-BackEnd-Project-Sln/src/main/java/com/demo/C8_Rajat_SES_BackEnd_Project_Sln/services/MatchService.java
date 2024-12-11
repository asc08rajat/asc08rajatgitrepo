package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Match;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchService {

    @Autowired
    private MatchRepository matchRepository;

    // Get all matches
    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    // Get match by ID
    public Match getMatchById(Integer id) {
        return matchRepository.findById(id).orElse(null);
    }

    // Create a new match
    public Match createMatch(Match match) {
        return matchRepository.save(match);
    }

    // Update an existing match
    public Match updateMatch(Integer id, Match match) {
        // Optional: Validate if the match exists before updating
        if (matchRepository.existsById(id)) {
            match.setId(id); // Ensure the ID is retained
            return matchRepository.save(match);
        }
        return null;
    }

    // Delete a match by ID
    public Match deleteMatchById(Integer id) {
        Match existingMatch = matchRepository.findById(id).orElse(null);
        if (existingMatch != null) {
            matchRepository.delete(existingMatch);
        }
        return existingMatch;
    }
}
