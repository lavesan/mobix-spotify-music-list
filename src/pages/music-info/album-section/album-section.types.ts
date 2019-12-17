import { TrackCardComponentProps } from "./track-card/track-card.types";

export type AlbumSectionProps = {
    albumName: string;
    tracks: TrackCardComponentProps[];
    artistsNames: string[];
    releaseDate: string;
    totalTracks: number;
    imgUrl: string;
}