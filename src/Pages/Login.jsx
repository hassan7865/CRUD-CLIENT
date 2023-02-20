import React, { useState } from 'react'
import styled from 'styled-components'
import ModeIcon from '@mui/icons-material/Mode';
import BookIcon from '@mui/icons-material/Book';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { LoginFailure, LoginStart, LoginSuccess } from '../Redux/LoginRedux';
import { useDispatch } from 'react-redux';
import { Req } from '../Components/Url';
import { mobile } from '../Responsive';
 const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 ${mobile({
  height:"80vh"
 })}
 `
 const Wrapper = styled.div`
 display: flex;
 align-items: center;
 height: 50vh;
 flex-direction: column;
 width: 30vw;
 gap: 20px;
 ${mobile({
  width:"90vw"
 })}
 `
 const Icon = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
 `
 const Head = styled.h1`
  ${mobile({
  fontSize:"30px"
 })}
 `
 const Input =styled.input`
 width:95%;
 outline: none;
 height: 10%;
 ${mobile({
  height: "8%"
 })}
 font-size: 15px;
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
 const Reg = styled.div`
 text-decoration: underline;
 color: purple;
 `
const Login = () => {
  const [username,setusername] = useState("")
  const [password,setpassword] = useState("")
  const dispatch = useDispatch()
  const handleClick = async(e)=>{
    e.preventDefault()
    dispatch(LoginStart())
    try{
      const res = await Req.post("/auth/signin",{username,password})
      dispatch(LoginSuccess(res.data))
      res.status === 200 && window.location.reload()
      

    }catch(err){
      dispatch(LoginFailure())
    }
  }
  return (
    <Container>
        <Wrapper>
            <Icon><ModeIcon style={{color:"#6c33d4"}} fontSize='large'/><BookIcon style={{color:"#6c33d4"}}  fontSize='large'/><UpdateIcon style={{color:"#6c33d4"}}  fontSize='large'/><DeleteIcon style={{color:"#6c33d4"}}  fontSize='large'/></Icon>
            <Head>SIGN IN</Head>
            <Input onChange={(e)=>setusername(e.target.value)} placeholder='Username'></Input>
            <Input onChange={(e)=>setpassword(e.target.value)} placeholder='Password'></Input>
            <Button onClick={handleClick}>SIGN IN</Button>
            <Link to="/register" style={{textDecoration:"none",color:"inherit"}}>
            <Reg>Create an Account</Reg>

            </Link>
        </Wrapper>
    </Container>
  )
}

export default Login