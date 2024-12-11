package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.model;

public class Team {
    private int id;
    private int team_id;
    private String team_name;
    private String team_country;
    private String team_coach;
    private String team_captain;

    // Default Constructor
    public Team() {
    }

    // Parameterized Constructor
    public Team(int id, int team_id, String team_name, String team_country, String team_coach, String team_captain) {
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

    public int getTeam_id() {
        return team_id;
    }

    public void setTeam_id(int team_id) {
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
