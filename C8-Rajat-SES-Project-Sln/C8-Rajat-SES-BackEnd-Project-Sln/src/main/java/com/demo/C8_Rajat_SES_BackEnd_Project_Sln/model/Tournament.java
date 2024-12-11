package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.model;

public class Tournament {
    private int id;
    private int tournament_id;
    private String tournament_name;
    private String start_date; // Use String for compatibility with JSON and front-end
    private String end_date;
    private String location;

    // Default Constructor
    public Tournament() {
    }

    // Parameterized Constructor
    public Tournament(int id, int tournament_id, String tournament_name, String start_date, String end_date, String location) {
        this.id = id;
        this.tournament_id = tournament_id;
        this.tournament_name = tournament_name;
        this.start_date = start_date;
        this.end_date = end_date;
        this.location = location;
    }

    // Getter and Setter for id
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    // Getter and Setter for tournament_id
    public int getTournament_id() {
        return tournament_id;
    }
    public void setTournament_id(int tournament_id) {
        this.tournament_id = tournament_id;
    }

    // Getter and Setter for tournament_name
    public String getTournament_name() {
        return tournament_name;
    }
    public void setTournament_name(String tournament_name) {
        this.tournament_name = tournament_name;
    }

    // Getter and Setter for start_date
    public String getStart_date() {
        return start_date;
    }
    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    // Getter and Setter for end_date
    public String getEnd_date() {
        return end_date;
    }
    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }

    // Getter and Setter for location
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
}
