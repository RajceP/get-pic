import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 12px;
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
