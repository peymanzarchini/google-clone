"use client";

import { useEffect, useState } from "react";

function ShowCountry() {
  const [country, setCountry] = useState("United States");
  useEffect(() => {
    fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setCountry(data.country_name));
  }, []);
  return (
    <>
      <h1>{country}</h1>
    </>
  );
}

export default ShowCountry;
