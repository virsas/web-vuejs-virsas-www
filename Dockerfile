FROM arm64v8/node:18-alpine

WORKDIR /app

# install tzdata and configure container with UTC timezone
RUN apk add --no-cache --update tzdata && \
    rm -rf /var/cache/apk/*
RUN cp /usr/share/zoneinfo/UTC /etc/localtime && \
    echo "UTC" >  /etc/timezone

# copy the application
COPY dist/ssr .

# copy publicly available files
COPY public/robots.txt www/
COPY public/sitemap.xml www/

# setup NodeJS and install dependencies
ENV NODE_ENV=production
RUN npm install --silent && npm cache clean --force

# Expose application ports
EXPOSE 3000

# Run npm server
CMD  npm run start
