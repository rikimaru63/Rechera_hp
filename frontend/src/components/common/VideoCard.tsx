"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface VideoCardProps {
  title: string;
  youtubeUrl: string;
  description?: string;
}

// Extract YouTube video ID from various URL formats
function getYouTubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function VideoCard({
  title,
  youtubeUrl,
  description,
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(youtubeUrl);

  if (!videoId) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-[var(--rechera-beige)] border-none rounded-3xl soft-shadow overflow-hidden hover:soft-shadow-hover transition-all duration-300">
        <CardContent className="p-0">
          <div className="aspect-video relative">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <button
                onClick={() => setIsPlaying(true)}
                className="w-full h-full relative group cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to hqdefault if maxresdefault doesn't exist
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--rechera-pink)]/90 group-hover:bg-[var(--rechera-pink)] flex items-center justify-center transition-all group-hover:scale-110">
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </div>
                </div>
              </button>
            )}
          </div>
          <div className="p-5">
            <h3 className="font-medium text-[var(--rechera-text)]">{title}</h3>
            {description && (
              <p className="text-sm text-[var(--rechera-text-muted)] mt-2">
                {description}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
