import React from 'react'
import styled from 'styled-components';

const Card = (props)=> {
    return <Container>
        <Img src={props.character.image} alt="Image"/>
        <DescriptionContainer>
            <TitleContainer>
                {props.character.name}
            </TitleContainer> 
            <SubTitleContainer>
                <RoundColor status={props.character.status}/>
                {props.character.status +  "-" + props.character.species}
            </SubTitleContainer>
            <BodyContainer>
                <LocationText title={"true"}>
                        Last known location:
                </LocationText>
                <LocationText>
                        {props.character.origin.name}
                </LocationText>
            </BodyContainer>
            <BodyContainer>
                <FirstSeenValue title={"true"}>
                        First Seen in:
                </FirstSeenValue>
                <FirstSeenValue>
                        {props.character.name}
                </FirstSeenValue>
            </BodyContainer>
        </DescriptionContainer>
    </Container> 
}

//I will create a macro area styled component for group the common style, here I create single css style  to have more speed to develop
const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid;
    width: 35%;
    margin: 2% 0 0 2%;
    border-radius:3%;
    background-color: rgb(60, 62, 68);
`;

const Img = styled.img`
    width: 30%;
    border-top-left-radius: 3%;
    border-bottom-left-radius: 3%;
`
const SubTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    margin-top:5%;
    font-size: 20px;
    color: white;
`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align:left;
    margin-left:3%;
`;

const RoundColor = styled.div`
    border-radius: 50%;
    background-color: ${props => (props.status === "Dead" ? 'red' : 'green')};
    height: 75%;
    width:3%;
    height: 24%;
    margin-right:4%;
`

const TitleContainer = styled.text`
    font-size:30px;
    margin-top:5%;
    font-weight: bold;
    color: white;
`;

const LocationText = styled.text`
    font-size:15px;
    color: ${props => (props.title  ? 'grey' : 'white')};
    font-weight:  ${props => (props.title  ? 'bold' : '')}
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:5%;
`;

const FirstSeenValue = styled.text`
    font-size:15px;
    color: ${props => (props.title  ? 'grey' : 'white')};
    font-weight:  ${props => (props.title  ? 'bold' : 'normal')}
`;

export default Card;