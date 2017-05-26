# Release documentation

## Publish changes

After merging your feature branch on `master`, you can publish your new changes to NPM. To do so, run

``` bash
npm run publish
```

This custom NPM script is a wrapper around `lerna publish`. Follow the command line instructions to publish your changes.

## Build the storybook

Once the components are published, you can release a new version of the storybook that includes your changes (note: this step is only necessary if your release changed the storybook)

``` sh
git checkout gh-pages
git status # should be "nothing to commit"

# make sure you have the latest gh-pages branch
git pull origin gh-pages

# pull your new version
git pull origin master

# build the storybook
./scripts/build-storybook.sh

# commit the files
git commit -am "Build storybook"

git push origin gh-pages
```
