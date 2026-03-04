import React, { useState } from "react";
import "../Css/style.css";

const gameData = [
  { name: "Turbo Spin Rush", category: "Turbo Games" },
  { name: "JetX Express", category: "Turbo Games" },
  { name: "Nitro Crash", category: "Turbo Games" },
  { name: "Speed Flip", category: "Turbo Games" },
  { name: "Boost Blaster", category: "Turbo Games" },
  { name: "Cherry Bombs", category: "Triple Cherry" },
  { name: "Super Reels", category: "Triple Cherry" },
  { name: "Fiesta Coins", category: "Triple Cherry" },
  { name: "Jokers Vault", category: "Triple Cherry" },
  { name: "Dracula Riches", category: "Triple Cherry" },
  { name: "Book of Amulet", category: "Mascot" },
  { name: "Riot Quest", category: "Mascot" },
  { name: "The Mythic Maiden", category: "Mascot" },
  { name: "Crystal Prince", category: "Mascot" },
  { name: "Haunted Money", category: "Mascot" },
  { name: "Aviator", category: "Spribe" },
  { name: "Mines", category: "Spribe" },
  { name: "HiLo", category: "Spribe" },
  { name: "Dice", category: "Spribe" },
  { name: "Plinko", category: "Spribe" },
  { name: "Dragon Tiger", category: "Dragon Soft" },
  { name: "Zombie Party", category: "Dragon Soft" },
  { name: "Crazy Hunter", category: "Dragon Soft" },
  { name: "Golden Legend", category: "Dragon Soft" },
  { name: "Mythical Treasure", category: "Dragon Soft" },
  { name: "Fortune Gems", category: "Jili Games" },
  { name: "Golden Empire", category: "Jili Games" },
  { name: "Lucky Ball", category: "Jili Games" },
  { name: "Boxing King", category: "Jili Games" },
  { name: "Jungle King", category: "Jili Games" },
  { name: "Lightning Roulette", category: "Evolution" },
  { name: "Crazy Time", category: "Evolution" },
  { name: "Monopoly Live", category: "Evolution" },
  { name: "Infinite Blackjack", category: "Evolution" },
  { name: "Dream Catcher", category: "Evolution" },
  { name: "Wild Cash", category: "Barbara Bang" },
  { name: "Juicy Fruits", category: "Barbara Bang" },
  { name: "Pirate's Legacy", category: "Barbara Bang" },
  { name: "Panda Warrior", category: "Barbara Bang" },
  { name: "Sevens Go Wild", category: "Barbara Bang" },
  { name: "Elvis Frog in Vegas", category: "B Gaming" },
  { name: "Lucky Dama Muerta", category: "B Gaming" },
  { name: "Aztec Magic Deluxe", category: "B Gaming" },
  { name: "Johnny Cash", category: "B Gaming" },
  { name: "Book of Cats", category: "B Gaming" },
];

const categories = [
  "Turbo Games",
  "Triple Cherry",
  "Mascot",
  "Spribe",
  "Dragon Soft",
  "Jili Games",
  "Evolution",
  "Barbara Bang",
  "B Gaming",
];

const Fantasy = () => {
  const [activeCategory, setActiveCategory] = useState("Turbo Games");

  const filteredGames = gameData.filter(
    (game) => game.category === activeCategory
  );

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Filter */}
        <div className="col-md-2 sidebar2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? "active" : ""}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="col-md-10">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
            {filteredGames.map((game) => {
              const imageFile = `/image/${game.name}.jpeg`;
              return (
                <div className="col" key={game.name}>
                  <div className="card text-center">
                    <img
                      src={imageFile}
                      className="card-img-top"
                      alt={game.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/image/default.jpg";
                      }}
                    />
                    <div className="card-body p-2">
                      <h6 className="card-title">{game.name}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fantasy;
