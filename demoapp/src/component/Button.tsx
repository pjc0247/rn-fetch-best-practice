import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  border: 1px solid blue;
  border-radius: 10px;

  padding: 20px 20px;
`;
const ButtonText = styled.Text`
  color: blue;
`;

type ButtonProps = {
  children: React.ReactNode;
};
export const Button = ({
  children,
}: ButtonProps) => {
  return (
    <Container>
      <ButtonText>
        {children}
      </ButtonText>
    </Container>
  );
};
