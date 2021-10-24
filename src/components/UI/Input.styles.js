import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 3rem;
`;

export const InputLabel = styled.label`
    font-weight: bold;
    margin-right: 1rem;
`;

export const InputInput = styled.input`
    width: 5rem;
    border-radius: 5px;
    border: 1px solid  ${({ theme }) => theme.colors.lightGray};
    padding-left: 0.5rem;
`;
