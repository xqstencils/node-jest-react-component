#! bin/bash
set -e -u

CURRENT_VERSION=`cat package.json | jq -r .version`

echo 'Publish package to npm ...'
npm publish
echo 'Publish package to npm done'
