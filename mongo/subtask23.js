// CREATE
db.authors.insertMany([{_id: 1, name: 'Anatoly'},{_id: 2, name: 'Boris'},{_id: 3, name: 'Chloe'}]);

db.tags.insertMany([{_id: 1, name: 'Odd'},{_id: 2, name: 'Even'},{_id: 3, name: 'Modulus3'}]);

db.articles.insertOne({_id: 1, date: new Date("2016-12-13T16:00:00Z"), author_id: 1, title: 'Title 1', content: 'Lorem ipsum dolor sit amet.', tags_id: [1]})
db.articles.insertOne({_id: 2, date: new Date("2016-12-13T16:10:00Z"), author_id: 2, title: 'Title 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing.', tags_id: [2]})
db.articles.insertOne({_id: 3, date: new Date("2016-12-13T16:20:00Z"), author_id: 3, title: 'Title 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, porro.', tags_id: [1, 3]})
db.articles.insertOne({_id: 4, date: new Date("2016-12-13T16:30:00Z"), author_id: 1, title: 'Title 4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', tags_id: [2]})
db.articles.insertOne({_id: 5, date: new Date("2016-12-13T16:40:00Z"), author_id: 2, title: 'Title 5', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, harum cupiditate autem velit voluptatum ea!', tags_id: [1]})

db.comments.insertOne({article_id: 1, author: 'Guest1', text: 'Such wow'})
db.comments.insertOne({article_id: 1, author: 'Guest2', text: 'What are you talking about?'})
db.comments.insertOne({article_id: 2, author: 'Guest3', text: 'YOLO'})

// READ
db.articles.find({tags_id: {$elemMatch: {$eq: 2} }})

// UPDATE
db.articles.updateOne({_id: 4}, {date: new Date("2016-12-13T17:33:00Z")})

// DELETE
db.articles.deleteOne({_id: 5})

/*
!!!!!!!!!!!!!!! SUBTASK 3
*/
db.articles.createIndex( { date: 1 } )