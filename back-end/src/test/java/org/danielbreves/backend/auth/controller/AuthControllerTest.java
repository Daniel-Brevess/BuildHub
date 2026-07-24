package org.danielbreves.backend.auth.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.UUID;

import org.danielbreves.backend.auth.dto.AuthResponse;
import org.danielbreves.backend.auth.dto.LoginRequest;
import org.danielbreves.backend.auth.dto.RegisterRequest;
import org.danielbreves.backend.auth.service.AuthService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ExtendWith(MockitoExtension.class)
class AuthControllerTest {

    @Mock
    private AuthService authService;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(new AuthController(authService)).build();
    }

    @Test
    void shouldRegisterUser() throws Exception {
        AuthResponse response = new AuthResponse(
                UUID.fromString("c6ce3c4e-187f-44f6-bdf9-b818f1b43b9e"),
                "Daniel",
                "daniel@example.com",
                "User registered successfully."
        );
        when(authService.register(any(RegisterRequest.class))).thenReturn(response);

        mockMvc.perform(post("/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "name": "Daniel",
                                  "email": "daniel@example.com",
                                  "password": "Password1!"
                                }
                                """))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.name").value("Daniel"))
                .andExpect(jsonPath("$.email").value("daniel@example.com"));
    }

    @Test
    void shouldLoginUser() throws Exception {
        AuthResponse response = new AuthResponse(
                UUID.fromString("c6ce3c4e-187f-44f6-bdf9-b818f1b43b9e"),
                "Daniel",
                "daniel@example.com",
                "Login successful."
        );
        when(authService.login(any(LoginRequest.class))).thenReturn(response);

        mockMvc.perform(post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {
                                  "email": "daniel@example.com",
                                  "password": "Password1!"
                                }
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Daniel"))
                .andExpect(jsonPath("$.email").value("daniel@example.com"));
    }
}
