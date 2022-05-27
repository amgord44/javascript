
    const movies =[{
    title: 'The GodFather: Part II',
    date: '1974',
    rating: 'R',
    length:'202 min',
    synopsis:'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.'
},
{

    title: '2001: A Space Odyssey',
    date: '1968',
    rating: 'G',
    length:'149 min',
    synopsis:'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.'
},
{

    title: ' E.T. the Extra-Terrestrial',
    date: '1982',
    rating: 'G',
    length:'115 min',
    synopsis:'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.'
},
{

    title: ' The Shawshank Redemption',
    date: '1994',
    rating: 'R',
    length:'142 min',
    synopsis:'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
},
{

    title: 'Star Wars',
    date: '1977',
    rating: 'PG',
    length:'121 min',
    synopsis:'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empires world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.'

},
{
    title: 'West Side Story',
    date: '1961',
    rating: 'R',
    length:'153 min',
    synopsis:'Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.'

},
{
    title: '12 Angry Men',
    date: '1957',
    rating: 'R',
    length:'96 min',
    synopsis:'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.'

},
{ 
    title: 'The Sound of Music',
    date: '1965',
    rating: 'G',
    length:'172 min',
    synopsis:'A young novitiate is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.'

},
{
    title: 'Forrest Gump',
    date: '1994',
    rating: 'PG-13',
    length:'142min',
    synopsis:'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.'
},
{
    title: 'Sunset Blvd',
    date: '1950',
    rating: 'R',
    length:'110 min',
    synopsis:'A screenwriter develops a dangerous relationship with a faded film star determined to make a triumphant return.'

}
]
//const year = movies.filter(e => e.date.includes('1950'));
//console.log(year);

/*movies.forEach((e) => {
    console.log(`${e.title} ${e.date}`);*/

/*let year = movies.filter(year => movies.date === 1950);
console.log(year)*/


//console.log(movies);
/*for(let i = 0; i < movies.length; i++) {
if(movies[i].date === 1950){*/
   // console.log(moveYear);


   function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
const button = document.getElementById('btnContainer');
const btns = btnContainer.getElementsByClassName(".btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      let current = document.getElementsByClassName(" btn active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
}


