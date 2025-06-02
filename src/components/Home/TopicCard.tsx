import * as React from "react";

interface TopicCardProps {
  title: string;
  bgColor: string;
}

export function TopicCard({ title, bgColor }: TopicCardProps) {
  const getBackgroundColor = (bgColor: string) => {
    switch(bgColor) {
      case 'bg-pink-50':
        return '#fdf2f8';
      case 'bg-sky-50':
        return '#f0f9ff';
      case 'bg-green-50':
        return '#f0fdf4';
      case 'bg-stone-50':
        return '#fafaf9';
      default:
        return '#f9fafb';
    }
  };

  return (
    <article 
      className="topic-card"
      style={{ backgroundColor: getBackgroundColor(bgColor) }}
    >
      {title}
    </article>
  );
}