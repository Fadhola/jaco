export function updateUI(movies) {
    let cards = '';
    movies.forEach((m) => (cards += showCards(m)));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
  }
  
  export function showCards(m) {
    return ` <div class="col-md-4 my-3">
          <div class="card">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body">
              <h5 class="card-title">${m.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
              <div class="movie-detail">
                  <strong>Director: </strong>${m.Detail.Director}<br>
                  <strong>Actors: </strong>${m.Detail.Actors}<br>
                  <strong>Writer: </strong>${m.Detail.Writer}<br>
                  <strong>Plot: </strong><br>${m.Detail.Plot}
              </div>
              </div>
          </div>
      </div>`;
  }
  