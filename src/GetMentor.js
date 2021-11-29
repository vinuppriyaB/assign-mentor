import React from "react";
import { useState,useEffect } from "react";

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import OutlinedInput from '@mui/material/OutlinedInput';

import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';


export function GetMentor()
{
    const[studentData,setStudentData]=useState("");
    const [selectedMentor,setSelectedMentor ] = useState("");
    const [selectedStudent,setSelectedStudent ] = useState([]);
    const[apifetch,setapifetch]=useState(true);

    const getStudent=()=>{
        fetch("https://class-task.herokuapp.com/studentmentor/get/student/withoutmentor",
        {method:"GET",})
        .then((data)=>data.json())
        .then((mvs)=>{
            
            setStudentData(mvs)
            
        }).catch(e=>console.log("error"))
               
      }
      useEffect(()=>getStudent(),[apifetch])


      const[mentorData,setMentorData]=useState("");
   

    const getMentor=()=>{
        fetch("https://class-task.herokuapp.com/studentmentor/mentor/get",
        {method:"GET",})
        .then((data)=>data.json())
        .then((mvs)=>{
           
            setMentorData(mvs)
        }).catch(e=>console.log("error"))
               
      }
      useEffect(()=>getMentor(),[])


      
       
      function sendSelectedname(){
          const selectedname={selectedmentorname:selectedMentor,selectedstudentname:selectedStudent}
          console.log(selectedname);
          fetch("https://class-task.herokuapp.com/studentmentor/assignstudents",
          {
              method:"PUT",
              body: JSON.stringify(selectedname),
              headers:{"Content-Type":"application/json"},
          }).then(()=>{
            setSelectedStudent([]);
            setapifetch(!apifetch);
            
            console.log(apifetch);
           
             
          }).catch((e)=> console.log("ERROR"))  
 
        }   


     
    return(
        <div className="selection">
          <div>
            <h3>Select one Mentor and Add multiple Student </h3>
          </div>
          <div>
        { mentorData ? <MentorNameList 
                        mentorData={mentorData}
                        selectedMentor={selectedMentor}
                        setSelectedMentor={setSelectedMentor}
                        /> :<Loading/> 
        }
        </div>
        <div>
        { studentData ? <StudentWithoutMentor 
                            studentData={studentData}
                            selectedStudent={selectedStudent}
                            setSelectedStudent={setSelectedStudent}

                        /> :<Loading/>
        }
        </div>
        
        <div>
        <Button 
        className="submit-button"
           type="submit"
           variant="contained"
           onClick={() => (sendSelectedname())}
           >submit</Button>
        </div>
        </div>
        
        
    )
}
export function StudentWithoutMentor({studentData,selectedStudent,setSelectedStudent}){
   
   
    let value=[];
    
        for(let i=0;i<studentData.length;i++)
            {
               value[i]=studentData[i].studentname;
                
            }  

            // const [personName, setPersonName] = useState([]);

            const handleChange = (event) => {
              const {
                target: { value },
              } = event;
              setSelectedStudent(
                // On autofill we get a the stringified value.
                typeof value === 'string' ? value.split(',') : value,
              );
              console.log(selectedStudent)
            };        
    
    return(
        <div>
      <FormControl sx={{ m: 1, width: 420 }}>
        <InputLabel id="demo-multiple-checkbox-label">Student Name</InputLabel>
        <Select
        className="menu"
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedStudent}
          onChange={handleChange}
          input={<OutlinedInput label="student name" />}
          renderValue={(selected) => selected.join(' , ')}
        //   MenuProps={MenuProps}
        >
          {value.map((name,index) => (
            <MenuItem key={name} value={name} key={index}>
              <Checkbox checked={selectedStudent.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )

}

export function MentorNameList({mentorData,selectedMentor,setSelectedMentor}){
   
   
    let value=[];
    
        for(let i=0;i<mentorData.length;i++)
            {
               value[i]=mentorData[i].mentorname;
                
            }  
    return(
        <div >
          <Box sx={{ minWidth: 320 }}>
      <FormControl sx={{ m: 1, width: 420 }}>
        <InputLabel id="demo-simple-select-label">Mentor Name</InputLabel>
        <Select
        className="menu"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedMentor}
          label="mentor name"
          onChange={(event)=>setSelectedMentor(event.target.value)}
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