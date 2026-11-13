"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function SkeletonImage({ className = "", alt, fill, src, ...props }) {
  const frameRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    const img = frameRef.current?.querySelector("img");
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <span
      ref={frameRef}
      className={`block overflow-hidden ${fill ? "absolute inset-0" : "relative"}`}
    >
      <span
        aria-hidden="true"
        className={`skeleton absolute inset-0 transition-opacity duration-500 ${
          loaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      />
      <Image
        {...props}
        src={src}
        alt={alt}
        fill={fill}
        onLoad={() => setLoaded(true)}
        className={`${className} transition duration-700 ease-out ${
          loaded ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
        }`}
      />
    </span>
  );
}
