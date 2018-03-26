import React, { Component } from 'react';
//import FaIconPack from 'react-icons/lib/fa'; 
import FaEdit from 'react-icons/lib/fa/edit'
//import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from "react-icons/lib/fa/trash";
import FaFloppyO from "react-icons/lib/fa/floppy-o";

var i;


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false
        }
        this.i = 10;
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.save = this.save.bind(this);

    }


    edit() {
        console.log('====================================');
        console.log('Editing Note');
        console.log('====================================');
        console.log('====================================');
        console.log(i);
        console.log('====================================');
        this.setState({
            editing: true
        })


    }

    remove() {
        alert('removing note');
    }

    save() {
        alert('Saved')
        alert(this._newText.value)
    }


    renderForm() {
        return (
            <div className="note">
                <form>
                    <textarea ref={input => this._newText = input} />
                    <button onClick={this.save}><FaFloppyO /></button>

                </form>

            </div>

        )



    }


    renderDisplay() {
        return (
            <div className="note">
                <p> {this.props.children}</p>
                <span>
                    {/*<button onClick={ this.save } > Save <FaPencil/> </button> */}
                    <button onClick={this.edit} id="edit" ><FaEdit />  </button>
                    <button onClick={this.remove} id="remove"  > <FaTrash /> </button>


                </span>
            </div>

        );
    }



    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay()

        /* if(this.state.editing){
                return this.renderForm()
            } else{
                return this.renderDisplay()
            }
        */
    }







}

export default Note;