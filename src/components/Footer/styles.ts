import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 34px;
  margin-top: 34px;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.LIGHTGRAY1};
  z-index: 2;
`;

const Text = styled.Text`
  font-family: ${({theme}) => theme.FONTS.MONTSERRAT};
  font-size: 13px;
  font-weight: 400;
  color: ${({theme}) => theme.COLORS.BLACK};
`;

export const StyledFooter = {
  Container,
  Text,
};
