package com.exercise.backend.controller;

import com.exercise.backend.service.CategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.OK;

@RestController
@CrossOrigin
@RequestMapping("/categories")
public class CategoryController {

    CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/list")
    public ResponseEntity<?> listUniqueCategories(@RequestParam boolean is_archive) {
        var res = categoryService.getUniqueCategories(is_archive);
        return new ResponseEntity<>(res, OK);
    }
}
