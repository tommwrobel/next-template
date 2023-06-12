"use client";
import styles from "./PaperCard.module.css";
import { ReactNode } from "react";

type PaperCardSize = "small" | "medium" | "big";

type CardProps = {
  size?: PaperCardSize;
  children: ReactNode;
  className?: string;
};

const PaperCard = ({ size = "medium", children, className }: CardProps) => {
  return <div className={`${styles[size]} ${className}`}>{children}</div>;
};

export default PaperCard;
