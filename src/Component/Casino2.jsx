import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Css/style.css";





const gamesData = [
  { name: "Aviator", image: "Aviator.jpeg", category: "aviator" },
  { name: "Stock Market", image: "Stock.jpeg", category: "stock" },
  { name: "Color Prediction", image: "Color Prediction.jpeg", category: "color" },
  { name: "Cricket War", image: "cricket war.jpeg", category: "cricket" },
  { name: "Andar Bahar", image: "andar bahar.jpeg", category: "andarbahar" },
  { name: "Andar Bahar Classic", image: "andar bahar classic.jpeg", category: "andarbahar" },
  { name: "Auto-Roulette", image: "auto roulette.jpeg", category: "roulette" },
  { name: "Auto-Roulette VIP", image: "vip.jpeg", category: "roulette" },
  { name: "Baccarat CA4", image: "baccarat.jpeg", category: "baccarat" },
  { name: "Bet on Teen Patti", image: "bet on 3 patti.jpeg", category: "teenpatti" },
  { name: "Blackjack Salon Privé", image: "salon prive.jpeg", category: "cards" },
  { name: "32 Cards", image: "cards.jpeg", category: "cards" },
  { name: "32 Cards (2)", image: "32 Cards.avif", category: "cards" },
  { name: "Casino Hold’em", image: "Casino Holdem.jpeg", category: "casino" },
  { name: "Classic Andar Bahar", image: "andar bahar classic.jpeg", category: "andarbahar" },
  { name: "Diamond Roulette", image: "Diamond Roulette.jpeg", category: "roulette" },
  { name: "Double Ball Roulette", image: "Double Ball Roulette.jpeg", category: "roulette" },
  { name: "Dragon and Tiger 2.0", image: "Dragon and Tiger 2.0.jpeg", category: "dragon" },
  { name: "Dragon Tiger", image: "Dragon Tiger.jpeg", category: "dragon" },
  { name: "Dragon Tiger DA Sorte", image: "Dragon Tiger DA Sorte.jpeg", category: "dragon" },
  { name: "European Roulette", image: "European Roulette.jpeg", category: "roulette" },
  { name: "First Person Dragon Tiger", image: "First Person Dragon Tiger.jpeg", category: "dragon" },
  { name: "Football Studio", image: "Football Studio.jpeg", category: "cards" },
  { name: "Goa Andar Bahar", image: "Goa Andar Bahar.jpeg", category: "andarbahar" },
  { name: "Hindi Speed Baccarat", image: "Hindi Speed Baccarat.jpeg", category: "baccarat" },
  { name: "Lightning Dragon Tiger", image: "Lightning Dragon Tiger.jpeg", category: "dragon" },
  { name: "Lightning Sic Bo", image: "Lightning Sic Bo.jpeg", category: "casino" },
  { name: "Live Teen Patti", image: "Live Teen Patti.jpeg", category: "teenpatti" },
  { name: "Lucky 7", image: "Lucky 7.jpeg", category: "cards" },
  { name: "Lucky Roulette", image: "Lucky Roulette.jpeg", category: "roulette" },
  { name: "No Commission Baccarat", image: "No Commission Baccarat.jpeg", category: "baccarat" },
  { name: "One Day Teen Patti", image: "One Day Teen Patti.jpeg", category: "teenpatti" },
  { name: "Pilot", image: "Pilot.jpeg", category: "aviator" },
  { name: "Pilot Cup", image: "pilotcup.jpeg", category: "aviator" },
  { name: "Poker", image: "Poker.jpeg", category: "cards" },
  { name: "RNG Casino Queen 2020", image: "Casino Holdem.jpeg", category: "casino" },
  { name: "RNG Casino Queen", image: "RNG Casino Queen 2020.jpeg", category: "casino" },
  { name: "RNG Cricket 2020", image: "RNG Casino Queen.jpeg", category: "cricket" },
];

const categories = [
  "",
  "aviator",
  "color",
  "cricket",
  "andarbahar",
  "roulette",
  "cards",
  "dragon",
  "casino",
  "teenpatti",
  "baccarat",
];

const Casino2 = () => {
  const [filter, setFilter] = useState("");

  const filteredGames = gamesData.filter((game) =>
    filter === "" ? true : game.category === filter
  );

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 sidebar1 p-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn btn-link d-flex justify-content-center align-items-center py-2 w-100 ${filter === cat ? "active" : ""}`}

              onClick={() => setFilter(cat)}
            >
              {cat === "" ? "All Casino" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Games */}
        <div className="col-md-10 py-4">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
            {filteredGames.map((game, idx) => (
              <div className="col" key={idx}>
                <div className="card text-center">
                  <img
                    src={`img/${game.image}`}
                    className="card-img-top"
                    alt={game.name}
                  />
                  <div className="card-body p-2">
                    <h3 className="card-title m-0">{game.name}</h3>
                  </div>
                </div>
              </div>  
            ))}
            {filteredGames.length === 0 && (
              <div className="col-12 text-center">
                <p>No games found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino2; 