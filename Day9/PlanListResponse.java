package com.mobilerecharge.mounika.dto.response;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.mobilerecharge.mounika.model.Plan;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlanListResponse {
private List<Plan> plans;
}