#!/bin/bash
set -eo pipefail
basehref="$1"
[ -s $HOME/.nvm/nvm.sh ] && . $HOME/.nvm/nvm.sh
export PATH=$PWD/node_modules/.bin/:$PATH
node -v
npm -v
nvm use v10.15.3
ng build --baseHref="/${basehref}/" --prod
