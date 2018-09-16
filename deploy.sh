#!/bin/bash
source ~/.bashrc
source ~/.bash_profile
yarn
yarn build
tmux kill-session -t memebank
tmux new -s memebank -d
tmux send-keys -t memebank 'NODE_ENV=production forever --id=memebank server.js' Enter
