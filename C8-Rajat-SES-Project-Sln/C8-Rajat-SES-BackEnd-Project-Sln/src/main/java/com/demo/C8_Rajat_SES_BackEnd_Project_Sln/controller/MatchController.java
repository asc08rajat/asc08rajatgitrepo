//package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;
//
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Match;
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.MatchRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v2")
//@CrossOrigin(origins = "http://localhost:4200")
//public class MatchController {
//
//    @Autowired
//    private MatchRepository matchRepository;
//
//    // Get all matches
//    @GetMapping("/matches")
//    public List<Match> getMatchList() {
//        return matchRepository.findAll();
//    }
//
//    // Get match by ID
//    @GetMapping("/matches/{id}")
//    public Match getMatchById(@PathVariable(value = "id") Integer id) {
//        return matchRepository.findById(id).orElse(null);
//    }
//
//    // Create a new match
//    @PostMapping("/matches")
//    public Match createMatch(@RequestBody Match match) {
//        return matchRepository.save(match);
//    }
//
//    // Update an existing match
//    @PutMapping("/matches/{id}")
//    public Match updateMatch(@PathVariable(value = "id") Integer id, @RequestBody Match match) {
//        // Optional: You can add additional logic to ensure the match exists before saving
//        return matchRepository.save(match);
//    }
//
//    // Delete a match by ID
//    @DeleteMapping("/matches/{id}")
//    public Match deleteMatchById(@PathVariable(value = "id") Integer id) {
//        Match existingMatch = matchRepository.findById(id).orElse(null);
//        if (existingMatch != null) {
//            matchRepository.delete(existingMatch);
//        }
//        return existingMatch;
//    }
//}
package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Match;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins = "http://localhost:4200")
public class MatchController {

    @Autowired
    private MatchService matchService;

    // Get all matches
    @GetMapping("/matches")
    public List<Match> getMatchList() {
        return matchService.getAllMatches();
    }

    // Get match by ID
    @GetMapping("/matches/{id}")
    public Match getMatchById(@PathVariable Integer id) {
        return matchService.getMatchById(id);
    }

    // Create a new match
    @PostMapping("/matches")
    public Match createMatch(@RequestBody Match match) {
        return matchService.createMatch(match);
    }

    // Update an existing match
    @PutMapping("/matches/{id}")
    public Match updateMatch(@PathVariable Integer id, @RequestBody Match match) {
        return matchService.updateMatch(id, match);
    }

    // Delete a match by ID
    @DeleteMapping("/matches/{id}")
    public Match deleteMatchById(@PathVariable Integer id) {
        return matchService.deleteMatchById(id);
    }
}
