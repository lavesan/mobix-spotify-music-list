import styled from 'styled-components';

export const StyledPagesContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    background-color: #f0f0f0;
    width: 100vw;

    > * {
        margin-top: 30px;
    }

    > *:last-child {
        margin-bottom: 30px;
    }
`;