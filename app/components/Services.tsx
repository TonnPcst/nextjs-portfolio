"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";

type Service = {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  // How the shared photo is framed for this service: zoom level + focal point.
  zoom: number;
  origin: string;
};

export default function Services({ services }: { services: Service[] }) {
  const [index, setIndex] = useState(0);
  const service = services[index];
  const go = (step: number) => setIndex((i) => (i + step + services.length) % services.length);

  return (
    <div>
      <div className="flex items-center justify-between border-b border-black/15 pb-3 mb-8">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous service"
          className="p-1 text-black/40 hover:text-black transition-colors cursor-pointer"
        >
          <ChevronLeftIcon className="size-5" />
        </button>
        <span className="text-xs tracking-widest text-black/40">
          {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
        </span>
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

        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-black">
          <Image
            src="/services/ice.jpg"
            alt="Black and white macro photograph of ice and frost over stones"
            fill
            sizes="(min-width: 768px) 512px, 100vw"
            className="object-cover transition-[transform,transform-origin] duration-700 ease-out"
            style={{ transform: `scale(${service.zoom})`, transformOrigin: service.origin }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden="true" />
          <span className="absolute bottom-3 right-5 text-7xl md:text-8xl font-medium text-white/80 select-none" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
