package com.exercise.backend.repository;

import com.exercise.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query("FROM Category c join c.note n where n.archive=:is_archive")
    List<Category> findAllByNotesArchived(boolean is_archive);
}
