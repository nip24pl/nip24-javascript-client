# NIP24 Client for JavaScript

This is the official repository for [NIP24](https://nip24.pl) Client for JavaScript

This library contains validators for common Polish tax numbers like NIP, REGON and KRS. Validators for EU VAT ID
and IBAN are also included. After registration at [NIP24](https://nip24.pl) Portal this library could be used for
various on-line validations of Polish and EU companies. Please, visit our web page for more details.

## Documentation

The documentation and samples are available [here](https://nip24.pl/dokumentacja/).

## Build

Node.js 22+ is required to build this library. Building is only required to generate TypeScript definitions.

```bash
git clone https://github.com/nip24pl/nip24-javascript-client.git
cd nip24-javascript-client
npm install
npm run build:types
```

## How to use

The release version of the library is published in [NPM](https://www.npmjs.com/package/nip24client).
Add the following dependency using the _npm_ tool:

```bash
npm install nip24client
```

The _example_ directory contains a sample usage from a Node.js application, and the _example-web_ directory contains
a sample usage from an HTML web application.

## License

This project is delivered under Apache License, Version 2.0:

- [![License (Apache 2.0)](https://img.shields.io/badge/license-Apache%20version%202.0-blue.svg?style=flat-square)](http://www.apache.org/licenses/LICENSE-2.0)