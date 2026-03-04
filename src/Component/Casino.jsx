import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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


const CasinoPage = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="col-md-14 p-0">
      
    {/* Match Highlights - scrollable on mobile */}
<div className="match-highlights bg-white d-flex flex-nowrap overflow-auto gap-2 p-2 ps-3 border-bottom">
  <button className="btn btn-dark btn-sm flex-shrink-0">🏴 Timor-Leste v Republic of Maldives</button>
  <button className="btn btn-dark btn-sm flex-shrink-0">👤 Jia-Jing Lu v Fangzhou Liu</button>
  <button className="btn btn-dark btn-sm flex-shrink-0">👤 No Noha Akugue v Sharma</button>
  <button className="btn btn-dark btn-sm flex-shrink-0">👤 Ni Alvarez Varona v Henri Squire</button>
  <button className="btn btn-dark btn-sm flex-shrink-0">👤 Mir Bulgari v Fed Urgesi</button>
</div>

{/* Category Tabs - scrollable on mobile */}
<div className="category-tabs bg-light d-flex flex-nowrap overflow-auto p-2 ps-3 border-bottom" id="category-tabs">
  <Link to="/home" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/home') ? 'btn-dark' : 'btn-outline-dark'}`}>In-play</Link>
  <Link to="/cricket" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/cricket') ? 'btn-dark' : 'btn-outline-dark'}`}>Cricket</Link>
  <Link to="/tennis" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/tennis') ? 'btn-dark' : 'btn-outline-dark'}`}>Tennis</Link>
  <Link to="/soccer" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/soccer') ? 'btn-dark' : 'btn-outline-dark'}`}>Soccer</Link>
  <Link to="/horse" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/horse') ? 'btn-dark' : 'btn-outline-dark'}`}>Horse Race</Link>
  <Link to="/greyhound" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/greyhound') ? 'btn-dark' : 'btn-outline-dark'}`}>Greyhound</Link>
  <Link to="/politics" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/politics') ? 'btn-dark' : 'btn-outline-dark'}`}>Politics</Link>
  <Link to="/menucasino" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/menucasino') ? 'btn-dark' : 'btn-outline-dark'}`}>Casino</Link>
  <Link to="/icasino" className={`btn btn-sm me-2 flex-shrink-0 ${isActive('/icasino') ? 'btn-dark' : 'btn-outline-dark'}`}>ICasino</Link>
</div>


      {/* Games Grid */}
      <div className="container py-4">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3">
          {games.map((game, idx) => (
            <div className="col" key={idx}>
              <div className="card text-center game-card h-100">
  <img src={game.img} className="card-img-top" alt={game.name} />
  <div className="game-title-overlay p-1">
    <h6 className="card-title m-0 text-truncate small" title={game.name}>
      {game.name}
    </h6>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CasinoPage;
