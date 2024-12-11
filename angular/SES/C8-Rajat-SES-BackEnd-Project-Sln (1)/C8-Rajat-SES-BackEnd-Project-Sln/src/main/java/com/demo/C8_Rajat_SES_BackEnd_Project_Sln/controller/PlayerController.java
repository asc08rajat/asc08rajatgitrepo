//package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;
//import java.util.List;
//
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Player;
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.PlayerRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequestMapping("/api/v1")
//@CrossOrigin(origins = "http://localhost:4200")
//public class PlayerController {
//
//    // Dependency Injection
//    // The PlayerRepository is a dependency for the PlayerController
//    // The PlayerRepository is injected into the PlayerController using the @Autowired annotation
//    // The PlayerRepository is used to perform CRUD operations on the Player entity
//    // The PlayerRepository is a JpaRepository interface
//    // The JpaRepository is implemented by the Spring Data JPA framework which by default uses hibernate as the JPA provider.
//
//    @Autowired
//    private PlayerRepository playerRepository;
//
//    @GetMapping("/players")
//    public List<Player> getPlayerList() {
//        return playerRepository.findAll();
//    }
//
//    @GetMapping("/players/{id}")
//    public Player getPlayerById(@PathVariable(value = "id") Integer id) {
//        Player existingPlayer = playerRepository.findById(id).get();
//        return existingPlayer;
//    }
//
//    @PutMapping("/players/{id}")
//    public Player updatePlayer(@PathVariable(value = "id") Integer id, @RequestBody Player player) {
//        return playerRepository.save(player);
//    }
//
//    @PostMapping("/players")
//    public Player createPlayer(@RequestBody Player player) {
//        Player savedPlayer = playerRepository.save(player);
//        return savedPlayer;
//    }
//
//    @DeleteMapping("/players/{id}")
//    public Player deletePlayerById(@PathVariable(value = "id") Integer id) {
//        Player existingPlayer = playerRepository.findById(id).get();
//        playerRepository.delete(existingPlayer);
//        return existingPlayer;
//    }
//}

package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Player;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    // Get all players
    @GetMapping("/players")
    public List<Player> getPlayerList() {
        return playerService.getAllPlayers();
    }

    // Get player by ID
    @GetMapping("/players/{id}")
    public Player getPlayerById(@PathVariable Integer id) {
        return playerService.getPlayerById(id);
    }

    // Create a new player
    @PostMapping("/players")
    public Player createPlayer(@RequestBody Player player) {
        return playerService.createPlayer(player);
    }

    // Update an existing player
    @PutMapping("/players/{id}")
    public Player updatePlayer(@PathVariable Integer id, @RequestBody Player player) {
        return playerService.updatePlayer(id, player);
    }

    // Delete a player by ID
    @DeleteMapping("/players/{id}")
    public Player deletePlayerById(@PathVariable Integer id) {
        return playerService.deletePlayerById(id);
    }
}
