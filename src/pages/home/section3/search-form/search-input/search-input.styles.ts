import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchInputProps } from './search-input.types';

export const StyledSearchFieldset = styled.fieldset`
    position: relative;
    border: none;
    padding: 0;
`;

export const StyledSearchInput = styled.input<SearchInputProps>`
    border: none;
    border-bottom: thin solid #aaa;
    padding: 7px 7px 7px 30px;

    :focus {
        outline: none;
    }

    ${({ invalidinput }) => invalidinput &&
        css`
            border-color: red;

            ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: red;
            }

            :-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: red;
            }

            ::-ms-input-placeholder { /* Microsoft Edge */
                color: red;
            }
        `
    }
`;

export const StyledSearchIcon = styled(FontAwesomeIcon)<SearchInputProps>`
    position: absolute;
    top: 5px;
    left: 5px;
    color: #aaa;

    ${({ invalidinput }) => invalidinput &&
        css`
            color: red;
        `
    }
`;