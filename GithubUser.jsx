import React from "react";
import { useGithubUser } from "../hooks/useGithubUser";

export function GithubUser({ username }) {
  const { user, loading, error } = useGithubUser(username);

  if (!username) {
    return <div>Please provide a GitHub username.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {user && (
        <>
          <img src={user.avatar_url} alt={`${user.login} avatar`} />
          <div>{user.login}</div>
          <div>{user.name}</div>
        </>
      )}
    </div>
  );
}
