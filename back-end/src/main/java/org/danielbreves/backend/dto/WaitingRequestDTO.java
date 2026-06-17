package org.danielbreves.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record WaitingRequestDTO(

        @NotBlank
        @Email
        String email,

        @NotNull
        Integer value

){}
