import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ labels, datasetData, backgroundColors, hoverBackgroundColors }) {
  const data = {
    labels: labels || ['Red', 'Blue', 'Yellow'], 
    datasets: [
      {
        label: 'Product Details',
        data: datasetData || [300, 50, 100], 
        backgroundColor: backgroundColors || ['#FF6384', '#36A2EB', '#FFCE56'], 
        hoverBackgroundColor: hoverBackgroundColors || ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div style={{ width: '400px', height: '500px' }}>
        <h1 style={{ textAlign: 'center' }}>Pie chart</h1>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default Chart;
