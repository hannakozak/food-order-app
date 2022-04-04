import styled from "styled-components";

export const Form = styled.form`
  width: 60%;
  border-radius: 5px;
  padding: 1rem;
`;

export const FormInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  width: 100%;
  padding: 0.4rem;
  font-size: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 4px;
  text-align: left;
`;
