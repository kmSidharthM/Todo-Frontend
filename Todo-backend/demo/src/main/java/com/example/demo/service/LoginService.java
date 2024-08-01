package com.example.demo.service;

import com.example.demo.entity.Login;
import com.example.demo.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Optional<Login> authenticate(String username, String password) {
        Optional<Login> login = loginRepository.findByUsername(username);
        if (login.isPresent() && login.get().getPassword().equals(password)) {
            return login;
        }
        return Optional.empty();
    }

    public Login save(Login login) {
        return loginRepository.save(login);
    }
}
