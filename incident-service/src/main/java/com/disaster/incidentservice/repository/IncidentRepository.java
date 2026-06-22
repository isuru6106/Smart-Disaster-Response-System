package com.disaster.incidentservice.repository;

import com.disaster.incidentservice.entity.Incident;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncidentRepository extends JpaRepository<Incident, Long> {
}