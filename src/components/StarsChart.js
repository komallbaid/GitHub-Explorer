import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StarsChart = ({ repos }) => {
  const data = {
    labels: repos.map(repo => repo.name.length > 15 ? repo.name.slice(0, 15) + '...' : repo.name),
    datasets: [
      {
        label: 'Stars',
        data: repos.map(repo => repo.stargazers_count),
        backgroundColor: 'rgba(59, 130, 246, 0.8)', // Tailwind blue-500
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'GitHub Repo Stars' },
    },
    scales: {
      x: {
        ticks: { maxRotation: 45, minRotation: 45 }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default StarsChart;
