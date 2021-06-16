import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import './NewInstSelect.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



export default function BasicButtonGroup() {
  const [selected,setSelected]=useState("guitar")
  const [title, setTitle]=useState("")
  
  const dispatch= useDispatch();
  const {song} = useSelector(state=>state.chart);


  const classes = useStyles();

  const handleSelect = (inst)=>{
    setSelected(inst)
   
    }
  


  return (
    <div style={{width:"100%", justifyContent:"center"}} className={classes.root}>
         Name:<input placeholder={' *required'} type="text" autoFocus={true} value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <ButtonGroup  color="primary" aria-label="outlined primary button group">
         
        <Button style={selected==="guitar"?{backgroundColor:"lightblue"}:{}} onClick={()=>handleSelect("guitar")}>Guitar</Button>
        <Button style={selected==="mando"?{backgroundColor:"lightblue"}:{}} onClick={(e)=>handleSelect("mando")}>Mando</Button>
        <Button style={selected==="banjo"?{backgroundColor:"lightblue"}:{}} onClick={(e)=>handleSelect("banjo")}>Banjo</Button>
      </ButtonGroup>
      {/* <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </div>
  );
}
