import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Date from '../components/Date';

import swal from 'sweetalert';

const CreateTaskPopup = ({modal, toggle, save}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const [selectedStartDate,setSelectedStartDate]=useState(null);
    const [selectedEndDate,setSelectedEndDate]=useState(null);

    //const [file,setFile]=useState("");

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else{
            setDescription(value)
        }


    }

    var fileName;

    const onChange=(e)=>{
        console.log("e",e);
        fileName=e.target.files[0].name;
        console.log(fileName,e.target.files);
    }

    const handleSave = (e) => {
        e.preventDefault()
        //console.log(file,file.name,e.target.file);
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        taskObj["StartDate"]=selectedStartDate
        taskObj["EndDate"]=selectedEndDate
        taskObj["File"]=fileName;
        save(taskObj)
        swal("Task Created",taskName);

    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div>
                    <p>Start Date:<Date selected={selectedStartDate} onChange={date=>setSelectedStartDate(date)}/></p>
                    {/*<p>Start Date:<Date selected={selectedStartDate} onChange={date=>setSelectedStartDate(date)}/></p>*/}
                    </div>
                    <div>
                        <p>End Date:<Date selected ={selectedEndDate} onChange={date=>setSelectedEndDate(date)}/></p>
                    </div>
                    <input type="file" onChange={(e)=>onChange(e)}/>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTaskPopup;