import './styles/style.css';
import { getMovies } from './script/ajax.js';
import { updateUI } from './script/ui.js';
import './element/custom-heading.js';

const searchButton = document.querySelector('.custom-search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value, true); 
    if (movies) {
        updateUI(movies);
    } else {
        console.error('Failed to fetch movies.'); 
    }
});

