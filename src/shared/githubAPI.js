import _fetch from "isomorphic-fetch";

export function fetchPopularRepos(language = "all") {
  const encodedURI = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>10000+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  return _fetch(encodedURI)
    .then((data) => data.json())
    .then((repos) => repos.items)
    .catch((error) => {
      console.warn(error);
      return null;
    });
}
