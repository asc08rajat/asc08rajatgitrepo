package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.model;

import java.util.Date;

public class Ticket {
    private int id;
    private int ticket_id;
    private String buyer_name;
    private String seat_number;
    private double ticket_price;
    private Date purchase_date;

    // Default Constructor
    public Ticket() {
    }

    // Parameterized Constructor
    public Ticket(int id, int ticket_id, String buyer_name, String seat_number, double ticket_price, Date purchase_date) {
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

    public int getTicket_id() {
        return ticket_id;
    }

    public void setTicket_id(int ticket_id) {
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
