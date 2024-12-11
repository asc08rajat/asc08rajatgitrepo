package com.dom.entity;

import jakarta.persistence.*;

@Entity
@Table(name="EMPLOYEES")
public class employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="EMPLOYEE_ID")
    private int id;
    @Column(name="EMPLOYEE_NAME",nullable = false)
    private String name;
    private int salary;

    public employee(int id, String name, int salary) {
		super();
		this.id = id;
		this.name = name;
		this.salary = salary;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getSalary() {
		return salary;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

}
