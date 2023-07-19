# @steeringwaves/eslint-config

This package provides an extensible shared ESLint config.

## Usage

Our default export contains most of our ESLint rules. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`.

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "@steeringwaves/eslint-config@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev @steeringwaves/eslint-config
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "@steeringwaves/eslint-config@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

If using **npm < 5**, Linux/OSX users can run

```sh
(
  export PKG='@steeringwaves/eslint-config';
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev @steeringwaves/eslint-config eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev @steeringwaves/eslint-config
```

The cli will produce and run a command like:

```sh
npm install --save-dev @steeringwaves/eslint-config eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
```

2. Add `"extends": "@steeringwaves/eslint-config"` to your `.eslintrc`
