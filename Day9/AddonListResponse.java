package com.mobilerecharge.mounika.dto.response;

import java.util.List;

import com.mobilerecharge.mounika.model.Addon;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddonListResponse {
    private List<Addon> addons;
}
