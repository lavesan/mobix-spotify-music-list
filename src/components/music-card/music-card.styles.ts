import styled from 'styled-components';

export const StyledMusicCard = styled.div`
    border: thin solid #c2c2c2;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;

    header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;

        h2 {
            color: #999999;
            font-size: 1rem;
            margin: 0 0 5px 0;
        }

        h2:last-child {
            font-weight: 500;
        }
    }

    hr {
        border: 0.5px solid #ededed;
    }

    .content p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #c2c0c0;
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: row nowrap;

        p {
            color: #22abb3;
            font-size: 0.9rem;
        }
    }
`;