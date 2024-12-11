package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "TICKETS")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    @Column(name = "TICKET_ID", nullable = false, unique = true)
    private String ticket_id;

    @Column(name = "BUYER_NAME", nullable = false)
    private String buyer_name;

    @Column(name = "SEAT_NUMBER", nullable = false, unique = true)
    private String seat_number;

    @Column(name = "TICKET_PRICE", nullable = false)
    private double ticket_price;

    @Temporal(TemporalType.DATE)
    @Column(name = "PURCHASE_DATE", nullable = false)
    private Date purchase_date;

    // Default Constructor
    public Ticket() {
    }

    // Parameterized Constructor
    public Ticket(int id, String ticket_id, String buyer_name, String seat_number, double ticket_price, Date purchase_date) {
        this.id = id;
        this.ticket_id = ticket_id;
        this.buyer_name = buyer_name;
        this.seat_number = seat_number;
        this.ticket_price = ticket_price;
        this.purchase_date = purchase_date;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTicket_id() {
        return ticket_id;
    }

    public void setTicket_id(String ticket_id) {
        this.ticket_id = ticket_id;
    }

    public String getBuyer_name() {
        return buyer_name;
    }

    public void setBuyer_name(String buyer_name) {
        this.buyer_name = buyer_name;
    }

    public String getSeat_number() {
        return seat_number;
    }

    public void setSeat_number(String seat_number) {
        this.seat_number = seat_number;
    }

    public double getTicket_price() {
        return ticket_price;
    }

    public void setTicket_price(double ticket_price) {
        this.ticket_price = ticket_price;
    }

    public Date getPurchase_date() {
        return purchase_date;
    }

    public void setPurchase_date(Date purchase_date) {
        this.purchase_date = purchase_date;
    }


}
