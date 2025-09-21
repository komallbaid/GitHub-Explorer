import React from 'react';
import RepoCard from './RepoCard';

function RepoList({ repos }) {
  if (!repos.length) {
    return (
      <div className="text-center text-gray-500 text-lg mt-12">No repositories found.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {repos.map(repo => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </div>
  );
}

export default RepoList;
