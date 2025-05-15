// import React from 'react'
// import NetFlix from './Cards'
// function App() {
//   return (
//     <div>
//     <NetFlix Images={'/Images/Lucifer.jpg'} name = "Lucifer" rating = "8.0" genre = "Thriller/Action/Drama" summary="A political Godfather suddenly dies and many wish to take his place and gain his power; thieves begin to dress up as politicians to claim their stake, while one name gradually emerges to be the true replacement."/>
//     <NetFlix Images={'/Images/SquidGame.jpg'} name = "Squid Games" rating = "7.5" genre = "Action/Drama" summary="Squid Game is a South Korean survival thriller series on Netflix where 456 desperate individuals compete in deadly children's games for a massive prize."/>
//     <NetFlix Images={'/Images/StrangerThings.jpg'} name = "Stranger Things" rating = "8.2" genre = "Action/Sci-fi" summary="The Netflix sci-fi horror series Stranger Things follows a group of young friends in 1980s Indiana who unravel a series of mysteries involving supernatural forces and secret government experiments"/>
//     <NetFlix Images={'/Images/TheWitcher.avif'} name = "The Witcher" rating = "9.5" genre = "Horror/Adventure" summary="Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts." />
//     </div>
//   )
// }

// export default App

import React from 'react';
import NetflixSeries from './NetflixSeries';
import "./Netflix.css"

function App() {
  return (
    <section className="container">
      <h1 className="text-3xl font-bold underline">Rahul</h1>
      <h1 className='card-heading'>List of best NetFlix Series</h1>
        <NetflixSeries />
    </section>
  );
};

export default App;
