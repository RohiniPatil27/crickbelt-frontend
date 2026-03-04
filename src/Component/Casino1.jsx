import React from 'react';

const games = [
  { name: "Aviator", img: "img/Aviator.jpeg" },
  { name: "Stock Market", img: "img/Stock.jpeg" },
  { name: "Color Prediction", img: "img/Color Prediction.jpeg" },
  { name: "Cricket War", img: "img/cricket war.jpeg" },
  { name: "Andar Bahar", img: "img/andar bahar.jpeg" },
  { name: "Andar Bahar Classic", img: "img/andar bahar classic.jpeg" },
  { name: "Auto-Roulette", img: "img/auto roulette.jpeg" },
  { name: "Auto-Roulette VIP", img: "img/vip.jpeg" },
  { name: "Baccarat CA4", img: "img/baccarat.jpeg" },
  { name: "Bet on Teen Patti", img: "img/bet on 3 patti.jpeg" },
  { name: "Blackjack Salon Privé", img: "img/salon prive.jpeg" },
  { name: "32 Cards", img: "img/cards.jpeg" },
  { name: "32 Cards (2)", img: "img/32 Cards.avif" },
  { name: "Casino Hold’em", img: "img/Casino Holdem.jpeg" },
  { name: "Classic Andar Bahar", img: "img/andar bahar classic.jpeg" },
  { name: "Diamond Roulette", img: "img/Diamond Roulette.jpeg" },
  { name: "Double Ball Roulette", img: "img/Diamond Roulette.jpeg" },
  { name: "Dragon and Tiger 2.0", img: "img/Dragon and Tiger 2.0.jpeg" },
  { name: "Dragon Tiger", img: "img/Dragon Tiger.jpeg" },
  { name: "Dragon Tiger DA Sorte", img: "img/Dragon Tiger DA Sorte.jpeg" },
  { name: "European Roulette", img: "img/European Roulette.jpeg" },
  { name: "First Person Dragon Tiger", img: "img/First Person Dragon Tiger.jpeg" },
  { name: "Football Studio", img: "img/Football Studio.jpeg" },
  { name: "Goa Andar Bahar", img: "img/Goa Andar Bahar.jpeg" },
  { name: "Hindi Speed Baccarat", img: "img/Hindi Speed Baccarat.jpeg" },
  { name: "Lightning Dragon Tiger", img: "img/Lightning Dragon Tiger.jpeg" },
  { name: "Lightning Sic Bo", img: "img/Lightning Sic Bo.jpeg" },
  { name: "Live Teen Patti", img: "img/Live Teen Patti.jpeg" },
  { name: "Lucky 7", img: "img/Lucky 7.jpeg" },
  { name: "Lucky Roulette", img: "img/Lucky Roulette.jpeg" },
  { name: "No Commission Baccarat", img: "img/No Commission Baccarat.jpeg" },
  { name: "One Day Teen Patti", img: "img/One Day Teen Patti.jpeg" },
  { name: "Pilot", img: "img/Pilot.jpeg" },
  { name: "Pilot Cup", img: "img/pilotcup.jpeg" },
  { name: "Poker", img: "img/Poker.jpeg" },
  { name: "RNG Casino Queen 2020", img: "img/Casino Holdem.jpeg" },
  { name: "RNG Casino Queen", img: "img/RNG Casino Queen 2020.jpeg" },
  { name: "RNG Cricket 2020", img: "img/RNG Casino Queen.jpeg" },
];

const Casino1 = () => {
  return (
    <div className="container py-4">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
        {games.map((game, idx) => (
          <div className="col" key={idx}>
            <div className="card text-center game-card">
              <img src={game.img} className="card-img-top" alt={game.name} />
              <div className="game-title-overlay">
  {game.name}


</div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Casino1;
