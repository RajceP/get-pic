import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Image from './components/Image';
import Input from './components/Input';
import WithLayout from './hoc/withLayout';
import GlobalStyle from './styles/Global';
import Theme from './styles/Theme';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const App = () => {
  const [input, setInput] = useState('');
  const [url, setUrl] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handlePicLoad = (event) => {
    event.preventDefault();
    setUrl(`https://source.unsplash.com/featured/?${input}`);
  };

  return (
    <Theme>
      <GlobalStyle />
      <WithLayout>
        <StyledContainer>
          <p>
            Welcome to GetPic. Type keywords to input bellow. Keywords should be separated by comma.
          </p>
        </StyledContainer>
        <StyledContainer>
          <form onSubmit={(event) => handlePicLoad(event)}>
            <Input
              type="text"
              placeholder="Keywords..."
              value={input}
              onChange={(event) => handleChange(event)}
            />
            <Button type="submit">GetPic!</Button>
          </form>
        </StyledContainer>
        <StyledContainer>{url && <Image id="img" src={url} alt="{input}" />}</StyledContainer>
      </WithLayout>
    </Theme>
  );
};

export default App;
