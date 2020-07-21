import React, { useState } from 'react'
import NoteAdd from '../Container/NoteAdd';
import Form from './form';
const NoteList = ({ data ,setFieldsValue,onSubmit}) => {
    console.log(data, 'hey this is the data')
    const [showEdit,setShowedit]=useState(true);

    function toggle_visibility(id) {
        
        setShowedit(true)
        var e = document.getElementById(id);    
        var allDivs = document.querySelectorAll('div[id^=data]');
        let array=[];
         
        [].forEach.call(allDivs, function(div) {  
            if (div != e) {
                 div.style.display="none"
            }
            else {
                
                e.style.display = e.style.display==='none' ? 'block' : 'none';
                
            }
        });
         
    }
    const timeStampToDateMonth = dateObj => {
      
        const MonthMap = [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC"
        ];
        let date = dateObj.getDate();
        let month = MonthMap[dateObj.getMonth()];
      
        return `${date} ${month}`;
      };
    return (
        <div className="container">
            {data && data.length>=1 && data.map((value,index) => {
                return (
                    <div className="card" style={{ width: "100%" }}>
                        <div className="card-body">
                            <h5 className="card-title">{value.title}</h5>
                       <h6>{value.date}</h6>
                            <button onClick={()=>toggle_visibility(`data${index+1}`)} >Edit<i className="material-icons">mode_edit</i></button>

                        </div>
                        {showEdit && <div id={`data${index+1}`} style={{display:"none"}}  >
                            <Form fieldsValue={value} setFieldsValue={setFieldsValue}
                               index={index+1}
                               onSubmit={onSubmit}
                               setShowedit={setShowedit}
                               />
                        </div>}
                    </div>
                    
                )
            })}
  
        </div>
    )
}
export default NoteList;