#!/bin/sh

NPM='node_modules'
SCOPE='@czeckd'
PROJECT='ngx-dragarr'

mkdir -p ${NPM}/${SCOPE}

if [ -e ${NPM}/${SCOPE}/${PROJECT} ]; then
	if [ ! -h ${NPM}/${SCOPE}/${PROJECT} ]; then
		echo "${NPM}/${SCOPE}/${PROJECT} is not a link!"
	fi
else
	ln -s ../../dist ${NPM}/${SCOPE}/${PROJECT}
fi

ls -altr ${NPM}/${SCOPE}/${PROJECT}

