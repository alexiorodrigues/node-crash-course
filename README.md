# node-crash-course

## Test project with node basics from The Net Ninja

Author:

- [iamshaunjp](https://github.com/iamshaunjp)

Tutorial series:

- https://www.youtube.com/watch?v=zb3Qk8SG5Ms

## Instalation

### Install Node JS

https://nodejs.org/en/download/package-manager/

Ubuntu / Linux - https://github.com/nodesource/distributions/blob/master/README.md#debinstall

```bash
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Run the project

### Keys required

This project uses Mongo Atlas

1. Create a new account at https://www.mongodb.com/cloud/atlas
2. Create a new document named `dbSettings.js` in the project root
3. Fill it with this template + your Mongo credentials

```js
const username = 'username';
const password = 'password';
const cluster = 'cluster';
const project = 'project';

const address =
  'mongodb+srv://' +
  username +
  ':' +
  password +
  '@' +
  cluster +
  '.jnchg.mongodb.net/' +
  project +
  '?retryWrites=true&w=majority';

module.exports = {
  address,
};
```

### Run App

```bash
nodemon app
```
