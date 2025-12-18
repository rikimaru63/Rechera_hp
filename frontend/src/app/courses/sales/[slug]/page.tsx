import { notFound } from "next/navigation";
import { getCourseBySlug, salesCourses } from "@/lib/courses";
import SalesCourseDetailClient from "./SalesCourseDetailClient";

// Static generation for all sales courses
export function generateStaticParams() {
  return salesCourses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function SalesCourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug("sales", slug);

  if (!course) {
    notFound();
  }

  const currentIndex = salesCourses.findIndex((c) => c.slug === slug);
  const prevCourse = currentIndex > 0 ? salesCourses[currentIndex - 1] : null;
  const nextCourse =
    currentIndex < salesCourses.length - 1
      ? salesCourses[currentIndex + 1]
      : null;

  const relatedCourses = salesCourses
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <SalesCourseDetailClient
      course={course}
      prevCourse={prevCourse}
      nextCourse={nextCourse}
      relatedCourses={relatedCourses}
    />
  );
}
