package com.exercise.backend.service;

import com.exercise.backend.dto.CategoryDTO;
import com.exercise.backend.repository.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService implements ICategoryService{

    CategoryRepository categoryRepository;

    ModelMapper mapper;

    public CategoryService(CategoryRepository categoryRepository, ModelMapper mapper) {
        this.categoryRepository = categoryRepository;
        this.mapper = mapper;
    }

    @Override
    public List<CategoryDTO> getUniqueCategories() {
        return categoryRepository
                .findAll()
                .stream()
                .map(category -> mapper.map(category, CategoryDTO.class))
                .distinct()
                .toList();
    }
}
