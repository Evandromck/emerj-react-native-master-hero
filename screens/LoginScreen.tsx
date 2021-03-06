import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { ActivityIndicator } from 'react-native';
import React from 'react';





const BackgroundContainer = styled.View`
    
    background: #021831ed;
    
`

const ImageBackground = styled.Image`
   
    
    
    
    
    
    
`




const Container = styled.View`
  flex:1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`
const ContainerTextt = styled.Text`
  color:#8492A6;
  padding-right: 55%;

`
const ContainerText = styled.Text`
  color:#8492A6;
  padding-right: 10%;

`

const ContainerTexte = styled.Text`
   color: #8492A6;
   padding-right: 35%;
   margin-top: 3%;

`

const Input = styled.TextInput`
  height: 50px;
  width: 300px;
  background-color: #E0E6ED;
  border-radius: 5px;
  padding-left: 20px;
  margin-bottom: 1px;
`

const SubmitButton = styled.Button`
  width: 200px;
  height: 10px;
`

const Loading = styled.View`
width: 100%;
height: 50%;
position: absolute;
align-items: center;
justify-content: center;
z-index: 30;
top: 60%;
`




export default function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {

  
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [auth, setAuth] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const authLocal = async()=>{
    if(auth){
      setError('');
      
      setSuccess('Autenticando...');

      setTimeout(()=>{
        navigation.navigate('User');
      },3000);
      
    }
  }
  
  const handleSignInPress = async () =>{
    setIsLoading(true);
 

    if(email.length === 0 || password.length === 0){
      setError('Preencha usuário e senha para continuar!');
    }else {
      //aqui virá a API
      try {
        const response = await api.post('/auth/login',{
          email: email,
          password: password,
        });

        if(response.data.accessToken){
        setSuccess("");
          await AsyncStorage.setItem('@accessToken', response.data.accessToken)


          const result = await AsyncStorage.getItem('@accessToken');
          
          if(result) {
              setTimeout(()=>{
                setIsLoading(false);
            },5000)
            setSuccess("Usuário autenticado");
            setAuth(true);
            authLocal();
          }
        }


        
        // console.log(response);


      } catch (error) {
        setSuccess('');
        setError('Falha na autenticação');
        console.log(error);
      }

    }
  }

  return (
    
    
    
    
    <Container>

<BackgroundContainer>
  
      {isLoading && <Loading> 
        
        <ActivityIndicator size="large"  color="#8492A6"/>
        </Loading>}
        <ImageBackground source={require('../assets/images/background.png')}/>
        
      <ContainerTextt>Login</ContainerTextt>
      
      <Input
      placeholder="E-mail"
      defaultValue={email}
      onChangeText={(newEmail)=> setEmail(newEmail)}
      />
      <Input
      placeholder="Senha"
      defaultValue={password}
      onChangeText={(newPassword)=> setPassword(newPassword)}
      secureTextEntry
      />
      
        <SubmitButton title="Enviar" color="#B8977E"  onPress={handleSignInPress}/>
        <ContainerTexte>Esqueceu sua senha ? </ContainerTexte>
      
        <ContainerText>{error}</ContainerText>
        <ContainerText>{success} </ContainerText>

      
      </BackgroundContainer>
    </Container>

    
   );
}
