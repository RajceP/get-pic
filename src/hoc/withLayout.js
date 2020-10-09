import React from 'react';

import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 8px;
`;

const WithLayout = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default WithLayout;
