"use client";

import React, { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  onChange,
  subtitle,
  title,
  value,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value - 1);
  }, [value, onChange]);

  return (
    <section className="flex flex-row items-center justify-between">
      <article className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-600 text-sm">{subtitle}</div>
      </article>
      <article className="flex flex-row items-center gap-4">
        <div
          className="w-8 h-8 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
          onClick={onReduce}
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-neutral-600">{value}</div>
        <div
          className="w-8 h-8 rounded-full border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer hover:opacity-80 transition"
          onClick={onAdd}
        >
          <AiOutlinePlus />
        </div>
      </article>
    </section>
  );
};

export default Counter;
