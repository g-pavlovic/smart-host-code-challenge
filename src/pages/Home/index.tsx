import React, { useEffect, useState } from "react";

import { useFetchGuestsAction, useGuestsState } from "../../hooks/redux";
import "./style.css";

function Home() {
  const fetchGuests = useFetchGuestsAction();

  useEffect(() => {
    fetchGuests();
  }, []);

  const guest = useGuestsState();
  console.log(guest);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
