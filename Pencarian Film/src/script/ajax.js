export async function getMovies(keyword, includeDetail = false) {
  const response = await fetch('http://www.omdbapi.com/?apikey=b684559&s=' + keyword);
  const data = await response.json();
  console.log(data);

  if (data.Response === "True" && data.Search) {
    if (includeDetail) {
      const moviesWithDetail = await Promise.all(data.Search.map(async (movie) => {
        const detail = await getMovieDetail(movie.imdbID);
        return { ...movie, Detail: detail };
      }));

      return moviesWithDetail;
    } else {
      return data.Search;
    }
  } else {
    console.error('API request error:', data.Error);
    return null; 
  }
}

export async function getMovieDetail(imdbid) {
  const response = await fetch('http://www.omdbapi.com/?apikey=b684559&i=' + imdbid);
  const data = await response.json();
  console.log(data);
  return data;
}
