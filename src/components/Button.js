import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 12px;
  padding: 12px;
  background-color: white;
  cursor: pointer;
  outline: none;
  font-family: inherit;
  border: 0.1px solid grey;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
`;

const Button = ({ type, children }) => <StyledButton type={type}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
