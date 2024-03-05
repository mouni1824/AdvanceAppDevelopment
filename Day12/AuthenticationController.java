package com.mobilerecharge.mounika.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobilerecharge.mounika.dto.request.LoginRequest;
import com.mobilerecharge.mounika.dto.request.RegisterRequest;
import com.mobilerecharge.mounika.dto.response.LoginResponse;
import com.mobilerecharge.mounika.dto.response.RegisterResponse;
import com.mobilerecharge.mounika.service.AuthenticationService;
import com.mobilerecharge.mounika.utils.MyConstant;

import io.swagger.v3.oas.annotations.Hidden;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.AUTH)
@RequiredArgsConstructor
@Tag(name="Authentication",description = "User can register , login ,change password here")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(MyConstant.REGISTER)
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();

        try {
            response = authenticationService.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }
        catch(Exception e) {
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping(MyConstant.LOGIN)
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();

        try {
            response = authenticationService.login(request);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }


    // @PatchMapping(MyConstant.FORGOT_PASSWORD)
    // @Hidden
    // public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request)
    // {
    //     ForgotPasswordResponse response = new ForgotPasswordResponse();
    //     try{
    //         response = authenticationService.forgotPassword(request);
    //         return new ResponseEntity<>(response,HttpStatus.CREATED);
    //     }
    //     catch(Exception e)
    //     {
    //             return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
    //     }
    // }
}