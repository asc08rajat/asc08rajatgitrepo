//package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;
//
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Ticket;
//import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.TicketRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/v5")
//@CrossOrigin(origins = "http://localhost:4200")
//public class TicketController {
//
//    // Dependency Injection
//    @Autowired
//    private TicketRepository ticketRepository;
//
//    // Get all tickets
//    @GetMapping("/tickets")
//    public List<Ticket> getTicketList() {
//        return ticketRepository.findAll();
//    }
//
//    // Get a ticket by ID
//    @GetMapping("/tickets/{id}")
//    public Ticket getTicketById(@PathVariable(value = "id") Integer id) {
//        return ticketRepository.findById(id).orElseThrow(() -> new RuntimeException("Ticket not found with id: " + id));
//    }
//
//    // Create a new ticket
//    @PostMapping("/tickets")
//    public Ticket createTicket(@RequestBody Ticket ticket) {
//        return ticketRepository.save(ticket);
//    }
//
//    // Update an existing ticket by ID
//    @PutMapping("/tickets/{id}")
//    public Ticket updateTicket(@PathVariable(value = "id") Integer id, @RequestBody Ticket ticketDetails) {
//        Ticket existingTicket = ticketRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Ticket not found with id: " + id));
//
//        existingTicket.setTicket_id(ticketDetails.getTicket_id());
//        existingTicket.setBuyer_name(ticketDetails.getBuyer_name());
//        existingTicket.setSeat_number(ticketDetails.getSeat_number());
//        existingTicket.setTicket_price(ticketDetails.getTicket_price());
//        existingTicket.setPurchase_date(ticketDetails.getPurchase_date());
//
//        return ticketRepository.save(existingTicket);
//    }
//
//    // Delete a ticket by ID
//    @DeleteMapping("/tickets/{id}")
//    public Ticket deleteTicketById(@PathVariable(value = "id") Integer id) {
//        Ticket existingTicket = ticketRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Ticket not found with id: " + id));
//
//        ticketRepository.delete(existingTicket);
//        return existingTicket;
//    }
//}


package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.controller;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Ticket;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v5")
@CrossOrigin(origins = "http://localhost:4200")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    // Get all tickets
    @GetMapping("/tickets")
    public List<Ticket> getTicketList() {
        return ticketService.getAllTickets();
    }

    // Get a ticket by ID
    @GetMapping("/tickets/{id}")
    public Ticket getTicketById(@PathVariable Integer id) {
        return ticketService.getTicketById(id);
    }

    // Create a new ticket
    @PostMapping("/tickets")
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return ticketService.createTicket(ticket);
    }

    // Update an existing ticket by ID
    @PutMapping("/tickets/{id}")
    public Ticket updateTicket(@PathVariable Integer id, @RequestBody Ticket ticketDetails) {
        return ticketService.updateTicket(id, ticketDetails);
    }

    // Delete a ticket by ID
    @DeleteMapping("/tickets/{id}")
    public Ticket deleteTicketById(@PathVariable Integer id) {
        return ticketService.deleteTicketById(id);
    }
}
