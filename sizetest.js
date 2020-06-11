const {exec} = require("child_process")

const entry = {activityType: "Other",
activity_type_id: 4,
completion_date: "2020-06-03T00:00:00.000Z",
created_at: "2020-06-04T00:28:46.429Z",
description: "fffffff",
duration: "0.00",
id: 756,
name: "History",
photo: "https://cloudinary.hash.com/thisisapictureurl/anditsprobablyabouthtislong",
student_id: 3,
studentsName: "Jim",
subject: "Other",
subject_id: 9
}
const output = []
for (let i = 0 ; i < 724; i++) {
    output.push(entry)
    exec(`echo ${JSON.stringify(entry)} >> sizetest.txt`)
}