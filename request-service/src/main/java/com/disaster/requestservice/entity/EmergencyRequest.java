package com.disaster.requestservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "emergency_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmergencyRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String citizenName;

    private String contactNumber;

    private String requestType;

    private String location;

    private String status;
}