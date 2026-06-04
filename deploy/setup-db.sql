CREATE USER IF NOT EXISTS 'nest' @'localhost' IDENTIFIED BY 'NestDemo2026!';

GRANT ALL PRIVILEGES ON nest_demo.* TO 'nest' @'localhost';

FLUSH PRIVILEGES;