# GitHub Actions Demo
[![SonarCloud analysis](https://github.com/nick11703/github-actions-demo/actions/workflows/test-and-scan.yaml/badge.svg)](https://github.com/nick11703/github-actions-demo/actions/workflows/test-and-scan.yaml)

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```


## Containerizing

Build with docker for node 18.12
```bash
docker build \
  -t app-build \
  -f Dockerfile .
```
Running the app in debug mode
```bash
docker run --rm -p 3000:3000 -p 9229:9229 app-build
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
