import React, { useEffect, useState } from "react";

export default function Grid(props) {
  const [data, setData] = useState({
    repos: [],
    loading: true,
  });

  useEffect(() => {
    if (typeof props.repos === "string")
      setData({ repos: JSON.parse(props.repos), loading: false });
    else setData({ repos: props.repos, loading: false });
  }, []);

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {data.loading ? (
        <h1>Loading...</h1>
      ) : (
        data.repos?.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{ margin: 30 }}>
            <ul>
              <li>
                <a href={html_url}>{name}</a>
              </li>
              <li>@{owner.login}</li>
              <li>{stargazers_count} stars</li>
            </ul>
          </li>
        ))
      )}
    </ul>
  );
}
