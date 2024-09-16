-- Active: 1726503769093@@127.0.0.1@5432
CREATE DATABASE myDb

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    age INT,
    email VARCHAR(50) NOT NULL,
    frontend_mark INT,
    backend_mark INT,
    status VARCHAR(50) DEFAULT NULL
)

INSERT INTO
    students (
        student_name,
        age,
        email,
        frontend_mark,
        backend_mark
    )
VALUES (
        ' BAbu',
        23,
        'babu@gmail.com',
        58,
        56
    )

SELECT * FROM students

CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL,
    credits INT
)

INSERT INTO
    courses (course_name, credits)
VALUES ('React JS', 30)

SELECT * FROM courses

CREATE TABLE enrollment (
    enrollment_id SERIAL,
    student_id INT,
    CONSTRAINT fk_student_id FOREIGN KEY (student_id) REFERENCES students (student_id),
    course_id INT,
    CONSTRAINT fk_course_id FOREIGN KEY (course_id) REFERENCES courses (course_id)
)

INSERT INTO enrollment (student_id, course_id) VALUES (1, 2)

SELECT * FROM enrollment

SELECT *
FROM
    enrollment e
    LEFT JOIN students s ON e.student_id = s.student_id
    LEFT JOIN courses c ON e.course_id = c.course_id
WHERE
    course_name = 'Next JS'

UPDATE students
SET
    status = 'Awarded'
WHERE
    student_id = (
        SELECT student_id
        FROM (
                SELECT student_id
                FROM students
                ORDER BY (frontend_mark + backend_mark) DESC
                LIMIT 1
            ) AS top_student
    );

DELETE FROM courses
WHERE
    course_id IN (
        SELECT c.course_id
        FROM courses c
            LEFT JOIN enrollment e ON c.course_id = e.course_id
        WHERE
            e.course_id IS NULL
    )

SELECT c.course_name, COUNT(s.student_id) students_enrolled
FROM
    courses c
    LEFT JOIN enrollment e ON c.course_id = e.course_id
    LEFT JOIN students s ON e.student_id = s.student_id
GROUP BY
    c.course_id

SELECT AVG(age) average_age FROM students

SELECT student_name FROM students WHERE email LIKE '%@gmail.com'