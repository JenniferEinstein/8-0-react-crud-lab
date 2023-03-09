const URL = process.env.REACT_APP_API_BASE_URL;

// Shows

// Create Show
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" }
  }
  return fetch (`${URL}/shows/`, options)
  .then((response) => {
    return response.json();
  });
}


// Delete a Show
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all Shows
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one Show
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update a Show
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json"},
  };
  return fetch(`${URL}/shows/${id}`, options)
  .then((response) => {
    return response.json()
  });
}

// Movies

// Create a Movie
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" }
  }
  return fetch (`${URL}/movies/`, options)
  .then((response) => {
    return response.json();
  });
}



//Delete a Movie
export function destroyMovie(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/movies/${id}`, options);
}


// Index/Get all Movies
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}


// Show/Get One Movie
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}



//Update a Movie
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json"},
  };
  return fetch(`${URL}/movies/${id}`, options)
  .then((response) => {
    return response.json()
  });
}