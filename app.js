let number=1;
fetch("https://jsonfakery.com/movies/paginated").then(res=>
res.json().then(movies => movies.data.map(movie=>
    {console.log(`${number} ci film ismi: ${movie.original_title}`)
    number++;}
)))

