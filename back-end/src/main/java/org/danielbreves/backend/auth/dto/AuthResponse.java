package org.danielbreves.backend.auth.dto;

import java.util.UUID;

public record AuthResponse(
        UUID id,
        String name,
        String email,
        String message
) {
}
