import React from "react";

const Display = (props) => {
  const { places } = props;

  const loaded = () => (
    <div style={{ textAlign: "center" }}>
      {places.map((place) => (
        <article>
          <img src={place.img} alt={place.name}/>
          <h1>{place.name}</h1>
          <h3>{place.description}</h3>
          <button onClick={() => {
            props.selectPlace(place)
            props.history.push("/edit")
          }}>Edit</button>
          <button onClick={() => {
            props.deletePlace(place)
          }}>Delete</button>
        </article>
      ))}
    </div>
  );

  const loading = <h1>Loading...</h1>

  return places.length > 0 ? loaded() : loading;
};

export default Display;