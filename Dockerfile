ARG SOURCE_INSTALL_IMAGE=node:18.12-slim
FROM $SOURCE_INSTALL_IMAGE AS build
WORKDIR /var/www
COPY . .
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM $SOURCE_INSTALL_IMAGE AS final
COPY --from=build --chown=node:node /var/www/.output /var/www/.output
EXPOSE 3000
EXPOSE 9229
ENTRYPOINT [ "node", "/var/www/.output/server/index.mjs" ]
