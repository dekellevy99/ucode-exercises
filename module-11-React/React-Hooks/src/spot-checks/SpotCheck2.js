import React, { useState } from "react";

export default function SpotCheck2() {
  const [isLoading, setIsLoading] = useState(true);
  const [lesson, setLesson] = useState({
    name: "React Hooks",
    completed: false,
    started: false,
  });

  const updateLesson = (key) => {
    const curLesson = {...lesson}
    curLesson[key] = true
    setLesson(curLesson)
  }


  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {isLoading ? (
          <div>Page is loading...</div>
        ) : (
          <div>
            <p>{lesson.name}</p>
            <p>Lesson status: {lesson.completed ? 'Completed' : (lesson.started? 'In Progress' : 'Not Started')}</p>
            <button onClick={() => updateLesson('started')}>Begin Lesson</button>
            <button onClick={() => updateLesson('completed')}>Complete Lesson</button>

          </div>
        )}
      </div>
    </div>
  );
}
