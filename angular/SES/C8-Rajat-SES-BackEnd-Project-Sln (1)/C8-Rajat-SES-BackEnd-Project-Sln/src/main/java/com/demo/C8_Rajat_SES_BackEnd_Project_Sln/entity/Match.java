package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "MATCHES")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id; // Unique identifier for the match

    @Column(name = "MATCH_ID", nullable = false, unique = true)
    private String match_id; // Match-specific ID

    @Column(name = "TEAM1", nullable = false)
    private String team1; // Name of Team 1

    @Column(name = "TEAM2", nullable = false)
    private String team2; // Name of Team 2

    @Temporal(TemporalType.DATE)
    @Column(name = "MATCH_DATE", nullable = false)
    private Date match_date; // Date of the match

    @Column(name = "MATCH_TIME", nullable = false)
    private String match_time; // Time of the match

    // Default constructor
    public Match() {
    }

    // Parameterized constructor
    public Match(int id, String match_id, String team1, String team2, Date match_date, String match_time) {
        this.id = id;
        this.match_id = match_id;
        this.team1 = team1;
        this.team2 = team2;
        this.match_date = match_date;
        this.match_time = match_time;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMatch_id() {
        return match_id;
    }

    public void setMatch_id(String match_id) {
        this.match_id = match_id;
    }

    public String getTeam1() {
        return team1;
    }

    public void setTeam1(String team1) {
        this.team1 = team1;
    }

    public String getTeam2() {
        return team2;
    }

    public void setTeam2(String team2) {
        this.team2 = team2;
    }

    public Date getMatch_date() {
        return match_date;
    }

    public void setMatch_date(Date match_date) {
        this.match_date = match_date;
    }

    public String getMatch_time() {
        return match_time;
    }

    public void setMatch_time(String match_time) {
        this.match_time = match_time;
    }


}
