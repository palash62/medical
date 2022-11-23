import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import Other from './Other';
import Personal from './Personal';
import Signup from './Signup';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";


export default function Form() {
const[page, setPage] = useState(0);
const [formData, setFormData] = useState({
  name:"",
  email:"",
  phone:"",
  age:"",
  gender:"",
  problem:"",
  day:"",
  summary:""
})


const formTitles =["A BIT ABOUT YOU", "HEALTH DETAILS", "OTHER DETAILS"]


const pageDisplay = () => {
    if (page === 0) {
        return <Signup formData={formData} setFormData={setFormData}/>
    } else if (page === 1) {
        return <Personal formData={formData} setFormData={setFormData}/>
    } else return <Other formData={formData} setFormData={setFormData}/>
}
  return (

<>
    <div className="container">
     
        <div className='row justify-content-md-center pt-3'>
          <div className='col-4 text-center text-white'>
           <h4 className='stepbox px-5 pt-3 pb-3' style={ 
            {background: page=== 0 ? "cadetblue" : ""}}>A BIT ABOUT YOU</h4> 
          </div>
          <div className='col-4 text-center text-white'>
          <h4 className='instepbox px-5 pt-3 pb-3' style={ 
            {background: page=== 0 ? "darkgray" : page=== 1 ? "cadetblue" : page === 2 ? "cadetblue" : ""}}>HEALTH DETAILS</h4>
           </div>
          <div className='col-4 text-center text-white'>
          <h4 className='instepbox px-5 pt-3 pb-3' style={ 
            {background: page=== 0 ? "darkgray" : page=== 1 ? "darkgray" : page === 2 ? "cadetblue" : ""}}>YOUR LIFESTYLE</h4>
          </div>
        </div>

      <div style={{width :page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%", background:"cornsilk", height:"10px"}}></div>
     
    
     <div className="row justify-content-md-center header">
     <div className="row justify-content-md-center body">
     <div className='col-3'>
     </div>
     <div className='col-6'>
        <h1>{formTitles[page]}</h1>
     </div> 
      </div>
      <div className='col-3'>
     </div>
    </div>

     <div className="row justify-content-md-center body">
     <div className='col-3'>
     </div>
     <div className='col-6'>
     <form>
     {pageDisplay()}
     </form>
     </div>
     <div className='col-3'></div>
     </div> 
     
     <div className="row justify-content-md-center footer mt-3">
     <div className='col-3'>
     </div>
     <div className='col-6'>
     <Button  variant="link" disabled={page ===0} onClick={() => {
        setPage((currpage)=> currpage-1);
        }}><FaAngleDoubleLeft />  PREVIOUS</Button>
     
     <Button variant="link" onClick={() => {
          if(page === formTitles.length - 1){
            alert("Form Submitted")
          }else {
            setPage((currpage)=> currpage+1);
            
          }
        
        }}>{page === formTitles.length - 1 ? "SUBMIT " : "NEXT "}<FaAngleDoubleRight/>
     </Button>
     </div>
     <div className='col-3'></div>
     

     </div> 
    </div>
    </>
  )
  
}