fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => response.json())
  .then(data => {
    console.log("Pokémon:", data.name);
  })
  .catch(error => {
    console.error("Error fetching Pokémon:", error);
  })
  .finally(() => {
    console.log("Request completed");
  });

