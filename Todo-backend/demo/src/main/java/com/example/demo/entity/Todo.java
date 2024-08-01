package com.example.demo.entity;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class Todo {

  @Id
  @SequenceGenerator(
    name = "todo_sequence",
    sequenceName = "todo_sequence",
    allocationSize = 1
  )
  @GeneratedValue(
    strategy = GenerationType.SEQUENCE,
    generator = "todo_sequence"
  )
  private long todo_id;
  private String todo_title;
  private String todo_description;
  private Boolean status;
  private LocalDate created_date;
  private LocalDate updated_date;

  @ManyToOne
  @JoinColumn(name = "project_id")
  @JsonIgnore
  private Project project;
}
