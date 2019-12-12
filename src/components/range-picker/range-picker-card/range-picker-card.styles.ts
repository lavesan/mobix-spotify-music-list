import styled from 'styled-components';
import { RangePickerCardProps } from './range-picker-card.types';
import { css } from 'react-select/src/components/Control';

export const StyledRangePickerCard = styled.div<RangePickerCardProps>`
    border: thin solid #B3B3B3;
    border-radius: 5px;
    padding: 8px;
    ${({ width }) => `width: ${width}`}
`;