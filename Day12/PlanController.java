package com.mobilerecharge.mounika.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import com.mobilerecharge.mounika.dto.request.PlanRequest;
import com.mobilerecharge.mounika.dto.response.PlanListResponse;
import com.mobilerecharge.mounika.dto.response.PlanResponse;
import com.mobilerecharge.mounika.model.Plan;
import com.mobilerecharge.mounika.service.PlanService;


@RestController
@RequestMapping("/events")
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor
public class PlanController {

    private final PlanService planservice;

    @PreAuthorize("hasAuthority('user:create')")
    @PostMapping("/addplan")
    public ResponseEntity<?> createEvents(@RequestBody PlanRequest planrequest){
        PlanResponse response = new PlanResponse();

        try{
            response = planservice.createPlan(planrequest);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e){
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }
    @GetMapping("/allplan")
    public ResponseEntity<?> getAllPlan(){
        PlanListResponse planlistresponse=new PlanListResponse();
        try{
            planlistresponse=planservice.getAllPlan();
            return new ResponseEntity<>(planlistresponse,HttpStatus.CREATED);
        }
        catch(Exception e){
        return new ResponseEntity<>(planlistresponse,HttpStatus.EXPECTATION_FAILED); 
    }
    }

   
}