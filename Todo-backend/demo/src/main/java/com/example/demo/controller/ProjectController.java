package com.example.demo.controller;

import com.example.demo.entity.Project;
import com.example.demo.entity.Todo;
import com.example.demo.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @GetMapping("user/{username}")
    public List<Project> getAllProjects(@PathVariable String username) {
        return projectService.getProjectsByUser(username);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        Optional<Project> project = projectService.getProjectById(id);
        return project.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("user/{username}")
    public Project createProject(@PathVariable String username, @RequestBody Project project) {
        return projectService.createProject(username, project);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project projectDetails) {
        Project updatedProject = projectService.updateProject(id, projectDetails);
        return ResponseEntity.ok(updatedProject);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{projectId}/todos")
    public ResponseEntity<Project> addTodoToProject(@PathVariable Long projectId, @RequestBody Todo todo) {
        Project updatedProject = projectService.addTodoToProject(projectId, todo);
        return ResponseEntity.ok(updatedProject);
    }
}
