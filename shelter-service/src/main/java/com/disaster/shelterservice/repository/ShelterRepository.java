package com.disaster.shelterservice.repository;

import com.disaster.shelterservice.entity.Shelter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShelterRepository extends JpaRepository<Shelter, Long> {
}