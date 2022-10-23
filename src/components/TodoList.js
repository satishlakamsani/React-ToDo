import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';

import Select from 'react-select';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    var items=localStorage.getItem("taskList")
    var item=JSON.parse(items);


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    var filteredMap;
    const filterMap=(option)=>{
        //opt=>console.log(opt.label,opt.value);
        filteredMap=option;
        console.log(option.label,option.value);
        console.log("val",filteredMap);
    }


    return (
        <>
            <div className = "header">
                <h3>Todo List</h3>
                <button className = "btn btn-primary mt-2" style={{float:"right"}} onClick = {() => setModal(true)} ><b>+</b>Create Task</button>
            </div>

            <div>
                <Select
                options={item.map(opt=>({label:opt.Name,value:opt.Name}))}
                //onChange={opt=>console.log(opt.label,opt.value)}
                onChange={filterMap}
                />
            </div>
            <div className = "task-container">
                {/* . filter(taskList=>taskList.Name==filteredMap)*/}
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;