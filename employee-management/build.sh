#!/bin/bash
set -eo pipefail
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh
export PATH=$PWD/node_modules/.bin/:$PATH
node -v
npm -v
nvm use v10.15.3
npm run build
