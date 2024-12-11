package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.services;

import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity.Ticket;
import com.demo.C8_Rajat_SES_BackEnd_Project_Sln.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    // Get all tickets
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    // Get a ticket by ID
    public Ticket getTicketById(Integer id) {
        return ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found with id: " + id));
    }

    // Create a new ticket
    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    // Update an existing ticket by ID
    public Ticket updateTicket(Integer id, Ticket ticketDetails) {
        Ticket existingTicket = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found with id: " + id));

        existingTicket.setTicket_id(ticketDetails.getTicket_id());
        existingTicket.setBuyer_name(ticketDetails.getBuyer_name());
        existingTicket.setSeat_number(ticketDetails.getSeat_number());
        existingTicket.setTicket_price(ticketDetails.getTicket_price());
        existingTicket.setPurchase_date(ticketDetails.getPurchase_date());

        return ticketRepository.save(existingTicket);
    }

    // Delete a ticket by ID
    public Ticket deleteTicketById(Integer id) {
        Ticket existingTicket = ticketRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ticket not found with id: " + id));

        ticketRepository.delete(existingTicket);
        return existingTicket;
    }
}
