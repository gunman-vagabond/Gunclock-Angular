#!/bin/sh

#GUNCLOCK_API=http://192.168.11.11:3000/gunclock
#GUNCLOCK_API=http://gunman.mydns.jp:3000/gunclock
npm run prebuild
ng serve --host 0.0.0.0 --disable-host-check
