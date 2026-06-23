package com.disaster.userservice.controller;

import com.disaster.userservice.dto.AuthResponse;
import com.disaster.userservice.dto.LoginRequest;
import com.disaster.userservice.dto.RegisterRequest;
import com.disaster.userservice.entity.User;
import com.disaster.userservice.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public AuthResponse register(
            @RequestBody RegisterRequest request) {

        Optional<User> existingUser =
                userRepository.findByEmail(request.getEmail());

        if (existingUser.isPresent()) {
            return new AuthResponse(
                    "Email already exists",
                    null
            );
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setRole(request.getRole());

        userRepository.save(user);

        return new AuthResponse(
                "Registration successful",
                user.getRole()
        );
    }

    @PostMapping("/login")
    public AuthResponse login(
            @RequestBody LoginRequest request) {

        Optional<User> user =
                userRepository.findByEmail(request.getEmail());

        if (user.isEmpty()) {
            return new AuthResponse(
                    "User not found",
                    null
            );
        }

        if (!user.get().getPassword()
                .equals(request.getPassword())) {

            return new AuthResponse(
                    "Invalid password",
                    null
            );
        }

        return new AuthResponse(
                "Login successful",
                user.get().getRole()
        );
    }
}