import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export function AddMentor(){
    const[mentorName,setMentorName]=useState("");
   const addmentor=()=>{
    fetch("https://class-task.herokuapp.com/studentmentor/mentor/add", {
        method: "POST",
        body: JSON.stringify({mentorname:mentorName}),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if(res.status==400)
          {
            window.alert("MentorName already exist");
          }
          setMentorName("");
        })
        .catch((e) => console.log("ERROR"));
    
        // console.log(mentorName);
    }
    return(
        <div className="selection">
          <div>
            <h3>Add Mentor to the Database</h3>
          </div>
          <div>
          <TextField 
          className="menu"
           id="student" 
           label="Mentor Name" 
           variant="outlined" 
           value={mentorName}
           onChange={(event)=>setMentorName(event.target.value)}
           />

          </div>
          <div>
          <Button 
          className="submit-button"
           type="submit"
           variant="contained"
           onClick={() => (addmentor())}
           >submit</Button>

          </div>
           
        </div>
    )
}