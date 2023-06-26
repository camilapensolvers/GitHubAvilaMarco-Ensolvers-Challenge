package com.exercise.backend.service;

import com.exercise.backend.dto.CategoryDTO;
import com.exercise.backend.entity.Category;

import java.util.List;

public interface ICategoryService {
    List<CategoryDTO> getUniqueCategories();

    List<Category> saveAllCategories(List<Category> categories);

    boolean deleteAll(List<Category> categories);
}
