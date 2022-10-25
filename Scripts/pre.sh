#!/bin/bash

echo "running pre-build steps"
echo ${node --version}

node ./Scripts/dns.js
