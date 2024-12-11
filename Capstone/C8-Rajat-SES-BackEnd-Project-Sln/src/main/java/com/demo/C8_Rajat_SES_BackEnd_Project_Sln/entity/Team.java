package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "TEAMS")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private int id;

    @Column(name = "TEAM_ID", nullable = false, unique = true)
    private String team_id;

    @Column(name = "TEAM_NAME", nullable = false)
    private String team_name;

    @Column(name = "TEAM_COUNTRY", nullable = false)
    private String team_country;

    @Column(name = "TEAM_COACH", nullable = false)
    private String team_coach;

    @Column(name = "TEAM_CAPTAIN", nullable = false)
    private String team_captain;

    // Default Constructor
    public Team() {
    }

    // Parameterized Constructor
    public Team(int id, String team_id, String team_name, String team_country, String team_coach, String team_captain) {
        this.id = id;
        this.team_id = team_id;
        this.team_name = team_name;
        this.team_country = team_country;
        this.team_coach = team_coach;
        this.team_captain = team_captain;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTeam_id() {
        return team_id;
    }

    public void setTeam_id(String team_id) {
        this.team_id = team_id;
    }

    public String getTeam_name() {
        return team_name;
    }

    public void setTeam_name(String team_name) {
        this.team_name = team_name;
    }

    public String getTeam_country() {
        return team_country;
    }

    public void setTeam_country(String team_country) {
        this.team_country = team_country;
    }

    public String getTeam_coach() {
        return team_coach;
    }

    public void setTeam_coach(String team_coach) {
        this.team_coach = team_coach;
    }

    public String getTeam_captain() {
        return team_captain;
    }

    public void setTeam_captain(String team_captain) {
        this.team_captain = team_captain;
    }
}
