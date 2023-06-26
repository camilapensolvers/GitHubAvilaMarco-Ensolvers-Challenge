package com.exercise.backend.service;

import com.exercise.backend.dto.CategoryDTO;
import com.exercise.backend.entity.Category;
import com.exercise.backend.repository.CategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public List<Category> saveAllCategories(List<Category> categoriesDTO) {
        return categoriesDTO.stream()
                .map(categoryDTO -> {
                    if(categoryDTO.getId() == null){
                        return categoryRepository.save(new Category(categoryDTO.getName()));
                    }else {
                        return mapper.map(categoryDTO, Category.class);
                    }
                })
                .toList();
    }

    @Override
    public boolean deleteAll(List<Category> categories) {
        categoryRepository.deleteAll(categories);
        return true;
    }
}
