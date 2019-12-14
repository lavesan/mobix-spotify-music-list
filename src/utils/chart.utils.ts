type BarChartDataParams = {
    labels: any[];
    data: any[];
}

export const barChartData = function({ labels, data }: BarChartDataParams) {
    return {
        labels,
        backgroundColor: '#FFF',
        datasets: [
          {
            data,
            label: "R$",
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["#076E95"],
            pointBackgroundColor: "#076E95",
            pointBorderColor: "#FFF",
            pointBorderWidth: 1,
            pointRadius: 4,
            borderWidth: 3
          }, 
          {
            data: ['Highway To hell', 'This house is on fire']
          }
        ]
    }
}

export const barChartOptions = {
    // onClick: (e: any, item: any, a: any) => {
    //     console.log('e: ', e);
    //     console.log('item: ', item);
    //     console.log('a: ', a);
    // },
    responsive: true, 
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 7,
            // callback: function(label: any): string {
            //   return `R$ ${label / 100}`;
            // }
          }
        }
      ]
    },
    // tooltips: {
    //     custom: (tooltip: any) => {
    //         console.log('tooltip: ', tooltip),
            
    //     }
    // }
  };