import * as React from "react";
import { CopyButton } from "./CopyButton";

interface TemplateCardProps {
  title: string;
  description: string | React.ReactNode;
  promptText: string;
}

export function TemplateCard({ title, description, promptText }: TemplateCardProps) {
  return (
    <article className="template-card">
      <div className="template-content">
        <h3 className="template-title">{title}</h3>
        <p className="template-description">{description}</p>
      </div>
      <CopyButton textToCopy={promptText} />
    </article>
  );
}