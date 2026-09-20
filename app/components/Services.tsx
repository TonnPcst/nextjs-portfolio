"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import ServiceArt, { type ServiceArtKind } from "./ServiceArt";

type Service = {
  label: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  art: ServiceArtKind;
};

export default function Services({ services }: { services: Service[] }) {
  const [index, setIndex] = useState(0);
  const service = services[index];
  const go = (step: number) => setIndex((i) => (i + step + services.length) % services.length);

  return (
    <div>
      <div className="flex items-center justify-between gap-2 border-b border-black/15 pb-3 mb-8">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous service"
          className="p-1 text-black/40 hover:text-black transition-colors cursor-pointer"
        >
          <ChevronLeftIcon className="size-5" />
        </button>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {services.map((item, i) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setIndex(i)}
              aria-current={i === index}
              className={`text-sm cursor-pointer transition-colors ${
                i === index ? "text-black font-medium" : "text-black/40 hover:text-black/70"
              }`}
            >
              <span className="text-xs mr-1.5 text-black/30">{String(i + 1).padStart(2, "0")}</span>
              <span className={i === index ? "underline underline-offset-[10px] decoration-2" : ""}>{item.label}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next service"
          className="p-1 text-black/40 hover:text-black transition-colors cursor-pointer"
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
          <p className="text-sm text-black/55 leading-relaxed mb-6 max-w-sm">{service.description}</p>
          <p className="text-sm text-black/55 mb-2">Features:</p>
          <ul className="space-y-1.5 text-sm text-black/60 mb-8 list-disc pl-5">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-black/35">
            {service.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>

        <div
          className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1a1a1a]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        >
          <ServiceArt key={service.art} kind={service.art} className="art-in absolute inset-0 size-full" />
        </div>
      </div>
    </div>
  );
}
