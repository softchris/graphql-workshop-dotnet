Scaffold

```
dotnet new webapi -o products --no-https
```

Dockerfile

```
touch Dockerfile
```


Build

```
docker build -t products-service .
```

Run

```
docker run -it --rm -p 3000:80 --name products-service-container products-service
```