rm -r static/
cd packages/fyndiq-ui-test
npm run build-storybook
cd ../..
mv packages/fyndiq-ui-test/storybook-static/* .
