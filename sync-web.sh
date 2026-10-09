#!/bin/sh
# Copies the web app (docs/) into the Android project. Run after editing anything in docs/.
set -e
cd "$(dirname "$0")"
rm -rf android/app/src/main/assets/www
mkdir -p android/app/src/main/assets/www
cp -r docs/. android/app/src/main/assets/www/
echo "docs/ -> android/app/src/main/assets/www"
