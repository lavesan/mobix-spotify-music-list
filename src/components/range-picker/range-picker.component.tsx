import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { StyledRangePickerCard } from './range-picker-card';
import { RangePickerComponentProps } from './range-picker.types';
import { StyledRangePicker } from './range-picker.styles';

export default ({ label }: RangePickerComponentProps) => {
    return (
        <StyledRangePicker>
            <StyledRangePickerCard width={'10%'}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </StyledRangePickerCard>
            <StyledRangePickerCard width={'60%'}>
                <p>{label}</p>
            </StyledRangePickerCard>
            <StyledRangePickerCard width={'10%'}>
                <FontAwesomeIcon icon={faAngleRight} />
            </StyledRangePickerCard>
        </StyledRangePicker>
    )
}