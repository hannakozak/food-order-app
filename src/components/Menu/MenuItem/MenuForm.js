import React from 'react';
import Input from '../../UI/Input';

import { Button } from '../../../styles/CommonStyles'
import { FormWrapper } from './MenuForm.styles';


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
        <Button primary>Add</Button>
      </FormWrapper>
    )
}

export default MenuForm;