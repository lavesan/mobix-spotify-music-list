export type MusicCardComponentProps = MusicCardList & {
    onClick: () => void;
}

export type MusicCardList = {
    diskNumber: number;
    trackNumber: number;
    musicName: string;
    popularity: number;
    explicit: boolean;
}