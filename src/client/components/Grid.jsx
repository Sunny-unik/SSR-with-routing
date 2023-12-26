import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPopularRepos } from "../../shared/githubAPI";

export default function Grid(props) {
  const lang = useParams().id;
  const [data, setData] = useState({ repos: [], loading: true });

  useEffect(() => {
    if (!props.repos) fetchAndSetData();
    else if (typeof props.repos === "string")
      setData({ repos: JSON.parse(props.repos), loading: false });
    else setData({ repos: props.repos, loading: false });
  }, []);

  const fetchAndSetData = async () => {
    try {
      const repos = await fetchPopularRepos(lang);
      if (repos === null)
        throw new Error("Failed to fetch data from githubAPI");
      setData({ repos, loading: false });
    } catch (error) {
      console.log(error);
      setData({ repos: [], loading: false, error });
    }
  };

  if (data.error) return <h3 align="center">Oops! Internal Server Error</h3>;

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
