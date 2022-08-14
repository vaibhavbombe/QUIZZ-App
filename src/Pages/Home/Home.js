import "./Home.css";
import { Button, MenuItem, TextField} from "@material-ui/core";
import React, { useState } from 'react';
import Categories from "../../Data/Categories";


const Home = ({name,setName}) => {
  const [category, setCategory] = useState("");
  const [Difficulty, setDifficulty] = useState("");
 
  return (
    <div className="content">
        <div>
            <span style={{fontsize:30}}>Quiz Settings</span>
            <div className="settings__select">
            <TextField
              style={{ marginBottom: 25 }}
              label="Enter Your Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              select
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              {
                Categories.map((cat) => (
                    <MenuItem key={cat.category} value={cat.value}>

                    {cat.category}
                    </MenuItem>
                ))}
              
            </TextField>

            <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" color="primary" size="large">
             Start Quiz
          </Button>

            </div>
        </div>
        <img src='/quiz.svg' className="banner" alt="quiz img"/>
    </div>
  )
}

export default Home