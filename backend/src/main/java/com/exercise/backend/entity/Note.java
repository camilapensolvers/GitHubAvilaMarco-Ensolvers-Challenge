package com.exercise.backend.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;
    private boolean archive;

    @UpdateTimestamp
    private LocalDate lastEdited;

    @OneToMany(mappedBy = "note", cascade = CascadeType.ALL)
    private List<Category> categories;

    public void setCategories(List<Category> categories) {
        this.categories = categories;
    }

    public Note(){
        this.categories = new ArrayList<>();
    }

    public Note(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.categories = new ArrayList<>();
    }
}
