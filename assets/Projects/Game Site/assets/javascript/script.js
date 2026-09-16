const games = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg",
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamour and body modification.",
        rating: 4.2,
        genre: "RPG, Action, Open World",
        developer: "CD Projekt RED",
        releaseYear: 2020,
        reviews: 125000
    },
    {
        id: 2,
        title: "The Witcher 3",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/capsule_616x353.jpg",
        description: "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game set in a visually stunning fantasy universe full of meaningful choices and impactful consequences.",
        rating: 4.8,
        genre: "RPG, Fantasy, Open World",
        developer: "CD Projekt RED",
        releaseYear: 2015,
        reviews: 89000
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        price: 49.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/capsule_616x353.jpg",
        description: "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is an epic tale of life in America's unforgiving heartland.",
        rating: 4.9,
        genre: "Action, Adventure, Open World",
        developer: "Rockstar Games",
        releaseYear: 2018,
        reviews: 156000
    },
    {
        id: 4,
        title: "Grand Theft Auto V",
        price: 29.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/271590/capsule_616x353.jpg",
        description: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond.",
        rating: 4.6,
        genre: "Action, Open World, Multiplayer",
        developer: "Rockstar Games",
        releaseYear: 2015,
        reviews: 234000
    },
    {
        id: 5,
        title: "Minecraft",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/10/capsule_616x353.jpg",
        description: "Minecraft is a game about placing blocks and going on adventures. Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles.",
        rating: 4.7,
        genre: "Sandbox, Survival, Building",
        developer: "Mojang",
        releaseYear: 2011,
        reviews: 345000
    },
    {
        id: 6,
        title: "Fortnite",
        price: 0.00,
        image: "https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg",
        description: "Fortnite is a free-to-play battle royale game with a massive 100-player cross-play mode. Team up with friends or go solo in this fast-paced, action-packed game.",
        rating: 4.1,
        genre: "Battle Royale, Action, Multiplayer",
        developer: "Epic Games",
        releaseYear: 2017,
        reviews: 456000
    },
    {
        id: 7,
        title: "Call of Duty: Warzone",
        price: 0.00,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1962663/capsule_616x353.jpg",
        description: "Call of Duty: Warzone is a free-to-play battle royale game that drops you into massive combat zones with up to 150 players.",
        rating: 4.0,
        genre: "Battle Royale, FPS, Multiplayer",
        developer: "Activision",
        releaseYear: 2020,
        reviews: 278000
    },
    {
        id: 8,
        title: "Among Us",
        price: 4.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/capsule_616x353.jpg",
        description: "Play online or over local WiFi with 4-15 players as you attempt to prep your spaceship for departure, but beware as one will be an impostor bent on killing everyone!",
        rating: 4.3,
        genre: "Social Deduction, Multiplayer",
        developer: "InnerSloth",
        releaseYear: 2018,
        reviews: 89000
    },
    {
        id: 9,
        title: "Assassin's Creed Valhalla",
        price: 49.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2208920/capsule_616x353.jpg",
        description: "Assassin's Creed Valhalla is an action RPG that chronicles the legend of the Viking warrior Eivor, who becomes entangled in the conflict between the Brotherhood of Assassins and the Templar Order.",
        rating: 4.4,
        genre: "RPG, Action, Historical",
        developer: "Ubisoft",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 10,
        title: "FIFA 23",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1811260/capsule_616x353.jpg",
        description: "FIFA 23 brings The World's Game to the pitch, with HyperMotion2 Technology that delivers even more realistic movements and animations.",
        rating: 4.2,
        genre: "Sports, Soccer, Simulation",
        developer: "EA Sports",
        releaseYear: 2022,
        reviews: 45000
    },
    {
        id: 11,
        title: "League of Legends",
        price: 0.00,
        image: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8dec84e6e52d6beb9/League_Client_29MAY20.jpg",
        description: "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
        rating: 4.5,
        genre: "MOBA, Strategy, Multiplayer",
        developer: "Riot Games",
        releaseYear: 2009,
        reviews: 567000
    },
    {
        id: 12,
        title: "Valorant",
        price: 0.00,
        image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/valorant-offwhitelaunch-keyart.jpg",
        description: "Valorant is a character-based 5v5 tactical shooter where precise gunplay meets unique agent abilities.",
        rating: 4.3,
        genre: "FPS, Tactical, Multiplayer",
        developer: "Riot Games",
        releaseYear: 2020,
        reviews: 234000
    },
    {
        id: 13,
        title: "The Last of Us Part II",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/883710/capsule_616x353.jpg",
        description: "The Last of Us Part II is an action-adventure survival horror game featuring a strong narrative and deep character development.",
        rating: 4.7,
        genre: "Action, Adventure, Survival",
        developer: "Naughty Dog",
        releaseYear: 2020,
        reviews: 78000
    },
    {
        id: 14,
        title: "God of War Ragnarök",
        price: 69.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg",
        description: "God of War Ragnarök continues the story of Kratos and Atreus as they journey through Norse realms in search of answers.",
        rating: 4.8,
        genre: "Action, Adventure, RPG",
        developer: "Santa Monica Studio",
        releaseYear: 2022,
        reviews: 56000
    },
    {
        id: 15,
        title: "Spider-Man 2",
        price: 69.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2651280/capsule_616x353.jpg",
        description: "Swing through Marvel's New York as both Peter Parker and Miles Morales in this action-packed superhero adventure.",
        rating: 4.6,
        genre: "Action, Adventure, Superhero",
        developer: "Insomniac Games",
        releaseYear: 2023,
        reviews: 34000
    },
    {
        id: 16,
        title: "Resident Evil 4 Remake",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/capsule_616x353.jpg",
        description: "A remake of the classic survival horror game where Leon S. Kennedy battles hordes of zombies and terrifying creatures.",
        rating: 4.5,
        genre: "Survival Horror, Action",
        developer: "Capcom",
        releaseYear: 2023,
        reviews: 45000
    },
    {
        id: 17,
        title: "Elden Ring",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/capsule_616x353.jpg",
        description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord.",
        rating: 4.7,
        genre: "Action RPG, Open World, Fantasy",
        developer: "FromSoftware",
        releaseYear: 2022,
        reviews: 123000
    },
    {
        id: 18,
        title: "Hogwarts Legacy",
        price: 49.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/capsule_616x353.jpg",
        description: "Experience Hogwarts in the 1800s as you discover the feeling of living at Hogwarts while being free to make your own choices.",
        rating: 4.4,
        genre: "Action RPG, Fantasy, Open World",
        developer: "Avalanche Software",
        releaseYear: 2023,
        reviews: 67000
    },
    {
        id: 19,
        title: "Starfield",
        price: 69.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg",
        description: "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.",
        rating: 4.1,
        genre: "RPG, Sci-Fi, Space Exploration",
        developer: "Bethesda Game Studios",
        releaseYear: 2023,
        reviews: 89000
    },
    {
        id: 20,
        title: "Baldur's Gate 3",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/capsule_616x353.jpg",
        description: "Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal.",
        rating: 4.9,
        genre: "RPG, Strategy, Fantasy",
        developer: "Larian Studios",
        releaseYear: 2023,
        reviews: 45000
    },
    {
        id: 21,
        title: "Diablo IV",
        price: 69.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/capsule_616x353.jpg",
        description: "The next chapter in the Diablo saga begins. Experience the epic conclusion to the Eternal Conflict between the High Heavens and the Burning Hells.",
        rating: 4.3,
        genre: "Action RPG, Hack and Slash",
        developer: "Blizzard Entertainment",
        releaseYear: 2023,
        reviews: 56000
    },
    {
        id: 22,
        title: "Overwatch 2",
        price: 0.00,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2357570/capsule_616x353.jpg",
        description: "Overwatch 2 is a free-to-play, team-based shooter where heroes do battle in a world of conflict.",
        rating: 4.0,
        genre: "Hero Shooter, Multiplayer",
        developer: "Blizzard Entertainment",
        releaseYear: 2022,
        reviews: 123000
    },
    {
        id: 23,
        title: "Rocket League",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252950/capsule_616x353.jpg",
        description: "Rocket League is a high-powered hybrid of arcade-style soccer and vehicular mayhem with easy-to-understand controls and fluid, physics-driven competition.",
        rating: 4.4,
        genre: "Sports, Racing, Multiplayer",
        developer: "Psyonix",
        releaseYear: 2015,
        reviews: 167000
    },
    {
        id: 24,
        title: "The Sims 4",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/capsule_616x353.jpg",
        description: "The Sims 4 is a life simulation game that lets you create and control people in a virtual world.",
        rating: 4.2,
        genre: "Simulation, Life Sim",
        developer: "Maxis",
        releaseYear: 2014,
        reviews: 89000
    },
    {
        id: 25,
        title: "Apex Legends",
        price: 0.00,
        image: "https://static.wikia.nocookie.net/apexlegends_gamepedia_en/images/1/1b/Apex_Legends_logo.png",
        description: "Apex Legends is a free-to-play battle royale game where legendary competitors fight for glory, fame, and fortune.",
        rating: 4.2,
        genre: "Battle Royale, FPS, Multiplayer",
        developer: "Respawn Entertainment",
        releaseYear: 2019,
        reviews: 345000
    },
    {
        id: 26,
        title: "Counter-Strike 2",
        price: 0.00,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg",
        description: "Counter-Strike 2 is the next step in the Counter-Strike franchise, featuring updated graphics, improved gameplay, and new features.",
        rating: 4.5,
        genre: "FPS, Tactical, Multiplayer",
        developer: "Valve",
        releaseYear: 2023,
        reviews: 89000
    },
    {
        id: 27,
        title: "Forza Horizon 5",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_616x353.jpg",
        description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant open world landscapes of Mexico with the greatest cars in history.",
        rating: 4.6,
        genre: "Racing, Open World, Simulation",
        developer: "Playground Games",
        releaseYear: 2021,
        reviews: 67000
    },
    {
        id: 28,
        title: "Halo Infinite",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1240440/capsule_616x353.jpg",
        description: "The legendary Halo series returns with the most expansive Master Chief campaign yet, a highly replayable multiplayer experience, and the return of Forge mode.",
        rating: 4.1,
        genre: "FPS, Action, Sci-Fi",
        developer: "343 Industries",
        releaseYear: 2021,
        reviews: 78000
    },
    {
        id: 29,
        title: "The Elder Scrolls V: Skyrim",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/72850/capsule_616x353.jpg",
        description: "The Elder Scrolls V: Skyrim is an open world action RPG developed by Bethesda Game Studios and published by Bethesda Softworks.",
        rating: 4.8,
        genre: "RPG, Fantasy, Open World",
        developer: "Bethesda Game Studios",
        releaseYear: 2011,
        reviews: 234000
    },
    {
        id: 30,
        title: "Fallout 4",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/capsule_616x353.jpg",
        description: "Bethesda Game Studios, the award-winning creators of Fallout 3 and The Elder Scrolls V: Skyrim, welcome you to the world of Fallout 4.",
        rating: 4.5,
        genre: "RPG, Post-Apocalyptic, Open World",
        developer: "Bethesda Game Studios",
        releaseYear: 2015,
        reviews: 178000
    },
    {
        id: 31,
        title: "Portal 2",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/capsule_616x353.jpg",
        description: "Portal 2 is a puzzle-platform video game developed by Valve. The single-player portion of Portal 2 introduces a cast of dynamic new characters.",
        rating: 4.9,
        genre: "Puzzle, Platformer, Sci-Fi",
        developer: "Valve",
        releaseYear: 2011,
        reviews: 89000
    },
    {
        id: 32,
        title: "Half-Life: Alyx",
        price: 49.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/capsule_616x353.jpg",
        description: "Half-Life: Alyx is Valve's VR return to the Half-Life series. It's the story of an impossible fight against a vicious alien race.",
        rating: 4.7,
        genre: "VR, FPS, Sci-Fi",
        developer: "Valve",
        releaseYear: 2020,
        reviews: 45000
    },
    {
        id: 33,
        title: "Team Fortress 2",
        price: 0.00,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/440/capsule_616x353.jpg",
        description: "Team Fortress 2 is a multiplayer first-person shooter game developed and published by Valve.",
        rating: 4.6,
        genre: "FPS, Multiplayer, Class-Based",
        developer: "Valve",
        releaseYear: 2007,
        reviews: 456000
    },
    {
        id: 34,
        title: "Dota 2",
        price: 0.00,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg",
        description: "Dota 2 is a multiplayer online battle arena video game developed and published by Valve.",
        rating: 4.4,
        genre: "MOBA, Strategy, Multiplayer",
        developer: "Valve",
        releaseYear: 2013,
        reviews: 678000
    },
    {
        id: 35,
        title: "Left 4 Dead 2",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/capsule_616x353.jpg",
        description: "Left 4 Dead 2 is a cooperative first-person shooter video game developed and published by Valve.",
        rating: 4.7,
        genre: "FPS, Survival, Horror, Co-op",
        developer: "Valve",
        releaseYear: 2009,
        reviews: 234000
    },
    {
        id: 36,
        title: "Hades",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/capsule_616x353.jpg",
        description: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles.",
        rating: 4.9,
        genre: "Rogue-like, Action, Mythology",
        developer: "Supergiant Games",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 37,
        title: "Stardew Valley",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg",
        description: "Stardew Valley is an open-ended country-life RPG! You've inherited your grandfather's old farm plot in Pelican Town.",
        rating: 4.8,
        genre: "Farming Sim, RPG, Indie",
        developer: "ConcernedApe",
        releaseYear: 2016,
        reviews: 145000
    },
    {
        id: 38,
        title: "Undertale",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/capsule_616x353.jpg",
        description: "Undertale is a RPG where you don't have to kill anyone. Each enemy can be defeated non-lethally.",
        rating: 4.9,
        genre: "RPG, Indie, Story Rich",
        developer: "tobyfox",
        releaseYear: 2015,
        reviews: 89000
    },
    {
        id: 39,
        title: "Celeste",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/capsule_616x353.jpg",
        description: "Celeste is a platforming adventure from the creators of TowerFall. Help Madeline survive her inner demons.",
        rating: 4.8,
        genre: "Platformer, Indie, Story Rich",
        developer: "Matt Makes Games",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 40,
        title: "Hollow Knight",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg",
        description: "Hollow Knight is a 2D action-adventure game with an emphasis on skillful combat and extensive world-building.",
        rating: 4.8,
        genre: "Metroidvania, Action, Indie",
        developer: "Team Cherry",
        releaseYear: 2017,
        reviews: 78000
    },
    {
        id: 41,
        title: "Dead Cells",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/capsule_616x353.jpg",
        description: "Dead Cells is a rogue-lite, metroidvania inspired, action-packed platformer allowing you to explore a growing castle.",
        rating: 4.7,
        genre: "Rogue-lite, Metroidvania, Action",
        developer: "Motion Twin",
        releaseYear: 2018,
        reviews: 56000
    },
    {
        id: 42,
        title: "Risk of Rain 2",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/capsule_616x353.jpg",
        description: "Risk of Rain 2 is a third-person shooter with roguelike elements. Fight alongside your friends in procedurally generated levels.",
        rating: 4.6,
        genre: "Third-Person Shooter, Rogue-like, Co-op",
        developer: "Hopoo Games",
        releaseYear: 2019,
        reviews: 67000
    },
    {
        id: 43,
        title: "Valheim",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/capsule_616x353.jpg",
        description: "Valheim is a survival and sandbox game set in a procedurally-generated world inspired by Norse mythology.",
        rating: 4.5,
        genre: "Survival, Sandbox, Exploration",
        developer: "Iron Gate AB",
        releaseYear: 2021,
        reviews: 89000
    },
    {
        id: 44,
        title: "It Takes Two",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/capsule_616x353.jpg",
        description: "It Takes Two is a co-op platformer where you control a couple who turned into dolls and must work together to turn back.",
        rating: 4.7,
        genre: "Co-op, Platformer, Puzzle",
        developer: "Hazelight Studios",
        releaseYear: 2021,
        reviews: 45000
    },
    {
        id: 45,
        title: "Loop Hero",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282730/capsule_616x353.jpg",
        description: "Loop Hero is a dungeon crawler with a city-building twist. You must build and rebuild the world to defeat an encroaching darkness.",
        rating: 4.6,
        genre: "Strategy, RPG, Indie",
        developer: "Four Quarters",
        releaseYear: 2021,
        reviews: 23000
    },
    {
        id: 46,
        title: "Spiritfarer",
        price: 29.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/972660/capsule_616x353.jpg",
        description: "Spiritfarer is a cozy management game about dying. You play as a ferrymaster who helps spirits pass on.",
        rating: 4.8,
        genre: "Management, Adventure, Indie",
        developer: "Thunder Lotus Games",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 47,
        title: "Outer Wilds",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/capsule_616x353.jpg",
        description: "Outer Wilds is a mystery about a solar system trapped in a 22-minute time loop. Explore, discover, and piece together the clues.",
        rating: 4.9,
        genre: "Adventure, Puzzle, Exploration",
        developer: "Mobius Digital",
        releaseYear: 2019,
        reviews: 23000
    },
    {
        id: 48,
        title: "Disco Elysium",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/capsule_616x353.jpg",
        description: "Disco Elysium is a role-playing video game featuring an amnesiac detective with a unique personality system.",
        rating: 4.8,
        genre: "RPG, Detective, Story Rich",
        developer: "ZA/UM",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 49,
        title: "Hades",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/capsule_616x353.jpg",
        description: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles.",
        rating: 4.9,
        genre: "Rogue-like, Action, Mythology",
        developer: "Supergiant Games",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 50,
        title: "No Man's Sky",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/capsule_616x353.jpg",
        description: "No Man's Sky is a game about exploration and survival in an infinite procedurally generated universe.",
        rating: 4.0,
        genre: "Exploration, Survival, Sci-Fi",
        developer: "Hello Games",
        releaseYear: 2016,
        reviews: 145000
    },
    {
        id: 51,
        title: "The Legend of Zelda: Breath of the Wild",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
        description: "The Legend of Zelda: Breath of the Wild is an open-world adventure game set in the kingdom of Hyrule.",
        rating: 4.9,
        genre: "Action-Adventure, Open World",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 89000
    },
    {
        id: 52,
        title: "Super Mario Odyssey",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/super-mario-odyssey-switch/hero",
        description: "Super Mario Odyssey is a 3D platformer that reimagines the Mario series with new gameplay mechanics and open-world exploration.",
        rating: 4.8,
        genre: "Platformer, 3D, Adventure",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 67000
    },
    {
        id: 53,
        title: "Animal Crossing: New Horizons",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero",
        description: "Animal Crossing: New Horizons is a life simulation game where you can build your own paradise island.",
        rating: 4.6,
        genre: "Life Simulation, Social",
        developer: "Nintendo",
        releaseYear: 2020,
        reviews: 45000
    },
    {
        id: 54,
        title: "Mario Kart 8 Deluxe",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
        description: "Mario Kart 8 Deluxe is a racing game featuring Mario and friends in high-speed kart racing action.",
        rating: 4.7,
        genre: "Racing, Multiplayer",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 78000
    },
    {
        id: 55,
        title: "Splatoon 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/splatoon-3-switch/hero",
        description: "Splatoon 3 is a third-person shooter where teams of Inklings battle it out in ink-splattering combat.",
        rating: 4.5,
        genre: "Third-Person Shooter, Multiplayer",
        developer: "Nintendo",
        releaseYear: 2022,
        reviews: 34000
    },
    {
        id: 56,
        title: "Xenoblade Chronicles 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/x/xenoblade-chronicles-3-switch/hero",
        description: "Xenoblade Chronicles 3 is an epic JRPG that combines real-time combat with strategic elements.",
        rating: 4.6,
        genre: "JRPG, Action, Strategy",
        developer: "Monolith Soft",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 57,
        title: "Fire Emblem: Three Houses",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/f/fire-emblem-three-houses-switch/hero",
        description: "Fire Emblem: Three Houses is a tactical role-playing game with deep story and character development.",
        rating: 4.7,
        genre: "Tactical RPG, Strategy",
        developer: "Intelligent Systems",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 58,
        title: "Pokémon Scarlet",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/p/pokemon-scarlet-violet-switch/hero",
        description: "Pokémon Scarlet is an open-world RPG where you explore, battle, and catch Pokémon in the Paldea region.",
        rating: 4.4,
        genre: "RPG, Open World, Collection",
        developer: "Game Freak",
        releaseYear: 2022,
        reviews: 56000
    },
    {
        id: 59,
        title: "Kirby and the Forgotten Land",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero",
        description: "Kirby and the Forgotten Land is a 3D platformer featuring Kirby's signature copy abilities in a new world.",
        rating: 4.5,
        genre: "Platformer, 3D, Adventure",
        developer: "HAL Laboratory",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 60,
        title: "Metroid Dread",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/metroid-dread-switch/hero",
        description: "Metroid Dread is a 2D action-adventure game in the Metroid series, featuring exploration and combat.",
        rating: 4.6,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "MercurySteam",
        releaseYear: 2021,
        reviews: 34000
    },
    {
        id: 61,
        title: "Persona 5 Royal",
        price: 59.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Persona 5 Royal is an enhanced version of Persona 5 with new content, including a new semester and more.",
        rating: 4.8,
        genre: "JRPG, Social Sim, Turn-Based",
        developer: "Atlus",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 62,
        title: "Final Fantasy VII Remake",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9L2YWMVhJrqLzKrE.png",
        description: "Final Fantasy VII Remake is a reimagining of the classic RPG with updated graphics and gameplay.",
        rating: 4.7,
        genre: "JRPG, Action, Story Rich",
        developer: "Square Enix",
        releaseYear: 2020,
        reviews: 56000
    },
    {
        id: 63,
        title: "Kingdom Hearts III",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2019/01/14/kingdom-hearts-iii---button-1547505446310.jpg",
        description: "Kingdom Hearts III is an action RPG that combines Disney and Final Fantasy universes.",
        rating: 4.5,
        genre: "Action RPG, Disney, Crossover",
        developer: "Square Enix",
        releaseYear: 2019,
        reviews: 67000
    },
    {
        id: 64,
        title: "Yakuza: Like a Dragon",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2020/11/10/yakuza-like-a-dragon---button-1605028194194.jpg",
        description: "Yakuza: Like a Dragon is an open-world JRPG with turn-based combat and dragon quests.",
        rating: 4.6,
        genre: "JRPG, Open World, Action",
        developer: "Sega",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 65,
        title: "Ghostwire: Tokyo",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2022/03/22/ghostwire-tokyo---button-1647970264194.jpg",
        description: "Ghostwire: Tokyo is an action-adventure game set in a supernatural version of Tokyo.",
        rating: 4.2,
        genre: "Action-Adventure, Supernatural",
        developer: "Tango Gameworks",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 66,
        title: "Forspoken",
        price: 69.99,
        image: "https://assets1.ignimgs.com/2023/01/24/forspoken---button-1674580264194.jpg",
        description: "Forspoken is an action RPG where a young woman is transported to a magical world called Athia.",
        rating: 3.8,
        genre: "Action RPG, Open World",
        developer: "Luminous Productions",
        releaseYear: 2023,
        reviews: 45000
    },
    {
        id: 67,
        title: "Street Fighter 6",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2023/06/02/street-fighter-6---button-1685720264194.jpg",
        description: "Street Fighter 6 is the latest entry in the legendary fighting game series with modern mechanics.",
        rating: 4.4,
        genre: "Fighting, 2D, Multiplayer",
        developer: "Capcom",
        releaseYear: 2023,
        reviews: 34000
    },
    {
        id: 68,
        title: "Mortal Kombat 1",
        price: 69.99,
        image: "https://assets1.ignimgs.com/2023/09/19/mortal-kombat-1---button-1695140264194.jpg",
        description: "Mortal Kombat 1 is a reboot of the iconic fighting game series with new story and characters.",
        rating: 4.3,
        genre: "Fighting, 2D, Multiplayer",
        developer: "NetherRealm Studios",
        releaseYear: 2023,
        reviews: 23000
    },
    {
        id: 69,
        title: "Alan Wake 2",
        price: 49.99,
        image: "https://assets1.ignimgs.com/2023/10/27/alan-wake-2---button-1698420264194.jpg",
        description: "Alan Wake 2 is a psychological thriller and survival horror game continuing the story of Alan Wake.",
        rating: 4.5,
        genre: "Survival Horror, Psychological",
        developer: "Remedy Entertainment",
        releaseYear: 2023,
        reviews: 12000
    },
    {
        id: 70,
        title: "Marvel's Spider-Man",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/8RuFJ9xG9V7bgO8E5Zx5bz8q.png",
        description: "Marvel's Spider-Man is an open-world action-adventure game featuring Peter Parker as Spider-Man.",
        rating: 4.7,
        genre: "Action-Adventure, Open World, Superhero",
        developer: "Insomniac Games",
        releaseYear: 2018,
        reviews: 89000
    },
    {
        id: 71,
        title: "Horizon Zero Dawn",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2618/8R6YXGE6Y1LuqVZ4ElHC4R1X.png",
        description: "Horizon Zero Dawn is an action RPG set in a post-apocalyptic world overrun by robotic creatures.",
        rating: 4.8,
        genre: "Action RPG, Open World, Post-Apocalyptic",
        developer: "Guerrilla Games",
        releaseYear: 2017,
        reviews: 67000
    },
    {
        id: 72,
        title: "A Plague Tale: Innocence",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1707/8YpNVF5BhJlGdQ6g5J7P8C5K.png",
        description: "A Plague Tale: Innocence is an action-adventure game set in 14th-century France during the Inquisition.",
        rating: 4.6,
        genre: "Action-Adventure, Stealth, Historical",
        developer: "Asobo Studio",
        releaseYear: 2019,
        reviews: 34000
    },
    {
        id: 73,
        title: "Control",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Control is a supernatural action-adventure game where you play as Jesse Faden, director of a secret government agency.",
        rating: 4.4,
        genre: "Action-Adventure, Supernatural, Third-Person",
        developer: "Remedy Entertainment",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 74,
        title: "Mirror's Edge Catalyst",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Mirror's Edge Catalyst is a first-person action-adventure game set in a dystopian world.",
        rating: 4.1,
        genre: "First-Person, Action, Dystopian",
        developer: "DICE",
        releaseYear: 2016,
        reviews: 23000
    },
    {
        id: 75,
        title: "Tomb Raider (2013)",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Tomb Raider (2013) is a reboot of the iconic adventure series, featuring a younger Lara Croft.",
        rating: 4.5,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2013,
        reviews: 78000
    },
    {
        id: 76,
        title: "Rise of the Tomb Raider",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Rise of the Tomb Raider continues the story of Lara Croft in a globe-trotting adventure.",
        rating: 4.6,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2015,
        reviews: 56000
    },
    {
        id: 77,
        title: "Shadow of the Tomb Raider",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Shadow of the Tomb Raider concludes Lara Croft's origin story in a dark and gritty adventure.",
        rating: 4.4,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 78,
        title: "Uncharted 4: A Thief's End",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Uncharted 4: A Thief's End is an action-adventure game featuring Nathan Drake in his final adventure.",
        rating: 4.8,
        genre: "Action-Adventure, Third-Person",
        developer: "Naughty Dog",
        releaseYear: 2016,
        reviews: 89000
    },
    {
        id: 79,
        title: "The Last Guardian",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "The Last Guardian is an action-adventure game about a boy and his giant creature companion.",
        rating: 4.3,
        genre: "Action-Adventure, Puzzle",
        developer: "Team Ico",
        releaseYear: 2016,
        reviews: 34000
    },
    {
        id: 80,
        title: "Bloodborne",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Bloodborne is an action RPG set in a gothic, Lovecraftian world filled with dangerous creatures.",
        rating: 4.7,
        genre: "Action RPG, Souls-like, Horror",
        developer: "FromSoftware",
        releaseYear: 2015,
        reviews: 67000
    },
    {
        id: 81,
        title: "Dark Souls III",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Dark Souls III is an action RPG known for its challenging gameplay and deep lore.",
        rating: 4.6,
        genre: "Action RPG, Souls-like, Challenging",
        developer: "FromSoftware",
        releaseYear: 2016,
        reviews: 78000
    },
    {
        id: 82,
        title: "Sekiro: Shadows Die Twice",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Sekiro: Shadows Die Twice is an action-adventure game featuring intense swordplay and supernatural elements.",
        rating: 4.8,
        genre: "Action-Adventure, Souls-like, Martial Arts",
        developer: "FromSoftware",
        releaseYear: 2019,
        reviews: 56000
    },
    {
        id: 83,
        title: "Demon's Souls",
        price: 69.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Demon's Souls is a remastered version of the classic action RPG that started the souls-like genre.",
        rating: 4.5,
        genre: "Action RPG, Souls-like, Remaster",
        developer: "Bluepoint Games",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 84,
        title: "Nioh 2",
        price: 49.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Nioh 2 is an action RPG inspired by Dark Souls, featuring samurai combat and supernatural elements.",
        rating: 4.4,
        genre: "Action RPG, Souls-like, Samurai",
        developer: "Team Ninja",
        releaseYear: 2020,
        reviews: 23000
    },
    {
        id: 85,
        title: "Ghost of Tsushima",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Ghost of Tsushima is an open-world action-adventure game set in feudal Japan.",
        rating: 4.7,
        genre: "Action-Adventure, Open World, Historical",
        developer: "Sucker Punch Productions",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 86,
        title: "Death Stranding",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Death Stranding is an action game directed by Hideo Kojima, featuring exploration and delivery mechanics.",
        rating: 4.2,
        genre: "Action, Exploration, Walking Simulator",
        developer: "Kojima Productions",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 87,
        title: "Metal Gear Solid V: The Phantom Pain",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Metal Gear Solid V: The Phantom Pain is an open-world stealth game featuring tactical gameplay.",
        rating: 4.6,
        genre: "Stealth, Open World, Tactical",
        developer: "Kojima Productions",
        releaseYear: 2015,
        reviews: 56000
    },
    {
        id: 88,
        title: "Bayonetta 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/b/bayonetta-3-switch/hero",
        description: "Bayonetta 3 is an action game featuring stylish combat and angelic/demonic transformations.",
        rating: 4.5,
        genre: "Action, Hack and Slash, Stylish",
        developer: "PlatinumGames",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 89,
        title: "Monster Hunter Rise",
        price: 39.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/monster-hunter-rise-switch/hero",
        description: "Monster Hunter Rise is an action RPG where you hunt massive monsters in cooperative gameplay.",
        rating: 4.6,
        genre: "Action RPG, Hunting, Co-op",
        developer: "Capcom",
        releaseYear: 2021,
        reviews: 34000
    },
    {
        id: 90,
        title: "Octopath Traveler",
        price: 49.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/o/octopath-traveler-switch/hero",
        description: "Octopath Traveler is a role-playing game featuring eight protagonists with interconnected stories.",
        rating: 4.7,
        genre: "JRPG, Strategy, Story Rich",
        developer: "Square Enix",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 91,
        title: "Persona 4 Golden",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Persona 4 Golden is an enhanced version of Persona 4 with additional content and improved gameplay.",
        rating: 4.8,
        genre: "JRPG, Social Sim, Turn-Based",
        developer: "Atlus",
        releaseYear: 2012,
        reviews: 56000
    },
    {
        id: 92,
        title: "Chrono Trigger",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Chrono Trigger is a classic JRPG featuring time travel and memorable characters.",
        rating: 4.9,
        genre: "JRPG, Time Travel, Classic",
        developer: "Square Enix",
        releaseYear: 1995,
        reviews: 23000
    },
    {
        id: 93,
        title: "Final Fantasy VI",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Final Fantasy VI is an epic JRPG with a rich story and innovative gameplay mechanics.",
        rating: 4.8,
        genre: "JRPG, Epic, Turn-Based",
        developer: "Square Enix",
        releaseYear: 1994,
        reviews: 34000
    },
    {
        id: 94,
        title: "EarthBound",
        price: 29.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "EarthBound is a quirky JRPG with a unique art style and memorable soundtrack.",
        rating: 4.7,
        genre: "JRPG, Quirky, Adventure",
        developer: "Ape Inc.",
        releaseYear: 1994,
        reviews: 12000
    },
    {
        id: 95,
        title: "Secret of Mana",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Secret of Mana is an action RPG featuring cooperative gameplay and exploration.",
        rating: 4.5,
        genre: "Action RPG, Co-op, Exploration",
        developer: "Square Enix",
        releaseYear: 1993,
        reviews: 15000
    },
    {
        id: 96,
        title: "Super Metroid",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Super Metroid is a 2D action-adventure game known for its exploration and atmosphere.",
        rating: 4.8,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "Nintendo",
        releaseYear: 1994,
        reviews: 18000
    },
    {
        id: 97,
        title: "A Link to the Past",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "A Link to the Past is a classic action-adventure game featuring exploration and puzzle-solving.",
        rating: 4.9,
        genre: "Action-Adventure, Puzzle, Classic",
        developer: "Nintendo",
        releaseYear: 1991,
        reviews: 25000
    },
    {
        id: 98,
        title: "Super Mario World",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Super Mario World is a classic platformer featuring Mario's adventures in Dinosaur Land.",
        rating: 4.8,
        genre: "Platformer, Classic, Adventure",
        developer: "Nintendo",
        releaseYear: 1990,
        reviews: 35000
    },
    {
        id: 99,
        title: "The Legend of Zelda: A Link Between Worlds",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "The Legend of Zelda: A Link Between Worlds is a 2D action-adventure game with dimensional shifting mechanics.",
        rating: 4.7,
        genre: "Action-Adventure, 2D, Puzzle",
        developer: "Nintendo",
        releaseYear: 2013,
        reviews: 28000
    },
    {
        id: 100,
        title: "Castlevania: Symphony of the Night",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Castlevania: Symphony of the Night is a 2D action-adventure game with exploration and combat.",
        rating: 4.8,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "Konami",
        releaseYear: 1997,
        reviews: 22000
    },
    {
        id: 101,
        title: "Mega Man X",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Mega Man X is a classic action platformer featuring challenging gameplay and boss battles.",
        rating: 4.6,
        genre: "Action Platformer, Classic, Challenging",
        developer: "Capcom",
        releaseYear: 1993,
        reviews: 18000
    },
    {
        id: 102,
        title: "Street Fighter II",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Street Fighter II is a classic fighting game that revolutionized the genre.",
        rating: 4.7,
        genre: "Fighting, 2D, Classic",
        developer: "Capcom",
        releaseYear: 1991,
        reviews: 30000
    },
    {
        id: 103,
        title: "GoldenEye 007",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "GoldenEye 007 is a first-person shooter based on the James Bond film.",
        rating: 4.5,
        genre: "FPS, Action, Classic",
        developer: "Rare",
        releaseYear: 1997,
        reviews: 25000
    },
    {
        id: 104,
        title: "Perfect Dark",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Perfect Dark is a first-person shooter featuring stealth and action gameplay.",
        rating: 4.6,
        genre: "FPS, Stealth, Action",
        developer: "Rare",
        releaseYear: 2000,
        reviews: 15000
    },
    {
        id: 105,
        title: "Banjo-Kazooie",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Banjo-Kazooie is a 3D platformer featuring a bear and bird duo on adventures.",
        rating: 4.7,
        genre: "Platformer, 3D, Adventure",
        developer: "Rare",
        releaseYear: 1998,
        reviews: 20000
    },
    {
        id: 106,
        title: "Donkey Kong Country",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Donkey Kong Country is a classic platformer featuring Donkey Kong and Diddy Kong.",
        rating: 4.6,
        genre: "Platformer, 2D, Classic",
        developer: "Rare",
        releaseYear: 1994,
        reviews: 28000
    },
    {
        id: 107,
        title: "Crash Bandicoot",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Crash Bandicoot is a 3D platformer featuring a bandicoot's adventures.",
        rating: 4.5,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 1996,
        reviews: 22000
    },
    {
        id: 108,
        title: "Spyro the Dragon",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Spyro the Dragon is a 3D platformer featuring a dragon collecting gems and rescuing dragons.",
        rating: 4.4,
        genre: "Platformer, 3D, Collection",
        developer: "Insomniac Games",
        releaseYear: 1998,
        reviews: 19000
    },
    {
        id: 109,
        title: "Crash Bandicoot 2: Cortex Strikes Back",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Crash Bandicoot 2 is the sequel to the original platformer with more challenging levels.",
        rating: 4.6,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 1997,
        reviews: 18000
    },
    {
        id: 110,
        title: "Spyro 2: Ripto's Rage",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Spyro 2 continues the dragon's adventures with new worlds and challenges.",
        rating: 4.5,
        genre: "Platformer, 3D, Collection",
        developer: "Insomniac Games",
        releaseYear: 1999,
        reviews: 16000
    },
    {
        id: 111,
        title: "Jak and Daxter: The Precursor Legacy",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Jak and Daxter is a 3D platformer featuring an ottsel and his friend on adventures.",
        rating: 4.4,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 2001,
        reviews: 14000
    },
    {
        id: 112,
        title: "Ratchet & Clank",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Ratchet & Clank is a 3D platformer featuring a lombax and his robot companion.",
        rating: 4.6,
        genre: "Platformer, 3D, Action",
        developer: "Insomniac Games",
        releaseYear: 2002,
        reviews: 17000
    },
    {
        id: 113,
        title: "Sly Cooper and the Thievius Raccoonus",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Sly Cooper is a stealth platformer featuring a raccoon thief and his gang.",
        rating: 4.5,
        genre: "Platformer, Stealth, Adventure",
        developer: "Sucker Punch Productions",
        releaseYear: 2002,
        reviews: 13000
    },
    {
        id: 114,
        title: "Metal Gear Solid 2: Sons of Liberty",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Metal Gear Solid 2 is a stealth action game with philosophical themes and complex narrative.",
        rating: 4.7,
        genre: "Stealth, Action, Story Rich",
        developer: "Kojima Productions",
        releaseYear: 2001,
        reviews: 25000
    },
    {
        id: 115,
        title: "Grand Theft Auto: San Andreas",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "GTA: San Andreas is an open-world action game set in 1990s California.",
        rating: 4.8,
        genre: "Action, Open World, Classic",
        developer: "Rockstar Games",
        releaseYear: 2004,
        reviews: 180000
    },
    {
        id: 116,
        title: "The Elder Scrolls IV: Oblivion",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "The Elder Scrolls IV: Oblivion is an open-world RPG set in the province of Cyrodiil.",
        rating: 4.7,
        genre: "RPG, Open World, Fantasy",
        developer: "Bethesda Game Studios",
        releaseYear: 2006,
        reviews: 120000
    },
    {
        id: 117,
        title: "BioShock",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "BioShock is a first-person shooter with horror elements set in an underwater city.",
        rating: 4.8,
        genre: "FPS, Horror, Story Rich",
        developer: "Irrational Games",
        releaseYear: 2007,
        reviews: 89000
    },
    {
        id: 118,
        title: "Portal",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Portal is a puzzle-platformer featuring the portal gun and GLaDOS.",
        rating: 4.9,
        genre: "Puzzle, Platformer, Sci-Fi",
        developer: "Valve",
        releaseYear: 2007,
        reviews: 67000
    },
    {
        id: 119,
        title: "Left 4 Dead",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/500/capsule_616x353.jpg",
        description: "Left 4 Dead is a cooperative first-person shooter survival horror game.",
        rating: 4.5,
        genre: "FPS, Survival, Horror, Co-op",
        developer: "Valve",
        releaseYear: 2008,
        reviews: 234000
    },
    {
        id: 120,
        title: "Grand Theft Auto IV",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12210/capsule_616x353.jpg",
        description: "Grand Theft Auto IV is an open-world action-adventure game set in Liberty City.",
        rating: 4.6,
        genre: "Action, Open World, Story Rich",
        developer: "Rockstar Games",
        releaseYear: 2008,
        reviews: 156000
    },
    {
        id: 121,
        title: "Fallout 3",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22300/capsule_616x353.jpg",
        description: "Fallout 3 is an open-world action RPG set in a post-apocalyptic wasteland.",
        rating: 4.5,
        genre: "RPG, Post-Apocalyptic, Open World",
        developer: "Bethesda Game Studios",
        releaseYear: 2008,
        reviews: 89000
    },
    {
        id: 122,
        title: "Dead Space",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17470/capsule_616x353.jpg",
        description: "Dead Space is a third-person shooter survival horror game set on a derelict spaceship.",
        rating: 4.7,
        genre: "Survival Horror, Third-Person Shooter",
        developer: "EA Redwood Shores",
        releaseYear: 2008,
        reviews: 67000
    },
    {
        id: 123,
        title: "Mirror's Edge",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17410/capsule_616x353.jpg",
        description: "Mirror's Edge is a first-person action-adventure game with a unique dystopian setting.",
        rating: 4.3,
        genre: "First-Person, Action, Dystopian",
        developer: "DICE",
        releaseYear: 2008,
        reviews: 45000
    },
    {
        id: 124,
        title: "Far Cry 2",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/19900/capsule_616x353.jpg",
        description: "Far Cry 2 is an open-world first-person shooter set in Africa.",
        rating: 4.1,
        genre: "FPS, Open World, Action",
        developer: "Ubisoft Montreal",
        releaseYear: 2008,
        reviews: 56000
    },
    {
        id: 125,
        title: "Assassin's Creed II",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/capsule_616x353.jpg",
        description: "Assassin's Creed II is an action-adventure game set in Renaissance Italy.",
        rating: 4.6,
        genre: "Action-Adventure, Stealth, Historical",
        developer: "Ubisoft Montreal",
        releaseYear: 2009,
        reviews: 89000
    },
    {
        id: 126,
        title: "Borderlands",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8980/capsule_616x353.jpg",
        description: "Borderlands is a first-person shooter with RPG elements and cooperative gameplay.",
        rating: 4.4,
        genre: "FPS, RPG, Co-op",
        developer: "Gearbox Software",
        releaseYear: 2009,
        reviews: 78000
    },
    {
        id: 127,
        title: "The Sims 3",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/47890/capsule_616x353.jpg",
        description: "The Sims 3 is a life simulation game where you create and control virtual people.",
        rating: 4.3,
        genre: "Simulation, Life Sim",
        developer: "The Sims Studio",
        releaseYear: 2009,
        reviews: 123000
    },
    {
        id: 128,
        title: "Dragon Age: Origins",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17450/capsule_616x353.jpg",
        description: "Dragon Age: Origins is a role-playing game set in the world of Thedas.",
        rating: 4.7,
        genre: "RPG, Fantasy, Story Rich",
        developer: "BioWare",
        releaseYear: 2009,
        reviews: 67000
    },
    {
        id: 129,
        title: "Mass Effect 2",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/24980/capsule_616x353.jpg",
        description: "Mass Effect 2 is a science fiction RPG with deep character development and choices.",
        rating: 4.8,
        genre: "RPG, Sci-Fi, Story Rich",
        developer: "BioWare",
        releaseYear: 2010,
        reviews: 89000
    },
    {
        id: 130,
        title: "StarCraft II: Wings of Liberty",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/499450/capsule_616x353.jpg",
        description: "StarCraft II: Wings of Liberty is a real-time strategy game set in the StarCraft universe.",
        rating: 4.6,
        genre: "RTS, Strategy, Sci-Fi",
        developer: "Blizzard Entertainment",
        releaseYear: 2010,
        reviews: 78000
    },
    {
        id: 131,
        title: "Super Meat Boy",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/capsule_616x353.jpg",
        description: "Super Meat Boy is an extremely difficult platformer with pixel art graphics.",
        rating: 4.5,
        genre: "Platformer, Difficult, Indie",
        developer: "Team Meat",
        releaseYear: 2010,
        reviews: 45000
    },
    {
        id: 132,
        title: "Limbo",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/capsule_616x353.jpg",
        description: "Limbo is a puzzle-platformer with a dark atmosphere and challenging puzzles.",
        rating: 4.6,
        genre: "Puzzle, Platformer, Dark",
        developer: "Playdead",
        releaseYear: 2010,
        reviews: 34000
    },
    {
        id: 133,
        title: "Amnesia: The Dark Descent",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/57300/capsule_616x353.jpg",
        description: "Amnesia: The Dark Descent is a first-person survival horror game with psychological elements.",
        rating: 4.4,
        genre: "Survival Horror, First-Person, Psychological",
        developer: "Frictional Games",
        releaseYear: 2010,
        reviews: 56000
    },
    {
        id: 134,
        title: "The Witcher 2: Assassins of Kings",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/20920/capsule_616x353.jpg",
        description: "The Witcher 2: Assassins of Kings is an action RPG with deep storytelling and choices.",
        rating: 4.5,
        genre: "RPG, Fantasy, Action",
        developer: "CD Projekt RED",
        releaseYear: 2011,
        reviews: 67000
    },
    {
        id: 135,
        title: "The Elder Scrolls V: Skyrim",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/72850/capsule_616x353.jpg",
        description: "The Elder Scrolls V: Skyrim is an open world action RPG developed by Bethesda Game Studios.",
        rating: 4.8,
        genre: "RPG, Fantasy, Open World",
        developer: "Bethesda Game Studios",
        releaseYear: 2011,
        reviews: 234000
    },
    {
        id: 136,
        title: "Portal 2",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/capsule_616x353.jpg",
        description: "Portal 2 is a puzzle-platform video game developed by Valve with new characters and mechanics.",
        rating: 4.9,
        genre: "Puzzle, Platformer, Sci-Fi",
        developer: "Valve",
        releaseYear: 2011,
        reviews: 89000
    },
    {
        id: 137,
        title: "Half-Life: Alyx",
        price: 49.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/capsule_616x353.jpg",
        description: "Half-Life: Alyx is Valve's VR return to the Half-Life series in the Half-Life universe.",
        rating: 4.7,
        genre: "VR, FPS, Sci-Fi",
        developer: "Valve",
        releaseYear: 2020,
        reviews: 45000
    },
    {
        id: 138,
        title: "Dota 2",
        price: 0.00,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg",
        description: "Dota 2 is a multiplayer online battle arena video game developed and published by Valve.",
        rating: 4.4,
        genre: "MOBA, Strategy, Multiplayer",
        developer: "Valve",
        releaseYear: 2013,
        reviews: 678000
    },
    {
        id: 139,
        title: "Left 4 Dead 2",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/capsule_616x353.jpg",
        description: "Left 4 Dead 2 is a cooperative first-person shooter survival horror game.",
        rating: 4.7,
        genre: "FPS, Survival, Horror, Co-op",
        developer: "Valve",
        releaseYear: 2009,
        reviews: 234000
    },
    {
        id: 140,
        title: "Hades",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/capsule_616x353.jpg",
        description: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's titles.",
        rating: 4.9,
        genre: "Rogue-like, Action, Mythology",
        developer: "Supergiant Games",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 141,
        title: "Stardew Valley",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg",
        description: "Stardew Valley is an open-ended country-life RPG with farming and social elements.",
        rating: 4.8,
        genre: "Farming Sim, RPG, Indie",
        developer: "ConcernedApe",
        releaseYear: 2016,
        reviews: 145000
    },
    {
        id: 142,
        title: "Undertale",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/capsule_616x353.jpg",
        description: "Undertale is a RPG where you don't have to kill anyone, with unique combat mechanics.",
        rating: 4.9,
        genre: "RPG, Indie, Story Rich",
        developer: "tobyfox",
        releaseYear: 2015,
        reviews: 89000
    },
    {
        id: 143,
        title: "Celeste",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/capsule_616x353.jpg",
        description: "Celeste is a platforming adventure about overcoming anxiety and self-doubt.",
        rating: 4.8,
        genre: "Platformer, Indie, Story Rich",
        developer: "Matt Makes Games",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 144,
        title: "Hollow Knight",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg",
        description: "Hollow Knight is a 2D action-adventure game with metroidvania elements and exploration.",
        rating: 4.8,
        genre: "Metroidvania, Action, Indie",
        developer: "Team Cherry",
        releaseYear: 2017,
        reviews: 78000
    },
    {
        id: 145,
        title: "Dead Cells",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/capsule_616x353.jpg",
        description: "Dead Cells is a rogue-lite, metroidvania inspired action-packed platformer.",
        rating: 4.7,
        genre: "Rogue-lite, Metroidvania, Action",
        developer: "Motion Twin",
        releaseYear: 2018,
        reviews: 56000
    },
    {
        id: 146,
        title: "Risk of Rain 2",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/capsule_616x353.jpg",
        description: "Risk of Rain 2 is a third-person shooter with roguelike elements and co-op gameplay.",
        rating: 4.6,
        genre: "Third-Person Shooter, Roguelike, Co-op",
        developer: "Hopoo Games",
        releaseYear: 2019,
        reviews: 67000
    },
    {
        id: 147,
        title: "Valheim",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/capsule_616x353.jpg",
        description: "Valheim is a survival and sandbox game inspired by Norse mythology.",
        rating: 4.5,
        genre: "Survival, Sandbox, Exploration",
        developer: "Iron Gate AB",
        releaseYear: 2021,
        reviews: 89000
    },
    {
        id: 148,
        title: "It Takes Two",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/capsule_616x353.jpg",
        description: "It Takes Two is a co-op platformer where you control a couple turned into dolls.",
        rating: 4.7,
        genre: "Co-op, Platformer, Puzzle",
        developer: "Hazelight Studios",
        releaseYear: 2021,
        reviews: 45000
    },
    {
        id: 149,
        title: "Loop Hero",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282730/capsule_616x353.jpg",
        description: "Loop Hero is a dungeon crawler with a city-building twist to defeat encroaching darkness.",
        rating: 4.6,
        genre: "Strategy, RPG, Indie",
        developer: "Four Quarters",
        releaseYear: 2021,
        reviews: 23000
    },
    {
        id: 150,
        title: "Spiritfarer",
        price: 29.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/972660/capsule_616x353.jpg",
        description: "Spiritfarer is a cozy management game about dying and ferrying spirits to the afterlife.",
        rating: 4.8,
        genre: "Management, Adventure, Indie",
        developer: "Thunder Lotus Games",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 151,
        title: "Outer Wilds",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/capsule_616x353.jpg",
        description: "Outer Wilds is a mystery about a solar system trapped in a 22-minute time loop.",
        rating: 4.9,
        genre: "Adventure, Puzzle, Exploration",
        developer: "Mobius Digital",
        releaseYear: 2019,
        reviews: 23000
    },
    {
        id: 152,
        title: "Disco Elysium",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/capsule_616x353.jpg",
        description: "Disco Elysium is a role-playing video game featuring an amnesiac detective.",
        rating: 4.8,
        genre: "RPG, Detective, Story Rich",
        developer: "ZA/UM",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 153,
        title: "Hades",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/capsule_616x353.jpg",
        description: "Hades is a god-like rogue-like dungeon crawler with Greek mythology elements.",
        rating: 4.9,
        genre: "Rogue-like, Action, Mythology",
        developer: "Supergiant Games",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 154,
        title: "No Man's Sky",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/capsule_616x353.jpg",
        description: "No Man's Sky is a game about exploration and survival in an infinite universe.",
        rating: 4.0,
        genre: "Exploration, Survival, Sci-Fi",
        developer: "Hello Games",
        releaseYear: 2016,
        reviews: 145000
    },
    {
        id: 155,
        title: "The Legend of Zelda: Breath of the Wild",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
        description: "The Legend of Zelda: Breath of the Wild is an open-world adventure in the kingdom of Hyrule.",
        rating: 4.9,
        genre: "Action-Adventure, Open World",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 89000
    },
    {
        id: 156,
        title: "Super Mario Odyssey",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/super-mario-odyssey-switch/hero",
        description: "Super Mario Odyssey is a 3D platformer that reimagines the Mario series.",
        rating: 4.8,
        genre: "Platformer, 3D, Adventure",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 67000
    },
    {
        id: 157,
        title: "Animal Crossing: New Horizons",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero",
        description: "Animal Crossing: New Horizons is a life simulation game on a deserted island.",
        rating: 4.6,
        genre: "Life Simulation, Social",
        developer: "Nintendo",
        releaseYear: 2020,
        reviews: 45000
    },
    {
        id: 158,
        title: "Mario Kart 8 Deluxe",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
        description: "Mario Kart 8 Deluxe is a racing game with Mario characters in high-speed kart racing.",
        rating: 4.7,
        genre: "Racing, Multiplayer",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 78000
    },
    {
        id: 159,
        title: "Splatoon 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/splatoon-3-switch/hero",
        description: "Splatoon 3 is a third-person shooter with teams of Inklings battling with ink.",
        rating: 4.5,
        genre: "Third-Person Shooter, Multiplayer",
        developer: "Nintendo",
        releaseYear: 2022,
        reviews: 34000
    },
    {
        id: 160,
        title: "Xenoblade Chronicles 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/x/xenoblade-chronicles-3-switch/hero",
        description: "Xenoblade Chronicles 3 combines real-time combat with strategic JRPG elements.",
        rating: 4.6,
        genre: "JRPG, Action, Strategy",
        developer: "Monolith Soft",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 161,
        title: "Fire Emblem: Three Houses",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/f/fire-emblem-three-houses-switch/hero",
        description: "Fire Emblem: Three Houses is a tactical RPG with deep story and character development.",
        rating: 4.7,
        genre: "Tactical RPG, Strategy",
        developer: "Intelligent Systems",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 162,
        title: "Pokémon Scarlet",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/p/pokemon-scarlet-violet-switch/hero",
        description: "Pokémon Scarlet is an open-world RPG where you explore and catch Pokémon.",
        rating: 4.4,
        genre: "RPG, Open World, Collection",
        developer: "Game Freak",
        releaseYear: 2022,
        reviews: 56000
    },
    {
        id: 163,
        title: "Kirby and the Forgotten Land",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero",
        description: "Kirby and the Forgotten Land is a 3D platformer with Kirby's copy abilities.",
        rating: 4.5,
        genre: "Platformer, 3D, Adventure",
        developer: "HAL Laboratory",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 164,
        title: "Metroid Dread",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/metroid-dread-switch/hero",
        description: "Metroid Dread is a 2D action-adventure game in the Metroid series.",
        rating: 4.6,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "MercurySteam",
        releaseYear: 2021,
        reviews: 34000
    },
    {
        id: 165,
        title: "Persona 5 Royal",
        price: 59.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Persona 5 Royal is an enhanced version of Persona 5 with new content.",
        rating: 4.8,
        genre: "JRPG, Social Sim, Turn-Based",
        developer: "Atlus",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 166,
        title: "Final Fantasy VII Remake",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9L2YWMVhJrqLzKrE.png",
        description: "Final Fantasy VII Remake is a reimagining of the classic RPG with updated graphics.",
        rating: 4.7,
        genre: "JRPG, Action, Story Rich",
        developer: "Square Enix",
        releaseYear: 2020,
        reviews: 56000
    },
    {
        id: 167,
        title: "Kingdom Hearts III",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2019/01/14/kingdom-hearts-iii---button-1547505446310.jpg",
        description: "Kingdom Hearts III combines Disney and Final Fantasy universes in action RPG.",
        rating: 4.5,
        genre: "Action RPG, Disney, Crossover",
        developer: "Square Enix",
        releaseYear: 2019,
        reviews: 67000
    },
    {
        id: 168,
        title: "Yakuza: Like a Dragon",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2020/11/10/yakuza-like-a-dragon---button-1605028194194.jpg",
        description: "Yakuza: Like a Dragon is an open-world JRPG with turn-based combat.",
        rating: 4.6,
        genre: "JRPG, Open World, Action",
        developer: "Sega",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 169,
        title: "Ghostwire: Tokyo",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2022/03/22/ghostwire-tokyo---button-1647970264194.jpg",
        description: "Ghostwire: Tokyo is an action-adventure game in a supernatural Tokyo.",
        rating: 4.2,
        genre: "Action-Adventure, Supernatural",
        developer: "Tango Gameworks",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 170,
        title: "Forspoken",
        price: 69.99,
        image: "https://assets1.ignimgs.com/2023/01/24/forspoken---button-1674580264194.jpg",
        description: "Forspoken is an action RPG where a woman is transported to a magical world.",
        rating: 3.8,
        genre: "Action RPG, Open World",
        developer: "Luminous Productions",
        releaseYear: 2023,
        reviews: 45000
    },
    {
        id: 171,
        title: "Street Fighter 6",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2023/06/02/street-fighter-6---button-1685720264194.jpg",
        description: "Street Fighter 6 is the latest entry in the legendary fighting game series.",
        rating: 4.4,
        genre: "Fighting, 2D, Multiplayer",
        developer: "Capcom",
        releaseYear: 2023,
        reviews: 34000
    },
    {
        id: 172,
        title: "Mortal Kombat 1",
        price: 69.99,
        image: "https://assets1.ignimgs.com/2023/09/19/mortal-kombat-1---button-1695140264194.jpg",
        description: "Mortal Kombat 1 is a reboot of the iconic fighting game series.",
        rating: 4.3,
        genre: "Fighting, 2D, Multiplayer",
        developer: "NetherRealm Studios",
        releaseYear: 2023,
        reviews: 23000
    },
    {
        id: 173,
        title: "Alan Wake 2",
        price: 49.99,
        image: "https://assets1.ignimgs.com/2023/10/27/alan-wake-2---button-1698420264194.jpg",
        description: "Alan Wake 2 is a psychological thriller continuing the story of Alan Wake.",
        rating: 4.5,
        genre: "Survival Horror, Psychological",
        developer: "Remedy Entertainment",
        releaseYear: 2023,
        reviews: 12000
    },
    {
        id: 174,
        title: "Marvel's Spider-Man",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/8RuFJ9xG9V7bgO8E5Zx5bz8q.png",
        description: "Marvel's Spider-Man is an open-world action-adventure as Peter Parker.",
        rating: 4.7,
        genre: "Action-Adventure, Open World, Superhero",
        developer: "Insomniac Games",
        releaseYear: 2018,
        reviews: 89000
    },
    {
        id: 175,
        title: "Horizon Zero Dawn",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2618/8R6YXGE6Y1LuqVZ4ElHC4R1X.png",
        description: "Horizon Zero Dawn is an action RPG in a post-apocalyptic world with robotic creatures.",
        rating: 4.8,
        genre: "Action RPG, Open World, Post-Apocalyptic",
        developer: "Guerrilla Games",
        releaseYear: 2017,
        reviews: 67000
    },
    {
        id: 176,
        title: "A Plague Tale: Innocence",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1707/8YpNVF5BhJlGdQ6g5J7P8C5K.png",
        description: "A Plague Tale: Innocence is an action-adventure in 14th-century France.",
        rating: 4.6,
        genre: "Action-Adventure, Stealth, Historical",
        developer: "Asobo Studio",
        releaseYear: 2019,
        reviews: 34000
    },
    {
        id: 177,
        title: "Control",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Control is a supernatural action-adventure in a secret government agency.",
        rating: 4.4,
        genre: "Action-Adventure, Supernatural, Third-Person",
        developer: "Remedy Entertainment",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 178,
        title: "Mirror's Edge Catalyst",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Mirror's Edge Catalyst is a first-person action-adventure in a dystopian world.",
        rating: 4.1,
        genre: "First-Person, Action, Dystopian",
        developer: "DICE",
        releaseYear: 2016,
        reviews: 23000
    },
    {
        id: 179,
        title: "Tomb Raider (2013)",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Tomb Raider (2013) is a reboot featuring a younger Lara Croft.",
        rating: 4.5,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2013,
        reviews: 78000
    },
    {
        id: 180,
        title: "Rise of the Tomb Raider",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Rise of the Tomb Raider continues Lara Croft's globe-trotting adventure.",
        rating: 4.6,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2015,
        reviews: 56000
    },
    {
        id: 181,
        title: "Shadow of the Tomb Raider",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Shadow of the Tomb Raider concludes Lara Croft's origin story.",
        rating: 4.4,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 182,
        title: "Uncharted 4: A Thief's End",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Uncharted 4: A Thief's End is Nathan Drake's final adventure.",
        rating: 4.8,
        genre: "Action-Adventure, Third-Person",
        developer: "Naughty Dog",
        releaseYear: 2016,
        reviews: 89000
    },
    {
        id: 183,
        title: "The Last Guardian",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "The Last Guardian is about a boy and his giant creature companion.",
        rating: 4.3,
        genre: "Action-Adventure, Puzzle",
        developer: "Team Ico",
        releaseYear: 2016,
        reviews: 34000
    },
    {
        id: 184,
        title: "Bloodborne",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Bloodborne is an action RPG in a gothic, Lovecraftian world.",
        rating: 4.7,
        genre: "Action RPG, Souls-like, Horror",
        developer: "FromSoftware",
        releaseYear: 2015,
        reviews: 67000
    },
    {
        id: 185,
        title: "Dark Souls III",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Dark Souls III is an action RPG known for its challenging gameplay.",
        rating: 4.6,
        genre: "Action RPG, Souls-like, Challenging",
        developer: "FromSoftware",
        releaseYear: 2016,
        reviews: 78000
    },
    {
        id: 186,
        title: "Sekiro: Shadows Die Twice",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Sekiro: Shadows Die Twice features intense swordplay and supernatural elements.",
        rating: 4.8,
        genre: "Action-Adventure, Souls-like, Martial Arts",
        developer: "FromSoftware",
        releaseYear: 2019,
        reviews: 56000
    },
    {
        id: 187,
        title: "Demon's Souls",
        price: 69.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Demon's Souls is a remastered version of the souls-like genre starter.",
        rating: 4.5,
        genre: "Action RPG, Souls-like, Remaster",
        developer: "Bluepoint Games",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 188,
        title: "Nioh 2",
        price: 49.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Nioh 2 features samurai combat and supernatural elements.",
        rating: 4.4,
        genre: "Action RPG, Souls-like, Samurai",
        developer: "Team Ninja",
        releaseYear: 2020,
        reviews: 23000
    },
    {
        id: 189,
        title: "Ghost of Tsushima",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Ghost of Tsushima is an open-world action-adventure in feudal Japan.",
        rating: 4.7,
        genre: "Action-Adventure, Open World, Historical",
        developer: "Sucker Punch Productions",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 190,
        title: "Death Stranding",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Death Stranding features exploration and delivery mechanics by Hideo Kojima.",
        rating: 4.2,
        genre: "Action, Exploration, Walking Simulator",
        developer: "Kojima Productions",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 191,
        title: "Metal Gear Solid V: The Phantom Pain",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Metal Gear Solid V: The Phantom Pain is an open-world stealth game.",
        rating: 4.6,
        genre: "Stealth, Open World, Tactical",
        developer: "Kojima Productions",
        releaseYear: 2015,
        reviews: 56000
    },
    {
        id: 192,
        title: "Bayonetta 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/b/bayonetta-3-switch/hero",
        description: "Bayonetta 3 features stylish combat and angelic/demonic transformations.",
        rating: 4.5,
        genre: "Action, Hack and Slash, Stylish",
        developer: "PlatinumGames",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 193,
        title: "Monster Hunter Rise",
        price: 39.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/monster-hunter-rise-switch/hero",
        description: "Monster Hunter Rise features hunting massive monsters in cooperative gameplay.",
        rating: 4.6,
        genre: "Action RPG, Hunting, Co-op",
        developer: "Capcom",
        releaseYear: 2021,
        reviews: 34000
    },
    {
        id: 194,
        title: "Octopath Traveler",
        price: 49.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/o/octopath-traveler-switch/hero",
        description: "Octopath Traveler features eight protagonists with interconnected stories.",
        rating: 4.7,
        genre: "JRPG, Strategy, Story Rich",
        developer: "Square Enix",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 195,
        title: "Persona 4 Golden",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Persona 4 Golden is an enhanced version with additional content.",
        rating: 4.8,
        genre: "JRPG, Social Sim, Turn-Based",
        developer: "Atlus",
        releaseYear: 2012,
        reviews: 56000
    },
    {
        id: 196,
        title: "Chrono Trigger",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Chrono Trigger is a classic JRPG featuring time travel and memorable characters.",
        rating: 4.9,
        genre: "JRPG, Time Travel, Classic",
        developer: "Square Enix",
        releaseYear: 1995,
        reviews: 23000
    },
    {
        id: 197,
        title: "Final Fantasy VI",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Final Fantasy VI is an epic JRPG with a rich story and innovative mechanics.",
        rating: 4.8,
        genre: "JRPG, Epic, Turn-Based",
        developer: "Square Enix",
        releaseYear: 1994,
        reviews: 34000
    },
    {
        id: 198,
        title: "EarthBound",
        price: 29.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "EarthBound is a quirky JRPG with a unique art style and memorable soundtrack.",
        rating: 4.7,
        genre: "JRPG, Quirky, Adventure",
        developer: "Ape Inc.",
        releaseYear: 1994,
        reviews: 12000
    },
    {
        id: 199,
        title: "Secret of Mana",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Secret of Mana is an action RPG featuring cooperative gameplay and exploration.",
        rating: 4.5,
        genre: "Action RPG, Co-op, Exploration",
        developer: "Square Enix",
        releaseYear: 1993,
        reviews: 15000
    },
    {
        id: 200,
        title: "Super Metroid",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Super Metroid is a 2D action-adventure game known for its exploration and atmosphere.",
        rating: 4.8,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "Nintendo",
        releaseYear: 1994,
        reviews: 18000
    },
    {
        id: 201,
        title: "A Link to the Past",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "A Link to the Past is a classic action-adventure game featuring exploration and puzzle-solving.",
        rating: 4.9,
        genre: "Action-Adventure, Puzzle, Classic",
        developer: "Nintendo",
        releaseYear: 1991,
        reviews: 25000
    },
    {
        id: 202,
        title: "Super Mario World",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Super Mario World is a classic platformer featuring Mario's adventures in Dinosaur Land.",
        rating: 4.8,
        genre: "Platformer, Classic, Adventure",
        developer: "Nintendo",
        releaseYear: 1990,
        reviews: 35000
    },
    {
        id: 203,
        title: "The Legend of Zelda: A Link Between Worlds",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "The Legend of Zelda: A Link Between Worlds is a 2D action-adventure game with dimensional shifting mechanics.",
        rating: 4.7,
        genre: "Action-Adventure, 2D, Puzzle",
        developer: "Nintendo",
        releaseYear: 2013,
        reviews: 28000
    },
    {
        id: 204,
        title: "Castlevania: Symphony of the Night",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Castlevania: Symphony of the Night is a 2D action-adventure game with exploration and combat.",
        rating: 4.8,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "Konami",
        releaseYear: 1997,
        reviews: 22000
    },
    {
        id: 205,
        title: "Mega Man X",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Mega Man X is a classic action platformer featuring challenging gameplay and boss battles.",
        rating: 4.6,
        genre: "Action Platformer, Classic, Challenging",
        developer: "Capcom",
        releaseYear: 1993,
        reviews: 18000
    },
    {
        id: 206,
        title: "Street Fighter II",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Street Fighter II is a classic fighting game that revolutionized the genre.",
        rating: 4.7,
        genre: "Fighting, 2D, Classic",
        developer: "Capcom",
        releaseYear: 1991,
        reviews: 30000
    },
    {
        id: 207,
        title: "GoldenEye 007",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "GoldenEye 007 is a first-person shooter based on the James Bond film.",
        rating: 4.5,
        genre: "FPS, Action, Classic",
        developer: "Rare",
        releaseYear: 1997,
        reviews: 25000
    },
    {
        id: 208,
        title: "Perfect Dark",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Perfect Dark is a first-person shooter featuring stealth and action gameplay.",
        rating: 4.6,
        genre: "FPS, Stealth, Action",
        developer: "Rare",
        releaseYear: 2000,
        reviews: 15000
    },
    {
        id: 209,
        title: "Banjo-Kazooie",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Banjo-Kazooie is a 3D platformer featuring a bear and bird duo on adventures.",
        rating: 4.7,
        genre: "Platformer, 3D, Adventure",
        developer: "Rare",
        releaseYear: 1998,
        reviews: 20000
    },
    {
        id: 210,
        title: "Donkey Kong Country",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Donkey Kong Country is a classic platformer featuring Donkey Kong and Diddy Kong.",
        rating: 4.6,
        genre: "Platformer, 2D, Classic",
        developer: "Rare",
        releaseYear: 1994,
        reviews: 28000
    },
    {
        id: 211,
        title: "Crash Bandicoot",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Crash Bandicoot is a 3D platformer featuring a bandicoot's adventures.",
        rating: 4.5,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 1996,
        reviews: 22000
    },
    {
        id: 212,
        title: "Spyro the Dragon",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Spyro the Dragon is a 3D platformer featuring a dragon collecting gems and rescuing dragons.",
        rating: 4.4,
        genre: "Platformer, 3D, Collection",
        developer: "Insomniac Games",
        releaseYear: 1998,
        reviews: 19000
    },
    {
        id: 213,
        title: "Crash Bandicoot 2: Cortex Strikes Back",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Crash Bandicoot 2 is the sequel to the original platformer with more challenging levels.",
        rating: 4.6,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 1997,
        reviews: 18000
    },
    {
        id: 214,
        title: "Spyro 2: Ripto's Rage",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Spyro 2 continues the dragon's adventures with new worlds and challenges.",
        rating: 4.5,
        genre: "Platformer, 3D, Collection",
        developer: "Insomniac Games",
        releaseYear: 1999,
        reviews: 16000
    },
    {
        id: 215,
        title: "Jak and Daxter: The Precursor Legacy",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Jak and Daxter is a 3D platformer featuring an ottsel and his friend on adventures.",
        rating: 4.4,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 2001,
        reviews: 14000
    },
    {
        id: 216,
        title: "Ratchet & Clank",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Ratchet & Clank is a 3D platformer featuring a lombax and his robot companion.",
        rating: 4.6,
        genre: "Platformer, 3D, Action",
        developer: "Insomniac Games",
        releaseYear: 2002,
        reviews: 17000
    },
    {
        id: 217,
        title: "Sly Cooper and the Thievius Raccoonus",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Sly Cooper is a stealth platformer featuring a raccoon thief and his gang.",
        rating: 4.5,
        genre: "Platformer, Stealth, Adventure",
        developer: "Sucker Punch Productions",
        releaseYear: 2002,
        reviews: 13000
    },
    {
        id: 218,
        title: "Metal Gear Solid 2: Sons of Liberty",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Metal Gear Solid 2 is a stealth action game with philosophical themes and complex narrative.",
        rating: 4.7,
        genre: "Stealth, Action, Story Rich",
        developer: "Kojima Productions",
        releaseYear: 2001,
        reviews: 25000
    },
    {
        id: 219,
        title: "Grand Theft Auto: San Andreas",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "GTA: San Andreas is an open-world action game set in 1990s California.",
        rating: 4.8,
        genre: "Action, Open World, Classic",
        developer: "Rockstar Games",
        releaseYear: 2004,
        reviews: 180000
    },
    {
        id: 220,
        title: "The Elder Scrolls IV: Oblivion",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "The Elder Scrolls IV: Oblivion is an open-world RPG set in the province of Cyrodiil.",
        rating: 4.7,
        genre: "RPG, Open World, Fantasy",
        developer: "Bethesda Game Studios",
        releaseYear: 2006,
        reviews: 120000
    },
    {
        id: 221,
        title: "BioShock",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "BioShock is a first-person shooter with horror elements set in an underwater city.",
        rating: 4.8,
        genre: "FPS, Horror, Story Rich",
        developer: "Irrational Games",
        releaseYear: 2007,
        reviews: 89000
    },
    {
        id: 222,
        title: "Portal",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Portal is a puzzle-platformer featuring the portal gun and GLaDOS.",
        rating: 4.9,
        genre: "Puzzle, Platformer, Sci-Fi",
        developer: "Valve",
        releaseYear: 2007,
        reviews: 67000
    },
    {
        id: 223,
        title: "Left 4 Dead",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/500/capsule_616x353.jpg",
        description: "Left 4 Dead is a cooperative first-person shooter survival horror game.",
        rating: 4.5,
        genre: "FPS, Survival, Horror, Co-op",
        developer: "Valve",
        releaseYear: 2008,
        reviews: 234000
    },
    {
        id: 224,
        title: "Grand Theft Auto IV",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/12210/capsule_616x353.jpg",
        description: "Grand Theft Auto IV is an open-world action-adventure game set in Liberty City.",
        rating: 4.6,
        genre: "Action, Open World, Story Rich",
        developer: "Rockstar Games",
        releaseYear: 2008,
        reviews: 156000
    },
    {
        id: 225,
        title: "Fallout 3",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/22300/capsule_616x353.jpg",
        description: "Fallout 3 is an open-world action RPG set in a post-apocalyptic wasteland.",
        rating: 4.5,
        genre: "RPG, Post-Apocalyptic, Open World",
        developer: "Bethesda Game Studios",
        releaseYear: 2008,
        reviews: 89000
    },
    {
        id: 226,
        title: "Dead Space",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17470/capsule_616x353.jpg",
        description: "Dead Space is a third-person shooter survival horror game set on a derelict spaceship.",
        rating: 4.7,
        genre: "Survival Horror, Third-Person Shooter",
        developer: "EA Redwood Shores",
        releaseYear: 2008,
        reviews: 67000
    },
    {
        id: 227,
        title: "Mirror's Edge",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17410/capsule_616x353.jpg",
        description: "Mirror's Edge is a first-person action-adventure game with a unique dystopian setting.",
        rating: 4.3,
        genre: "First-Person, Action, Dystopian",
        developer: "DICE",
        releaseYear: 2008,
        reviews: 45000
    },
    {
        id: 228,
        title: "Far Cry 2",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/19900/capsule_616x353.jpg",
        description: "Far Cry 2 is an open-world first-person shooter set in Africa.",
        rating: 4.1,
        genre: "FPS, Open World, Action",
        developer: "Ubisoft Montreal",
        releaseYear: 2008,
        reviews: 56000
    },
    {
        id: 229,
        title: "Assassin's Creed II",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/33230/capsule_616x353.jpg",
        description: "Assassin's Creed II is an action-adventure game set in Renaissance Italy.",
        rating: 4.6,
        genre: "Action-Adventure, Stealth, Historical",
        developer: "Ubisoft Montreal",
        releaseYear: 2009,
        reviews: 89000
    },
    {
        id: 230,
        title: "Borderlands",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/8980/capsule_616x353.jpg",
        description: "Borderlands is a first-person shooter with RPG elements and cooperative gameplay.",
        rating: 4.4,
        genre: "FPS, RPG, Co-op",
        developer: "Gearbox Software",
        releaseYear: 2009,
        reviews: 78000
    },
    {
        id: 231,
        title: "The Sims 3",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/47890/capsule_616x353.jpg",
        description: "The Sims 3 is a life simulation game where you create and control virtual people.",
        rating: 4.3,
        genre: "Simulation, Life Sim",
        developer: "The Sims Studio",
        releaseYear: 2009,
        reviews: 123000
    },
    {
        id: 232,
        title: "Dragon Age: Origins",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/17450/capsule_616x353.jpg",
        description: "Dragon Age: Origins is a role-playing game set in the world of Thedas.",
        rating: 4.7,
        genre: "RPG, Fantasy, Story Rich",
        developer: "BioWare",
        releaseYear: 2009,
        reviews: 67000
    },
    {
        id: 233,
        title: "Mass Effect 2",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/24980/capsule_616x353.jpg",
        description: "Mass Effect 2 is a science fiction RPG with deep character development and choices.",
        rating: 4.8,
        genre: "RPG, Sci-Fi, Story Rich",
        developer: "BioWare",
        releaseYear: 2010,
        reviews: 89000
    },
    {
        id: 234,
        title: "StarCraft II: Wings of Liberty",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/499450/capsule_616x353.jpg",
        description: "StarCraft II: Wings of Liberty is a real-time strategy game set in the StarCraft universe.",
        rating: 4.6,
        genre: "RTS, Strategy, Sci-Fi",
        developer: "Blizzard Entertainment",
        releaseYear: 2010,
        reviews: 78000
    },
    {
        id: 235,
        title: "Super Meat Boy",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/40800/capsule_616x353.jpg",
        description: "Super Meat Boy is an extremely difficult platformer with pixel art graphics.",
        rating: 4.5,
        genre: "Platformer, Difficult, Indie",
        developer: "Team Meat",
        releaseYear: 2010,
        reviews: 45000
    },
    {
        id: 236,
        title: "Limbo",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/48000/capsule_616x353.jpg",
        description: "Limbo is a puzzle-platformer with a dark atmosphere and challenging puzzles.",
        rating: 4.6,
        genre: "Puzzle, Platformer, Dark",
        developer: "Playdead",
        releaseYear: 2010,
        reviews: 34000
    },
    {
        id: 237,
        title: "Amnesia: The Dark Descent",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/57300/capsule_616x353.jpg",
        description: "Amnesia: The Dark Descent is a first-person survival horror game with psychological elements.",
        rating: 4.4,
        genre: "Survival Horror, First-Person, Psychological",
        developer: "Frictional Games",
        releaseYear: 2010,
        reviews: 56000
    },
    {
        id: 238,
        title: "The Witcher 2: Assassins of Kings",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/20920/capsule_616x353.jpg",
        description: "The Witcher 2: Assassins of Kings is an action RPG with deep storytelling and choices.",
        rating: 4.5,
        genre: "RPG, Fantasy, Action",
        developer: "CD Projekt RED",
        releaseYear: 2011,
        reviews: 67000
    },
    {
        id: 239,
        title: "The Elder Scrolls V: Skyrim",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/72850/capsule_616x353.jpg",
        description: "The Elder Scrolls V: Skyrim is an open world action RPG developed by Bethesda Game Studios.",
        rating: 4.8,
        genre: "RPG, Fantasy, Open World",
        developer: "Bethesda Game Studios",
        releaseYear: 2011,
        reviews: 234000
    },
    {
        id: 240,
        title: "Portal 2",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/620/capsule_616x353.jpg",
        description: "Portal 2 is a puzzle-platform video game developed by Valve with new characters and mechanics.",
        rating: 4.9,
        genre: "Puzzle, Platformer, Sci-Fi",
        developer: "Valve",
        releaseYear: 2011,
        reviews: 89000
    },
    {
        id: 241,
        title: "Half-Life: Alyx",
        price: 49.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/546560/capsule_616x353.jpg",
        description: "Half-Life: Alyx is Valve's VR return to the Half-Life series in the Half-Life universe.",
        rating: 4.7,
        genre: "VR, FPS, Sci-Fi",
        developer: "Valve",
        releaseYear: 2020,
        reviews: 45000
    },
    {
        id: 242,
        title: "Dota 2",
        price: 0.00,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg",
        description: "Dota 2 is a multiplayer online battle arena video game developed and published by Valve.",
        rating: 4.4,
        genre: "MOBA, Strategy, Multiplayer",
        developer: "Valve",
        releaseYear: 2013,
        reviews: 678000
    },
    {
        id: 243,
        title: "Left 4 Dead 2",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/550/capsule_616x353.jpg",
        description: "Left 4 Dead 2 is a cooperative first-person shooter survival horror game.",
        rating: 4.7,
        genre: "FPS, Survival, Horror, Co-op",
        developer: "Valve",
        releaseYear: 2009,
        reviews: 234000
    },
    {
        id: 244,
        title: "Hades",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/capsule_616x353.jpg",
        description: "Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's titles.",
        rating: 4.9,
        genre: "Rogue-like, Action, Mythology",
        developer: "Supergiant Games",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 245,
        title: "Stardew Valley",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg",
        description: "Stardew Valley is an open-ended country-life RPG with farming and social elements.",
        rating: 4.8,
        genre: "Farming Sim, RPG, Indie",
        developer: "ConcernedApe",
        releaseYear: 2016,
        reviews: 145000
    },
    {
        id: 246,
        title: "Undertale",
        price: 9.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/391540/capsule_616x353.jpg",
        description: "Undertale is a RPG where you don't have to kill anyone, with unique combat mechanics.",
        rating: 4.9,
        genre: "RPG, Indie, Story Rich",
        developer: "tobyfox",
        releaseYear: 2015,
        reviews: 89000
    },
    {
        id: 247,
        title: "Celeste",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/504230/capsule_616x353.jpg",
        description: "Celeste is a platforming adventure about overcoming anxiety and self-doubt.",
        rating: 4.8,
        genre: "Platformer, Indie, Story Rich",
        developer: "Matt Makes Games",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 248,
        title: "Hollow Knight",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/capsule_616x353.jpg",
        description: "Hollow Knight is a 2D action-adventure game with metroidvania elements and exploration.",
        rating: 4.8,
        genre: "Metroidvania, Action, Indie",
        developer: "Team Cherry",
        releaseYear: 2017,
        reviews: 78000
    },
    {
        id: 249,
        title: "Dead Cells",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/588650/capsule_616x353.jpg",
        description: "Dead Cells is a rogue-lite, metroidvania inspired action-packed platformer.",
        rating: 4.7,
        genre: "Rogue-lite, Metroidvania, Action",
        developer: "Motion Twin",
        releaseYear: 2018,
        reviews: 56000
    },
    {
        id: 250,
        title: "Risk of Rain 2",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632360/capsule_616x353.jpg",
        description: "Risk of Rain 2 is a third-person shooter with roguelike elements and co-op gameplay.",
        rating: 4.6,
        genre: "Third-Person Shooter, Roguelike, Co-op",
        developer: "Hopoo Games",
        releaseYear: 2019,
        reviews: 67000
    },
    {
        id: 251,
        title: "Valheim",
        price: 19.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/892970/capsule_616x353.jpg",
        description: "Valheim is a survival and sandbox game inspired by Norse mythology.",
        rating: 4.5,
        genre: "Survival, Sandbox, Exploration",
        developer: "Iron Gate AB",
        releaseYear: 2021,
        reviews: 89000
    },
    {
        id: 252,
        title: "It Takes Two",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/capsule_616x353.jpg",
        description: "It Takes Two is a co-op platformer where you control a couple turned into dolls.",
        rating: 4.7,
        genre: "Co-op, Platformer, Puzzle",
        developer: "Hazelight Studios",
        releaseYear: 2021,
        reviews: 45000
    },
    {
        id: 253,
        title: "Loop Hero",
        price: 14.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1282730/capsule_616x353.jpg",
        description: "Loop Hero is a dungeon crawler with a city-building twist to defeat encroaching darkness.",
        rating: 4.6,
        genre: "Strategy, RPG, Indie",
        developer: "Four Quarters",
        releaseYear: 2021,
        reviews: 23000
    },
    {
        id: 254,
        title: "Spiritfarer",
        price: 29.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/972660/capsule_616x353.jpg",
        description: "Spiritfarer is a cozy management game about dying and ferrying spirits to the afterlife.",
        rating: 4.8,
        genre: "Management, Adventure, Indie",
        developer: "Thunder Lotus Games",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 255,
        title: "Outer Wilds",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/753640/capsule_616x353.jpg",
        description: "Outer Wilds is a mystery about a solar system trapped in a 22-minute time loop.",
        rating: 4.9,
        genre: "Adventure, Puzzle, Exploration",
        developer: "Mobius Digital",
        releaseYear: 2019,
        reviews: 23000
    },
    {
        id: 256,
        title: "Disco Elysium",
        price: 39.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/632470/capsule_616x353.jpg",
        description: "Disco Elysium is a role-playing video game featuring an amnesiac detective.",
        rating: 4.8,
        genre: "RPG, Detective, Story Rich",
        developer: "ZA/UM",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 257,
        title: "Hades",
        price: 24.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145360/capsule_616x353.jpg",
        description: "Hades is a god-like rogue-like dungeon crawler with Greek mythology elements.",
        rating: 4.9,
        genre: "Rogue-like, Action, Mythology",
        developer: "Supergiant Games",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 258,
        title: "No Man's Sky",
        price: 59.99,
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/275850/capsule_616x353.jpg",
        description: "No Man's Sky is a game about exploration and survival in an infinite universe.",
        rating: 4.0,
        genre: "Exploration, Survival, Sci-Fi",
        developer: "Hello Games",
        releaseYear: 2016,
        reviews: 145000
    },
    {
        id: 259,
        title: "The Legend of Zelda: Breath of the Wild",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
        description: "The Legend of Zelda: Breath of the Wild is an open-world adventure in the kingdom of Hyrule.",
        rating: 4.9,
        genre: "Action-Adventure, Open World",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 89000
    },
    {
        id: 260,
        title: "Super Mario Odyssey",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/super-mario-odyssey-switch/hero",
        description: "Super Mario Odyssey is a 3D platformer that reimagines the Mario series.",
        rating: 4.8,
        genre: "Platformer, 3D, Adventure",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 67000
    },
    {
        id: 261,
        title: "Animal Crossing: New Horizons",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/a/animal-crossing-new-horizons-switch/hero",
        description: "Animal Crossing: New Horizons is a life simulation game on a deserted island.",
        rating: 4.6,
        genre: "Life Simulation, Social",
        developer: "Nintendo",
        releaseYear: 2020,
        reviews: 45000
    },
    {
        id: 262,
        title: "Mario Kart 8 Deluxe",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
        description: "Mario Kart 8 Deluxe is a racing game with Mario characters in high-speed kart racing.",
        rating: 4.7,
        genre: "Racing, Multiplayer",
        developer: "Nintendo",
        releaseYear: 2017,
        reviews: 78000
    },
    {
        id: 263,
        title: "Splatoon 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/splatoon-3-switch/hero",
        description: "Splatoon 3 is a third-person shooter with teams of Inklings battling with ink.",
        rating: 4.5,
        genre: "Third-Person Shooter, Multiplayer",
        developer: "Nintendo",
        releaseYear: 2022,
        reviews: 34000
    },
    {
        id: 264,
        title: "Xenoblade Chronicles 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/x/xenoblade-chronicles-3-switch/hero",
        description: "Xenoblade Chronicles 3 combines real-time combat with strategic JRPG elements.",
        rating: 4.6,
        genre: "JRPG, Action, Strategy",
        developer: "Monolith Soft",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 265,
        title: "Fire Emblem: Three Houses",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/f/fire-emblem-three-houses-switch/hero",
        description: "Fire Emblem: Three Houses is a tactical RPG with deep story and character development.",
        rating: 4.7,
        genre: "Tactical RPG, Strategy",
        developer: "Intelligent Systems",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 266,
        title: "Pokémon Scarlet",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/p/pokemon-scarlet-violet-switch/hero",
        description: "Pokémon Scarlet is an open-world RPG where you explore and catch Pokémon.",
        rating: 4.4,
        genre: "RPG, Open World, Collection",
        developer: "Game Freak",
        releaseYear: 2022,
        reviews: 56000
    },
    {
        id: 267,
        title: "Kirby and the Forgotten Land",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/k/kirby-and-the-forgotten-land-switch/hero",
        description: "Kirby and the Forgotten Land is a 3D platformer with Kirby's copy abilities.",
        rating: 4.5,
        genre: "Platformer, 3D, Adventure",
        developer: "HAL Laboratory",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 268,
        title: "Metroid Dread",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/metroid-dread-switch/hero",
        description: "Metroid Dread is a 2D action-adventure game in the Metroid series.",
        rating: 4.6,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "MercurySteam",
        releaseYear: 2021,
        reviews: 34000
    },
    {
        id: 269,
        title: "Persona 5 Royal",
        price: 59.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Persona 5 Royal is an enhanced version of Persona 5 with new content.",
        rating: 4.8,
        genre: "JRPG, Social Sim, Turn-Based",
        developer: "Atlus",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 270,
        title: "Final Fantasy VII Remake",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/0222/niMUubpU9L2YWMVhJrqLzKrE.png",
        description: "Final Fantasy VII Remake is a reimagining of the classic RPG with updated graphics.",
        rating: 4.7,
        genre: "JRPG, Action, Story Rich",
        developer: "Square Enix",
        releaseYear: 2020,
        reviews: 56000
    },
    {
        id: 271,
        title: "Kingdom Hearts III",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2019/01/14/kingdom-hearts-iii---button-1547505446310.jpg",
        description: "Kingdom Hearts III combines Disney and Final Fantasy universes in action RPG.",
        rating: 4.5,
        genre: "Action RPG, Disney, Crossover",
        developer: "Square Enix",
        releaseYear: 2019,
        reviews: 67000
    },
    {
        id: 272,
        title: "Yakuza: Like a Dragon",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2020/11/10/yakuza-like-a-dragon---button-1605028194194.jpg",
        description: "Yakuza: Like a Dragon is an open-world JRPG with turn-based combat.",
        rating: 4.6,
        genre: "JRPG, Open World, Action",
        developer: "Sega",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 273,
        title: "Ghostwire: Tokyo",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2022/03/22/ghostwire-tokyo---button-1647970264194.jpg",
        description: "Ghostwire: Tokyo is an action-adventure game in a supernatural Tokyo.",
        rating: 4.2,
        genre: "Action-Adventure, Supernatural",
        developer: "Tango Gameworks",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 274,
        title: "Forspoken",
        price: 69.99,
        image: "https://assets1.ignimgs.com/2023/01/24/forspoken---button-1674580264194.jpg",
        description: "Forspoken is an action RPG where a woman is transported to a magical world.",
        rating: 3.8,
        genre: "Action RPG, Open World",
        developer: "Luminous Productions",
        releaseYear: 2023,
        reviews: 45000
    },
    {
        id: 275,
        title: "Street Fighter 6",
        price: 59.99,
        image: "https://assets1.ignimgs.com/2023/06/02/street-fighter-6---button-1685720264194.jpg",
        description: "Street Fighter 6 is the latest entry in the legendary fighting game series.",
        rating: 4.4,
        genre: "Fighting, 2D, Multiplayer",
        developer: "Capcom",
        releaseYear: 2023,
        reviews: 34000
    },
    {
        id: 276,
        title: "Mortal Kombat 1",
        price: 69.99,
        image: "https://assets1.ignimgs.com/2023/09/19/mortal-kombat-1---button-1695140264194.jpg",
        description: "Mortal Kombat 1 is a reboot of the iconic fighting game series.",
        rating: 4.3,
        genre: "Fighting, 2D, Multiplayer",
        developer: "NetherRealm Studios",
        releaseYear: 2023,
        reviews: 23000
    },
    {
        id: 277,
        title: "Alan Wake 2",
        price: 49.99,
        image: "https://assets1.ignimgs.com/2023/10/27/alan-wake-2---button-1698420264194.jpg",
        description: "Alan Wake 2 is a psychological thriller continuing the story of Alan Wake.",
        rating: 4.5,
        genre: "Survival Horror, Psychological",
        developer: "Remedy Entertainment",
        releaseYear: 2023,
        reviews: 12000
    },
    {
        id: 278,
        title: "Marvel's Spider-Man",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/8RuFJ9xG9V7bgO8E5Zx5bz8q.png",
        description: "Marvel's Spider-Man is an open-world action-adventure as Peter Parker.",
        rating: 4.7,
        genre: "Action-Adventure, Open World, Superhero",
        developer: "Insomniac Games",
        releaseYear: 2018,
        reviews: 89000
    },
    {
        id: 279,
        title: "Horizon Zero Dawn",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202010/2618/8R6YXGE6Y1LuqVZ4ElHC4R1X.png",
        description: "Horizon Zero Dawn is an action RPG in a post-apocalyptic world with robotic creatures.",
        rating: 4.8,
        genre: "Action RPG, Open World, Post-Apocalyptic",
        developer: "Guerrilla Games",
        releaseYear: 2017,
        reviews: 67000
    },
    {
        id: 280,
        title: "A Plague Tale: Innocence",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202106/1707/8YpNVF5BhJlGdQ6g5J7P8C5K.png",
        description: "A Plague Tale: Innocence is an action-adventure in 14th-century France.",
        rating: 4.6,
        genre: "Action-Adventure, Stealth, Historical",
        developer: "Asobo Studio",
        releaseYear: 2019,
        reviews: 34000
    },
    {
        id: 281,
        title: "Control",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Control is a supernatural action-adventure in a secret government agency.",
        rating: 4.4,
        genre: "Action-Adventure, Supernatural, Third-Person",
        developer: "Remedy Entertainment",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 282,
        title: "Mirror's Edge Catalyst",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Mirror's Edge Catalyst is a first-person action-adventure in a dystopian world.",
        rating: 4.1,
        genre: "First-Person, Action, Dystopian",
        developer: "DICE",
        releaseYear: 2016,
        reviews: 23000
    },
    {
        id: 283,
        title: "Tomb Raider (2013)",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Tomb Raider (2013) is a reboot featuring a younger Lara Croft.",
        rating: 4.5,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2013,
        reviews: 78000
    },
    {
        id: 284,
        title: "Rise of the Tomb Raider",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Rise of the Tomb Raider continues Lara Croft's globe-trotting adventure.",
        rating: 4.6,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2015,
        reviews: 56000
    },
    {
        id: 285,
        title: "Shadow of the Tomb Raider",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Shadow of the Tomb Raider concludes Lara Croft's origin story.",
        rating: 4.4,
        genre: "Action-Adventure, Third-Person",
        developer: "Crystal Dynamics",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 286,
        title: "Uncharted 4: A Thief's End",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Uncharted 4: A Thief's End is Nathan Drake's final adventure.",
        rating: 4.8,
        genre: "Action-Adventure, Third-Person",
        developer: "Naughty Dog",
        releaseYear: 2016,
        reviews: 89000
    },
    {
        id: 287,
        title: "The Last Guardian",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "The Last Guardian is about a boy and his giant creature companion.",
        rating: 4.3,
        genre: "Action-Adventure, Puzzle",
        developer: "Team Ico",
        releaseYear: 2016,
        reviews: 34000
    },
    {
        id: 288,
        title: "Bloodborne",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Bloodborne is an action RPG in a gothic, Lovecraftian world.",
        rating: 4.7,
        genre: "Action RPG, Souls-like, Horror",
        developer: "FromSoftware",
        releaseYear: 2015,
        reviews: 67000
    },
    {
        id: 289,
        title: "Dark Souls III",
        price: 39.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Dark Souls III is an action RPG known for its challenging gameplay.",
        rating: 4.6,
        genre: "Action RPG, Souls-like, Challenging",
        developer: "FromSoftware",
        releaseYear: 2016,
        reviews: 78000
    },
    {
        id: 290,
        title: "Sekiro: Shadows Die Twice",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Sekiro: Shadows Die Twice features intense swordplay and supernatural elements.",
        rating: 4.8,
        genre: "Action-Adventure, Souls-like, Martial Arts",
        developer: "FromSoftware",
        releaseYear: 2019,
        reviews: 56000
    },
    {
        id: 291,
        title: "Demon's Souls",
        price: 69.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Demon's Souls is a remastered version of the souls-like genre starter.",
        rating: 4.5,
        genre: "Action RPG, Souls-like, Remaster",
        developer: "Bluepoint Games",
        releaseYear: 2020,
        reviews: 34000
    },
    {
        id: 292,
        title: "Nioh 2",
        price: 49.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Nioh 2 features samurai combat and supernatural elements.",
        rating: 4.4,
        genre: "Action RPG, Souls-like, Samurai",
        developer: "Team Ninja",
        releaseYear: 2020,
        reviews: 23000
    },
    {
        id: 293,
        title: "Ghost of Tsushima",
        price: 59.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Ghost of Tsushima is an open-world action-adventure in feudal Japan.",
        rating: 4.7,
        genre: "Action-Adventure, Open World, Historical",
        developer: "Sucker Punch Productions",
        releaseYear: 2020,
        reviews: 67000
    },
    {
        id: 294,
        title: "Death Stranding",
        price: 29.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Death Stranding features exploration and delivery mechanics by Hideo Kojima.",
        rating: 4.2,
        genre: "Action, Exploration, Walking Simulator",
        developer: "Kojima Productions",
        releaseYear: 2019,
        reviews: 45000
    },
    {
        id: 295,
        title: "Metal Gear Solid V: The Phantom Pain",
        price: 19.99,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8Yg9aeq9QcQ7cGdQ5g7Aa8e9.png",
        description: "Metal Gear Solid V: The Phantom Pain is an open-world stealth game.",
        rating: 4.6,
        genre: "Stealth, Open World, Tactical",
        developer: "Kojima Productions",
        releaseYear: 2015,
        reviews: 56000
    },
    {
        id: 296,
        title: "Bayonetta 3",
        price: 59.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/b/bayonetta-3-switch/hero",
        description: "Bayonetta 3 features stylish combat and angelic/demonic transformations.",
        rating: 4.5,
        genre: "Action, Hack and Slash, Stylish",
        developer: "PlatinumGames",
        releaseYear: 2022,
        reviews: 23000
    },
    {
        id: 297,
        title: "Monster Hunter Rise",
        price: 39.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/monster-hunter-rise-switch/hero",
        description: "Monster Hunter Rise features hunting massive monsters in cooperative gameplay.",
        rating: 4.6,
        genre: "Action RPG, Hunting, Co-op",
        developer: "Capcom",
        releaseYear: 2021,
        reviews: 34000
    },
    {
        id: 298,
        title: "Octopath Traveler",
        price: 49.99,
        image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/o/octopath-traveler-switch/hero",
        description: "Octopath Traveler features eight protagonists with interconnected stories.",
        rating: 4.7,
        genre: "JRPG, Strategy, Story Rich",
        developer: "Square Enix",
        releaseYear: 2018,
        reviews: 45000
    },
    {
        id: 299,
        title: "Persona 4 Golden",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Persona 4 Golden is an enhanced version with additional content.",
        rating: 4.8,
        genre: "JRPG, Social Sim, Turn-Based",
        developer: "Atlus",
        releaseYear: 2012,
        reviews: 56000
    },
    {
        id: 300,
        title: "Chrono Trigger",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Chrono Trigger is a classic JRPG featuring time travel and memorable characters.",
        rating: 4.9,
        genre: "JRPG, Time Travel, Classic",
        developer: "Square Enix",
        releaseYear: 1995,
        reviews: 23000
    },
    {
        id: 301,
        title: "Final Fantasy VI",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Final Fantasy VI is an epic JRPG with a rich story and innovative mechanics.",
        rating: 4.8,
        genre: "JRPG, Epic, Turn-Based",
        developer: "Square Enix",
        releaseYear: 1994,
        reviews: 34000
    },
    {
        id: 302,
        title: "EarthBound",
        price: 29.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "EarthBound is a quirky JRPG with a unique art style and memorable soundtrack.",
        rating: 4.7,
        genre: "JRPG, Quirky, Adventure",
        developer: "Ape Inc.",
        releaseYear: 1994,
        reviews: 12000
    },
    {
        id: 303,
        title: "Secret of Mana",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Secret of Mana is an action RPG featuring cooperative gameplay and exploration.",
        rating: 4.5,
        genre: "Action RPG, Co-op, Exploration",
        developer: "Square Enix",
        releaseYear: 1993,
        reviews: 15000
    },
    {
        id: 304,
        title: "Super Metroid",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Super Metroid is a 2D action-adventure game known for its exploration and atmosphere.",
        rating: 4.8,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "Nintendo",
        releaseYear: 1994,
        reviews: 18000
    },
    {
        id: 305,
        title: "A Link to the Past",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "A Link to the Past is a classic action-adventure game featuring exploration and puzzle-solving.",
        rating: 4.9,
        genre: "Action-Adventure, Puzzle, Classic",
        developer: "Nintendo",
        releaseYear: 1991,
        reviews: 25000
    },
    {
        id: 306,
        title: "Super Mario World",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Super Mario World is a classic platformer featuring Mario's adventures in Dinosaur Land.",
        rating: 4.8,
        genre: "Platformer, Classic, Adventure",
        developer: "Nintendo",
        releaseYear: 1990,
        reviews: 35000
    },
    {
        id: 307,
        title: "The Legend of Zelda: A Link Between Worlds",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "The Legend of Zelda: A Link Between Worlds is a 2D action-adventure game with dimensional shifting mechanics.",
        rating: 4.7,
        genre: "Action-Adventure, 2D, Puzzle",
        developer: "Nintendo",
        releaseYear: 2013,
        reviews: 28000
    },
    {
        id: 308,
        title: "Castlevania: Symphony of the Night",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Castlevania: Symphony of the Night is a 2D action-adventure game with exploration and combat.",
        rating: 4.8,
        genre: "Action-Adventure, 2D, Metroidvania",
        developer: "Konami",
        releaseYear: 1997,
        reviews: 22000
    },
    {
        id: 309,
        title: "Mega Man X",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Mega Man X is a classic action platformer featuring challenging gameplay and boss battles.",
        rating: 4.6,
        genre: "Action Platformer, Classic, Challenging",
        developer: "Capcom",
        releaseYear: 1993,
        reviews: 18000
    },
    {
        id: 310,
        title: "Street Fighter II",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Street Fighter II is a classic fighting game that revolutionized the genre.",
        rating: 4.7,
        genre: "Fighting, 2D, Classic",
        developer: "Capcom",
        releaseYear: 1991,
        reviews: 30000
    },
    {
        id: 311,
        title: "GoldenEye 007",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "GoldenEye 007 is a first-person shooter based on the James Bond film.",
        rating: 4.5,
        genre: "FPS, Action, Classic",
        developer: "Rare",
        releaseYear: 1997,
        reviews: 25000
    },
    {
        id: 312,
        title: "Perfect Dark",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Perfect Dark is a first-person shooter featuring stealth and action gameplay.",
        rating: 4.6,
        genre: "FPS, Stealth, Action",
        developer: "Rare",
        releaseYear: 2000,
        reviews: 15000
    },
    {
        id: 313,
        title: "Banjo-Kazooie",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Banjo-Kazooie is a 3D platformer featuring a bear and bird duo on adventures.",
        rating: 4.7,
        genre: "Platformer, 3D, Adventure",
        developer: "Rare",
        releaseYear: 1998,
        reviews: 20000
    },
    {
        id: 314,
        title: "Donkey Kong Country",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Donkey Kong Country is a classic platformer featuring Donkey Kong and Diddy Kong.",
        rating: 4.6,
        genre: "Platformer, 2D, Classic",
        developer: "Rare",
        releaseYear: 1994,
        reviews: 28000
    },
    {
        id: 315,
        title: "Crash Bandicoot",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Crash Bandicoot is a 3D platformer featuring a bandicoot's adventures.",
        rating: 4.5,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 1996,
        reviews: 22000
    },
    {
        id: 316,
        title: "Spyro the Dragon",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Spyro the Dragon is a 3D platformer featuring a dragon collecting gems and rescuing dragons.",
        rating: 4.4,
        genre: "Platformer, 3D, Collection",
        developer: "Insomniac Games",
        releaseYear: 1998,
        reviews: 19000
    },
    {
        id: 317,
        title: "Crash Bandicoot 2: Cortex Strikes Back",
        price: 9.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Crash Bandicoot 2 is the sequel to the original platformer with more challenging levels.",
        rating: 4.6,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 1997,
        reviews: 18000
    },
    {
        id: 318,
        title: "Spyro 2: Ripto's Rage",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Spyro 2 continues the dragon's adventures with new worlds and challenges.",
        rating: 4.5,
        genre: "Platformer, 3D, Collection",
        developer: "Insomniac Games",
        releaseYear: 1999,
        reviews: 16000
    },
    {
        id: 319,
        title: "Jak and Daxter: The Precursor Legacy",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Jak and Daxter is a 3D platformer featuring an ottsel and his friend on adventures.",
        rating: 4.4,
        genre: "Platformer, 3D, Adventure",
        developer: "Naughty Dog",
        releaseYear: 2001,
        reviews: 14000
    },
    {
        id: 320,
        title: "Ratchet & Clank",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Ratchet & Clank is a 3D platformer featuring a lombax and his robot companion.",
        rating: 4.6,
        genre: "Platformer, 3D, Action",
        developer: "Insomniac Games",
        releaseYear: 2002,
        reviews: 17000
    },
    {
        id: 321,
        title: "Sly Cooper and the Thievius Raccoonus",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Sly Cooper is a stealth platformer featuring a raccoon thief and his gang.",
        rating: 4.5,
        genre: "Platformer, Stealth, Adventure",
        developer: "Sucker Punch Productions",
        releaseYear: 2002,
        reviews: 13000
    },
    {
        id: 322,
        title: "Metal Gear Solid 2: Sons of Liberty",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "Metal Gear Solid 2 is a stealth action game with philosophical themes and complex narrative.",
        rating: 4.7,
        genre: "Stealth, Action, Story Rich",
        developer: "Kojima Productions",
        releaseYear: 2001,
        reviews: 25000
    },
    {
        id: 323,
        title: "Grand Theft Auto: San Andreas",
        price: 14.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "GTA: San Andreas is an open-world action game set in 1990s California.",
        rating: 4.8,
        genre: "Action, Open World, Classic",
        developer: "Rockstar Games",
        releaseYear: 2004,
        reviews: 180000
    },
    {
        id: 324,
        title: "The Elder Scrolls IV: Oblivion",
        price: 19.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/81rEhs0G5xL._SL1500_.jpg",
        description: "The Elder Scrolls IV: Oblivion is an open-world RPG set in the province of Cyrodiil.",
        rating: 4.7,
        genre: "RPG, Open World, Fantasy",
        developer: "Bethesda Game Studios",
        releaseYear: 2006,
        reviews: 120000
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    if (game) {
        cart.push(game);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showCustomAlert(`${game.title} added to cart`);
    }
}

