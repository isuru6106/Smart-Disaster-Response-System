package com.disaster.requestservice.controller;

import com.disaster.requestservice.entity.EmergencyRequest;
import com.disaster.requestservice.service.EmergencyRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/requests")
public class EmergencyRequestController {

    private final EmergencyRequestService requestService;

    public EmergencyRequestController(EmergencyRequestService requestService) {
        this.requestService = requestService;
    }

    @GetMapping
    public List<EmergencyRequest> getAllRequests() {
        return requestService.getAllRequests();
    }

    @GetMapping("/{id}")
    public Optional<EmergencyRequest> getRequestById(@PathVariable Long id) {
        return requestService.getRequestById(id);
    }

    @PostMapping
    public EmergencyRequest createRequest(
            @RequestBody EmergencyRequest request) {
        return requestService.saveRequest(request);
    }

    @PutMapping("/{id}")
    public EmergencyRequest updateRequest(
            @PathVariable Long id,
            @RequestBody EmergencyRequest request) {
        return requestService.updateRequest(id, request);
    }

    @DeleteMapping("/{id}")
    public String deleteRequest(@PathVariable Long id) {
        requestService.deleteRequest(id);
        return "Emergency request deleted successfully";
    }
}