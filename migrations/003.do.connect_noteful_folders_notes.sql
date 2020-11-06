CREATE TABLE folders_notes (
    folder_id INTEGER REFERENCES folders(id),
    note_id INTEGER REFERENCES notes(id),
    PRIMARY KEY (folder_id, note_id)
);