import React from "react";
import Card from "./Card";

const property = [
  {
    id: 1,
    name: "name 1",
    data: [
      {
        subID: 1,
        name: "sub name 1",
        surname: "sub Surname 1",
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
    name: "name 3",
    data: [
      {
        subID: 1,
        name: "sub Name 31",
        surname: "sub Surname 31",
      },
      {
        subID: 2,
        name: "sub name 32",
        surname: "sub Surname 32",
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

const DyanamicData = () => {
  return (
    <div>
      {property?.map((propertyData, i) => (
        <>
          <h2>{propertyData.name}</h2>
          <Card propertyData={propertyData} key={i} />
        </>
      ))}
    </div>
  );
};

export default DyanamicData;
