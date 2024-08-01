package com.example.demo.entity;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Project {
  @Id
  @SequenceGenerator(
    name = "project_sequence",
    sequenceName = "project_sequence",
    allocationSize = 1
  )
  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "project_sequence"
  )
  private long project_id;
  private String project_title;
  private LocalDate created_date;

  @OneToMany(
    cascade = CascadeType.ALL,
    orphanRemoval = true
  )
  @JoinColumn(
    name = "project_id",
    referencedColumnName = "project_id"
  )
  private List<Todo> todo_list;

  @ManyToOne
  @JoinColumn(name = "username")
  @JsonIgnore
  private Login user;
}
