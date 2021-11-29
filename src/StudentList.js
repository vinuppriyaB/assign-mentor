import React from "react";
import { useState,useEffect } from "react";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';





export function StudentList()
{
    const[studentData,setStudentData]=useState("");
    const [selectedMentor,setSelectedMentor ] = useState("");
   
    const[apifetch,setapifetch]=useState(true);

   
   

    const getMentor=()=>{
        fetch("https://class-task.herokuapp.com/studentmentor/mentor/get",
        {method:"GET",})
        .then((data)=>data.json())
        .then((mvs)=>{
           
            setMentorData(mvs)
        }).catch(e=>console.log("error"))
               
      }
      useEffect(()=>getMentor(),[])

      const getStudent=()=>{
        fetch(`https://class-task.herokuapp.com/studentmentor/mentor?mentorname=${selectedMentor}`,
        {method:"GET",})
        .then((data)=>data.json())
        .then((mvs)=>{
           
            setStudentData(mvs)
            
        }).catch(e=>console.log("error"))
               
      }
      useEffect(()=>getStudent(),[apifetch])


      const[mentorData,setMentorData]=useState("");

    return(
        <div class="selection">
          <div>
            <h3>Select Mentor,it will shows students of the mentor </h3>
          </div>
        
        <div>
        { mentorData ? <MentorNameList 
                        mentorData={mentorData}
                        selectedMentor={selectedMentor}
                        setSelectedMentor={setSelectedMentor}
                        apifetch={apifetch}
                        setapifetch={setapifetch}
                        /> :<Loading/>
        }
        </div>
        <div>
        { studentData ? <StudentOfMentor 
                            studentData={studentData}
                        /> : ""
        }
        </div>
        
        </div>
        
        
    )
}
export function StudentOfMentor({studentData}){
   

   
    let value=[];

        if(studentData.student==null)
        {
            value[0]="No Student";
        }
        else
        {
            for(let i=0;i<studentData.student.length;i++)
            {
               value[i]=studentData.student[i];
                
            }  

        }
    
        
            
    return(
        <div>
            
        <div>
      <FormControl sx={{m: 1, width: 420,font:20}}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Student Name
        </InputLabel>
        <Select
        className="menu"
          multiple
          native
        //   value={}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {value.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
        
        </div>
    )

}

export function MentorNameList({mentorData,selectedMentor,setSelectedMentor,setapifetch,apifetch}){
   
   
    let value=[];
    
        for(let i=0;i<mentorData.length;i++)
            {
               value[i]=mentorData[i].mentorname;
                
            }  
    return(
        <div >
          <Box sx={{ minWidth: 320 }}>
      <FormControl  sx={{ m: 1, width: 420 }}>
        <InputLabel id="demo-simple-select-label">Mentor Name</InputLabel>
        <Select
        className="menu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedMentor}
          label="mentor name"
          onChange={(event)=>{setSelectedMentor(event.target.value)
                                setapifetch(!apifetch);
                    }}
        >
            {
                value.map((data)=>(
                    <MenuItem value={data}>{data}</MenuItem>

                ))
            }
         
        </Select>
      </FormControl>
    </Box>
    <br></br>
           
          
           
        </div>
    )

}
export function Loading(){

  return(
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>

  )
}