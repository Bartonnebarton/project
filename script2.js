const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
            
//             if ( a != null && b != null && a !='' && b!='' && a.length <50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('Error');
//                 i--;
//             }
// }

let num = 0

// while (num<2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');
    
//     if ( a != null && b != null && a !='' && b!='' && a.length <50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         num++;
//     } else {
//         console.log('Error');
//     }

// }
do {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');
        
        if ( a != null && b != null && a !='' && b!='' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
            num++;
        } else {
            console.log('Error');
}
} while (num < 2);




if(personalMovieDB.count < 10) {
    console.log("Мало");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Classic');
} else if (personalMovieDB.count >= 30) {
    console.log('kinoman');
} else {
    console.log('oshibka');

}

console.log(personalMovieDB);