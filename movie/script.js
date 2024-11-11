class Movie {
    constructor(title, description, date, rating) {
        this.title = title;         
        this.description = description; 
        this.date = date;           
        this.rating = rating;       
    }
}


let movies = [
    new Movie('The Matrix', 'Neo (Keanu Reeves) discovers that the world he lives in is a simulation controlled by machines', 1999, 3),
    new Movie('Titanic', 'Jack (Leonardo DiCaprio) and Rose (Kate Winslet) fall in love aboard the ill-fated RMS Titanic', 1997, 5),
    new Movie('La Vie en Rose', 'The life of French singer Edith Piaf (Marion Cotillard) from poverty to fame', 2007, 2),
    new Movie('Back to the Future', 'Marty McFly (Michael J. Fox) travels back in time using a time machine', 1980, 4),
    new Movie('The Godfather', 'Don Vito Corleone (Marlon Brando) leads the powerful Corleone family through betrayal', 1972, 1),
    new Movie('La Haine', 'Three young men living in the Paris suburbs face violence and social unrest after a riot', 1995, 5),
    new Movie('Amélie', 'Amélie (Audrey Tautou) finds joy in helping others while hiding her own insecurities', 2001, 3),
    new Movie('The Dark Knight', 'Batman (Christian Bale) faces the Joker (Heath Ledger), a villain who wants to create chaos in Gotham City', 2008, 1),
    new Movie('Les Intouchables', 'The inspiring story of a disabled aristocrat and his caregiver, showing how friendship can change lives', 2011, 4),
    new Movie('Forrest Gump', 'The story of a simple man, Forrest Gump (Tom Hanks), whose unassuming nature and incredible luck allow him to experience life in unexpected ways', 1994, 2),
];


function display(movieList) {
    let tableBody = document.getElementById('movieTable'); 
    tableBody.innerHTML = ''; 


    for (let i = 0; i < movieList.length; i++) {
        let movie = movieList[i];
            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.description}</td>
                <td>${movie.date}</td>
                <td>${movie.rating}</td>
                <td><button onclick= "deleteMovie(${i})">delete</button></td>
            
            `;
            tableBody.appendChild(row); 
        }
    }


display(movies);


document.getElementById('searchButton').addEventListener('click', function(){
    let Search = document.getElementById('Search').value;
    let table = [];

    for(let i = 0 ; i < movies.length ; i++){
        if (movies[i].title === Search){
            table.push(movies[i]);
        }
    }
    display(table);
});

function deleteMovie(index){
    movies.splice(index,1);
    display(movies);
}

document.getElementById('movie').addEventListener('click', function () {
    let table = document.getElementById('tabletitle');
    
    if (table.style.display === 'none') {
        table.style.display = 'table';
        display(movies); 
    
}
});

document.getElementById('addmovie').addEventListener('click', function (){
    let from = document.getElementById('form');
    if(from.style.display === 'none'){
        from.style.display ='block';
        display(movies);
    }
});


document.getElementById('add').addEventListener('click', function (event) {
    event.preventDefault(); 

    let title = document.getElementById('title').value;
    let description = document.getElementById('Description').value;
    let date = document.getElementById('Date').value;
    let rating = document.getElementById('Rating').value;

    if (title && description && date && rating) {
        let newMovie = new Movie(title, description, (date), (rating)); 
        movies.push(newMovie); 
        display(movies);

        document.getElementById('form').reset();
        document.getElementById('form').style.display = 'none';
    
    }
});