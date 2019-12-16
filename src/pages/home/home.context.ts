import React from 'react';
import { BarChartData } from './section2/bar-chart/bar-chart.types';
import { MusicCardComponentProps } from './section3/music-card/music-card.types';

export const HomePageContext = React.createContext({
    selectedYear: 0,
    setSelectedYear: (param: number) => {},
    chartData: [{
        albumId: '',
        albumName: '',
        releaseDate: '',
        totalTrack: 0,
    }], 
    setChartData: (param: BarChartData[]) => {},
    musicsListed: [{
        albumId: '',
        diskNumber: 0,
        trackNumber: 0,
        musicName: '',
        popularity: 0,
        explicit: false,
    }],
    setMusicsListed: (param: MusicCardComponentProps[]) => {},
});