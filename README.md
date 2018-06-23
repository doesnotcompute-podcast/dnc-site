# Does Not Compute

> A weekly podcast about the lives and workflows of modern web developers, hosted by Sean Washington & Paul Straw.

## Development

1. Install [Docker](https://www.docker.com/)
2. Add your `.env` file to the project root. An example can be found at `.env.sample`.
3. Run `docker-compose build`
4. Run `./dev.sh`
5. Visit `localhost:3000`

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Deploy Process

```shell
# set active docker-machine to dnc-site
eval $(docker-machine env dnc-site)

Run ./deploy.sh

# set active docker-machine back to local install
eval $(docker-machine env -u)
```
