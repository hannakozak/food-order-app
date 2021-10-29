import styled from 'styled-components';

export const Wrapper = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkOrange};
    padding: 1rem 0;
    margin: 1rem 0;
`

export const ItemPrice = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.lightOrange};
`

export const AmountWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 2rem;
`

export const ActionButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`