"use client";
import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, center, subtitle }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="font-light text-sm text-neutral-600 mt-1">{subtitle}</p>
    </div>
  );
};

export default Heading;
