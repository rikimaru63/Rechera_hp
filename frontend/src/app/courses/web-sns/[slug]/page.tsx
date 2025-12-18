import { notFound } from "next/navigation";
import { getCourseBySlug, webSnsCourses } from "@/lib/courses";
import WebSnsCourseDetailClient from "./WebSnsCourseDetailClient";

// Static generation for all web-sns courses
export function generateStaticParams() {
  return webSnsCourses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function WebSnsCourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug("web-sns", slug);

  if (!course) {
    notFound();
  }

  const currentIndex = webSnsCourses.findIndex((c) => c.slug === slug);
  const prevCourse = currentIndex > 0 ? webSnsCourses[currentIndex - 1] : null;
  const nextCourse =
    currentIndex < webSnsCourses.length - 1
      ? webSnsCourses[currentIndex + 1]
      : null;

  const relatedCourses = webSnsCourses
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <WebSnsCourseDetailClient
      course={course}
      prevCourse={prevCourse}
      nextCourse={nextCourse}
      relatedCourses={relatedCourses}
    />
  );
}
