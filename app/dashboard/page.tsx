import CourseCard from "./CourseCard";
import coursesData from "@/app/database/courses.json";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({coursesData.length})</h2>
      <hr />
      <div id="wd-dashboard-courses" className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {coursesData.map((c) => (
          <CourseCard
            key={c._id}
            id={c._id}
            title={c.name}
            subtitle={c.description}
            image={`https://picsum.photos/seed/${c._id}/300/160`}
          />
        ))}
      </div>
    </div>
  );
}