// Component/VirtualContent.jsx
import React, { useState } from "react";

const games = [
  { name: "Nova Rush", category: "Supernova" },
  { name: "Stellar Spin", category: "Supernova" },
  { name: "Supernova Blaze", category: "Supernova" },
  { name: "Gravity Gold", category: "Supernova" },
  { name: "Cosmic Coins", category: "Supernova" },
  { name: "Lotto Mania", category: "SuperlottoFast" },
  { name: "Fast Pick 5", category: "SuperlottoFast" },
  { name: "Lucky Draw Pro", category: "SuperlottoFast" },
  { name: "Mega Lotto Live", category: "SuperlottoFast" },
  { name: "Keno Express", category: "SuperlottoFast" },
  { name: "Caesar's Empire", category: "RTG Slots" },
  { name: "Bubble Bubble 2", category: "RTG Slots" },
  { name: "Cash Bandits 3", category: "RTG Slots" },
  { name: "Achilles Deluxe", category: "RTG Slots" },
  { name: "Treasure Island", category: "Espressogames" },
  { name: "Amun Ra Legacy", category: "Espressogames" },
  { name: "Lucky 7s", category: "Espressogames" },
  { name: "Gold Race", category: "Espressogames" },
  { name: "Sweet Candy", category: "Espressogames" },
  { name: "Live Blackjack", category: "Ezugi" },
  { name: "Live Roulette", category: "Ezugi" },
  { name: "Andar Bahar", category: "Ezugi" },
  { name: "Teen Patti Live", category: "Ezugi" },
  { name: "Baccarat Live", category: "Ezugi" },
];

const categories = ["Supernova", "SuperlottoFast", "RTG Slots", "Espressogames", "Ezugi"];

const VirtualContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Supernova");

  const filteredGames = games.filter(game => game.category === selectedCategory);

  return (
    <div className="container py-4">
      <div className="row">
        {/* Sidebar filter */}
        <div className="col-md-2 sidebar3">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="col-md-10">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
            {filteredGames.map((game) => (
              <div className="col" key={game.name}>
                <div className="card text-center">
                  <img
                    src={`image/${game.name}.jpeg`}
                    className="card-img-top"
                    alt={game.name}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title">{game.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualContent;
