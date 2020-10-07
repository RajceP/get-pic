import React, { useState } from 'react';

import styled from 'styled-components';

import Button from './components/Button';
import Image from './components/Image';
import Input from './components/Input';
import WithLayout from './hoc/withLayout';
import GlobalStyle from './styles/Global';

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const App = () => {
  const [input, setInput] = useState('');
  const [url, setUrl] = useState();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handlePicLoad = (event) => {
    event.preventDefault();
    setUrl(`https://source.unsplash.com/featured/?${input}`);
  };

  return (
    <>
      <GlobalStyle />
      <WithLayout>
        <FormContainer>
          <form onSubmit={(event) => handlePicLoad(event)}>
            <Input
              type="text"
              placeholder="Text"
              value={input}
              onChange={(event) => handleChange(event)}
            />
            <Button type="submit">GetPic!</Button>
          </form>
        </FormContainer>
        <ImageContainer>
          <Image src={url} alt="{input}" />
        </ImageContainer>
      </WithLayout>
    </>
  );
};

export default App;
