import React, { useState } from 'react'
import Calendar from 'react-calendar'
import '../css/Noteadd.css'
import Form from '../Component/form'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'


const Noteadd = ({ setFieldsValue, fieldsValue, onSubmit, dateOnchange, date }) => {
    const [showForm, setShowForm] = useState(false)

    const showFormHandler = () => {
        setShowForm(true)
    }
    return (
        <div className="container">
            <div className="row" style={{ marginBottom: "40px", marginLeft: "20px" }}>
                <Calendar onChange={dateOnchange}
                    date={date} />
            </div>
            <Button onClick={showFormHandler}>Add Note</Button>
            {showForm && <Form setFieldsValue={setFieldsValue}
                edit={true}
                fieldsValue={fieldsValue}
                onSubmit={onSubmit}
                setShowForm={setShowForm} />}
        </div>

    )
}
export default connect()(Noteadd)