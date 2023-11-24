# scake-app

## Установка
npm -i

## Запуск
node app.js

## API

Получить пользователей
http://localhost:4202/api/v1/users/

Получить пользователя с id = 4
http://localhost:4202/api/v1/users/4

## Сдвиг и лимит и фильтрация. Передается в виде URL параметров

Сдвиг offset=20 - будут возвращены строки начиная 20
http://localhost:4202/api/v1/users/?offset=20

Сдвиг limit=10 - будет возвращено 10 строк
http://localhost:4202/api/v1/users/?limit=10

Фильтрация eyeColor=blue - будут возвращены строки у которых свойство eyeColor содержит строку blue
http://localhost:4202/api/v1/users/?eyeColor=blue

Всё вместе: найти всех голубоглазых женщин и вернуть с 20 по 30 из всех таких
http://localhost:4202/api/v1/users/?offset=20&limit=10&eyeColor=blue&gender=female







