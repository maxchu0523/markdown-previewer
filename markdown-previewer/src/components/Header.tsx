import React from 'react';
import styled from 'styled-components';

// Styled container for the header
const HeaderContainer = styled.div`
  display : flex ;
`;

// Styled title
const Title = styled.h1`

`;

// Styled button
const Button = styled.button`
  margin : 30px;
`;

// Interface for the props
interface HeaderProps {
  onToggleGuide: () => void;
}

// Header functional component
const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdow Previewer</Title>
      <Button onClick={onToggleGuide}>Toggle Guide</Button>
    </HeaderContainer>
  );
};

export default Header;
