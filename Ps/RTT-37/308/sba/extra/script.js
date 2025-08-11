// ===== Data =====
const courseInfo = {
  id: 1,
  name: "101"
};

const assignmentGroup = {
  id: 10,
  name: "Homework",
  course_id: 1,
  group_weight: 50,
  assignments: [
    { id: 101, name: "HW1", due_at: "01-08-2025", points_possible: 100 },
    { id: 102, name: "HW2", due_at: "06-08-2025", points_possible: 100 }
  ]
};

const learnerSubmissions = [
  { learner_id: 1, assignment_id: 101, submission: { submitted_at: "01-08-2025", score: 70 } },
  { learner_id: 1, assignment_id: 102, submission: { submitted_at: "06-08-2025", score: 100 } },
  { learner_id: 2, assignment_id: 101, submission: { submitted_at: "01-08-2025", score: 90 } },
  { learner_id: 2, assignment_id: 102, submission: { submitted_at: "07-08-2025", score: 80 } },
];

// Main Function 
function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  try {
    if (!courseInfo || typeof courseInfo.id !== "number") {
      throw new Error("Invalid CourseInfo object");
    }
    if (!assignmentGroup || typeof assignmentGroup.course_id !== "number") {
      throw new Error("Invalid AssignmentGroup object");
    }
    if (assignmentGroup.course_id !== courseInfo.id) {
      throw new Error(`AssignmentGroup course_id ${assignmentGroup.course_id} does not match CourseInfo id ${courseInfo.id}`);
    }
    if (!Array.isArray(assignmentGroup.assignments)) {
      throw new Error("AssignmentGroup.assignments must be an array");
    }
    if (!Array.isArray(learnerSubmissions)) {
      throw new Error("LearnerSubmissions must be an array");
    }
    

    const now = new Date();
    const resultsMap = {};

    for (let i = 0; i < learnerSubmissions.length; i++) {
      const sub = learnerSubmissions[i];
      if (!sub || typeof sub.learner_id !== "number" || typeof sub.assignment_id !== "number") {
        console.warn("Invalid learner submission at index", i);
        continue;
      }

      const assignment = assignmentGroup.assignments.find(a => a.id === sub.assignment_id);
      if (!assignment) {
        console.warn(`Skipping submission for unknown assignment id ${sub.assignment_id}`);
        continue;
      }
      

      if (typeof assignment.points_possible !== "number" || assignment.points_possible <= 0) {
        console.warn(`Invalid points_possible for assignment id ${assignment.id}`);
        continue;
      }

      const dueDate = new Date(assignment.due_at);
      if (isNaN(dueDate.getTime())) {
        throw new Error(`Invalid due_at date for assignment id ${assignment.id}`);
}
      if (dueDate > now) continue; // skip if not yet due

      let score = Number(sub.submission?.score);
      if (isNaN(score)) {
        console.warn(`Invalid score for learner ${sub.learner_id} on assignment ${assignment.id}`);
        continue;
      }

      const submittedDate = new Date(sub.submission?.submitted_at);
      if (submittedDate > dueDate) {
        score -= assignment.points_possible * 0.1; // late penalty
        if (score < 0) score = 0;
      }

      if (!resultsMap[sub.learner_id]) {
        resultsMap[sub.learner_id] = {
          id: sub.learner_id,
          totalPoints: 0,
          totalPossible: 0
        };
      }

      const learnerRecord = resultsMap[sub.learner_id];
      learnerRecord[assignment.id] = +((score / assignment.points_possible) * 100).toFixed(1);
      learnerRecord.totalPoints += score;
      learnerRecord.totalPossible += assignment.points_possible;
    }

    const finalResults = [];
    for (const learnerId in resultsMap) {
      const rec = resultsMap[learnerId];
      const avg = rec.totalPossible > 0 ? rec.totalPoints / rec.totalPossible : 0;
      const { totalPoints, totalPossible, ...scores } = rec;
      finalResults.push({
        ...scores,
        avg: +(avg * 100).toFixed(1)
      });
    }

    return finalResults;
  } catch (err) {
    console.error("Error in getLearnerData:", err.message);
    return [];
  }
}

console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmissions));
