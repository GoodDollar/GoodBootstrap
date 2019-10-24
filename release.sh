#/bin/bash
TOENV=${1:-'staging'}
VERSION=${2:-'prerelease'} 
PROJECTS=(server dapp)
echo $TOENV $VERSION
for i in "${PROJECTS[@]}"
do
  echo $i
  pushd packages/$i
  npm version $VERSION
  git push --follow-tags
  git push origin master:$TOENV
  popd
done
