package com.disaster.requestservice.service;

import com.disaster.requestservice.entity.EmergencyRequest;
import com.disaster.requestservice.repository.EmergencyRequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmergencyRequestService {

    private final EmergencyRequestRepository requestRepository;

    public EmergencyRequestService(EmergencyRequestRepository requestRepository) {
        this.requestRepository = requestRepository;
    }

    public List<EmergencyRequest> getAllRequests() {
        return requestRepository.findAll();
    }

    public Optional<EmergencyRequest> getRequestById(Long id) {
        return requestRepository.findById(id);
    }

    public EmergencyRequest saveRequest(EmergencyRequest request) {
        return requestRepository.save(request);
    }

    public EmergencyRequest updateRequest(Long id,
                                          EmergencyRequest request) {
        request.setId(id);
        return requestRepository.save(request);
    }

    public void deleteRequest(Long id) {
        requestRepository.deleteById(id);
    }
}