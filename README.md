# Hello Vanilla JS

A template project for [Vanilla JS](http://vanilla-js.com/).


```
yarn install
```

```
yarn protoc

for f in src/proto/*.js
do
    echo '/* eslint-disable */' | cat - "${f}" > temp && mv temp "${f}"
done
```


```
yarn build
yarn dev
```