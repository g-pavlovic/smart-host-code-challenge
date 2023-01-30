import React, { ChangeEvent, useEffect, useMemo, useState } from "react";

import { useFetchGuestsAction, useGuestsState } from "../../hooks/redux";
import "./style.css";

function Home() {
  const fetchGuests = useFetchGuestsAction();

  useEffect(() => {
    fetchGuests();
  }, []);

  const guests = useGuestsState();
  const [rooms, setRooms] = useState({
    premium: 0,
    economy: 0
  });

  const handleChangeRooms = (field: "premium" | "economy", e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value || /^([0-9])+/.test(e.target.value)) {
      setRooms({
        ...rooms,
        [field]: e.target.value ? parseInt(e.target.value) : 0,
      });
    }
  };

  const results = useMemo<{
    usagePremiumRooms: number;
    premiumPrice: number;
    usageEconomyRooms: number;
    economyPrice: number;
  }>(() => {
    const lowPayingGuests = guests.filter((price) => price < 100).sort((a, b) => b - a);
    const highPayingGuests = guests.filter((price) => price >= 100).sort((a, b) => b - a);

    const premiumGuests = rooms.premium > highPayingGuests.length ? highPayingGuests : highPayingGuests.slice(0, rooms.premium);
    const economyGuests = rooms.economy > lowPayingGuests.length ? lowPayingGuests : lowPayingGuests.slice(0, rooms.economy)

    // upgrade
    if (premiumGuests.length < rooms.premium && lowPayingGuests.length > rooms.economy) {
      premiumGuests.push(lowPayingGuests[0]);
      if (economyGuests.length > 0) {
        economyGuests.push(lowPayingGuests[economyGuests.length]);
        economyGuests.shift();
      }
    }

    return {
      usagePremiumRooms: premiumGuests.length,
      premiumPrice: premiumGuests.reduce((total, price) => total + price, 0),
      usageEconomyRooms: economyGuests.length,
      economyPrice: economyGuests.reduce((total, price) => total + price, 0),
    };
  }, [rooms, guests]);

  return (
    <div className="page-container">
      <div className="form">
        <div className="form-field">
          <label>Free Premium Rooms:</label>
          <input value={rooms.premium} onChange={(e) => handleChangeRooms("premium", e)} type="text"/>
        </div>
        <div className="form-field">
          <label>Free Economy Rooms:</label>
          <input value={rooms.economy} onChange={(e) => handleChangeRooms("economy", e)} type="text"/>
        </div>
      </div>
      {!!results &&
      <div className="results">
        <p>Usage Premium: {results.usagePremiumRooms} (EUR {results.premiumPrice})</p>
        <p>Usage Economy: {results.usageEconomyRooms} (EUR {results.economyPrice})</p>
      </div>
      }
    </div>
  );
}

export default Home;
