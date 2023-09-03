# J-League Predictor
<img src="/images\header.jpg" alt="Header" title="Header">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) ![GitHub last updated (branch)](https://img.shields.io/github/last-commit/LakGillJPN/j-league-predictor) ![GitHub issues](https://img.shields.io/github/issues/LakGillJPN/j-league-predictor) 



The J-League Predictor is an application that allows soccer fans to predicate the outcome of J-League games and earn points for accuracy.

Deployment: https://j-league-predictor.onrender.com/

## Tech Stack - Frontend

| Task       | Tech        |
| ---------- | ----------- |
| Language  | ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  |
| Framework  | ![React](https://img.shields.io/badge/React-blue?style=for-the-badge&logo=next.js&logoColor=white)    |
|  User Auth | ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) |

## Tech Stack - Backend

| Task       | Tech        |
| ---------- | ----------- |
| Language  | ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  |
| Framework  | ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)   |
|  Database | ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)|

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LakGillJPN/j-league-predictor.git

   ```

2. Install dependencies:
    
    ```bash
    
    npm install 
    
    ```

3. This application uses Firebase for authentication. Please create a `.env` file and use the `.env.example` file to see what variables are required.

# Usage

The J-League Predictor app utilizes Express for its backend and React for its frontend. To run the app, it is necessary to start the backend server before launching the frontend:

1. Start the Express server:

    ```bash
    
    npm run start
    
    ```
    
2. The Express server will run on  **`http://localhost:4000/`**

3. Move to the Frontend folder:

    ```bash
    
    cd frontend/
    
    ```
4. Start the Frontend server:

    ```bash
    
    npm run start
    
    ```
    
5. The Frontend server will run on  **`http://localhost:3000/`**



# Home
<img src="/images\homepage.jpg" alt="Homepage" title="Homepage">

On the home page we have a carousel wheel displaying all the of the games upcoming in this gameweek.

# Play
<img src="/images\play_page.jpg" alt="Play" title="Play">

In this page, users can make their predication of what they think the score of this week's games will be. After making their predication, a user can alter their predication right up to the deadline.

# Results
<img src="/images\results.jpg" alt="Results" title="Results">

The results of the previous gameweek are compared to the user's predication and awarded points. 

- [ ] Correct Home or Away Score - 30pts
- [ ] Correct Outcome - 50pts
- [ ] Correct Home or Away Score + Correct Outcome - 70pts
- [ ] Correct Home and Away Score + Correct Outcome - 100pts

# Future Features
- [ ] Leaderboard
- [ ] Mobile View
- [ ] Display Names
- [ ] Results of Previous Gameweeks

# Goals
- To have the application fully functional for the start of the next J-League season
- To have the app deployed on either AWS or Heroku
