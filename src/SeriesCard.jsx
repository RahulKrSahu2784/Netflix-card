import React from 'react'
import styled from 'styled-components'
const SeriesCard = (props) => {

  const { img_url, name, rating, description, cast, genre, watch_url } = props.curElem;

  // ------------styled components using style object----------------
  // const rahulStyle = styled.button({
  //   padding:"1.2rem 2.4rem",
  //   border:"none",
  //   fontSize:"1.6rem",
  //   backgroundColor:`${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color:"var(--btn-color)",
  //   fontWeight:"bold",
  //   cursor:"pointer"
  // });

  // ------------styled components using Template literals-------------
  const RahulStyle = styled.button`
      padding:1.2rem 2.4rem;
      border:none;
      font-size:1.6rem;
      background-color:${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
      color:var(--btn-color);
      font-weight:bold;
      cursor:pointer;
    `;

  const Styleh3 = styled.h3`
    font-size: 1.6rem;
    color:red;
    text-transform: capitalize;
    `;

  const ratingClass = rating >= 8.5 ? "super_hit" : "average";
  return (
    <li className='card'>
      <div>
        <img src={img_url} alt={name} width="40%" height="60%" />
      </div>
      <div className='card-content'>
        <h2>Name: {name}</h2>
        <Styleh3>Rating: <span className={`rating ${ratingClass}`}> {rating} </span></Styleh3>
        <p>Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="blank">
          <RahulStyle>Watch Now</RahulStyle>
        </a>
      </div>
      {/* <button>{age < 18 ? "Not Available" : "Watch Now"}</button> */}
      {/* <p>{students.length && "No students found"}</p> */}
      {/* First solution */}
      {/* <p>{students.length === 0 && "No students found"}</p> */}
      {/* <p>Number of Students: {students.length}</p> */}
    </li>
  )
}

export default SeriesCard