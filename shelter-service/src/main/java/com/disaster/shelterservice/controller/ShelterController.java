package com.disaster.shelterservice.controller;

import com.disaster.shelterservice.entity.Shelter;
import com.disaster.shelterservice.service.ShelterService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/shelters")
public class ShelterController {

    private final ShelterService shelterService;

    public ShelterController(ShelterService shelterService) {
        this.shelterService = shelterService;
    }

    @GetMapping
    public List<Shelter> getAllShelters() {
        return shelterService.getAllShelters();
    }

    @GetMapping("/{id}")
    public Optional<Shelter> getShelterById(@PathVariable Long id) {
        return shelterService.getShelterById(id);
    }

    @PostMapping
    public Shelter createShelter(@RequestBody Shelter shelter) {
        return shelterService.saveShelter(shelter);
    }

    @PutMapping("/{id}")
    public Shelter updateShelter(@PathVariable Long id,
                                 @RequestBody Shelter shelter) {
        return shelterService.updateShelter(id, shelter);
    }

    @DeleteMapping("/{id}")
    public String deleteShelter(@PathVariable Long id) {
        shelterService.deleteShelter(id);
        return "Shelter deleted successfully";
    }
}