import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { barChartOptions, barChartData } from '../../../../utils/chart.utils';
import { BarChartComponentProps } from './bar-chart-types';

export default ({ chartData }: BarChartComponentProps) => {
    function lineChartValues(): number[] {
        return [
          3000000,
          5000000,
          4000000,
          1000000,
          2000000,
          6000000,
        ];
      }
      function lineChartDates(): string[] {
        return [
          '01/10/2018',
          '04/10/2018',
          '07/10/2018',
          '15/10/2018',
          '19/10/2018',
          '27/10/2018',
        ];
      }
    useEffect(() => {
      console.log('chartData: ', chartData)
    }, [chartData]);

    return (
        <Bar
            data={barChartData({ labels: lineChartDates(), data: lineChartValues() })}
            options={barChartOptions}
            onElementsClick={elem => console.log('elem: ', elem)} />
    )
}