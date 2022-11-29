#!/bin/bash

cd /home/ec2-user/dl-orderhero-admin-checklist

DOCKER_APP_NAME=vue

# 실행중인 blue가 있는지
EXIST_BLUE=$(docker ps | grep vue-blue)
echo $EXIST_BLUE

EXIST_NGINX=$(docker ps | grep nginx)
echo $EXIST_NGINX

echo $IDLE_PORT

health_check() {
	RESPONSE=$(curl -s http://127.0.0.1:${IDLE_PORT})
	# 헬스 체크
	if [ -n "$RESPONSE" ]; then
		echo "green down"
		docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml down
		docker image prune -af # 사용하지 않는 이미지 삭제
		return
	fi
	echo "$1...  health check: $IDLE_PORT"
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

	echo "run health check 10 times"

	for RETRY_COUNT in {1..10}; do
		health_check $RETRY_COUNT
	done

	echo "blue up complete"
	# blue가 실행중이면 green up
else
	echo "green up"
	docker-compose -p ${DOCKER_APP_NAME}-green -f docker-compose.green.yml up -d --build

	for RETRY_COUNT in {1..10}; do
		health_check $RETRY_COUNT
	done

	echo "blue down"
	docker-compose -p ${DOCKER_APP_NAME}-blue -f docker-compose.blue.yml down
	docker image prune -af

	echo "green up complete"
fi
