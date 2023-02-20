import React, { useState } from 'react'
import styled from 'styled-components'
import ModeIcon from '@mui/icons-material/Mode';
import BookIcon from '@mui/icons-material/Book';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { mobile } from '../Responsive';
import { Req } from '../Components/Url';
 const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 ${mobile({
  height:"70vh"
 })}
 `
 const Wrapper = styled.div`
 display: flex;
 align-items: center;
 height: 55vh;
 flex-direction: column;
 width: 30vw;
 gap: 20px;
 ${mobile({
  width:"90vw",
 })}
 `
 const Icon = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
 `
 const Head = styled.h1`
 ${mobile({
  fontSize:"20px"
 })}
 `
 const Input =styled.input`
 width:95%;
 height: 10%;
 ${mobile({
  height:"8%",
 })}
 font-size: 15px;
 outline: none;
 `
 const Button = styled.button`
 width: 100%;
 height: 12%;
 background-color:#6c33d4;
 color: white;
 border: none;
 outline: none;
 cursor: pointer;
 font-size: 15px;
 &:hover{
  background-color:#420da5 ;
 }
 `
const Register = () => {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")
  const [email,setemail] = useState("")
  const navigate = useNavigate()
  const register = async(e)=>{
    e.preventDefault()
    const res = await Req.post("/auth/signup",{username,email,password})
    res.status === 200 && navigate("/login")
  }
  return (
    <Container>
    <Wrapper>
        <Icon><ModeIcon style={{color:"#6c33d4"}} fontSize='large'/><BookIcon style={{color:"#6c33d4"}}  fontSize='large'/><UpdateIcon style={{color:"#6c33d4"}}  fontSize='large'/><DeleteIcon style={{color:"#6c33d4"}}  fontSize='large'/></Icon>
        <Head>CREATE AN ACCOUNT</Head>
        <Input onChange={(e)=>setusername(e.target.value)} placeholder='Username'></Input>
        <Input onChange={(e)=>setemail(e.target.value)} placeholder='Email'></Input>
        <Input onChange={(e)=>setpassword(e.target.value)} placeholder='Password'></Input>
        <Button onClick={register}>CREATE</Button>
        <Link to="/register" style={{textDecoration:"none",color:"inherit"}}>
        </Link>
    </Wrapper>
</Container>

  )
}

export default Register