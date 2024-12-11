package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Team;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    // Get all teams
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    // Get team by ID
    public Team getTeamById(Integer id) {
        return teamRepository.findById(id).orElse(null);
    }

    // Create a new team
    public Team createTeam(Team team) {
        return teamRepository.save(team);
    }

    // Update an existing team
    public Team updateTeam(Integer id, Team team) {
        if (teamRepository.existsById(id)) {
            team.setId(id); // Ensure the ID remains consistent
            return teamRepository.save(team);
        }
        return null; // Return null if team doesn't exist
    }

    // Delete a team by ID
    public Team deleteTeamById(Integer id) {
        Team existingTeam = teamRepository.findById(id).orElse(null);
        if (existingTeam != null) {
            teamRepository.delete(existingTeam);
        }
        return existingTeam;
    }
}
