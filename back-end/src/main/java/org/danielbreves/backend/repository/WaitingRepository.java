package org.danielbreves.backend.repository;

import org.danielbreves.backend.entities.WaitList;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaitingRepository extends JpaRepository<WaitList, Integer> {
}
