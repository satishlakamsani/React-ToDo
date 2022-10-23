import React,{ useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function Date ( {selected,onChange} ){
    // const [selectedDate,setSelectedDate]=useState(null);


    return(
        //<React.Fragment>
        //<DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)}/>
        //</React.Fragment>

        <React.Fragment>
            <DatePicker selected={selected} onChange={onChange}/>
        </React.Fragment>
    );
}
export default Date;
