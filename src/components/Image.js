import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  margin: 12px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.2);

  @media ${({ theme: { mediaQueries } }) => mediaQueries.medium} {
    max-width: 80vw;
    max-height: 80vh;
  }
`;

const Image = ({ src, alt }) => <StyledImage src={src} alt={alt} />;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
