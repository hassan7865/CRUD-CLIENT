import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link} from 'react-router-dom';
import { Req } from './Url';
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
    color: gray;
    margin-top: 30px;
    ${mobile({
        fontSize:"20px",
        textAlign:"center"
 })}
`
const Icon = styled.div`
cursor: pointer;
`
const Table = () => {
    const [user,setuser] = useState([])

    const handleClick = async(id)=>{
        const res =await Req.put(`/users/${id}`)
        res.status === 200 && window.location.reload()

    }
    useEffect(()=>{
        const getuser = async()=>{
            try{
                const res = await Req.get("/users/current")
                setuser(res.data.Contacts)
            }catch(err){
            }
        }
        getuser()
    })
  return (
    <Container>
        {user.length === 0 ? (<NoRes>No Contacts Click Add Icon To Add Contacts</NoRes>) :
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
  )
}

export default Table