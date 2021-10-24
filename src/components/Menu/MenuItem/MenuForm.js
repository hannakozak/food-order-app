import React from 'react';
import Input from '../../UI/Input';

import { FormWrapper, FormButton } from './MenuForm.styles';

const MenuForm = (props) => {
    return (
      <FormWrapper>
        <Input label='Amount' input={{
           id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'

        }}/>
        <FormButton>Add</FormButton>
      </FormWrapper>
    )
}

export default MenuForm;