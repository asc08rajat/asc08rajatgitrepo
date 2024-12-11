package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Player;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    // Get all players
    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    // Get player by ID
    public Player getPlayerById(Integer id) {
        return playerRepository.findById(id).orElse(null);
    }

    // Create a new player
    public Player createPlayer(Player player) {
        return playerRepository.save(player);
    }

    // Update an existing player
    public Player updatePlayer(Integer id, Player player) {
        if (playerRepository.existsById(id)) {
            player.setId(id); // Ensure the ID remains consistent
            return playerRepository.save(player);
        }
        return null;
    }

    // Delete a player by ID
    public Player deletePlayerById(Integer id) {
        Player existingPlayer = playerRepository.findById(id).orElse(null);
        if (existingPlayer != null) {
            playerRepository.delete(existingPlayer);
        }
        return existingPlayer;
    }
}

