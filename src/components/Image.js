import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 80vw;
  max-height: 80vh;
  margin: 12px;
`;

const Image = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
