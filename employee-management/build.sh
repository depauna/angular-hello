#!/bin/bash
set -eo pipefail
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh
export PATH=$PWD/node_modules/.bin/:$PATH
node -v
npm -v
nvm use v10.12.0
npm run build
