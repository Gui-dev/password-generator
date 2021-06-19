import React, { useState } from 'react'
import Slider from '@react-native-community/slider'

import logo from './../../assets/logo.png'
import { Container, Image, Characters, SliderContainer, ButtonGenerate, ButtonGenerateText,
  ResultGenerate, ResultGenerateText
} from './style'

export const Generator: React.FC = () => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*'
  const [slideValue, setSlideValue] = useState<number>(6)
  const [password, setPassword] = useState<string>()

  const handleGeneratePassword = () => {
    let pass = ''

    for (let i = 0, n = characters.length; i < slideValue; i++) {
      pass += characters.charAt(Math.floor(Math.random() * n))
    }

    setPassword(pass)
  }

  return (
    <Container>
      <Image source={ logo }/>

      <Characters>{ slideValue?.toFixed(0) } Caracteres</Characters>

      <SliderContainer>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={15}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#000"
          value={ slideValue }
          onValueChange={ setSlideValue }
        />
      </SliderContainer>

      <ButtonGenerate onPress={ handleGeneratePassword }>
        <ButtonGenerateText>Gerar senha</ButtonGenerateText>
      </ButtonGenerate>

      { password && (
        <ResultGenerate>
          <ResultGenerateText>{ password }</ResultGenerateText>
        </ResultGenerate>
      ) }
    </Container>
  )
}
