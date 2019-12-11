import styled from 'styled-components';

export const StyledMusicCard = styled.div`
    box-shadow: 0 0 6px #c2c2c2;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
    width: fit-content;

    header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
    }

    .content p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row nowrap;
    }
`;