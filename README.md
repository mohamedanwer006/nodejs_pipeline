# NodeJs project for testing CI/CD pipelines

## Build Docker image 
```bash
docker build . -t nodejs-project
```
## Run Docker image
```bash
docker run -p 5000:3000 nodejs-project
```