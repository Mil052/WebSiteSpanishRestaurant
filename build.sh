#!/bin/sh
rm -R -f build
mkdir build
cd .next/standalone
pwd
cp -R . ../../build
cd ../../
pwd
cp -R ./public ./build
cp -R ./.next/static ./build/.next/static
# cp -R ../usr/local/lib/node_modules/sharp ./build/node_modules/sharp
cp ./.env.local ./build
cp ./next.config.js ./build