import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="1234"
          title="Web Development"
          subtitle="Full Stack software developer"
          image="https://picsum.photos/seed/webdev/300/160"
        />
        <CourseCard
          id="5678"
          title="Algorithms"
          subtitle="Design and analysis of algorithms"
          image="https://picsum.photos/seed/algo/300/160"
        />
        <CourseCard
          id="9012"
          title="Numerical Analysis"
          subtitle="Numerical methods and computation"
          image="https://picsum.photos/seed/numanalysis/300/160"
        />
      </div>
    </div>
  );
}