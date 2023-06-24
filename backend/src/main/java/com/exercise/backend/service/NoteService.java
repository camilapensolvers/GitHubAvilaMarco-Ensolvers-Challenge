package com.exercise.backend.service;

import com.exercise.backend.dto.NoteDTO;
import com.exercise.backend.dto.response.ResponseDTO;
import com.exercise.backend.entity.Note;
import com.exercise.backend.repository.NoteRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService implements INoteService{
    NoteRepository noteRepository;

    ModelMapper mapper;

    public NoteService(NoteRepository noteRepository, ModelMapper mapper) {
        this.noteRepository = noteRepository;
        this.mapper = mapper;
    }

    @Override
    public List<NoteDTO> getNotes() {
        List<Note> notes = noteRepository.findAll();

        return notes.stream()
                .map(n -> mapper.map(n, NoteDTO.class))
                .toList();
    }

    @Override
    public List<NoteDTO> getArchivedNotes() {
        List<Note> notes = noteRepository.findAllByArchiveTrue();

        return notes.stream()
                .map(n -> mapper.map(n, NoteDTO.class))
                .toList();
    }

    @Override
    public List<NoteDTO> getNoArchivedNotes() {
        List<Note> notes = noteRepository.findAllByArchiveFalse();

        return notes.stream()
                .map(n -> mapper.map(n, NoteDTO.class))
                .toList();
    }

    @Override
    public NoteDTO addNote(NoteDTO noteDTO) {
        Note note = mapper.map(noteDTO, Note.class);
        note = noteRepository.save(note);
        return mapper.map(note, NoteDTO.class);
    }

    @Override
    public NoteDTO editNote(Long id, NoteDTO noteDTO) {
        // TODO: add throws, keep the id?
        Note note = noteRepository.findById(id)
                .orElseThrow();
        mapper.map(noteDTO, note);
        note.setId(id);
        noteRepository.save(note);
        return mapper.map(note, NoteDTO.class);
    }

    @Override
    public ResponseDTO archiveNote(Long id) {
        Note note = noteRepository.findById(id)
                .orElseThrow();
        note.setArchive(true);
        noteRepository.save(note);
        return new ResponseDTO(
                "Archive",
                String.format("Note with %s id was archive", id)
        );
    }

    @Override
    public ResponseDTO unarchiveNote(Long id) {
        Note note = noteRepository.findById(id)
                .orElseThrow();
        note.setArchive(false);
        noteRepository.save(note);
        return new ResponseDTO(
                "Archive",
                String.format("Note with %s id was unarchive", id)
        );
    }

    @Override
    public ResponseDTO deleteNote(Long id) {
        // TODO: add throws
        if (!noteRepository.existsById(id)){
            System.out.println("Error");
        }
        return new ResponseDTO(
                "Deleted",
                String.format("Note with %s id was delete", id)
        );
    }
}
