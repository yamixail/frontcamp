### Subtask 5
Replication for DB
```sh
mongod --port 27018 --dbpath ./rs0-0 --replSet rs0
mongod --port 27019 --dbpath ./rs0-1 --replSet rs0
mongod --port 27020 --dbpath ./rs0-2 --replSet rs0
```

### Subtask 4
There are documents for each student (student_id) across a variety of classes (class_id). Your task is to calculate the class with the best average student performance. This involves calculating an average for each student in each class of all non-quiz assessments and then averaging those numbers to get a class average. [Download JSON](https://www.dropbox.com/s/hqs1n2318i5wy9q/grades.json?dl=0)
```sh
mongoimport --port 27018 -d test -c grades --drop --file grades.json
mongo localhost:27018/test subtask4.js
```

### Subtask 2,3
2) Design: Create a Posts DB with instances: authors/articles/comments/tags and others. Try to practice CRUD operation.


3) Make your DB as faster as need but not more (create Indexes).
```sh
mongo localhost:27018/myDatabase subtask23.js
```

### Subtask 1
Create a dump of DB as a archive in .gz format
```sh
mongodump --port 27018 --db test --gzip --archive=myDatabase.gz
mongodump --port 27018 --db myDatabase --gzip --archive=grades.gz
```
