package com.disaster.requestservice.repository;

import com.disaster.requestservice.entity.EmergencyRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmergencyRequestRepository
        extends JpaRepository<EmergencyRequest, Long> {
}