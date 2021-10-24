import React from 'react';

import { InputWrapper, InputLabel, InputInput } from './Input.styles'

const Input = (props) => {
    return (
      <InputWrapper>
          <InputLabel htmlFor={props.input.id}>{props.label}</InputLabel>
          <InputInput {...props.input}/>
      </InputWrapper>
    )
}

export default Input;