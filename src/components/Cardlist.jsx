import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./style.css";

const Cardlist = ({ fetchTrigger }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fetchTrigger)
      setLoading(true);
      setTimeout(() => {
        fetch("https://reqres.in/api/users?page=1")
          .then((response) => response.json())
          .then((data) => {
            const dataArray = data.data;
            setUser(dataArray);
          });
      }, 2000);
        setLoading(false);
  }, [fetchTrigger]);

  return (
    <div className="Cardlist">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        user.map((user) => <Card key={user.id} user={user} />)
      )}
    </div>
  );
};

export default Cardlist;
