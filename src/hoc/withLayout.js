import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 8px;
`;

const WithLayout = ({ children }) => <StyledMain>{children}</StyledMain>;

export default WithLayout;
