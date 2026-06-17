package org.danielbreves.backend.controller;

import jakarta.validation.Valid;
import org.danielbreves.backend.dto.WaitingRequestDTO;
import org.danielbreves.backend.dto.WaitingResponseDTO;
import org.danielbreves.backend.service.WaitingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/waitlist")
public class WaitlistController {

    private final WaitingService waitingService;

    public WaitlistController(WaitingService waitingService) {
        this.waitingService = waitingService;
    }

    @PostMapping("/enter")
    public ResponseEntity<WaitingResponseDTO> enter(@Valid @RequestBody WaitingRequestDTO request) {
        WaitingResponseDTO response = waitingService.enterToWaitList(request);
        return ResponseEntity.ok(response);
    }
}
