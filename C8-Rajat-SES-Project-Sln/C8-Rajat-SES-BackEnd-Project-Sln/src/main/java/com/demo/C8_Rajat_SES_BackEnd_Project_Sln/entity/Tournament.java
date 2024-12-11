package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TOURNAMENTS")
public class Tournament {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    @Column(name = "TOURNAMENT_ID", nullable = false, unique = true)
    private String tournament_id;

    @Column(name = "TOURNAMENT_NAME", nullable = false)
    private String tournament_name;

    @Column(name = "START_DATE", nullable = false)
    private String start_date; // Stored as String for compatibility

    @Column(name = "END_DATE", nullable = false)
    private String end_date; // Stored as String for compatibility

    @Column(name = "LOCATION", nullable = false)
    private String location;

    // Default Constructor
    public Tournament() {
    }

    // Parameterized Constructor
    public Tournament(int id, String tournament_id, String tournament_name, String start_date, String end_date, String location) {
        this.id = id;
        this.tournament_id = tournament_id;
        this.tournament_name = tournament_name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.location = location;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTournament_id() {
        return tournament_id;
    }

    public void setTournament_id(String tournament_id) {
        this.tournament_id = tournament_id;
    }

    public String getTournament_name() {
        return tournament_name;
    }

    public void setTournament_name(String tournament_name) {
        this.tournament_name = tournament_name;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
