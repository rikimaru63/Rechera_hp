"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// Media items for the slider
const mediaItems = [
  { type: "image", src: "/activity/img-01.jpg", alt: "コミュニティ活動" },
  { type: "image", src: "/activity/img-02.jpg", alt: "交流会" },
  { type: "image", src: "/activity/img-03.jpg", alt: "学習風景" },
  { type: "image", src: "/activity/img-04.jpg", alt: "メンバー交流" },
  { type: "image", src: "/activity/img-05.jpg", alt: "セミナー" },
  { type: "image", src: "/activity/img-06.png", alt: "オンラインミーティング" },
  { type: "video", src: "/activity/video-01.mp4", alt: "活動動画1" },
  { type: "video", src: "/activity/video-02.mp4", alt: "活動動画2" },
  { type: "video", src: "/activity/video-03.mp4", alt: "活動動画3" },
];

export default function InstructorSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  }, []);

  // Auto-play for images only
  useEffect(() => {
    if (!isAutoPlaying || mediaItems[currentIndex].type === "video") return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying, nextSlide]);

  const currentItem = mediaItems[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-[var(--rechera-cream)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[var(--rechera-text)] mb-4">活動紹介</h2>
          <p className="text-[var(--rechera-text-muted)] max-w-2xl mx-auto">
            Recheraコミュニティでの活動の様子をご紹介します。
          </p>
        </motion.div>

        {/* Slider Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[var(--rechera-beige)] rounded-3xl soft-shadow overflow-hidden">
            {/* Media Container */}
            <div
              className="relative aspect-[16/10] bg-[var(--rechera-pink)]/10"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  {currentItem.type === "image" ? (
                    <Image
                      src={currentItem.src}
                      alt={currentItem.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 896px"
                      priority={currentIndex === 0}
                    />
                  ) : (
                    <video
                      src={currentItem.src}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                      muted
                      playsInline
                      onPlay={() => setIsAutoPlaying(false)}
                      onPause={() => setIsAutoPlaying(true)}
                      onEnded={() => {
                        setIsAutoPlaying(true);
                        nextSlide();
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[var(--rechera-text)] hover:bg-white transition-colors shadow-md"
                aria-label="前へ"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[var(--rechera-text)] hover:bg-white transition-colors shadow-md"
                aria-label="次へ"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Video indicator */}
              {currentItem.type === "video" && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm flex items-center gap-1">
                  <Play className="w-4 h-4" />
                  動画
                </div>
              )}
            </div>

            {/* Dots Navigation */}
            <div className="p-6">
              <div className="flex justify-center gap-2 flex-wrap">
                {mediaItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[var(--rechera-pink)] w-8"
                        : item.type === "video"
                        ? "bg-[var(--rechera-blue)]/50 hover:bg-[var(--rechera-blue)]"
                        : "bg-[var(--rechera-greige)]/50 hover:bg-[var(--rechera-greige)]"
                    }`}
                    aria-label={`スライド ${index + 1}`}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-[var(--rechera-text-muted)] mt-4">
                {currentIndex + 1} / {mediaItems.length}
                {currentItem.type === "video" && " (動画)"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
