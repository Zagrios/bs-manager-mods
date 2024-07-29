FROM node:lts-alpine

ENV USER=beatmods
ENV GROUPNAME=$USER
ENV UID=5000
ENV GID=5000

WORKDIR /app

RUN addgroup --gid "$GID" "$GROUPNAME" \
&&  adduser --disabled-password --gecos "" --home "$(pwd)" --ingroup "$GROUPNAME" --no-create-home --uid "$UID" $USER

WORKDIR /app/beatmods

COPY --chown=$USER:$USER . /app/beatmods
RUN npm install

RUN chown $USER:$USER /app

EXPOSE 8080
CMD sh -c "npm run dev"