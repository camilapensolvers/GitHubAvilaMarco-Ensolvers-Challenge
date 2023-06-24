package com.exercise.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteDTO {
    private Long id;
    private String title;
    private String content;
    private Boolean archive;
    @JsonFormat(pattern = "dd-MMM-yyyy")
    private LocalDate lastEdited;
}
