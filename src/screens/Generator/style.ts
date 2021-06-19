import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #222;
`

export const Image = styled.Image`
  margin-bottom: 30px;
`

export const Characters = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #FFF;
`

export const SliderContainer = styled.View`
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
`

export const ButtonGenerate = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9
})`
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 90%;
  background-color: #D4A13F;
  border-radius: 8px;
`

export const ButtonGenerateText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #FFF;
`

export const ResultGenerate = styled.View`
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
  background-color: #3FD4C9;
  border-radius: 8px;
`

export const ResultGenerateText = styled.Text`
  font-size: 20px;
  color: #333;
`
