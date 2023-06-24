package com.exercise.backend.controller;

import com.exercise.backend.dto.NoteDTO;
import com.exercise.backend.service.INoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@CrossOrigin
@RequestMapping("/notes")
public class NoteController {

    INoteService noteService;

    public NoteController(INoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping("/list")
    public ResponseEntity<?> listNotes() {
        var res = noteService.getNotes();
        return new ResponseEntity<>(res, OK);
    }

    @GetMapping("/list/archive")
    public ResponseEntity<?> listArchivedNotes() {
        var res = noteService.getArchivedNotes();
        return new ResponseEntity<>(res, OK);
    }

    @GetMapping("/list/no-archive")
    public ResponseEntity<?> listNoArchivedNotes() {
        var res = noteService.getNoArchivedNotes();
        return new ResponseEntity<>(res, OK);
    }

    @PostMapping("/")
    public ResponseEntity<?> createNote(@RequestBody NoteDTO noteDTO) {
        var res = noteService.addNote(noteDTO);
        return new ResponseEntity<>(res, CREATED);
    }

    @PutMapping("/{idNote}")
    public ResponseEntity<?> editNote(@PathVariable Long idNote, @RequestBody NoteDTO noteDTO) {
        var res = noteService.editNote(idNote, noteDTO);
        return new ResponseEntity<>(res, OK);
    }

    @DeleteMapping("/{idNote}")
    public ResponseEntity<?> deleteNote(@PathVariable Long idNote) {
        var res = noteService.deleteNote(idNote);
        return new ResponseEntity<>(res, OK);
    }
}
