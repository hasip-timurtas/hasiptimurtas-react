#!/bin/bash
npm run build
cd build
zip -r build.zip .
unzip -o build.zip -d /home/hasip/public_html/