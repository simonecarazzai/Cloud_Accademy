import React from 'react'
import styled from 'styled-components';

const Footer = (characterLength)=> {
    return <Container>
                {'Characters: ' + characterLength.characterLength}
    </Container> 
}

const Container = styled.div`
    padding: 4% 0 3% 0;
    background-color: rgb(36, 40, 47);
    color:white;
`;

export default Footer;