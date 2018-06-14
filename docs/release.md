# Release documentation

## Publish changes

After merging your feature branch on `master`, you can publish your new changes to NPM. To do so, run

``` bash
npm run publish
```

This custom NPM script is a wrapper around `lerna publish`. Follow the command line instructions to publish your changes.

If you need to be more specific about what you want to publish, (for instance if you added one icon to `fyndiq-icons` but you don't want to bump every single dependant packages' versions), you can run:

``` bash
npm run publish -- --scope fyndiq-icons --scope fyndiq-component-something
```

Note that there seems to be a bug if you're using zsh, you need to press CMD+C if the previous command hangs up. That will trigger lerna to publish the NPM packages.

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
npm run build-storybook

# build the sketch exports
# This step is optional, you don't need to export the sketch assets since
# it is not used at the moment.
npm run sketch-export

# Add and commit the files
git add .
git commit -m ":factory: Build storybook"

git push origin gh-pages
```
