export type MusicCardComponentProps = {
    albumNumber: number;
    trackNumber: number;
    musicName: string;
    popularity: string;
    explicit: boolean;
    onClick: () => void;
}