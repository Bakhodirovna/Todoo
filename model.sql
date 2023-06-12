CREATE DATABASE todo;
\c todo;

CREATE TYPE todo_status AS ENUM('bajarildi', 'bajarilmadi', 'progress');


CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY NOT NULL,
    todo_text TEXT NOT NULL,
    todo_status todo_status  default "progress",
    todo_created_at TIMESTAMP default CURRENT_TIMESTAMP
);

INSERT INTO todo(todo_text)
VALUES
('nimadur qilish kere1'),
('nimadur qilish kere2'),
('nimadur qilish kere3'),
('nimadur qilish kere4'),
('nimadur qilish kere5'),
('nimadur qilish kere6'),
('nimadur qilish kere7'),
('nimadur qilish kere8'),
('nimadur qilish kere9'),
('nimadur qilish kere10'),
('nimadur qilish kere11'),
('nimadur qilish kere12'),
('nimadur qilish kere13'),
('nimadur qilish kere14'),
('nimadur qilish kere15');

