#!/bin/bash
npm run build
cd build
zip -r build.zip .
unzip -o build.zip -d /home/hasiptimurtas/public_html/