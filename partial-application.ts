export const partialApplciationExample = () => {
  const getFromApi = (baseUrl) => (endpoint) => (callback) => {
    fetch(`${baseUrl}${endpoint}`)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  };

  const getGithub = getFromApi('https://api.github.com');

  const getGithubUsers = getGithub('/users');
  const getGithubRepositories = getGithub('/repositories');

  getGithubUsers((data => {
    data.map(user => console.log('user', user.login))
  }))

  getGithubRepositories((data) =>
    data.map((r) => console.log('repositories', r.name))
  );

};
