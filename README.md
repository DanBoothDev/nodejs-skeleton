# NodeJS Skeleton

A skeleton for building NodeJS microservices.


## Running
```
npm run start
```

## Docker
### Run
Interactive console with automatic update
```
docker run -it -p 9000:3000 -v $(pwd)/src nodejs-skeleton
```

Background
```
docker run -d -p 9000:3000 nodejs-skeleton
```

### Build
```
docker build -t nodejs-skeleton .
```
