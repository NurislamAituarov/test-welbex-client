create TABLE tableItem(
    id SERIAL PRIMARY KEY,
    date VARCHAR(255),
    name VARCHAR(255),
    amount VARCHAR(255),
    distance VARCHAR(255)
);
insert into tableItem(date, name, amount, distance)values('16/06/22','Name','120','456');