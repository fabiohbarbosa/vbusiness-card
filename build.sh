#!/bin/bash
rm -rf build
mkdir -p build

npm run build-english && mv dist/ build/ && mv build/dist build/en

npm run build-portuguese && mv dist build/ && mv build/dist build/pt
