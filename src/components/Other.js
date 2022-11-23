
function Other({formData, setFormData}) {
  return (
    <>
        <div className="form-group">
            <label for="summary">Summary</label>
            <textarea className="form-control" id="summary" value={formData.summary} 
                onChange={(event) => setFormData({...formData, summary: event.target.value})}
            />
        </div>
       
          
    </>
  )
}

export default Other