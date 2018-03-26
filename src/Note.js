import React, {Component} from 'react'; 
//import FaIconPack from 'react-icons/lib/fa'; 
import FaEdit from 'react-icons/lib/fa/edit' 
//import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from "react-icons/lib/fa/trash";
import FaFloppyO from "react-icons/lib/fa/floppy-o";

class Note extends Component { 
    constructor(props){
        super(props);
        this.state = {
            editing:false
        }
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay=this.renderDisplay.bind(this);

    }
    
    
    edit(){
        console.log('====================================');
        console.log('Editing Note');
        console.log('====================================');
        this.setState({
            editing:true
        })
        
        
    }


    renderForm(){
        return(
            <div className = "note">
                <form>
                    <textarea/>
                    <button><FaFloppyO/></button>
                </form>

            </div>

        )



    }




    remove(){
        alert('removing note');
    }


    renderDisplay(){ 
        return (
                <div className="note">
                    <p> React Note #1 </p>
                    <span>
                       {/*<button onClick={ this.save } > Save <FaPencil/> </button> */} 
                        <button onClick={ this.edit } id="edit" ><FaEdit/>  </button>
                        <button onClick={ this.remove }  id="remove"  > <FaTrash/> </button>
                        
                    </span>            
                </div>                      
                                            
        );                                
    }
    
    

    render(){
        if(this.state.editing){
            return this.renderForm()
        } else{
            return this.renderDisplay()
        }
    }


     
}
                                                        
export default Note;