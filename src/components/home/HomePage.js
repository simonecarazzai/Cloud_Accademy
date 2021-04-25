import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import styled from 'styled-components';
import axios from 'axios'
import Footer from '../footer/Footer';
import { Spinner } from 'react-bootstrap';


const HomePage = () => {
  const [character, setCharacter] = useState()
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      fetchCharacter()
    }, [])

    //I will move this API to an external file. Here, to have more speed to develop it I put this api in the same file
    const fetchCharacter = () => {
      //To add the pagination, I will change the number of the page to call in this api
      const url = 'https://rickandmortyapi.com/api/character?page=1' 
      axios.get(url).then(response => {
          setCharacter(response.data)
          setIsLoading(false)
      })
    }

    return <>
      <Head>
          The Rick and Morty
      </Head>
      {isLoading ? <Spinner animation="border" /> :
      <>
        <ContainerCard>
            {character.results.map((item, index) => (
            <Card key={index} character={item}/>
            ))}
        </ContainerCard>
        <Footer characterLength={character.results.length}/>
      </>
      } 
    </>
}

const Head = styled.h1`
  font-size: 130px;
  align-items: center;
  justify-content: center;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(36, 40, 47);
`;

export default HomePage;