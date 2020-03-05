Scaffold

```
dotnet new webapi -o reviews --no-https
```

Dockerfile

```
touch Dockerfile
```


Build

```
docker build -t reviews-service .
```

Run

```
docker run -it --rm -p 3001:80 --name reviews-service-container reviews-service
```