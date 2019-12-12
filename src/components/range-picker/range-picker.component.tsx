import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { StyledRangePickerCard } from './range-picker-card';
import { RangePickerComponentProps } from './range-picker.types';
import { StyledRangePicker, StyledRangePickerComponent, StyledValueParagraph } from './range-picker.styles';

export default ({ label, initialValue }: RangePickerComponentProps) => {
    const [value, setValue] = useState<number>(initialValue);

    return (
        <StyledRangePickerComponent>
            <StyledRangePicker>
                <StyledRangePickerCard onClick={() => setValue(value - 1)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </StyledRangePickerCard>
                <StyledRangePickerCard>
                    <p>{label}</p>
                </StyledRangePickerCard>
                <StyledRangePickerCard onClick={() => setValue(value + 1)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </StyledRangePickerCard>
            </StyledRangePicker>
            <StyledValueParagraph><b>{value}</b></StyledValueParagraph>
        </StyledRangePickerComponent>
    )
}