"use client";
import CourseCard from "./CourseCard";
import { useCourseStore } from "../useCourseStore";

export default function Dashboard() {
  const courses = useCourseStore((s) => s.courses);
  const course = useCourseStore((s) => s.course);
  const setCourse = useCourseStore((s) => s.setCourse);
  const addCourse = useCourseStore((s) => s.addCourse);
  const updateCourse = useCourseStore((s) => s.updateCourse);
  const deleteCourse = useCourseStore((s) => s.deleteCourse);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <div id="wd-course-form">
        <input placeholder="Name" value={course.name ?? ""} onChange={(e) => setCourse({ name: e.target.value })} />
        <input placeholder="Description" value={course.description ?? ""} onChange={(e) => setCourse({ description: e.target.value })} />
        <input placeholder="Number" value={course.number ?? ""} onChange={(e) => setCourse({ number: e.target.value })} />
        <input type="date" value={course.startDate ?? ""} onChange={(e) => setCourse({ startDate: e.target.value })} />
        <button id="wd-add-course-click" onClick={addCourse}>Add</button>
        <button id="wd-update-course-click" onClick={updateCourse}>Update</button>
      </div>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => deleteCourse(c._id)}
            image={`https://picsum.photos/seed/${c._id}/300/160`}
          />
        ))}
      </div>
    </div>
  );
}