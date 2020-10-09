import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 12px;
  padding: 12px;
  outline: none;
  font-family: inherit;
  border: 0.1px solid grey;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
`;

const Input = ({ type, placeholder, value, onChange }) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

Input.propTypes = {
  onChange: PropTypes.any.isRequired,
  placeholder: PropTypes.any.isRequired,
  type: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default Input;
