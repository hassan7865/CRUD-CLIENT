import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import {  useNavigate } from 'react-router-dom';
import { mobile } from '../Responsive';
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 30vh;
`
const SearchBox = styled.div`
border: 1px solid;
width: 60%;
height: 20%;
display: flex;
align-items: center;
${mobile({
  width:"90%"
 })}
`
const Input  = styled.input`
width: 95%;
height: 90%;
border: none;
outline: none;
font-size: 15px;
padding-left: 8px;
${mobile({
  width:"90%"
 })}
`
const Icon = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: teal;
height: 100%;
width:5% ;
${mobile({
  width:"10%"
 })}
`
const Search = () => {
  const navigate = useNavigate()
  const [query,setquery] = useState("")
  const handleClick = ()=>{
    navigate(`/find?q=${query}`)
  }
  return (
    <Container>
        <SearchBox>
            <Input onChange={(e)=>setquery(e.target.value)} placeholder='Search People'></Input>
            <Icon onClick={handleClick}><SearchIcon style={{color:"white"}}/></Icon>
        </SearchBox>
    </Container>
  )
}

export default Search