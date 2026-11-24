import { create } from "zustand";

type Course = { _id: string; name: string; number?: string; description?: string; startDate?: string };

type CourseState = {
  courses: Course[];
  course: Partial<Course>;
  setCourse: (c: Partial<Course>) => void;
  addCourse: () => void;
  updateCourse: () => void;
  deleteCourse: (id: string) => void;
  fetchCourses: () => Promise<void>;
};

export const useCourseStore = create<CourseState>((set) => ({
  courses: [],
  course: { name: "", number: "", description: "", startDate: "2026-01-01" },
  setCourse: (c) => set((s) => ({ course: { ...s.course, ...c } })),
  addCourse: () =>
    set((s) => ({
      courses: [
        ...s.courses,
        { _id: `c${Date.now()}`, name: s.course.name ?? "", number: s.course.number ?? "", description: s.course.description ?? "", startDate: s.course.startDate },
      ],
    })),
  updateCourse: () =>
    set((s) => ({
      courses: s.courses.map((c) => (c._id === s.course._id ? { ...c, ...s.course } as Course : c)),
    })),
  deleteCourse: (id) => set((s) => ({ courses: s.courses.filter((c) => c._id !== id) })),
  fetchCourses: async () => {
    const server = process.env.NEXT_PUBLIC_HTTP_SERVER;
    try {
      const res = await fetch(`${server}/api/courses`, { cache: "no-store" });
      const data = await res.json();
      set({ courses: data });
    } catch {
      // leave courses empty if fetch fails
    }
  },
}));