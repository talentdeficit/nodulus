##!/usr/bin/env bash

## Source profile
. ~/.profile

pwd

SCRIPTS=/cygdrive/c/Users/buildbot/*.sh
ls $SCRIPTS
for f in $SCRIPTS; do
    echo "Printing $f"
    cat "$f"
    echo "-----"
done
