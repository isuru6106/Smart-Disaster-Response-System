package com.disaster.incidentservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "incidents")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String disasterType;

    private String description;

    private String location;

    private String severity;

    private String status;
}