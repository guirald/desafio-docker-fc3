FROM golang:1-alpine3.15 AS builder

WORKDIR /usr/src/app

COPY . .

RUN go mod init desafio/fc30

COPY *.go ./

RUN go build -o /docker-desafio-fc30


FROM scratch 

WORKDIR /

COPY --from=builder /docker-desafio-fc30 /docker-desafio-fc30

ENTRYPOINT [ "/docker-desafio-fc30" ]
