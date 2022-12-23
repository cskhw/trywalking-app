#!/bin/bash

cd /home/ec2-user/dl-orderhero-admin-checklist

DOCKER_APP_NAME=vue

# 실행중인 blue가 있는지
EXIST_BLUE=$(docker ps | grep vue-blue)
# 실행중인 nginx가 있는지
EXIST_NGINX=$(docker ps | grep nginx)

health_check() {
	RESPONSE=$(curl -s http://127.0.0.1:$2)
	# 헬스 체크
	echo "$3 health check: $IDLE_PORT count: $1... "
	echo $RESPONSE
	if [ -n "$RESPONSE" ]; then
		echo "$3 down"
		docker-compose -p ${DOCKER_APP_NAME}-$3 -f docker-compose.green.yml down
		docker image prune -af # 사용하지 않는 이미지 삭제
		echo "$3 down complete"
		exit
	fi
	sleep 3
}

# nginx 콘테이너가 없으면 빌드
if [ -z "$EXIST_NGINX" ]; then
	docker-compose -p nginx -f docker-compose.nginx.yml up --build -d
fi

# green이 실행중이면 blue up
if [ -z "$EXIST_BLUE" ]; then
	echo "blue up"
	docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml up -d --build
	IDLE_PORT=5201
	echo "blue up complete"

	for RETRY_COUNT in {1..10}; do
		health_check $RETRY_COUNT $IDLE_PORT "green"
	done

	echo "Failed to health check. Please check docker container is running."

# blue가 실행중이면 green up
else
	echo "green up"
	docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml up -d --build
	IDLE_PORT=5202
	echo "green up complete"

	for RETRY_COUNT in {1..10}; do
		health_check $RETRY_COUNT $IDLE_PORT "blue"
	done

	echo "Failed to health check. Please check docker container is running."
fi
