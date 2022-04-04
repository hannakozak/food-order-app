import { useRef, useState } from "react";
import { FormInput, FormLabel, Form } from "./Checkout.styles";
import { Button } from "../../styles/CommonStyles";

const isEmpty = (value) => value.trim() === "";
const isNotFiveChars = (value) => value.trim().length !== 5;

export const Checkout = (prop) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalIsValid = !isNotFiveChars(enteredPostal);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });
    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }
    prop.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };
  return (
    <Form onSubmit={confirmHandler}>
      <div>
        <FormLabel htmlFor="name">Your Name</FormLabel>
        <FormInput type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div>
        <FormLabel htmlFor="street">Your Street</FormLabel>
        <FormInput type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div>
        <FormLabel htmlFor="postal">Postal Code</FormLabel>
        <FormInput type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postal && <p>Please enter a valid postal code!</p>}
      </div>
      <div>
        <FormLabel htmlFor="city">City</FormLabel>
        <FormInput type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <Button type="button" onClick={prop.onCancel}>
        Cancel
      </Button>
      <Button primary>Order</Button>
    </Form>
  );
};
