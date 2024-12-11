package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Tournament;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TournamentService {

    @Autowired
    private TournamentRepository tournamentRepository;

    // Fetch all tournaments
    public List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
    }

    // Fetch a single tournament by ID
    public Tournament getTournamentById(Integer id) {
        return tournamentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tournament not found with ID: " + id));
    }

    // Add a new tournament
    public Tournament createTournament(Tournament tournament) {
        return tournamentRepository.save(tournament);
    }

    // Update an existing tournament
    public Tournament updateTournament(Integer id, Tournament tournamentDetails) {
        Tournament existingTournament = tournamentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tournament not found with ID: " + id));
        existingTournament.setTournament_id(tournamentDetails.getTournament_id());
        existingTournament.setTournament_name(tournamentDetails.getTournament_name());
        existingTournament.setStart_date(tournamentDetails.getStart_date());
        existingTournament.setEnd_date(tournamentDetails.getEnd_date());
        existingTournament.setLocation(tournamentDetails.getLocation());
        return tournamentRepository.save(existingTournament);
    }

    // Delete a tournament by ID
    public Tournament deleteTournamentById(Integer id) {
        Tournament existingTournament = tournamentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tournament not found with ID: " + id));
        tournamentRepository.delete(existingTournament);
        return existingTournament;
    }
}

