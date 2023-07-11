import React, { useEffect, useState } from "react";

const base_url = "https://fir-9f1b5-default-rtdb.firebaseio.com/add.json";

const UploadFile = () => {
  const [name, setName] = useState("");
  const [avtar, setAvtar] = useState(null);

  const handleInputChange = (e) => {
    setName(e.target.value);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(base_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      console.log(res);

      if (res.ok) {
        alert("Success");
      } else {
        console.log("Failed:", res.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-3">
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <input type="file" onChange={handleInputChange} />
      </div>
      <button
        className="btn btn-info ms-3"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <img src={avtar} alt="" />
    </div>
  );
};

export default UploadFile;
