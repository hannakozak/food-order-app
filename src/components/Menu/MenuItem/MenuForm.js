import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import { Button } from '../../../styles/CommonStyles'
import { FormWrapper } from './MenuForm.styles';


const MenuForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 || 
      enteredAmount > 5) {
        setAmountIsValid(false);
        return;
    }

    props.onAddToBasket(enteredAmountNumber);
  }
    return (
      <FormWrapper onSubmit={ submitHandler }>
        <Input 
          ref = { amountInputRef }
          label='Amount' 
          input={{
              id: 'amount_' + props.id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1'
        }}/>
        <Button primary>Add</Button>
        {!amountIsValid && <p>Please, enter a valid amount (1-5).</p>}
      </FormWrapper>
    )
}

export default MenuForm;