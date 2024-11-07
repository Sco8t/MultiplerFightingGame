Here’s a refined version of your `README.md` file with all the details organized and formatted for clarity:

```markdown
# Multiplayer Fighting Game

This is a simple multiplayer fighting game built with Node.js, Express, and vanilla JavaScript. It allows two players to attack and heal each other until one player's health reaches zero. The game includes sound effects for attacks and healing actions.

## Project Structure

```
FightingGameNode/
├── public/
│   ├── images/
│   │   ├── kyu.gif
│   │   ├── ken.gif
│   │   └── other-images...
│   ├── sounds/
│   │   ├── fastpunch.mp3
│   │   ├── fastheal.mp3
│   │   ├── quickhit.mp3
│   │   ├── quickheal.mp3
│   │   ├── victory.mp3
│   │   └── other-sounds...
│   ├── style.css
│   ├── script.js
│   └── other-public-files...
├── views/
│   ├── index.html
│   └── other-view-files...
├── server.js
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm (Node Package Manager)](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Sco8t/MultiplerFightingGame.git
   ```
2. Navigate to the project directory:
   ```sh
   cd FightingGameNode
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Server

1. Start the server using `nodemon`:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Game Controls

- **Player 1:**
  - Attack: Press `Q`
  - Heal: Press `A`
- **Player 2:**
  - Attack: Press `P`
  - Heal: Press `L`

## Game Logic

The game logic is implemented in `public/script.js`. Here’s a brief overview:

- **Player Class**: Represents a player with properties like `name`, `health`, and `attackDmg`. It includes methods such as `strike` (for attacking) and `heal`.
- **Game Class**: Manages the game state and updates it based on player actions. The `updateGame` function checks if either player's health is zero and updates the game state.
- **Event Listeners**: Listens for keyboard inputs to trigger player actions (attack and heal).
- **Simulation**: The `play` function simulates random actions (attacks and heals) between players until one player’s health reaches zero.

### Example Game Logic (Excerpt from `script.js`):

```javascript
class Player {
  constructor(name, health, attackDmg) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDmg;
  }

  strike(player, enemy, attackDmg) {
    // Logic for player attack
  }

  heal(player) {
    // Logic for player heal
  }
}

class Game {
  updateGame(p1, p2, gameState) {
    // Logic to update game state
  }

  play(p1, p2) {
    while (!(p1.health <= 0 || p2.health <= 0)) {
      const actions = [
        p1.strike(p1, p2, p1.attackDmg),
        p2.strike(p2, p1, p2.attackDmg),
        p1.heal(p1),
        p2.heal(p2)
      ];
      const randomAction = Math.floor(Math.random() * actions.length);
      actions[randomAction];
    }
  }
}
```

## Files

### `server.js`

Sets up the Express server to serve static files and handle requests.

### `views/index.html`

The main HTML file for the game. It defines the structure of the game interface and includes references to the CSS and JavaScript files.

### `public/script.js`

Contains the core logic of the game, including player actions, game state updates, and event listeners for keyboard inputs.

### `public/sounds`

Directory containing sound effects for the game (attack and heal sounds).

### `public/images`

Directory containing images for player avatars and other visuals used in the game.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/)
- [GitHub](https://github.com/)

---

Enjoy playing the Multiplayer Fighting Game and feel free to contribute!
```

This `README.md` file provides a clear structure, installation instructions, a description of the game logic, and an overview of the files involved in the project. Let me know if there are any other details you'd like to add!
