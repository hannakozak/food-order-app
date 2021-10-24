import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const FormButton = styled.button`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.lightOrange};;
    border: 1px solid ${({ theme }) => theme.colors.lightOrange};;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.5rem;
    width: 40%;
    
    &:hover{
        background-color: ${({ theme }) => theme.colors.darkOrange};;
        border: 1px solid ${({ theme }) => theme.colors.darkOrange};;
    }
    &:active{
        background-color: ${({ theme }) => theme.colors.darkOrange};;
        border: 1px solid ${({ theme }) => theme.colors.darkOrange};;
    }

    @media (min-width: 768px) {
     width: 30%;
     font-size: 2rem;
    }
`


