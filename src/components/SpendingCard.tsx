import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 3, 4, 20, 12, 10, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const SpendingCard = () => {
    return <Bar options={options} data={data} />;
}
