import React from 'react';

import { InputWrapper, InputLabel, InputInput } from './Input.styles'

const Input = React.forwardRef((props, ref) => {
    return (
      <InputWrapper>
          <InputLabel htmlFor={props.input.id}>{props.label}</InputLabel>
          <InputInput ref={ref} {...props.input}/>
      </InputWrapper>
    )
})

export default Input;