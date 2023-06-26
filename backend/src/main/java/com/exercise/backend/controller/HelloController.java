package com.exercise.backend.controller;

import com.exercise.backend.dto.HelloDTO;
import com.exercise.backend.entity.Category;
import com.exercise.backend.entity.Note;
import com.exercise.backend.repository.CategoryRepository;
import com.exercise.backend.repository.NoteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.HttpStatus.OK;

@RestController
@CrossOrigin
public class HelloController {

    CategoryRepository categoryRepository;
    NoteRepository noteRepository;

    public HelloController(CategoryRepository categoryRepository, NoteRepository noteRepository) {
        this.categoryRepository = categoryRepository;
        this.noteRepository = noteRepository;
    }

    @GetMapping("/hello")
    public ResponseEntity<?> hello() {
        var res = new HelloDTO("Hello World!");
        return new ResponseEntity<>(res, OK);
    }

    @GetMapping("/demo")
    public ResponseEntity<?> asd() {
        Note note = new Note(1L, "asd", "asdf");
        /*note.getCategories().clear();*/
        /*Category a = new Category(1L, "asd");*/
        /*categoryRepository.save(a);*/
        noteRepository.save(note);
        var res = 22222;
        return new ResponseEntity<>(res, OK);
    }
}
