import styled from 'styled-components';

export const Icon = styled.span`
    width: 2.5rem;
    height: 2.5rem;
`;

export const BusketWrapper = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
`;

export const BusketItems = styled.span`
    color: ${({ theme }) => theme.colors.lightOrange};
    font-size: 2rem;
`;