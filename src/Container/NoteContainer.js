import React, { useState, useEffect } from 'react'
import NoteAdd from './NoteAdd'
import NoteList from '../Component/NoteList'
import { connect } from 'react-redux'
import { propTypes } from 'react-bootstrap/esm/Image'
import { addaData } from '../redux/actions/index'

const NoteConatiner = (props) => {
    let [fieldsValue, setFieldsValue] = useState({});

    const [NoteData, setNoteData] = useState([])
    const [date, setDate] = useState();
    

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

    const updateFieldValue = (fieldName,value) => {
            let updatedFieldsValue = { ...fieldsValue };
            let currentFieldValue = value;
            updatedFieldsValue[fieldName] = currentFieldValue;
            setFieldsValue(updatedFieldsValue);
   
    };

 
 


useEffect(()=>{
  let value=   localStorage.getItem("NoteData")
    setNoteData(JSON.parse(value) || [])
},[])
    const dateOnchange = (date) => {
        setDate(date)
    }
    const onSubmit = (type,index) => {

        if (type == "submit" && !index) {
            const UpdateNoteData = [...NoteData];
            let fielddata = { ...fieldsValue }
            fielddata.date = date && timeStampToDateMonth(date);
            UpdateNoteData.push(fielddata);
            console.log(fielddata, "this is the field data okk")
            setNoteData(UpdateNoteData)
            fieldsValue = {}
            // dispatch(addaData(UpdateNoteData))
            localStorage.setItem("NoteData", JSON.stringify(UpdateNoteData))
        }
        else{
            const UpdateNoteData = [...NoteData];
            UpdateNoteData[index]={ ...fieldsValue }
            fieldsValue = {}
            setNoteData(UpdateNoteData)
            localStorage.setItem("NoteData", JSON.stringify(UpdateNoteData))
        }

    }

    return (
        <div>
            <div class="jumbotron text-center">
                <h1>NOTE TAKING</h1>
                <p>Please take your note ,save it you can edit it further</p>
            </div>
            <div className="row">
                <div className="col"  >
                    <NoteAdd 
                        onSubmit={onSubmit}
                        setFieldsValue={setFieldsValue}
                        fieldsValue={fieldsValue}
                        dateOnchange={dateOnchange}
                        date={date}
                       
                        
                    />
                </div>
                <div className="col">
                    <NoteList 
                      data={NoteData} 
                     onSubmit={onSubmit}
                     setFieldsValue={setFieldsValue}
                     fieldsValue={fieldsValue}
                     dateOnchange={dateOnchange}
                     date={date}
                     
                    />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.data

})
const mapDispatchToProps = dispatch => ({
    data: NoteData => dispatch(addaData(NoteData))
})
export default connect(mapStateToProps, mapDispatchToProps)(NoteConatiner);