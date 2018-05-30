# Development Guidelines

## Modifying an existing component

Most of the time, when you want to change an existing component (fixing a bug, adding a feature, ...), you will want to test your component in the repository you uncovered the bug, or you needed the feature.

To do that, you can use `npm link` utility to link the fyndiq-ui component in development in your local repository:

1. Go to `fyndiq-ui/packages/<package name>/` and run `$ npm link`
1. In your repository, run `npm link <package name>`

Don't forget to run `npm run dev`

That will link your local version of the fyndiq-ui component to your repository. You can then change its code/style to see the changes.

*Note:* There is [a bug](https://github.com/npm/npm/issues/10343) in `npm link` which creates unconsistent behavior after you run `npm install`. If you run in trouble, repeat the steps above.
