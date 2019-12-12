import styled, { css } from 'styled-components';
import { RangePickerCardProps } from './range-picker-card.types';

export const StyledRangePickerCard = styled.div<RangePickerCardProps>`
    border: thin solid #B3B3B3;
    border-radius: 5px;
    padding: 8px;

    ${({ width }) =>
        css`
            width: ${width};
        `
    }
`;