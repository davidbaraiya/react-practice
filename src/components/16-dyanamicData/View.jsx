import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const property = [
  {
    id: 1,
    data: [
      {
        subID: 1,
        name: "Name 1",
        surname: "Surname 1",
      },
      {
        subID: 2,
        name: "sub name 2",
        surname: "sub Surname 2",
      },
    ],
  },
  {
    id: 2,
    name: "Name 2",
    surname: "Surname 2",
  },
  {
    id: 3,
    data: [
      {
        subID: 1,
        name: "Name 1",
        surname: "Surname 1",
      },
      {
        subID: 2,
        name: "sub name 2",
        surname: "sub Surname 2",
      },
    ],
  },
  {
    id: 4,
    name: "Name 4",
    surname: "Surname 4",
  },
  {
    id: 5,
    name: "Name 5",
    surname: "Surname 5",
  },
];

const View = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (property.data) {
      const filteredData = property.data.find((e) => e.subID === parseInt(id));
      setUser(filteredData || null);
    }
    const filteredData = property.find((e) => e.id === parseInt(id));
    setUser(filteredData || null);
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const { name, surname } = user;

  return (
    <div style={{ marginBottom: "20px" }}>
      <span>{id}</span>
      <div>{name}</div>
      <div>{surname}</div>
    </div>
  );
};

export default View;
