import React from 'react'
import '../index.css';
import Form from 'react-bootstrap/Form';

function Signup({formData, setFormData}) {
  return (
    <>
    <div className="form-group">
        <label for="name">Your Full Name</label>
        <input type="text" className="form-control" id="name" value={formData.name}
            onChange={(event) => setFormData({...formData, name: event.target.value})}
        />
    </div>
    <div className="form-group mt-5">
        <label for="email">Email address:</label>
        <input 
        type="email"  class="form-control" id="email" value={formData.email}
        onChange={(event) => setFormData({...formData, email: event.target.value})
        }/>
    </div>
    <div className="form-group mt-5">
        <label for="phn">Your Phone Number</label>
        <input type="text" className="form-control" id="phn" value={formData.phone}
            onChange={(event) => setFormData({...formData, phone: event.target.value})}
        />
    </div>

     <div className="form-group mt-5">
            
            <label for="gender">Select Gender</label>
           <Form.Select aria-label="Default select example" value={formData.gender} onChange={(event) => setFormData({...formData, gender: event.target.value})}>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="O">Other</option>
            </Form.Select>
        </div>
    
  </>
  )
}

export default Signup