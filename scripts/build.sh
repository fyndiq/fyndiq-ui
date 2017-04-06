#!/bin/sh

if [ "$1" = 'dev' ]; then
  if [ -z "$2" ]; then
    # Watch all modules
    for f in packages/*; do
      if [ -d "$f" ] && [ -e "$f/package.json" ] && [ -e "$f/src/index.js" ]; then
        ./node_modules/babel-cli/bin/babel.js $f/src/ --out-dir $f/lib --ignore *.test.js --watch &
      fi
    done
    cd packages/fyndiq-ui-test
    npm run storybook
  else
    # Watch one module
    ./node_modules/babel-cli/bin/babel.js $package/src/ --out-dir $package/lib --ignore *.test.js --watch
  fi

else
  # Compile all modules
  for f in packages/*; do
    if [ -d "$f" ] && [ -e "$f/package.json" ] && [ -e "$f/src/index.js" ]; then
      ./node_modules/babel-cli/bin/babel.js $f/src/ --out-dir $f/lib --ignore *.test.js
    fi
  done
fi
