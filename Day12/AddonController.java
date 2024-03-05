package com.mobilerecharge.mounika.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import com.mobilerecharge.mounika.dto.request.AddonRequest;
import com.mobilerecharge.mounika.dto.response.AddonListResponse;
import com.mobilerecharge.mounika.dto.response.AddonResponse;
import com.mobilerecharge.mounika.service.AddonService;
import com.mobilerecharge.mounika.utils.MyConstant;

@RestController
@RequestMapping("/addons")
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor
public class AddonController {

    private final AddonService addonService;

    @PreAuthorize("hasAuthority('user:create')")
    @PostMapping("/addaddon")
    public ResponseEntity<AddonResponse> createAddon(@RequestBody AddonRequest addonRequest) {
        AddonResponse response = new AddonResponse();
        try {
            response = addonService.createAddon(addonRequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @GetMapping("/alladdon")
    public ResponseEntity<AddonListResponse> getAllAddons() {
        AddonListResponse addonListResponse = new AddonListResponse();
        try {
            addonListResponse = addonService.getAllAddons();
            return new ResponseEntity<>(addonListResponse, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(addonListResponse, HttpStatus.EXPECTATION_FAILED);
        }
    }


    @PutMapping(MyConstant.ADDON_UPDATE)
    public ResponseEntity<AddonResponse> updateAddon(@RequestParam int addonid, @RequestBody AddonRequest request) {
        AddonResponse response = new AddonResponse();
        try {
            response = addonService.updateAddon(addonid, request);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Failed to update addon");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    
    



}