function removeFromCart(index) {
    const item = cart[index];
    const itemDiv = document.querySelector(`.cart-item[data-cart-index="${index}"]`);
    if (itemDiv) {
        itemDiv.classList.add('removing');
    }

    showCustomAlert(`${item.title} has been removed from cart`);

    setTimeout(() => {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }, 400);
}

function showCustomAlert(message) {
    let alertEl = document.querySelector('.custom-alert');
    if (alertEl) {
        alertEl.remove();
    }
    alertEl = document.createElement('div');
    alertEl.className = 'custom-alert';
    alertEl.textContent = message;
    document.body.appendChild(alertEl);

    setTimeout(() => {
        alertEl.style.animation = 'alertFadeOut 0.4s ease forwards';
        setTimeout(() => {
            alertEl.remove();
        }, 400);
    }, 1300);
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    if (cartItems) {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.setAttribute('data-cart-index', index);
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${item.title}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItems.appendChild(itemDiv);
        });

        if (totalPrice) {
            totalPrice.textContent = total;
        }
    }
}

let currentPage = 1;
const gamesPerPage = 20;
let totalPages = Math.ceil(games.length / gamesPerPage);

function displayGames(containerId, gamesToDisplay, page = 1) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = '';

        const startIndex = (page - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        const gamesToShow = gamesToDisplay.slice(startIndex, endIndex);

        gamesToShow.forEach(game => {
            const gameCard = document.createElement('a');
            gameCard.className = 'game-card-link';
            gameCard.href = `game.html?id=${game.id}`;
            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title}" class="game-image">
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-price">$${game.price.toFixed(2)}</p>
                    <button class="add-to-cart">Add to Cart</button>
                </div>
            `;

            const addToCartBtn = gameCard.querySelector('.add-to-cart');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(game.id);
                });
            }

            container.appendChild(gameCard);
        });

        displayPagination(containerId, gamesToDisplay.length, page);
    }
}

function displayPagination(containerId, totalGames, currentPage) {
    const container = document.getElementById(containerId);
    const calculatedTotalPages = Math.ceil(totalGames / gamesPerPage);

    const displayTotalPages = totalPages > 0 ? totalPages : calculatedTotalPages;

    if (displayTotalPages <= 1) return; // No pagination needed

    const paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';

    let paginationHTML = '';

    const maxVisibleButtons = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = startPage + maxVisibleButtons - 1;

    if (endPage > displayTotalPages) {
        endPage = displayTotalPages;
        startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    if (startPage > 1) {
        paginationHTML += `<button class="page-btn" onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span class="page-separator">...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            paginationHTML += `<button class="page-btn active" onclick="changePage(${i})">${i}</button>`;
        } else {
            paginationHTML += `<button class="page-btn" onclick="changePage(${i})">${i}</button>`;
        }
    }

    if (endPage < displayTotalPages) {
        if (endPage < displayTotalPages - 1) {
            paginationHTML += `<span class="page-separator">...</span>`;
        }
        paginationHTML += `<button class="page-btn" onclick="changePage(${displayTotalPages})">${displayTotalPages}</button>`;
    }

    paginationDiv.innerHTML = paginationHTML;
    container.appendChild(paginationDiv);
}

