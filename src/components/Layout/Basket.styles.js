import styled from 'styled-components';

export const Icon = styled.span`
    width: 2.5rem;
    height: 2.5rem;
`;

export const BusketWrapper = styled.button`
    display: flex;
    flex-direction: row;

    background-color: transparent;
    border: none;
`;

export const BusketItems = styled.span`
    color: ${({ theme }) => theme.colors.darkOrange};
    font-size: 2.5rem;
`;