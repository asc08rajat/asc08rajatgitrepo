    package com.demo.C8_Rajat_SES_BackEnd_Project_Sln.entity;

    import jakarta.persistence.*;

    @Entity
    @Table(name = "PLAYERS")
    public class Player {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        @Column(name = "ID")
        private int id;

        @Column(name = "PLAYER_ID", nullable = false, unique = true)
        private String player_id;

        @Column(name = "PLAYER_NAME", nullable = false)
        private String player_name;

        @Column(name = "PLAYER_AGE")
        private int player_age;

        @Column(name = "PLAYER_ROLE")
        private String player_role;

        @Column(name = "PLAYER_NATIONALITY")
        private String player_nationality;

        public Player() {
        }

        public Player(int id, String player_id, String player_name, int player_age, String player_role, String player_nationality) {
            this.id = id;
            this.player_id = player_id;
            this.player_name = player_name;
            this.player_age = player_age;
            this.player_role = player_role;
            this.player_nationality = player_nationality;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getPlayer_id() {
            return player_id;
        }

        public void setPlayer_id(String player_id) {
            this.player_id = player_id;
        }

        public String getPlayer_name() {
            return player_name;
        }

        public void setPlayer_name(String player_name) {
            this.player_name = player_name;
        }

        public int getPlayer_age() {
            return player_age;
        }

        public void setPlayer_age(int player_age) {
            this.player_age = player_age;
        }

        public String getPlayer_role() {
            return player_role;
        }

        public void setPlayer_role(String player_role) {
            this.player_role = player_role;
        }

        public String getPlayer_nationality() {
            return player_nationality;
        }

        public void setPlayer_nationality(String player_nationality) {
            this.player_nationality = player_nationality;
        }
    }

