# This repo is not maintained and exists for historical purposes!
There are security issues with one or more dependencies. Use at own risk!

Host Meta Lookup
================
https://gatewayd.org/tools/host-meta/

## Usage

1. Enter domain to look up Host Meta information (example: coin-gate.com)
2. Click submit button
3. Toggle raw JSON data on and off by clicking "raw JSON"

## Example data
**Domain**
coin-gate.com

![Interface](http://i.imgur.com/nFUGeU2.png)

![Interface JSON](http://i.imgur.com/ijsG9Ph.png)

## Development
https://github.com/hserang/host-meta-lookup

#### Install
```
git clone git@github.com:hserang/host-meta-lookup.git
cd host-meta-lookup
```

#### NPM/Bower/Gulp
```
npm install
bower install
ulimit -u 1000
ulimit -n 1000
npm run dev
```
*ulimit commands are only necessary if "npm run dev" produces EMFILE error*

#### Test
```
npm test
```
