import React from 'react'
import seriesData from "../src/api/seriesData.json"
import SeriesCard from './SeriesCard';

const NetflixSeries = () => {

  // let age = 23;

  // const returnGenre = () => {
  //   const genre = "Romantic & Comady"
  //   return genre;
  // };

  // const canWatch = () => {
  //   if (age >= 18) return "Watch Now";
  //   return "Not Available";
  // };

  // const students = [0];
  // if(age < 18){
  //   return (
  //     <div style={{height:'100vh'}}>
  //     <div>
  //     <img src='poster.webp' alt='poster.webp' width="40%" height="60%"/>
  //     </div>
  //     <h2>Name: {name}</h2>
  //     <h3>Rating: {rating}</h3>
  //     <p>Summary:The story revolves around Hong Hae-in, <br/>
  //       a third-generation chaebol heiress of the Queens Group, <br/>
  //       and Baek Hyun-woo, the son of farmers from Yongdu-ri.</p>
  //       <p>Genre: {returnGenre()}</p>
  //       <button>Not Available</button>
  //   </div>
  //   );
  // }

  return (
    <ul className='grid grid-three-cols'>
      {
        seriesData.map((curElem) => {
          return (
            <SeriesCard  key={curElem.id} curElem={curElem} />
          );
        })
      }
    </ul>
  );
};

export default NetflixSeries;

// export const Footer = () => {
//    return(
//     <p>Copy Right</p>
//    )
// }