#!/bin/bash

# releases a new version
# Make sure the input to this matches the version number in package.json
release () {
  echo "Version $1 in progress"
  git tag v$1
  git push origin --tags
  git add .
  git commit -m "Bump version to $1.$2.$3"
  git push origin master
  npm publish
  echo "Version $1 published successfully"
}

if [ $# -ne 3 ]
  then
  echo "Usage: ./release.sh 3 2 1 for releasing v3.2.1"
  exit 1
fi
echo "This will release new Version v$1.$2.$3"

# ask for user's confirmation
read -p "Are you sure you want to continue? (y/n) " choice
case "$choice" in
  y|Y) release "$1.$2.$3" ;;
  *) echo "Aborting..."
esac