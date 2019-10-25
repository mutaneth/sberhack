import React, {useState, useEffect} from 'react';
import Note from "./Note";
import notesList from "./notesList";
import { Input, TextArea, Button, Form } from 'semantic-ui-react';

export default function Notes() {
    const [newNoteTitle, setNewNodeTitle] = useState('');
    const [newNoteText, setNewNodeText] = useState('');

    const notes = notesList.map((note, index) => {
        return (
            <Note title={note.title} text={note.text} key={note.id}/>
        )
    });
    const [newNoteList, setNewNodeList] = useState(notes);
    const handleNewNote = (e) => {
        e.preventDefault();
        let newNote = {
            id: Date.now(),
            title: newNoteTitle,
            text: newNoteText,
        };
        setNewNodeList(newNoteList.concat(<Note title={newNote.title} text={newNote.text} key={newNote.id}/>));
        setNewNodeTitle('');
        setNewNodeText('');
    };

    return (
        <div className={'Notes-Container'}>
            <div className={'NotesList-Container'}>
                {newNoteList}
            </div>
            <div className={'NewNote-Container'}>
                <Form onSubmit={handleNewNote}>
                    <Input style={{width: "100%"}} value={newNoteTitle} onChange={(e) => setNewNodeTitle(e.target.value)} placeholder={'Заголовок новой заметки'}/>
                    <TextArea value={newNoteText} onChange={(e) => setNewNodeText(e.target.value)} placeholder='Текст новой заметки'/>
                    <Button type='submit'>Создать</Button>
                </Form>
            </div>
        </div>
    )
}