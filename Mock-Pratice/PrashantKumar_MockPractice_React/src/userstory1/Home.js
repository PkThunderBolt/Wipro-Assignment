import React, { useState } from "react";
import DestinationCard from "./components/DestinationCard";

const sample = [
  {
    id: 1,
    name: "Goa",
    price: 10000,
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=1200&h=700&s=1",
  },
  {
    id: 2,
    name: "Manali",
    price: 7000,
    img: "https://i.ytimg.com/vi/7NKk41YVWyA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDNPJFJDXtCyVjPDtzARd1lcUe_4Q",
  },
  {
    id: 3,
    name: "Andaman",
    price: 15000,
    img: "https://blog.untravel.com/wp-content/uploads/2018/10/Neil-Island-Andaman-and-Nicobar-DC135.jpg",
  },
  {
    id: 4,
    name: "Mysore",
    price: 5000,
    img: "https://content.r9cdn.net/rimg/dimg/43/2c/fe92dfc3-lm-48454-167a97bd72f.jpg?width=1200&height=630&xhint=1488&yhint=1244&crop=true",
  },
  {
    id: 5,
    name: "Kedarnath",
    price: 6000,
    img: "https://trippydia.com/wp-content/uploads/2021/01/15762198701.png",
  },
  {
    id: 6,
    name: "BodhGaya",
    price: 4000,
    img: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/12/shutterstock_402120757-1.webp",
  },
];

export default function Home() {
  const [wish, setWish] = useState([]);
  function toggleWish(id) {
    setWish((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }
  return (
    <div>
      <h4>Featured Destinations</h4>
      <div className="row">
        {sample.map((d) => (
          <div key={d.id} className="col-md-4 mb-3">
            <DestinationCard
              data={d}
              wished={wish.includes(d.id)}
              onToggle={() => toggleWish(d.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
