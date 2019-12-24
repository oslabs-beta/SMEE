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

- Exported and Imported packages are a barebones example of the following.
- Add a folder `touch packages/new-package`
- Add a package.json file `touch packages/new-package/package.json`
- In the package.json file add `"name": "@smee/new-package"`
- In the package.json file add `"version":"1.0.0"`
- In a package that you want to use the new one add a dependency `"@smee/new-package": "1.0.0"`
- Import in the file you want to use the package `import newpackage from '@smee/new-package`
- Profit.
