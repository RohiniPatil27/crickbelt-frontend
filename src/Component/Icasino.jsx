
import React, { useState, useEffect, useMemo } from "react";

const Icasino = () => {
  const cardGames = useMemo(()=>[
    {
            name: "Baccarat",
            image: "baccarat.png",
            link: "https://playpager.com/baccarat/",
            category: "baccarat",
          },
          {
            name: "Blackjack",
            image: "blackjack.jpeg",
            link: "https://www.247blackjack.com/",
            category: "blackjack",
          },
          {
            name: "Card",
            image: "card.png",
            link: "https://worldofcardgames.com/",
            category: "card",
          },
          {
            name: "Dragon Tiger",
            image: "Dragon Tiger.jpeg",
            link: "https://imaginelive.com/en/games/dragon-tiger",
            category: "dragon",
          },
          {
            name: "Poker",
            image: "Poker.png",
            link: "https://www.247freepoker.com/",
            category: "poker",
          },
          {
            name: "RNG Baccarat",
            image: "RNG Baccarat.jpeg",
            link: "https://games.evolution.com/first-person/first-person-baccarat/",
            category: "rng-baccarat",
          },
          
          {
            name: "Teen Patti",
            image: "Teen Patti.jpeg",
            link: "https://plays.org/game/teen-patti/",
            category: "teenpatti",
          },
          {
            name: "Three Card Poker",
            image: "Three Card Poker.jpeg",
            link: "https://www.table-games-online.com/3-card-poker/",
            category: "threecardpoker",
          },
          {
            name: "Ultimate Texas Hold'em",
            image: "Ultimate Texas Hold'em.jpeg",
            link: "https://www.table-games-online.com/ultimate-texas-holdem/",
            category: "ultimate-texas-holdem",
          },

          {
            name: "Texas Hold'em Bonus",
            image: "Texas Hold'em Bonus.jpeg",
            link: "games/texas-holdem-bonus.html",
            category: "poker",
          },
          {
            name: "Casino Hold'em",
            image: "Casino Hold'em.png",
            link: "games/casino-holdem.html",
            category: "poker",
          },
          {
            name: "Andar Bahar",
            image: "Andar Bahar.jpeg",
            link: "games/andar-bahar.html",
            category: "teenpatti",
          },
          {
            name: "Speed Baccarat",
            image: "Speed Baccarat.jpeg",
            link: "games/speed-baccarat.html",
            category: "baccarat",
          },
          {
            name: "Lightning Baccarat",
            image: "Lightning Baccarat.jpeg",
            link: "games/lightning-baccarat.html",
            category: "baccarat",
          },
          {
            name: "Classic Blackjack",
            image: "Classic Blackjack.jpeg",
            link: "games/classic-blackjack.html",
            category: "blackjack",
          },
          {
            name: "Live Poker Lobby",
            image: "Live Poker Lobby.jpeg",
            link: "games/live-poker-lobby.html",
            category: "poker",
          },

          {
            name: "Triple Card Poker",
            image: "Triple Card Poker.jpeg",
            link: "games/triple-card-poker.html",
            category: "poker",
          },
          {
            name: "Mini Baccarat",
            image: "Mini Baccarat.jpeg",
            link: "games/mini-baccarat.html",
            category: "baccarat",
          },
          {
            name: "Live Blackjack",
            image: "Live Blackjack.jpeg",
            link: "games/live-blackjack.html",
            category: "blackjack",
          },
          {
            name: "VIP Blackjack",
            image: "VIP Blackjack.jpeg",
            link: "games/vip-blackjack.html",
            category: "blackjack",
          },
          {
            name: "Baccarat Squeeze",
            image: "Baccarat Squeeze.jpeg",
            link: "games/baccarat-squeeze.html",
            category: "baccarat",
          },
          {
            name: "Power Blackjack",
            image: "Power Blackjack.jpeg",
            link: "games/power-blackjack.html",
            category: "blackjack",
          },
          {
            name: "Free Bet Blackjack",
            image: "Free Bet Blackjack.jpeg",
            link: "games/free-bet-blackjack.html",
            category: "blackjack",
          },
          {
            name: "Double Exposure Blackjack",
            image: "Double Exposure Blackjack.png",
            link: "games/double-exposure.html",
            category: "blackjack",
          },
          {
            name: "Live Andar Bahar",
            image: "Live Andar Bahar.jpeg",
            link: "games/live-andar-bahar.html",
            category: "teenpatti",
          },
          {
            name: "Speed Andar Bahar",
            image: "Speed Andar Bahar.jpeg",
            link: "games/speed-andar-bahar.html",
            category: "teenpatti",
          },
          {
            name: "Golden Wealth Baccarat",
            image: "Golden Wealth Baccarat.jpeg",
            link: "games/golden-wealth.html",
            category: "baccarat",
          },
          {
            name: "No Commission Baccarat",
            image: "No Commission Baccarat.jpeg",
            link: "games/no-commission.html",
            category: "baccarat",
          },
          {
            name: "Side Bet City",
            image: "Side Bet City.jpeg",
            link: "games/side-bet-city.html",
            category: "poker",
          },
          {
            name: "Caribbean Stud Poker",
            image: "Caribbean Stud Poker.jpeg",
            link: "games/caribbean-stud.html",
            category: "poker",
          },
          {
            name: "Ultimate Poker",
            image: "Ultimate Poker.jpeg",
            link: "games/ultimate-poker.html",
            category: "poker",
          },
          {
            name: "Super Sic Bo",
            image: "Super Sic Bo.png",
            link: "games/super-sic-bo.html",
            category: "card",
          },
          {
            name: "Dragon Bonus Baccarat",
            image: "Dragon Bonus Baccarat.png",
            link: "games/dragon-bonus.html",
            category: "baccarat",
          },
          {
            name: "Live Casino Poker",
            image: "Live Casino Poker.png ",
            link: "games/live-casino-poker.html",
            category: "poker",
          },
          {
            name: "Blackjack Party",
            image: "Blackjack Party.jpeg",
            link: "games/blackjack-party.html",
            category: "blackjack",
          },
          {
            name: "Live Texas Hold'em",
            image: "Live Texas Hold'em.jpeg",
            link: "games/live-texas-holdem.html",
            category: "poker",
          },
          {
            name: "Infinity Blackjack",
            image: "Infinity Blackjack.jpeg",
            link: "games/infinity-blackjack.html",
            category: "blackjack",
          },
          {
            name: "VIP Baccarat",
            image: "VIP Baccarat.jpeg",
            link: "games/vip-baccarat.html",
            category: "baccarat",
          },
          {
            name: "Salon Privé Blackjack",
            image: "Salon Privé Blackjack.jpeg",
            link: "games/salon-prive.html",
            category: "blackjack",
          },
          {
            name: "Salon Privé Baccarat",
            image: "Salon Privé Baccarat.jpeg",
            link: "games/salon-prive-baccarat.html",
            category: "baccarat",
          },
          {
            name: "Live Casino Hold'em",
            image: "Live Casino Hold'em.jpeg",
            link: "games/live-casino-holdem.html",
            category: "poker",
          },
  ],[]);

  const otherGames = useMemo(() => [
    { name: "Classic Slot", category: "slots" },
          { name: "Fruit Machine", category: "slots" },
          { name: "Vegas Spin", category: "slots" },
          { name: "Blackjack", category: "cards" },
          { name: "American Roulette", category: "roulette" },
          { name: "European Roulette", category: "roulette" },
          { name: "Dice Roller", category: "prediction" },
          { name: "Crash", category: "aviator" },
          { name: "Plinko", category: "prediction" },
          { name: "Wheel Spin", category: "wheel" },
          { name: "Lucky Spin", category: "slots" },
          { name: "Super 7s", category: "slots" },
          { name: "Mega Fruits", category: "slots" },
          { name: "Turbo Spin", category: "slots" },
          { name: "Jungle Slots", category: "slots" },
          { name: "Diamond Rush", category: "slots" },
          { name: "Fire Slots", category: "slots" },
          { name: "Mystery Reels", category: "slots" },
          { name: "Casino War", category: "cards" },
          { name: "Teen Patti", category: "teenpatti" },
          { name: "Andar Bahar", category: "andarbahar" },
          { name: "Hi-Lo", category: "cards" },
          { name: "Mini Roulette", category: "roulette" },
          { name: "Big Wheel", category: "wheel" },
          { name: "Heads or Tails", category: "prediction" },
          { name: "Money Drop", category: "wheel" },
          { name: "Triple Spin", category: "slots" },
          { name: "Royal Slots", category: "slots" },
          { name: "Ocean Spin", category: "slots" },
          { name: "Space Reels", category: "slots" },
          { name: "Magic Slot", category: "slots" },
          { name: "Gold Mine", category: "slots" },
          { name: "Dragon Spin", category: "dragon" },
          { name: "Ice Slots", category: "slots" },
          { name: "Fruit Fiesta", category: "slots" },
          { name: "Bonus Wheel", category: "wheel" },
          { name: "Roulette 3D", category: "roulette" },
    // Add more games...
  ],[]);

  const providerGames = useMemo(() => [
    { name: "Golden Empire", category: "JiliGames" },
          { name: "Super Ace", category: "JiliGames" },
          { name: "Jungle King", category: "JiliGames" },
          { name: "Lucky Ball", category: "JiliGames" },
          { name: "Fortune Gems", category: "JiliGames" },
          { name: "Crazy Hunter", category: "JiliGames" },
          { name: "Mega Fishing", category: "JiliGames" },
          { name: "Roma X", category: "JiliGames" },
          { name: "Dino Pop", category: "JiliGames" },
          { name: "Boxing King", category: "JiliGames" },
          { name: "Monkey Party", category: "JiliGames" },
          { name: "Pharaohs Treasure", category: "JiliGames" },
          { name: "Fortune Tree", category: "JiliGames" },
          { name: "Golden Bank", category: "JiliGames" },
          { name: "Ghost Buster", category: "JiliGames" },
          { name: "Charge Buffalo", category: "JiliGames" },
          { name: "Star Hunter", category: "JiliGames" },
          { name: "Boom Legend", category: "JiliGames" },
          { name: "Jungle Money", category: "JiliGames" },
          { name: "Lucky Dragon", category: "JiliGames" },
          { name: "Slot Master", category: "JiliGames" },
          { name: "Ancient Forest", category: "JiliGames" },
          { name: "Dragon Treasure", category: "JiliGames" },
          { name: "Panda Slots", category: "JiliGames" },
          { name: "Arctic World", category: "JiliGames" },
          { name: "Candy Blast", category: "JiliGames" },
          { name: "Twin Spin", category: "JiliGames" },
          { name: "Golden Pot", category: "JiliGames" },
          { name: "Lucky Fortunes", category: "JiliGames" },
          { name: "Super Bonus", category: "JiliGames" },
          { name: "Treasure Raider", category: "JiliGames" },
          { name: "Bubble Pop", category: "JiliGames" },
          { name: "Phoenix Fire", category: "JiliGames" },
          { name: "Samurai Gold", category: "JiliGames" },
          { name: "Wild Legend", category: "JiliGames" },
          { name: "Pirate King", category: "JiliGames" },
          { name: "Royal Fortune", category: "JiliGames" },
          { name: "Speed Rush", category: "JiliGames" },
          { name: "Battle Lion", category: "JiliGames" },
          { name: "Divine Forest", category: "JiliGames" },
          { name: "Money Miner", category: "JiliGames" },
          { name: "Sky Raider", category: "JiliGames" },
          { name: "Santa Slots", category: "JiliGames" },
          { name: "Fortune Panda", category: "JiliGames" },
          { name: "Rainbow Treasure", category: "JiliGames" },
          { name: "Fish Frenzy", category: "JiliGames" },
          { name: "Cash Volcano", category: "JiliGames" },
          { name: "Dino Clash", category: "JiliGames" },
          { name: "Crystal Spinner", category: "JiliGames" },
          { name: "King Blaster", category: "JiliGames" },
          { name: "Lucky Spin", category: "SuperlottoFast" },
          { name: "Super Jackpot", category: "SuperlottoFast" },
          { name: "Mega Fortune", category: "SuperlottoFast" },
          { name: "Gold Rush", category: "SuperlottoFast" },
          { name: "Fruit Jackpot", category: "SuperlottoFast" },
          { name: "Cash Bonanza", category: "SuperlottoFast" },
          { name: "Spin Blast", category: "SuperlottoFast" },
          { name: "Lucky Wheel", category: "SuperlottoFast" },
          { name: "Dream Draw", category: "SuperlottoFast" },
          { name: "Treasure Ball", category: "SuperlottoFast" },
          { name: "Big Spin", category: "SuperlottoFast" },
          { name: "Power Pick", category: "SuperlottoFast" },
          { name: "Lightning Win", category: "SuperlottoFast" },
          { name: "Diamond Draw", category: "SuperlottoFast" },
          { name: "Rainbow Balls", category: "SuperlottoFast" },
          { name: "Lucky Stars", category: "SuperlottoFast" },
          { name: "Fast Cash", category: "SuperlottoFast" },
          { name: "Wheel Mania", category: "SuperlottoFast" },
          { name: "Cash Storm", category: "SuperlottoFast" },
          { name: "Fire Ball", category: "SuperlottoFast" },
          { name: "Triple Shot", category: "SuperlottoFast" },
          { name: "Lotto Blaze", category: "SuperlottoFast" },
          { name: "Blitz Win", category: "SuperlottoFast" },
          { name: "Lucky Flash", category: "SuperlottoFast" },
          { name: "Ultra Pick", category: "SuperlottoFast" },
          // 🔸 Boldplay
          { name: "Boldplay Blaze", category: "Boldplay" },
          { name: "Boldplay Bonanza", category: "Boldplay" },
          { name: "Wild Gold Boldplay", category: "Boldplay" },
          { name: "Bold Fortune", category: "Boldplay" },
          { name: "Boldplay Rush", category: "Boldplay" },
          { name: "Fire Spin Boldplay", category: "Boldplay" },
          { name: "Treasure Run", category: "Boldplay" },
          { name: "Boldplay Jackpot", category: "Boldplay" },
          { name: "Vegas Luck", category: "Boldplay" },
          { name: "Boldplay Storm", category: "Boldplay" },

          // 🔸 Caleta
          { name: "Caleta Carnival", category: "Caleta" },
          { name: "Jungle Spin", category: "Caleta" },
          { name: "Fruit Master", category: "Caleta" },
          { name: "Rio Reels", category: "Caleta" },
          { name: "Treasure Caleta", category: "Caleta" },
          { name: "Gold Samba", category: "Caleta" },
          { name: "Caleta Classic", category: "Caleta" },
          { name: "Caleta Jackpot", category: "Caleta" },
          { name: "Lucky Brazil", category: "Caleta" },
          { name: "Fiesta Reels", category: "Caleta" },

          // 🔸 Playtech Ezugi  Supernova  RivalGames ConceptGaming
          { name: "Playtech Power", category: "Playtech" },
          { name: "Age of the Gods", category: "Playtech" },
          { name: "Gladiator Jackpot", category: "Playtech" },
          { name: "Buffalo Blitz", category: "Playtech" },
          { name: "Great Blue", category: "Playtech" },
          { name: "Kingdoms Rise", category: "Playtech" },
          { name: "Playtech Mega Spin", category: "Playtech" },
          { name: "Epic Ape", category: "Playtech" },
          { name: "Playtech Wilds", category: "Playtech" },

          // 🔸 Ezugi
          { name: "Ezugi Blackjack", category: "Ezugi" },
          { name: "Andar Bahar Live", category: "Ezugi" },
          { name: "Teen Patti Live", category: "Ezugi" },
          { name: "Ezugi Roulette", category: "Ezugi" },
          { name: "Dragon Tiger", category: "Ezugi" },
          { name: "Live Poker", category: "Ezugi" },
          { name: "Baccarat Live", category: "Ezugi" },
          { name: "Lucky 7", category: "Ezugi" },
          { name: "Dice Duel", category: "Ezugi" },
          { name: "32 Cards", category: "Ezugi" },

          // 🔸 Supernova
          { name: "Supernova Spin", category: "supernova" },
          { name: "Galaxy Win", category: "supernova" },
          { name: "Stellar Jackpot", category: "supernova" },
          { name: "Star Blaze", category: "supernova" },
          { name: "Meteor Reels", category: "supernova" },
          { name: "Supernova Rush", category: "supernova" },
          { name: "Nebula Fortune", category: "supernova" },
          { name: "Planet Power", category: "supernova" },
          { name: "Astro Luck", category: "supernova" },
          { name: "Comet Cash", category: "supernova" },

          // 🔸 RivalGames
          { name: "Rival Reels", category: "RivalGames" },
          { name: "Jackpot Rival", category: "RivalGames" },
          { name: "Gold Hunter", category: "RivalGames" },
          { name: "Fruit Rival", category: "RivalGames" },
          { name: "Cash Rival", category: "RivalGames" },
          { name: "Super Spin Rival", category: "RivalGames" },
          { name: "Rival Runner", category: "RivalGames" },
          { name: "Win Frenzy", category: "RivalGames" },

          // 🔸 ConceptGaming
          { name: "Concept Quest", category: "ConceptGaming" },
          { name: "CG Jackpot", category: "ConceptGaming" },
          { name: "Mystery Slots", category: "ConceptGaming" },
          { name: "Concept Wilds", category: "ConceptGaming" },
          { name: "Fire Slot CG", category: "ConceptGaming" },
          { name: "Ocean Rush CG", category: "ConceptGaming" },
          { name: "Gold Vault", category: "ConceptGaming" },
          { name: "Dragon Gold CG", category: "ConceptGaming" },
          { name: "Sky Spin", category: "ConceptGaming" },
          { name: "Treasure Trail", category: "ConceptGaming" },
          // Turbogames
          { name: "Crash X", category: "Turbogames" },
          { name: "Dice Turbo", category: "Turbogames" },
          { name: "Mines Turbo", category: "Turbogames" },
          { name: "Double Turbo", category: "Turbogames" },
          { name: "HiLo Turbo", category: "Turbogames" },
          { name: "Towers", category: "Turbogames" },
          { name: "Keno Turbo", category: "Turbogames" },
          { name: "Plinko Turbo", category: "Turbogames" },
          { name: "Wheel Turbo", category: "Turbogames" },
          { name: "Goal Turbo", category: "Turbogames" },

          // BGaming
          { name: "Elvis Frog in Vegas", category: "BGaming" },
          { name: "Bonanza Billion", category: "BGaming" },
          { name: "Aztec Magic Deluxe", category: "BGaming" },
          { name: "Lucky Lady Moon", category: "BGaming" },
          { name: "Mechanical Clover", category: "BGaming" },
          { name: "Penny Pelican", category: "BGaming" },
          { name: "Dig Dig Digger", category: "BGaming" },
          { name: "Wild Cash", category: "BGaming" },
          { name: "Aloha King Elvis", category: "BGaming" },
          { name: "Potion Spells", category: "BGaming" },

          // OneTouch
          { name: "Queen of the Seas", category: "OneTouch" },
          { name: "Flexing Dragons", category: "OneTouch" },
          { name: "Bubbles Bonanza", category: "OneTouch" },
          { name: "Lucky Lion", category: "OneTouch" },
          { name: "Wild Wild West 2120", category: "OneTouch" },
          { name: "Steam Vault", category: "OneTouch" },
          { name: "MVP Hoops", category: "OneTouch" },
          { name: "Fortune Miner", category: "OneTouch" },
          { name: "Tiki Terror", category: "OneTouch" },
          { name: "Grand Heist Feature Buy", category: "OneTouch" },
          { name: "The Wild Machine", category: "Dragoon Soft" },
          { name: "Golden Pig", category: "Dragoon Soft" },
          { name: "Phoenix Rises", category: "Dragoon Soft" },
          { name: "Mythical Sand", category: "Dragoon Soft" },
          { name: "Fortune God", category: "Dragoon Soft" },
          { name: "Crystal Fruits", category: "Dragoon Soft" },
          { name: "Three Lucky Stars", category: "Dragoon Soft" },
          { name: "Dragon Legend", category: "Dragoon Soft" },
          { name: "777 Mega Deluxe", category: "Dragoon Soft" },
          { name: "Zodiac", category: "Dragoon Soft" },
          { name: "Piggy Cash", category: "VibraGaming" },
          { name: "Carnaval Alegría", category: "VibraGaming" },
          { name: "Spin Jones", category: "VibraGaming" },
          { name: "Popeye Slots", category: "VibraGaming" },
          { name: "Condorito", category: "VibraGaming" },
          { name: "The Phantom", category: "VibraGaming" },
          { name: "Spin Island", category: "VibraGaming" },
          { name: "Clover Fantasy", category: "VibraGaming" },
          { name: "Wild Gems", category: "VibraGaming" },
          { name: "Mystic Jungle", category: "VibraGaming" },
          { name: "1 Million Megaways BC", category: "Iron Dog Studio" },
          { name: "Book of Loki", category: "Iron Dog Studio" },
          { name: "Pirate Kingdom Megaways", category: "Iron Dog Studio" },
          { name: "Solar Nova", category: "Iron Dog Studio" },
          { name: "Blood Queen", category: "Iron Dog Studio" },
          { name: "Cherry Blast", category: "Iron Dog Studio" },
          { name: "The Curious Cabinet", category: "Iron Dog Studio" },
          { name: "Viking Wilds", category: "Iron Dog Studio" },
          { name: "Crown of Avalon", category: "Iron Dog Studio" },
          { name: "Branded Megaways", category: "Iron Dog Studio" },
          { name: "Baccarat Classic", category: "HoGaming" },
          { name: "Roulette Live", category: "HoGaming" },
          { name: "Blackjack Live", category: "HoGaming" },
          { name: "Dragon Tiger", category: "HoGaming" },
          { name: "Sic Bo", category: "HoGaming" },
          { name: "Lucky 6", category: "HoGaming" },
          { name: "Money Wheel", category: "HoGaming" },
          { name: "Baccarat VIP", category: "HoGaming" },
          { name: "Multi-Seat Baccarat", category: "HoGaming" },
          { name: "European Roulette Pro", category: "HoGaming" },
          { name: "Riot", category: "Mascot" },
          { name: "The Myth", category: "Mascot" },
          { name: "The Book Beyond", category: "Mascot" },
          { name: "Fruit Vegas", category: "Mascot" },
          { name: "Bastet and Cats", category: "Mascot" },
          { name: "For the Realm!", category: "Mascot" },
          { name: "Three Corsairs", category: "Mascot" },
          { name: "Princess of Birds", category: "Mascot" },
          { name: "The Candy Shop", category: "Mascot" },
          { name: "Take Olympus", category: "Mascot" },
          { name: "Lucky Roulette", category: "Belatra Games" },
          { name: "Dragons Bonanza", category: "Belatra Games" },
          { name: "Book of Doom", category: "Belatra Games" },
          { name: "88 Lucky Fortunes", category: "Belatra Games" },
          { name: "Bank Robbers", category: "Belatra Games" },
          { name: "The Mummy", category: "Belatra Games" },
          { name: "7 Fruits", category: "Belatra Games" },
          { name: "Africa Gold", category: "Belatra Games" },
          { name: "Lucky Drink", category: "Belatra Games" },
          { name: "The Spanish Armada", category: "Belatra Games" },
          { name: "9 Lions", category: "Wazdan" },
          { name: "Magic Stars 3", category: "Wazdan" },
          { name: "Sun of Fortune", category: "Wazdan" },
          { name: "Dwarfs Fortune", category: "Wazdan" },
          { name: "Sizzling 777 Deluxe", category: "Wazdan" },
          { name: "Unicorn Reels", category: "Wazdan" },
          { name: "Fortune Reels", category: "Wazdan" },
          { name: "Reel Joke", category: "Wazdan" },
          { name: "Midnight Wilds", category: "Wazdan" },
          { name: "Wild West Gold", category: "MPlay" },
          { name: "Egyptian Riches", category: "MPlay" },
          { name: "Jungle Fever", category: "MPlay" },
          { name: "Candy World", category: "MPlay" },
          { name: "Dragon Empire", category: "MPlay" },
          { name: "Pirate Treasures", category: "MPlay" },
          { name: "Super Keno", category: "MPlay" },
          { name: "Lucky Spin", category: "MPlay" },
          { name: "Mermaid Kingdom", category: "MPlay" },
          { name: "Magic Dice", category: "MPlay" },
          { name: "Starburst", category: "NetEnt" },
          { name: "Gonzo's Quest", category: "NetEnt" },
          { name: "Twin Spin", category: "NetEnt" },
          { name: "Dead or Alive", category: "NetEnt" },
          { name: "Mega Fortune", category: "NetEnt" },
          { name: "Divine Fortune", category: "NetEnt" },
          { name: "Reel Rush", category: "NetEnt" },
          { name: "Jack and the Beanstalk", category: "NetEnt" },
          { name: "Fruit Shop", category: "NetEnt" },
          { name: "Blood Suckers", category: "NetEnt" },
          // ✅ Spribe
          { name: "Aviator", category: "Spribe" },
          { name: "Mines", category: "Spribe" },
          { name: "Dice", category: "Spribe" },
          { name: "Goal", category: "Spribe" },
          { name: "HiLo", category: "Spribe" },
          { name: "Plinko", category: "Spribe" },
          { name: "Keno", category: "Spribe" },
          { name: "Mini Roulette", category: "Spribe" },
          { name: "Hot Line", category: "Spribe" },
          { name: "Turbo Cards", category: "Spribe" },
          { name: "Lucky Panda", category: "TripleProfitsGames" },
          { name: "Egypt Magic", category: "TripleProfitsGames" },
          { name: "Fortune Miner", category: "TripleProfitsGames" },
          { name: "Triple Luck", category: "TripleProfitsGames" },
          { name: "Jungle Spin", category: "TripleProfitsGames" },
          { name: "Vegas Cashout", category: "TripleProfitsGames" },
          { name: "Mystic Totems", category: "TripleProfitsGames" },
          { name: "Magic Mirror", category: "TripleProfitsGames" },
          { name: "Pirate Gold", category: "TripleProfitsGames" },
          { name: "Reel Heroes", category: "TripleProfitsGames" },
          // ✅ BarbaraBang
          { name: "Juicy Fruits", category: "BarbaraBang" },
          { name: "Alien Fruits", category: "BarbaraBang" },
          { name: "Hot & Cash", category: "BarbaraBang" },
          { name: "Wild Cashout", category: "BarbaraBang" },
          { name: "Dragon Reels", category: "BarbaraBang" },
          { name: "Multiplier Mayhem", category: "BarbaraBang" },
          { name: "Reel Stars", category: "BarbaraBang" },
          { name: "Ancient Riches", category: "BarbaraBang" },
          { name: "Banana Bonanza", category: "BarbaraBang" },
          { name: "Queen of Ice", category: "BarbaraBang" },

          // ✅ EurasianGamingBingo
          { name: "Classic Bingo", category: "EurasianGamingBingo" },
          { name: "Bingo 75", category: "EurasianGamingBingo" },
          { name: "Fast Ball", category: "EurasianGamingBingo" },
          { name: "Rainbow Bingo", category: "EurasianGamingBingo" },
          { name: "Keno Bingo", category: "EurasianGamingBingo" },
          { name: "Super Balls", category: "EurasianGamingBingo" },
          { name: "Mega Pattern", category: "EurasianGamingBingo" },
          { name: "Lucky Draw Bingo", category: "EurasianGamingBingo" },
          { name: "Gold Rush Bingo", category: "EurasianGamingBingo" },
          { name: "Wild Numbers", category: "EurasianGamingBingo" },

          // ✅ TripleCherry
          { name: "Book of Treasures", category: "TripleCherry" },
          { name: "Mega Chef", category: "TripleCherry" },
          { name: "Jokers Kingdom", category: "TripleCherry" },
          { name: "Saint Fermin", category: "TripleCherry" },
          { name: "Thunder Rock", category: "TripleCherry" },
          { name: "Starfall Mission", category: "TripleCherry" },
          { name: "Carnaval do Rio", category: "TripleCherry" },
          { name: "Monsters Fear Bullets", category: "TripleCherry" },
          { name: "God of Sea", category: "TripleCherry" },
          { name: "Red Queen", category: "TripleCherry" },

          // ✅ Betsolutions
          { name: "Zeppelin", category: "Betsolutions" },
          { name: "Dice Duel", category: "Betsolutions" },
          { name: "Minesweeper", category: "Betsolutions" },
          { name: "Virtual Crash", category: "Betsolutions" },
          { name: "Virtual Penalty", category: "Betsolutions" },
          { name: "Fast Crash", category: "Betsolutions" },
          { name: "Lucky Toss", category: "Betsolutions" },
          { name: "Crypto Runner", category: "Betsolutions" },
          { name: "Goal Challenge", category: "Betsolutions" },
          { name: "Hot Mines", category: "Betsolutions" },
  ],[]);

 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [gameList, setGameList] = useState([]);

  const categories = ["Play Games", ...new Set(providerGames.map((g) => g.category))];

useEffect(() => {
  if (!selectedCategory || selectedCategory === "Play Games") {
    setGameList([...cardGames, ...otherGames, ...providerGames]);
  } else {
    setGameList([
      ...cardGames.filter((g) => g.category === selectedCategory),
      ...otherGames.filter((g) => g.category === selectedCategory),
      ...providerGames.filter((g) => g.category === selectedCategory),
    ]);
  }
}, [selectedCategory, cardGames, otherGames, providerGames]);



  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Sidebar */}
          
       <div className="col-md-2 sidebar1 p-3" style={{ backgroundColor: "#ffd700" }}>

          {categories.map((cat, index) => (
            // ✅ Fix: Use <button> instead of <a> for accessibility
            <button
              key={index}
              className={`d-block mb-2 text-decoration-none ${
                selectedCategory === cat ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="col-md-10 ps-3">
          {/* Filter Buttons */}
         <div className="d-flex gap-4 flex-wrap my-3" style={{ color: '#ffce00' }}>


            {[
              "baccarat",
              "blackjack",
              "card",
              "poker",
              "teenpatti",
              "RNG Baccarat",
            ].map((cat) => (
              <button
                key={cat}
                className={`btn btn-outline-primary ${
                  selectedCategory === cat ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Game Grid */}
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 mt-3">
            {gameList.length > 0 ? (
              gameList.map((game, idx) => (
                <div className="col" key={idx}>
                  <a
                    href={game.link || "#"}
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card text-center h-100">
                      <img
                        src={`/image/${encodeURIComponent(game.name)}.jpeg`}
                        alt={game.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/image/placeholder.jpg";
                        }}
                        className="card-img-top"
                      />
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <div className="text-muted">No games found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icasino;