# A boilerplate for node.js app

## Run in production mode

Insert the following lines to the file `~/.bash_profile`.

```shell
export NODE_ENV=production
export PORT=80
```

Execute `node` as following (`sudo` for binding 80 port and `-E` option for preserving local environment variables):

```
$ sudo -E node server
```
