import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

const dataBar = {
    labels: ['Zapelino', 'Oi', 'BRB', 'BRB Nação', 'Outros'],
    datasets: [
      {
        label: '',
        data: [12000, 19000, 3000, 5000, 2000],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const optionsBar = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Contas abertas - BOT',
      },
    },
  };

  const dataLine = {
    labels: ['1', '2', '3', '4', '5', '6', '6', '7', '8', '9',],
    datasets: [
      {
        label: 'Quantidade de transações PIX diarias',
        data: [12000, 19000, 3000, 5000, 7200, 3000, 15000, 13500, 9000],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 190, 170, 0.9)',
      },
    ],
  };
  
  const optionsLine = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const dataBar2 = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Insatisfeitos',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Indecisos',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: 'Satisfeitos',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  
  const optionsBar2 = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

const Dashboard = () => {
    return (
        <div>
            <h2 id='h2'>Dashboard</h2>
            <div className="dashboard">
                <div className='barra'>
                    <h4>Abertura de Contas</h4>
                    <Bar data={dataBar} options={optionsBar} width={600}
                    height={400}/>
                </div>
                <div className='linha'>
                    <h4>PIX</h4>
                    <Line data={dataLine} options={optionsLine} width={600}
                    height={400}/>
                </div>
                <div className='bar2'>
                    <h4>Índice de satisfação</h4>
                    <Bar data={dataBar2} options={optionsBar2} width={600}
                    height={400}/>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;