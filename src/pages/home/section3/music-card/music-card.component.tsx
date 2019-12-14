import React from 'react';
import { StyledMusicCard } from './music-card.styles';
import { MusicCardComponentProps } from './music-card.types';
import { addZeroOnNumber } from '../../../../utils/pipes.utils';
import under18Img from '../../../../assets/imgs/18-prohibited.jpg';
import { useHistory } from 'react-router';

export default ({ diskNumber, trackNumber, musicName, popularity, explicit, albumId }: MusicCardComponentProps) => {
    const history = useHistory();

    const popularityLevel = (popularity: number): string => {
        if (popularity >= 65)
            return 'Alta';
        if (popularity < 65 && popularity >= 35)
            return 'Média';
        else
            return 'Baixa';
    }

    return (
        <StyledMusicCard onClick={() => history.push({
            pathname: '/music-info',
            search: `?albumId=${albumId}`,
        })}>
            <header>
                <h2>Nº{addZeroOnNumber(diskNumber)}</h2>
                <h2>Track {addZeroOnNumber(trackNumber)}</h2>
            </header>
            <hr />
            <div className="content">
                <p title={musicName}>{musicName}</p>
            </div>
            <div className="info">
                <p>{popularityLevel(popularity)} popularidade</p>
                {explicit &&
                    <img src={under18Img} alt="Under 18 year prohibited" width="30" />}
            </div>
        </StyledMusicCard>
    )
}