import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const [selectedStartDate,setSelectedStartDate]=useState(null);
    const [selectedEndDate,setSelectedEndDate]=useState(null);

    const handleChange = (e) => {
        
        const {name, value} = e.target

        if(name === "taskName"){
            setTaskName(value)
        }else if (name=== "description"){
            setDescription(value)
        }


    }

    //console.log("f",taskObj.File);

    var fileName=taskObj.File;
    const onChange=(e)=>{
        console.log("e",e);
        fileName=e.target.files[0].name;
        console.log(fileName,e.target.files);
    }

    useEffect(() => {
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
        setSelectedStartDate(taskObj.StartDate)
        setSelectedEndDate(taskObj.EndDate)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj["StartDate"]=selectedStartDate
        tempObj["EndDate"]=selectedEndDate
        tempObj["File"]=fileName
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Start Date</label>
                        <textarea rows="1" className="form-control" value={selectedStartDate} onChange={handleChange}></textarea>
                    </div>
                    <div className='form-group'>
                        <label>End Date</label>
                        <textarea rows="1" className="form-control" value={selectedEndDate} onChange={handleChange}></textarea>
                    </div>
                    <div className='form-group'>
                        <label>File: {fileName}</label>
                    </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;