function changePage(page) {
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    const filteredGames = getFilteredGames();
    displayGames('products-grid', filteredGames, currentPage);

    document.getElementById('products-grid').scrollIntoView({ behavior: 'smooth' });
}

function getFilteredGames() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    if (searchTerm) {
        return games.filter(game =>
            game.title.toLowerCase().includes(searchTerm) ||
            game.genre.toLowerCase().includes(searchTerm) ||
            game.developer.toLowerCase().includes(searchTerm)
        );
    }
    return games;
}

function searchGames() {
    currentPage = 1; // Reset to first page when searching
    const filteredGames = getFilteredGames();
    totalPages = Math.ceil(filteredGames.length / gamesPerPage);
    displayGames('products-grid', filteredGames, currentPage);
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your purchase! Total: $' + cart.reduce((sum, item) => sum + item.price, 0).toFixed(2));
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCart();
    }
}

function displayGameDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = parseInt(urlParams.get('id'));
    const game = games.find(g => g.id === gameId);

    if (game) {
        const gameContent = document.getElementById('game-content');
        if (gameContent) {
            gameContent.innerHTML = `
                <div class="game-detail-container">
                    <div class="game-detail-image">
                        <img src="${game.image}" alt="${game.title}">
                    </div>
                    <div class="game-detail-info">
                        <h1>${game.title}</h1>
                        <div class="game-meta">
                            <p><strong>Developer:</strong> ${game.developer}</p>
                            <p><strong>Genre:</strong> ${game.genre}</p>
                            <p><strong>Release Year:</strong> ${game.releaseYear}</p>
                            <p><strong>Rating:</strong> ${game.rating}/5 ⭐</p>
                            <p><strong>Reviews:</strong> ${game.reviews.toLocaleString()}</p>
                        </div>
                        <div class="game-price-large">
                            <span class="price">$${game.price.toFixed(2)}</span>
                            <button class="btn add-to-cart-large" onclick="addToCart(${game.id})">Add to Cart</button>
                        </div>
                        <div class="game-description">
                            <h3>Description</h3>
                            <p>${game.description}</p>
                        </div>
                        <div class="back-link">
                            <a href="products.html">← Back to Products</a>
                        </div>
                    </div>
                </div>
            `;
        }
    } else {
        document.getElementById('game-content').innerHTML = '<p>Game not found.</p>';
    }
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    initTheme();

    document.body.classList.add('page-fade');

    if (document.getElementById('featured-games')) {
        displayGames('featured-games', games.slice(0, 4));
    }

    if (document.getElementById('products-grid')) {
        totalPages = Math.ceil(games.length / gamesPerPage);
        displayGames('products-grid', games, 1);
    }

    if (document.getElementById('cart-items')) {
        displayCart();
    }

    if (document.getElementById('game-content')) {
        displayGameDetails();
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const headerRight = this.nextElementSibling;
            if (headerRight) {
                headerRight.classList.toggle('open');
            }
        });
    }

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const headerRight = document.querySelector('.header-right');
            if (headerRight) {
                headerRight.classList.remove('open');
            }
        });
    });

    const phonePreviewToggle = document.getElementById('phone-preview-toggle');
    if (phonePreviewToggle) {
        phonePreviewToggle.addEventListener('click', function() {
            document.body.classList.toggle('phone-preview-active');
            phonePreviewToggle.textContent = document.body.classList.contains('phone-preview-active') ? 'Exit phone view' : 'Show phone view';
        });
    }
});