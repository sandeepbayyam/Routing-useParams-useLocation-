import React from 'react';
const Contact = (props)=>{
  return(
    <div>
      <h1 className="betterview blueback">Contact</h1>
      <button onClick={()=>{history.back()}}>Back</button>
    </div>
  )
}
export default Contact;