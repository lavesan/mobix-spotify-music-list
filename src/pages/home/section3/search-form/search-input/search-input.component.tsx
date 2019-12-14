import React from 'react';
import { StyledSearchFieldset, StyledSearchInput, StyledSearchIcon } from './search-input.styles';
import { SearchInputComponentProps } from './search-input.types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default ({ name, placeholder, onChange, value, invalid }: SearchInputComponentProps) => {
    return (
        <StyledSearchFieldset>
            <StyledSearchIcon invalidinput={invalid} icon={faSearch} />
            <StyledSearchInput type="text" placeholder={placeholder} value={value} invalidinput={invalid} name={name} onChange={onChange} />
        </StyledSearchFieldset>
    )
}