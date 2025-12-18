import { notFound } from "next/navigation";
import { getCourseBySlug, businessCourses } from "@/lib/courses";
import BusinessCourseDetailClient from "./BusinessCourseDetailClient";

// Static generation for all business courses
export function generateStaticParams() {
  return businessCourses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function BusinessCourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug("business", slug);

  if (!course) {
    notFound();
  }

  const currentIndex = businessCourses.findIndex((c) => c.slug === slug);
  const prevCourse =
    currentIndex > 0 ? businessCourses[currentIndex - 1] : null;
  const nextCourse =
    currentIndex < businessCourses.length - 1
      ? businessCourses[currentIndex + 1]
      : null;

  const relatedCourses = businessCourses
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <BusinessCourseDetailClient
      course={course}
      prevCourse={prevCourse}
      nextCourse={nextCourse}
      relatedCourses={relatedCourses}
    />
  );
}
