package org.danielbreves.backend.service;

import org.danielbreves.backend.dto.WaitingRequestDTO;
import org.danielbreves.backend.dto.WaitingResponseDTO;
import org.danielbreves.backend.entities.WaitList;
import org.danielbreves.backend.repository.WaitingRepository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

@Service
public class WaitingService {

    private final WaitingRepository repository;

    public WaitingService(WaitingRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public WaitingResponseDTO enterToWaitList(WaitingRequestDTO requestDTO) {

        WaitList waiting = new WaitList(requestDTO.email(), requestDTO.value());

        repository.save(waiting);

        return new WaitingResponseDTO("You entered the waitlist!");
    }
}
