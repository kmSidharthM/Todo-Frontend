package com.example.demo.service;

import com.example.demo.entity.Login;
import com.example.demo.entity.Project;
import com.example.demo.entity.Todo;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

     @Autowired
    private LoginRepository loginRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public List<Project> getProjectsByUser(String username) {
        return projectRepository.findByUserUsername(username);
    }

    public Project createProject(String username, Project project) {
        Optional<Login> loginOptional = loginRepository.findByUsername(username);
        if (loginOptional.isPresent()) {
            Login login = loginOptional.get();
            project.setUser(login);
            return projectRepository.save(project);
        } else {
            throw new RuntimeException("User not found");
        }
    }

    public Project updateProject(Long id, Project projectDetails) {
        Project project = projectRepository.findById(id).orElseThrow(() -> new RuntimeException("Project not found"));

        project.setProject_title(projectDetails.getProject_title());
        project.setCreated_date(projectDetails.getCreated_date());
        project.getTodo_list().clear();
        project.setTodo_list(projectDetails.getTodo_list());
        project.setUser(projectDetails.getUser());
        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        Project project = projectRepository.findById(id).orElseThrow(() -> new RuntimeException("Project not found"));
        projectRepository.delete(project);
    }

    public Project addTodoToProject(Long projectId, Todo todo) {
        Project project = projectRepository.findById(projectId).orElseThrow(() -> new RuntimeException("Project not found"));
        project.getTodo_list().add(todo);
        return projectRepository.save(project);
    }
}
