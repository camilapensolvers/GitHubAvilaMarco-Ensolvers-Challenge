package com.exercise.backend.service;

import com.exercise.backend.dto.CategoryDTO;

import java.util.List;

public interface ICategoryService {
    List<CategoryDTO> getUniqueCategories();
}
