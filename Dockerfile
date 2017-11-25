FROM node:carbon

WORKDIR /home/alberic/portfolio

COPY . .
RUN yarn
RUN [ "yarn", "build" ]

EXPOSE 5000
CMD [ "yarn", "start:prod" ]
