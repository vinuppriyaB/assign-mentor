import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddStudent(){
  const [popper,setpopper] = useState(false);
    const[studentName,setStudentName]=useState("");
   const addstudent=()=>{
    fetch("https://class-task.herokuapp.com/studentmentor/student/add", {
        method: "POST",
        body: JSON.stringify({studentname:studentName}),
        headers: { "Content-Type": "application/json" },
      }).then((res)=>{
        if(res.status==400)
        {
          window.alert("StudentName already exist");
        }
        else
          {
            setpopper(true);
            setTimeout(()=>{
              setpopper(false);

            },2000)

          }
        setStudentName("");
      })
      .catch((e) => console.log(e));
        setStudentName("");
        
    }
    return(
        <div className="selection">
          <div>
            <h3>Add Student to the Database</h3>
          </div>
          <div>
          <TextField 
          className="menu"
           id="student" 
           label="Student Name" 
           variant="outlined" 
           value={studentName}
           onChange={(event)=>setStudentName(event.target.value)}
           />

          </div>
          <div>
          <Button 
          className="submit-button"
           type="submit"
           variant="contained"
           onClick={() => (addstudent())}
           >submit</Button>

          </div>
          { popper ? 
            <div className="popbox">
              <p>Updated successfully</p></div>
             :"" }
           
        </div>
    )
}