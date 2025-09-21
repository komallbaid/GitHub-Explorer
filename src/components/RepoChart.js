import React from 'react';
import { Bar } from 'react-chartjs-2';

function RepoChart({ repo }) {
  const data = {
    labels: ['Stars', 'Forks', 'Open Issues'],
    datasets: [
      {
        label: repo.name,
        data: [repo.stargazers_count, repo.forks_count, repo.open_issues_count],
        backgroundColor: ['#fcd34d', '#34d399', '#a78bfa'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="mt-6">
      <Bar data={data} options={options} />
    </div>
  );
}

export default RepoChart;
