import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import { Req } from '../Components/Url'
import user from '../Components/Utils/user.png'
import { mobile } from '../Responsive'
 const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 `
 const Wrapper = styled.div`
 display: flex;
 align-items: center;
 height: 85vh;
 flex-direction: column;
 width: 30vw;
 gap: 20px;
 ${mobile({
  width:"80vw",
  height:"80vh"
 })}
 `
 const Icon = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
 `
 const Head = styled.h1``
 const Input =styled.input`
 width:95%;
 height: 10%;
 outline: none;
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
 const Image = styled.img`
 height: 20vh;
 `
const AddUser = () => {
  const [input,setinput] = useState({})
  const navigate = useNavigate()
  const handleClick = (e)=>{
    setinput(prev=>{
      return{...prev,[e.target.name] : e.target.value}
      
    })
  }
  const addcontact = async()=>{
    const res = await Req.put("/users/addcontact",{...input})
    res.status === 200 && navigate("/")
  }

  return (
    
    <>
    <Navbar/>
    <Container>
    <Wrapper>
        <Icon><Image src={user}></Image></Icon>
        <Head>ADD USER</Head>
        <Input name='Contactname' onChange={handleClick}  placeholder='Name'></Input>
        <Input name='Contactemail' onChange={handleClick}  placeholder='Email'></Input>
        <Input name='Contactphone' onChange={handleClick}  placeholder='Phone'></Input>
        <Input name='Contactaddress' onChange={handleClick}  placeholder='Address'></Input>
        <Input name='Contactdesign' onChange={handleClick}  placeholder='Designation'></Input>
        <Button onClick={addcontact}>ADD USER</Button>
    </Wrapper>
</Container>
</>
  )
}

export default AddUser