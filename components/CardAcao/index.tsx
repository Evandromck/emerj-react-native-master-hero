import React from 'react';
import { Image, TextInputComponent } from 'react-native';
import { Text, View } from '../Themed';
import styled from 'styled-components/native';

const Container = styled.View`
    
    margin-left: -65%;
    width: 180%;
    height: 70px;
    display: flex;
    margin-top: -7%; 
    position: absolute;
    

    
`

const Avatar = styled.Image`
    width: 60px;
    height: 70px;
    margin-left: 3%;
    max-width: 80%;
    max-height: 80%;
    margin-top: 0.9%;
    display: flex;


`
const AvatarContainer = styled.View`
    background: #c0ccda;
    width: 100%;
    align-items: center;
    margin-bottom: 70px;
    margin-left: -20%;
  
`
const TextUm = styled.Text`
text-align: center;
font-weight: bold;
margin-left: -10%;
margin-top: -18%;
`


export default function CardAcao() {
  return (
    <Container>
        
        
        
        <AvatarContainer>
            <Avatar source={require("../../assets/images/acoesEducacionais.png")} />
        </AvatarContainer>
    
        <TextUm>INSERIR TÍTULOS</TextUm>
        
        
        
    </Container>
  )
}
