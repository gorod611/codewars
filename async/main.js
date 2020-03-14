async function sayJoke(apiUrl, jokeId) {
  // use mocked `fetch(url)`
  let data = await fetch(apiUrl)
    .then(data => data.json())
    .catch(err => new Error(`No jokes at url: ${apiUrl}`));
  let joke = data.find(item => item.id === jokeId);
  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup() {
      return joke.name;
    },
    sayPunchLine() {
      return joke.username;
    }
  };
}

const main = async () => {
  joke = await sayJoke("https://jsonplaceholder.typicode.com/users/", 2);
  console.log(joke.saySetup());
};

main();
