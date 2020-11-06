function makeNotesArray() {
  return [
    {
      id: 1,
      note_name: 'note1',
      note_content: 'content1',
      folder_id: 1
    },
    {
      id: 2,
      note_name: 'note2',
      note_content: 'content2',
      folder_id: 2
    }, {
      id: 3,
      note_name: 'note3',
      note_content: 'content3',
      folder_id: 3
    }, {
      id: 4,
      note_name: 'note4',
      note_content: 'content4',
      folder_id: 4
    }
  ];
}

function makeMaliciousNote() {
  const maliciousNote = {
    id: 911,
    note_name: 'Naughty naughty very naughty <script>alert("xss");</script>',
    note_content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
  }
  const expectedNote = {
    ...maliciousNote,
    note_name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    note_content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
  }
  return {
    maliciousNote,
    expectedNote,
  }
}


module.exports = {
  makeNotesArray,
  makeMaliciousNote
};