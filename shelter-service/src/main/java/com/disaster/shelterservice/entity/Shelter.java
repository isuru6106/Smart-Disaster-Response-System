package com.disaster.shelterservice.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "shelters")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Shelter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String shelterName;

    private String location;

    private Integer capacity;

    private Integer occupiedCount;

    private String status;
}