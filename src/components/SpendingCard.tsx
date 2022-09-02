import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import spendingData from '../data.json'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
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

type DataMap = {
    day: string;
    amount: number
}

const dataMap = (data: DataMap[]) => {
    data.map(item => {
         console.log(item.amount)
    })
}
console.log(dataMap(spendingData))

const data = {
  labels,
  datasets: [
    {
      data: dataMap(spendingData),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const SpendingCard = () => {
    return <Bar options={options} data={data} />;
}
