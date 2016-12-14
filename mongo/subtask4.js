db.grades.aggregate(
   [
      {
          $project: {
              _id: 1,
              student_id: 1,
              class_id: 1,
              scores: {
                  $filter: {
                    input: "$scores",
                    as: "scores",
                    cond: { $ne: [ "$$scores.type", "quiz" ] }
                  }
              }
          }
      },
      {
          $project: {
              _id: 1,
              student_id: 1,
              class_id: 1,
              average: {
                  $avg: "$scores.score"
              }
          }
      },
      {
          $group: {
              _id: "$class_id",
              avg: {
                  $avg: "$average"
              }
          }
      },
      { $sort: { avg : -1 } },
      { $limit: 1 }
   ]
)