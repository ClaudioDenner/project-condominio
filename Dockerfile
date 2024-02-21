FROM node:20.11.1-alpine3.19
WORKDIR /backend
COPY . /backend
EXPOSE 3000
RUN npm run i
RUN npx prisma db pull
RUN npx prisma generate
RUN npm run build
CMD [ "npm","run","start" ]