import React from 'react'
import styled from 'styled-components'
import mongo from "../Components/Utils/mongo.png"
import express from '../Components/Utils/express.png'
import react from './Utils/React.png'
import node from './Utils/node.png'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LogoutUser } from '../Redux/LoginRedux'
import { mobile } from '../Responsive'
const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #ead1ff;
padding: 10px;
`
const Left = styled.div`
display: flex;
align-items: center;
`
const Right = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Image = styled.img`
height: 50px;
width: 50px;
${mobile({
  height:"35px",
  width:"35px"
 })}
`
const Icon = styled.div`
display: flex;
align-items: center;
cursor: pointer;
gap: 5px;
`
const Text = styled.p`
${mobile({
  display:"none"
 })}
`
const Navbar = () => {
  const dispatch = useDispatch()
  const handleClick = ()=>{
    dispatch(LogoutUser())
  }
  return (
    <Container>
      <Link to='/'>
        <Left>
            <Image src={mongo}></Image>
            <Image src={express}></Image>
            <Image src={react}></Image>
            <Image src={node}></Image>
            </Left>
            </Link>
        <Right>
        <Link to="/adduser" style={{textDecoration:"none",color:"inherit"}}>
          <Icon>
            <PersonAddAltOutlinedIcon/><Text>Add User</Text>
          </Icon>
          </Link>
          <Icon onClick={handleClick}><LogoutIcon/><Text>Logout</Text></Icon>
          </Right>
    </Container>
  )
}

export default Navbar