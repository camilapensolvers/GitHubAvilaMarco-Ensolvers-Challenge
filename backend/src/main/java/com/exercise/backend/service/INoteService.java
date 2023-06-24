package com.exercise.backend.service;

import com.exercise.backend.dto.NoteDTO;
import com.exercise.backend.dto.response.ResponseDTO;

import java.util.List;

public interface INoteService {
    List<NoteDTO> getNotes();

    List<NoteDTO> getArchivedNotes();
    List<NoteDTO> getNoArchivedNotes();

    NoteDTO addNote(NoteDTO noteDTO);

    NoteDTO editNote(Long id, NoteDTO noteDTO);

    ResponseDTO deleteNote(Long id);
}
