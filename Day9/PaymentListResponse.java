package com.mobilerecharge.mounika.dto.response;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.mobilerecharge.mounika.model.Payment;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentListResponse {
private List<Payment> payment;
}