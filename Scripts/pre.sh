#!/bin/bash

echo "running pre-build steps"
echo $(node --version)

echo $(git ls-remote ssh://git@nas.mirrorscapexr.com/mirrorscape/planeshifter.git)

node ./Scripts/dns.js
