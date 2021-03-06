import React from 'react';
import { Image } from 'react-native';
// import { View } from '../../Themed';
import styled from 'styled-components/native';
import { Text, View } from '../Themed';
import ImageLogo from './ImageLogo';

const HeaderContainer = styled.View`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 100px;
    background: #1E2D3E;
    border-top-width: 1px;
    border-top-color: #fff;
    border-bottom-width: 10px;
    border-bottom-color: #b8977e;
    margin-top: 50px;
`
const TextCustom = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    margin-right: 5%;
    letter-spacing: -1px;
`
export default function Header(props:any){

    return (
        <HeaderContainer>
            <ImageLogo />
            
                <TextCustom>Aplicativo para Magistrados</TextCustom>
            
        </HeaderContainer>
    )
}
