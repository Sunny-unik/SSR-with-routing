import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPopularRepos } from "../../shared/githubAPI";

export default function Grid(props) {
  const { id: lang } = useParams();
  const [data, setData] = useState({ repos: [], loading: true, lang });

  useEffect(() => {
    if (__isBrowser__) delete window.__INITIAL_DATA__;
    if (!props.repos || data.lang !== lang) fetchAndSetData();
    else if (typeof props.repos === "string")
      setData({ repos: JSON.parse(props.repos), loading: false, lang });
    else setData({ repos: props.repos, loading: false, lang });
  }, [lang]);

  const fetchAndSetData = async () => {
    try {
      setData({ repos: [], loading: true, lang });
      const repos = await fetchPopularRepos(lang);
      if (repos === null)
        throw new Error("Failed to fetch data from githubAPI");
      setData({ repos, loading: false, lang });
    } catch (error) {
      setData({ repos: [], loading: false, error, lang });
    }
  };

  if (data.error) return <h3 align="center">Oops! Internal Server Error</h3>;

  return (
    <ul style={{ display: "flex", flexWrap: "wrap" }}>
      {data.loading ? (
        <h1>Loading...</h1>
      ) : (
        data.repos.map(({ name, owner, stargazers_count, html_url }) => (
          <li key={name} style={{ margin: 30, listStyle: "none" }}>
            <ul style={{ padding: "20px" }}>
              <li>
                <a href={html_url} rel="noopener noreferrer" target="_blank">
                  {name}
                </a>
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
