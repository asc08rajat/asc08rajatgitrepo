//package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;
//
//import java.util.List;
//
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Team;
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.TeamRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/v4")
//@CrossOrigin(origins = "http://localhost:4200")
//public class TeamController {
//
//    // Dependency Injection
//    // The TeamRepository is a dependency for the TeamController
//    // The TeamRepository is injected into the TeamController using the @Autowired annotation
//    // The TeamRepository is used to perform CRUD operations on the Team entity
//    // The TeamRepository is a JpaRepository interface
//    // The JpaRepository is implemented by the Spring Data JPA framework which by default uses Hibernate as the JPA provider.
//
//    @Autowired
//    private TeamRepository teamRepository;
//
//    // Get all teams
//    @GetMapping("/teams")
//    public List<Team> getTeamList() {
//        return teamRepository.findAll();
//    }
//
//    // Get team by ID
//    @GetMapping("/teams/{id}")
//    public Team getTeamById(@PathVariable(value = "id") Integer id) {
//        Team existingTeam = teamRepository.findById(id).get();
//        return existingTeam;
//    }
//
//    // Create a new team
//    @PostMapping("/teams")
//    public Team createTeam(@RequestBody Team team) {
//        Team savedTeam = teamRepository.save(team);
//        return savedTeam;
//    }
//
//    // Update an existing team
//    @PutMapping("/teams/{id}")
//    public Team updateTeam(@PathVariable(value = "id") Integer id, @RequestBody Team team) {
//        // Check if the team exists and update
//        return teamRepository.save(team);
//    }
//
//    // Delete a team by ID
//    @DeleteMapping("/teams/{id}")
//    public Team deleteTeamById(@PathVariable(value = "id") Integer id) {
//        Team existingTeam = teamRepository.findById(id).get();
//        teamRepository.delete(existingTeam);
//        return existingTeam;
//    }
//}


package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Team;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v4")
@CrossOrigin(origins = "http://localhost:4200")
public class TeamController {

    @Autowired
    private TeamService teamService;

    // Get all teams
    @GetMapping("/teams")
    public List<Team> getTeamList() {
        return teamService.getAllTeams();
    }

    // Get team by ID
    @GetMapping("/teams/{id}")
    public Team getTeamById(@PathVariable Integer id) {
        return teamService.getTeamById(id);
    }

    // Create a new team
    @PostMapping("/teams")
    public Team createTeam(@RequestBody Team team) {
        return teamService.createTeam(team);
    }

    // Update an existing team
    @PutMapping("/teams/{id}")
    public Team updateTeam(@PathVariable Integer id, @RequestBody Team team) {
        return teamService.updateTeam(id, team);
    }

    // Delete a team by ID
    @DeleteMapping("/teams/{id}")
    public Team deleteTeamById(@PathVariable Integer id) {
        return teamService.deleteTeamById(id);
    }
}
