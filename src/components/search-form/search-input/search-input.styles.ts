import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledSearchFieldset = styled.fieldset`
    position: relative;
    border: none;
    padding: 0;
`;

export const StyledSearchInput = styled.input`
    border: none;
    border-bottom: thin solid #aaa;
    padding: 7px 7px 7px 30px;

    :focus {
        outline: none;
    }
`;

export const StyledSearchIcon = styled(FontAwesomeIcon)`
    position: absolute;
    top: 5px;
    left: 5px;
    color: #aaa;
`;