import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                {
                    id: 0,
                    note: "Learn React Note #0"
                },
                {
                    id: 1,
                    note: "Learn React Note #1"
                },
                {
                    id: 2,
                    note: "Learn React Note #2"
                }
            ]
        };
        this.add = this.add.bind(this);
        this.eachNote = this.eachNote.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.nextId = this.nextId.bind(this);
    }

    add(text) {
        this.setState(prevState => ({
            notes: [
                ...prevState.notes,
                {
                    id: this.nextId(),
                    note: text
                }
            ]
        }))
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId++
    }
    update(newText, i) {
        console.log('updating item at index', i, newText)
        this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : { ...note, note: newText }
            )
        }))
    }

    remove(id) {
        console.log("removing note at ", id);
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
        }))

    }


    eachNote(note, i) {

        return (
            <Note key={i}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
            >
                {note.note}
            </Note>

        )
    }



    render() {
        return (
            <div className="board">

                {this.state.notes.map(this.eachNote)}
                <button onClick={this.add.bind(null, "New Note")}></button>
            </div>

        );
    }
}

export default Board;