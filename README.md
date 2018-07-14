# dictionary_demo_with_node_es6


This is a simple dictionary key/value store script using only core NodeAPI and ECMAScript 5 or 6.
Store the key/value dictionary using filesystem.
The client should be a standalone terminal tool.
Commit and track your work history in a new GitLab repo. Once finished email the link to your repo.

SETUP THE PROJECT:

-clone the repo

-execute this in your terminal in the repo location:-


$ npm i

$ chmod a+x store

$ npm run build


Store Commands:

$ node dist/store.js add mykey myvalue

$ node dist/store.js list

$ node dist/store.js get mykey

$ node dist/store.js remove mykey

$ node dist/store.js clear

You can use the commands in this format:
ex:- ./store add mykey myvalue
