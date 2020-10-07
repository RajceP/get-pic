import React from 'react';

import styled from 'styled-components';

const StyledMain = styled.main`
  width: 100%;
  padding: 16px;
`;

const WithLayout = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default WithLayout;
