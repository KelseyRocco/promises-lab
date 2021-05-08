require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');


/*-- For each exercise below, write the code as described --*/

Promise.resolve().then(function() {
    console.log('HERE')
    // 1) Find all movie docs
    return Movie.find({});  // remember to return the promise!
}).then(function(result) {
    console.log('1): ', result)
    // 2) Find all performer docs
    return Performer.find({});
}).then(function(result) {
    console.log('2): ', result)
// Follow the same .then structure used above from this point forward
// Don't forget to console.log the exercise number also as shown above 
    // 3) Find all movies with an MPAA Rating of 'PG'
    return Movie.find({mpaaRating: 'PG'});
}).then(function(result) {
    console.log('3): ', result)

    // 4) Find all movies that are still showing
    return Movie.find({nowShowing: true});
}).then(function() {
    console.log('4): ', result)

    // 5) Find all movies with an MPAA Rating of 'PG' or 'PG-13'
    return Movie.where('mpaaRating').in(['PG', 'PG-13']); 
}).then(function() {
    console.log('4): ', result)

    // 6) Find the first movie found with a releaseYear of 2018 
    return Movie.findOne({releaseYear: 2018});
}).then(function() {
    console.log('6): ', result)

    // 7) Find all movies released after 1980
    return Movie.where('releaseYear').gt(1980);
}).then(function() {
    console.log('7 ', result)

    // 8) Find all movies whose titles start with a 'C'
    // Hint: StackOverflow will show how to use a regular expression
    return Movie.find({title: /^C/});
}).then(function() {
    console.log('8) ', result)


    // 9) Find the performer named 'Rami Malek'
    return Performer.findOne({name: 'Rami Malik'});
}).then(function() {
    console.log('9): ', result)

    // 10) Find all performers born before 1980
    return Performer.where('born').lt(1980);
}).then(function() {
    console.log('10 ', result)

    // 11) Find all performers whose name starts with a 'J'
    return Performer.find({name: /^J/});
}).then(function() {
    console.log('11: ', result);

    
    // 12) Add a reference to performer 'Bill Murray' to
    //     the movie Caddyshack's cast property and save.
    //     console.log the updated movie.


    return Promise.all([ 
        Movie.findOne({title: 'Caddyshack'}), //grabs CaddyShack
        Performer.findOne({name: 'Bill Murray'}) // grabs Bill
        ]);
        }).then(function(result) {
            result[0].cast.push(result[1]); //pushes Bill into Cast on CaddyShack
            return result[0].save(); //saves new data
        }).then(function(result) {
            console.log('12):', result);
        }).then(function() {
            process.exit();
            
}).then(function() {
process.exit();
});