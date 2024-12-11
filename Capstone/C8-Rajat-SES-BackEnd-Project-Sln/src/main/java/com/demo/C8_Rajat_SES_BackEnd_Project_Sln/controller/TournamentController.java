//package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;
//
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Tournament;
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.TournamentRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v3")
//@CrossOrigin(origins = "http://localhost:4200")
//public class TournamentController {
//
//    // Dependency Injection of TournamentRepository
//    @Autowired
//    private TournamentRepository tournamentRepository;
//
//    // Fetch all tournaments
//    @GetMapping("/tournaments")
//    public List<Tournament> getTournamentList() {
//        return tournamentRepository.findAll();
//    }
//
//    // Fetch a single tournament by ID
//    @GetMapping("/tournaments/{id}")
//    public Tournament getTournamentById(@PathVariable(value = "id") Integer id) {
//        return tournamentRepository.findById(id).orElseThrow(() -> new RuntimeException("Tournament not found with ID: " + id));
//    }
//
//    // Update an existing tournament
//    @PutMapping("/tournaments/{id}")
//    public Tournament updateTournament(@PathVariable(value = "id") Integer id, @RequestBody Tournament tournament) {
//        Tournament existingTournament = tournamentRepository.findById(id).orElseThrow(() -> new RuntimeException("Tournament not found with ID: " + id));
//        existingTournament.setTournament_id(tournament.getTournament_id());
//        existingTournament.setTournament_name(tournament.getTournament_name());
//        existingTournament.setStart_date(tournament.getStart_date());
//        existingTournament.setEnd_date(tournament.getEnd_date());
//        existingTournament.setLocation(tournament.getLocation());
//        return tournamentRepository.save(existingTournament);
//    }
//
//    // Add a new tournament
//    @PostMapping("/tournaments")
//    public Tournament createTournament(@RequestBody Tournament tournament) {
//        return tournamentRepository.save(tournament);
//    }
//
//    // Delete a tournament by ID
//    @DeleteMapping("/tournaments/{id}")
//    public Tournament deleteTournamentById(@PathVariable(value = "id") Integer id) {
//        Tournament existingTournament = tournamentRepository.findById(id).orElseThrow(() -> new RuntimeException("Tournament not found with ID: " + id));
//        tournamentRepository.delete(existingTournament);
//        return existingTournament;
//    }
//}

package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Tournament;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v3")
@CrossOrigin(origins = "http://localhost:4200")
public class TournamentController {

    @Autowired
    private TournamentService tournamentService;

    // Fetch all tournaments
    @GetMapping("/tournaments")
    public List<Tournament> getTournamentList() {
        return tournamentService.getAllTournaments();
    }

    // Fetch a single tournament by ID
    @GetMapping("/tournaments/{id}")
    public Tournament getTournamentById(@PathVariable Integer id) {
        return tournamentService.getTournamentById(id);
    }

    // Add a new tournament
    @PostMapping("/tournaments")
    public Tournament createTournament(@RequestBody Tournament tournament) {
        return tournamentService.createTournament(tournament);
    }

    // Update an existing tournament
    @PutMapping("/tournaments/{id}")
    public Tournament updateTournament(@PathVariable Integer id, @RequestBody Tournament tournament) {
        return tournamentService.updateTournament(id, tournament);
    }

    // Delete a tournament by ID
    @DeleteMapping("/tournaments/{id}")
    public Tournament deleteTournamentById(@PathVariable Integer id) {
        return tournamentService.deleteTournamentById(id);
    }
}
