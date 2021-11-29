
import './App.css';
import { AddStudent } from './AddStudent';
import { AddMentor } from './AddMentor';
import { GetMentor } from './GetMentor';
import { GetStudent } from './GetStudent';
import { StudentList } from './StudentList';


import { Home } from './Home';
import { Switch, Route,  Redirect } from "react-router-dom";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import Typography from '@mui/material/Typography';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <div className="nav-bar">
      <Button  color="inherit" variant="text" onClick={()=>history.push("/")}>
      <Typography variant="h6" gutterBottom component="div">
          HOME
          </Typography>
            </Button>
      <Button  color="inherit" variant="text" onClick={()=>history.push("/addstudent")}>
      <Typography variant="h6" gutterBottom component="div">
          ADD STUDENT
          </Typography>
            </Button>
            <Button  color="inherit" variant="text" onClick={()=>history.push("/addmentor")}>
            <Typography variant="h6" gutterBottom component="div">
          ADD MENTOR
          </Typography>
            </Button>
            <Button  color="inherit" variant="text" onClick={()=>history.push("/getmentor")}>
            <Typography variant="h6" gutterBottom component="div">
          ASSIGN STUDENTS
          </Typography>
            </Button>
            <Button  color="inherit" variant="text" onClick={()=>history.push("/getstudent")}>
            <Typography variant="h6" gutterBottom component="div">
          CHANGE MENTOR
          </Typography>
            </Button>
            <Button  color="inherit" variant="text" onClick={()=>history.push("/mentor/liststudent")}>
            <Typography variant="h6" gutterBottom component="div">
          MENTOR'S STUDENT
          </Typography>
            </Button>
            
            
        </div>
      <Switch>
        <Route path="/addstudent">
        <AddStudent/>
        </Route>

        <Route path="/addmentor">
          <AddMentor  />
        </Route>
        <Route path="/getmentor">
          <GetMentor  />
        </Route>
        <Route path="/getstudent">
          <GetStudent  />
        </Route>
        <Route path="/mentor/liststudent">
          <StudentList  />
        </Route>
        
        <Route exact path="/">
          <Home />
        </Route>
        </Switch>
      
    </div>
  );
}

export default App;
