import React from 'react';
import { StyledSearchFieldset, StyledSearchInput, StyledSearchIcon } from './search-input.styles';
import { SearchInputComponentProps } from './search-input.types';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default ({ name, placeholder, onChange }: SearchInputComponentProps) => {
    return (
        <StyledSearchFieldset>
            <StyledSearchIcon icon={faSearch} />
            <StyledSearchInput type="text" placeholder={placeholder} name={name} onChange={onChange} />
        </StyledSearchFieldset>
    )
}