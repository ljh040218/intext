"use client";
import { useState } from "react";
import styles from "./Prompt.module.css";

function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className={styles.promptCopyButton}
      onClick={handleCopy}
      aria-label="Copy content"
    >
      {copied ? "복사됨!" : "복사하기"}
    </button>
  );
}

export default CopyButton;