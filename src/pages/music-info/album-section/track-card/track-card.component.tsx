import React from 'react';
import { TrackCardComponentProps } from './track-card.types';
import { StyledTrackCard } from './track-card.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { milisecondToTime } from '../../../../utils/pipes.utils';

export default ({ trackName, durationTime, playOnSpotifyUrl }: TrackCardComponentProps) => (
    <StyledTrackCard title="Tocar música no spotify" href={playOnSpotifyUrl} target="_blank" rel="noopener noreferrer">
        <p><FontAwesomeIcon icon={faMusic} />&nbsp;&nbsp; {trackName}</p>
        <p>{milisecondToTime(durationTime)} <FontAwesomeIcon icon={faPlayCircle} /></p>
    </StyledTrackCard>
)