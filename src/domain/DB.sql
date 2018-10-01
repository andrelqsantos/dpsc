CREATE DATABASE spsc;

create table indexs (
  indexId serial primary key,
  name varchar(255),
  text varchar(255));


insert into indexs (name, text) values('andre', 'Teste de inserção');

SELECT * FROM indexs
