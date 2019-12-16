import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { StyledRangePickerCard } from './range-picker-card';
import { RangePickerComponentProps } from './range-picker.types';
import { StyledRangePicker, StyledRangePickerComponent, StyledValueParagraph } from './range-picker.styles';
import { HomePageContext } from '../../home.context';

export default ({ label }: RangePickerComponentProps) => {
    const { selectedYear, setSelectedYear } = useContext(HomePageContext);

    return (
        <StyledRangePickerComponent>
            <StyledRangePicker>
                <StyledRangePickerCard onClick={() => setSelectedYear(selectedYear - 1)}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </StyledRangePickerCard>
                <StyledRangePickerCard>
                    <p>{label}</p>
                </StyledRangePickerCard>
                <StyledRangePickerCard onClick={() => setSelectedYear(selectedYear + 1)}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </StyledRangePickerCard>
            </StyledRangePicker>
            <StyledValueParagraph><b>{selectedYear}</b></StyledValueParagraph>
        </StyledRangePickerComponent>
    )
}