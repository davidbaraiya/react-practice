import React from "react";
import { Link } from "react-router-dom";

const Card = ({ propertyData }) => {
  const { id, name, surname, data } = propertyData;

  if (data && data.length > 0) {
    return (
      <div
        style={{
          marginBottom: "20px",
          maxWidth: "150px",
        }}
        key={id}
      >
        {data.map((e, i) => (
          <div
            style={{
              marginBottom: "20px",
              border: "1px solid #000",
              maxWidth: "150px",
            }}
            key={i}
          >
            <span>{e.subID}</span>
            <div>{e.name}</div>
            <div>{e.surname}</div>
            <Link className="btn btn-primary" to={`/View/${id}`}>
              view
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid #000",
        maxWidth: "150px",
      }}
      key={id}
    >
      <span>{id}</span>
      <div>{name}</div>
      <div>{surname}</div>
      <Link className="btn btn-primary" to={`/View/${name}`}>
        view
      </Link>
    </div>
  );
};

export default Card;
