import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import { Req } from '../Components/Url'
import userLogo from '../Components/Utils/user.png'
import { mobile } from '../Responsive'
const Container = styled.div`
display: flex;
gap: 20px;
padding: 20px;
margin-top: 30px;
${mobile({
    flexDirection:"column"
 })}
`
const Left = styled.div`
flex: 1;
display: flex;
padding: 20px 0 20px 0;
gap: 20px;
align-items: center;
flex-direction: column;
box-shadow: -2px 1px 23px 10px rgba(0,0,0,0.3);
-webkit-box-shadow: -2px 1px 23px 10px rgba(0,0,0,0.3);
-moz-box-shadow: -2px 1px 23px 10px rgba(0,0,0,0.3);
border-radius: 20px;

`
const Image = styled.img`
height:40vh;
${mobile({
  height:"25vh",
 })}
`
const Right = styled.div`
flex: 2;
box-shadow: -2px 1px 23px 10px rgba(0,0,0,0.3);
-webkit-box-shadow: -2px 1px 23px 10px rgba(0,0,0,0.3);
-moz-box-shadow: -2px 1px 23px 10px rgba(0,0,0,0.3);
border-radius: 20px;
padding: 30px;
`
const Name = styled.p``
const Button = styled.button`
width: 50%;
padding: 8px 0 8px 0;
background-color: teal;
color: white;
font-size: 15px;
border: none;
outline: none;
`
const Field = styled.div`
display: flex;
margin-bottom: 25px;
border-bottom: 1px solid gray;
padding-bottom: 10px;
`
const Head = styled.p`
flex: 1;
font-size: 15px;
font-weight: bold;
`
const Info = styled.p`
flex: 2;
font-size: 15px;
color: #535151;
`
const Detailuser = () => {
    const [user,setuser] = useState([])
    const location = useLocation().pathname.split("/")[2]
    useEffect(()=>{
        const getuser = async()=>{
            const res = await Req.get(`/users/contactdetail/${location}`)
            setuser(res.data)
        } 
        getuser()
    })
  return (
    <>
    <Navbar/>
    {user.map((items)=>(
   <Container>
    <Left>
        <Image src={userLogo}></Image>
        <Name>{items.Contactname}</Name>
        <Button>Contact</Button>
    </Left>
    
    <Right>
        <Field>
            <Head>Name</Head>
            <Info>{items.Contactname}</Info>
        </Field>
        <Field>
            <Head>Email</Head>
            <Info>{items.Contactemail}</Info>
        </Field>
        <Field>
            <Head>Phone</Head>
            <Info>{items.Contactphone}</Info>
        </Field>
        <Field>
            <Head>Address</Head>
            <Info>{items.Contactaddress}</Info>
        </Field>
        <Field>
            <Head>Designation</Head>
            <Info>{items.Contactdesign}</Info>
        </Field>
    </Right>
   
   </Container>
    ))}
   </>
  )
}

export default Detailuser