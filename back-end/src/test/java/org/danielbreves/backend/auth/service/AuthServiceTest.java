package org.danielbreves.backend.auth.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.danielbreves.backend.auth.dto.AuthResponse;
import org.danielbreves.backend.auth.dto.LoginRequest;
import org.danielbreves.backend.auth.dto.RegisterRequest;
import org.danielbreves.backend.auth.entity.AppUser;
import org.danielbreves.backend.auth.repository.AppUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.server.ResponseStatusException;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private AppUserRepository appUserRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    private AuthService authService;

    @BeforeEach
    void setUp() {
        authService = new AuthService(appUserRepository, passwordEncoder);
    }

    @Test
    void shouldRegisterUserWithNormalizedEmailAndEncodedPassword() {
        RegisterRequest request = new RegisterRequest("Daniel", "DANIEL@EXAMPLE.COM", "Password1!");
        when(appUserRepository.existsByEmail("daniel@example.com")).thenReturn(false);
        when(passwordEncoder.encode("Password1!")).thenReturn("hashed-password");
        when(appUserRepository.save(any(AppUser.class))).thenAnswer(invocation -> invocation.getArgument(0));

        AuthResponse response = authService.register(request);

        ArgumentCaptor<AppUser> userCaptor = ArgumentCaptor.forClass(AppUser.class);
        verify(appUserRepository).save(userCaptor.capture());

        AppUser savedUser = userCaptor.getValue();
        assertThat(savedUser.getName()).isEqualTo("Daniel");
        assertThat(savedUser.getEmail()).isEqualTo("daniel@example.com");
        assertThat(savedUser.getPasswordHash()).isEqualTo("hashed-password");
        assertThat(response.email()).isEqualTo("daniel@example.com");
    }

    @Test
    void shouldRejectDuplicatedEmailOnRegister() {
        RegisterRequest request = new RegisterRequest("Daniel", "daniel@example.com", "Password1!");
        when(appUserRepository.existsByEmail("daniel@example.com")).thenReturn(true);

        assertThatThrownBy(() -> authService.register(request))
                .isInstanceOf(ResponseStatusException.class)
                .extracting("statusCode")
                .isEqualTo(HttpStatus.CONFLICT);

        verify(appUserRepository, never()).save(any(AppUser.class));
    }

    @Test
    void shouldLoginWithValidCredentials() {
        LoginRequest request = new LoginRequest("DANIEL@EXAMPLE.COM", "Password1!");
        AppUser user = new AppUser("Daniel", "daniel@example.com", "hashed-password");
        when(appUserRepository.findByEmail("daniel@example.com")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("Password1!", "hashed-password")).thenReturn(true);

        AuthResponse response = authService.login(request);

        assertThat(response.name()).isEqualTo("Daniel");
        assertThat(response.email()).isEqualTo("daniel@example.com");
    }

    @Test
    void shouldRejectLoginWithInvalidPassword() {
        LoginRequest request = new LoginRequest("daniel@example.com", "wrong-password");
        AppUser user = new AppUser("Daniel", "daniel@example.com", "hashed-password");
        when(appUserRepository.findByEmail("daniel@example.com")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("wrong-password", "hashed-password")).thenReturn(false);

        assertThatThrownBy(() -> authService.login(request))
                .isInstanceOf(ResponseStatusException.class)
                .extracting("statusCode")
                .isEqualTo(HttpStatus.UNAUTHORIZED);
    }
}
