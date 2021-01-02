#!/bin/bash
npm run build
scp -r ./build/* root@95.179.168.245:/home/hasip/public_html/