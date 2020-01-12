# SMEE

## State-Management : Extremely Easy

_TODO_:

- Fix this readme
- Add shields.io

### How to use this repo

To install dependencies

```sh
yarn install
```

To start the sample site:

```sh
yarn site:start
```

To start the create-react-app site:

```sh
yarn cra:start
```

---

### To add a new package to repo

- If the new package is named: `new-package`
- Add a folder `mkdir packages/new-package`
- Add a package.json file `touch packages/new-package/package.json`
- In the package.json file add `"name": "@smee/new-package"`
- In the package.json file add `"version":"1.0.0"`
- To use the package inside another package add the dependency `"@smee/new-package": "1.0.0"`
- Import in the file you want to use from the new package `import newpackage from '@smee/new-package`
- Profit.
