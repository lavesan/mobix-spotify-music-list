import styled from 'styled-components';

export const StyledSearchForm = styled.form`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 21%;
    min-width: 260px;
    margin-left: auto;

    :last-child {
        margin-left: 20px;
    }
`;

export const StyledButtonForm = styled.button`
    border: thin solid transparent;
    border-radius: 5px;
    background: none;
    outline: none;
    color: #aaa;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 3px;
    transition: border-color .4s;

    :hover {
        border-color: #aaa;
    }
`;