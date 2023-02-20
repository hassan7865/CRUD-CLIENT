import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useLocation } from 'react-router-dom';
import { Req } from '../Components/Url';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { mobile } from '../Responsive';
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
border: 1px solid;
padding: 15px;
width: 75vw;
border-radius: 10px;
${mobile({
  width:"85vw"
 })}
`
const Name = styled.div`
flex: 2;
`
const Email = styled.div`
flex: 2;
${mobile({
  display:"none"
 })}
`
const Phone = styled.div`
flex: 1;
${mobile({
  display:"none"
 })}
`
const TableCont = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
border-bottom: 1px solid gray;
padding-bottom: 10px;
`
const Heading = styled.div`
display: flex;
margin-bottom: 10px;
font-weight: bold;
${mobile({
  margin:"0 0 30px 0"
 })}
`
const HeadN = styled.p`
flex: 2;
`
const HeadE = styled.p`
flex: 2;
${mobile({
  display:"none"
 })}
`
const HeadP = styled.p`
flex: 1;
${mobile({
  display:"none"
 })}
`
const HeadA = styled.p`
flex: 1;
`
const Actions = styled.div`
display: flex;
justify-content: start;
flex: 1;
gap: 20px;
`
const NoRes = styled.h1`
    color: #555454;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px
    ${mobile({
  fontSize:"15px"
 })};
`
const Icon = styled.div`
cursor: pointer;
`
const Find = () => {
    const [user,setuser] = useState([])
    const location = useLocation().search
    useEffect(()=>{
        const getuser = async()=>{
            const req = await Req.get(`/users/find${location}`)
            setuser(req.data)
        }
        getuser()
    })
    const handleClick = async(id)=>{
        await Req.put(`/users/${id}`)

    }
  return (
    <>
    <Navbar/>
    <Search/>
    <Container>
    { user.length === 0 ? (<NoRes>No Result Found<WarningAmberIcon style={{fontSize:"50px"}}/></NoRes>) :
    <Wrapper>
        <Heading>
            <HeadN>Name</HeadN>
            <HeadE>Email</HeadE>
            <HeadP>Phone</HeadP>
            <HeadA>Actions</HeadA>
        </Heading>
        {user.map((items)=>(
        <TableCont>
            <Name>{items.Contactname}</Name>
            <Email>{items.Contactemail}</Email>
            <Phone>{items.Contactphone}</Phone>
            <Actions>
            <Link to={`/detailuser/${items._id}`} style={{textDecoration:"none",color:'inherit'}}>
                <Icon><RemoveRedEyeOutlinedIcon style={{color:"green"}}/></Icon>
            </Link>
                <Icon onClick={()=>handleClick(items._id)}><DeleteOutlineOutlinedIcon style={{color:"red"}}/></Icon>
            </Actions>
        </TableCont>
        ))}
    </Wrapper>
}
</Container>
</>
  )
}

export default Find