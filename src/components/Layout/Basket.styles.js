import styled from 'styled-components';

export const Icon = styled.span`
    width: 2.5rem;
    height: 2.5rem;
`;

export const BusketWrapper = styled.button`
    display: flex;
    justify-content: flex-start;
    background-color: transparent;
    border: none;
    width: 4rem;
`;

export const BusketItems = styled.span`
    color: ${({ theme }) => theme.colors.lightOrange};
    font-size: 1.6rem;
    align-self: flex-end;
`