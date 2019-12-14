import styled from 'styled-components';

export const StyledRangePicker = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-column-gap: 10px;
    width: 100%;
    height: inherit;

    p {
        margin: 0;
    }
`;

export const StyledRangePickerComponent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 20px;
    height: 37px;
    user-select: none;
`;

export const StyledValueParagraph = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`;