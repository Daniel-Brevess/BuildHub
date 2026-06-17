package org.danielbreves.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;

@Entity
@Table(name = "users_waiting")
public class WaitList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "value", nullable = false)
    private Integer value;


    public WaitList(){}
    public WaitList(String email, Integer value) {
        this.email = email;
        this.value = value;
    }

    public Integer getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public Integer getValue() {
        return value;
    }

}
