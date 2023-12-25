import React from "react";

export default function Grid({ repos }) {
  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {repos?.map(({ name, owner, stargazers_count, html_url }) => (
        <li key={name} style={{ margin: 30 }}>
          <ul>
            <li>
              <a href={html_url}>{name}</a>
            </li>
            <li>@{owner.login}</li>
            <li>{stargazers_count} stars</li>
          </ul>
        </li>
      ))}
    </ul>
  );
}
