import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Search from '../Components/Search'
import Table from '../Components/Table'
const Container = styled.div``
const Home = () => {
  return (
    <Container>
        <Navbar/>
        <Search/>
        <Table/>
    </Container>
  )
}

export default Home