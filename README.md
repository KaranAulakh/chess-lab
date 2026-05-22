# ChessApp
## Overview
ChessApp is a full-stack web application that lets users play chess in the browser. It features:
- A Python/Flask backend that handles game logic, move validation, and API endpoints.
- A modern Vue.js frontend for an interactive user experience with a clean UI.

The app supports standard chess rules, including legal move validation, game state management, and user interaction through a responsive interface.

## Backend Server
### Running Locally 
*Recommended to run with Docker, make sure you have docker installed and running*
```bash
cd /Users/karan.aulakh/personal/ChessApp/backend

# Build & run Docker container
docker build -t chess-backend .
docker run -p 5001:5000 chess-backend

# In a new terminal, test your changes
curl -X POST http://localhost:5001/new-game
```

*Alternatively, you may run with a virtual env instead*
```bash
- python3 -m venv venv
# Activate the virtual enviornment 
# Macbook 
source venv/bin/activate
# Windows
venv\Scripts\activate
# install all dependencies such as Flask
pip install -r backend/requirements.txt
```


### Pushing changes
- Simply push changes to main in git, railway auto-deploys
- https://railway.app/dashboard (might take 2-5 minutes to redeploy)
- Then you can test with actual server URL



## Frontend Server
### Running Locally
Install nvm if you don't have it already
- ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash```
- add the following to your ~/.zshrc or ~/.bash or equivalent depending on the shell you are using
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```
- Restart your terminal
- navigate to frontend folder
- ```nvm install --lts```
- ```nvm use --lts```
- ```npm init -y```

To run the Server
- ```npm install```
- ```npm run serve```



### Pushing changes
- Simply push changes, Vercel auto-deploys
- https://vercel.com/dashboard (takes 1-2 minutes to redeploy)
- Live at: https://labchess.com and https://www.labchess.com