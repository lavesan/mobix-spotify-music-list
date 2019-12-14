import React from 'react';

export const HomePageContext = React.createContext({ 
    chartData: {
        id: 0,
        name: '',
        releaseDate: '',
        totalTrack: 0,
    }, 
    setChartData: (param: any) => {},
});