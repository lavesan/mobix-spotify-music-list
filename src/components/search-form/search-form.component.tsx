import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { SearchInputComponent } from './search-input';
import { StyledSearchForm, StyledButtonForm } from './search-form.styles';

export default () => {
    return (
        <StyledSearchForm onSubmit={() => {}}>
            <SearchInputComponent
                placeholder="buscar música"
                name="music"
                onChange={() => console.log('buscou')} />
            <StyledButtonForm type="submit" title="Pesquisar">
                <FontAwesomeIcon icon={faFilter} />
            </StyledButtonForm>
        </StyledSearchForm>
    )
}