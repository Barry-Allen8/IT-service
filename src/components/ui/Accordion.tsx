"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div key={index} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 flex justify-between items-center bg-card hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-left">{item.title}</span>
            <ChevronDown
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                openIndex === index && "transform rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "px-6 overflow-hidden transition-all duration-300",
              openIndex === index ? "py-4 max-h-96" : "max-h-0"
            )}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
