import React from 'react'
import Form from 'react-bootstrap/Form';
function Personal({formData, setFormData}) {
  return (
    <>
        <div className="form-group">
            <label for="problem">Select Diseases</label>
           <Form.Select aria-label="Default select example" value={formData.problem} onChange={(event) => setFormData({...formData, problem: event.target.value})}>
            <option value="f">Fiver</option>
            <option value="c">Cold</option>
            <option value="hp">Head Pain</option>
            </Form.Select>
        </div>
        <div  className="form-group mt-5">
            <label for="day">Days</label>
           <Form.Select aria-label="Default select example" value={formData.day} onChange={(event) => setFormData({...formData, day: event.target.value})}>
            <option value="3">Last 3 Days</option>
            <option value="7">Last 7 Days</option>
            <option value="15">Last 15 Days</option>
            </Form.Select>
        </div>
    </>
  )
}

export default Personal