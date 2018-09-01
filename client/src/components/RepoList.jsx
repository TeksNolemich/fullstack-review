import React from 'react';

const RepoList = (props) => (
  <div>
    {props.repos.map(repo => (
      <div>{repo.name}</div>
    ))}
  </div>
)

export default RepoList;