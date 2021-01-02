#!/bin/bash
npm i
npm run build
scp -r ./build/* ./build/.htaccess root@95.179.168.245:/home/hasip/public_html/