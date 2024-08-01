package com.example.demo.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Login {

  @Id
  private String username;
  private String password;

  @OneToMany(
    mappedBy = "user", 
    cascade = CascadeType.ALL, 
    orphanRemoval = true
  )
  @JsonIgnore
  private List<Project> projects;
}
