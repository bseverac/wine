#!/bin/bash
trap "docker compose stop" SIGINT SIGTERM

docker compose up -d
bin/dev
