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

//second Example
function tareaSimple() {
  return new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
      if (success) {
        resolve("Task has been completed without issues");
      } else {
        reject("Have an issue occured");
      }
    }, 1000);
  });
}

tareaSimple()
  .then((mensaje) => {
    console.log("THEN 1:", mensaje);
    return "Result processed in THEN 2";
  })
  .then((nuevoMensaje) => {
    console.log("THEN 2:", nuevoMensaje);
  })
  .catch((error) => {
    console.log("CATCH:", error);
  })
  .finally(() => {
    console.log("FINALLY: always working");
  });
