"use client";

import { useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";


import { useStore } from "@/lib/store";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

export default function PDFViewer() {
  const fileUrl = "./report.pdf";
  const containerRef = useRef<HTMLDivElement>(null);
  const { data } = useStore();

  const metric = data.metrics.total_jobs;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative overflow-auto max-h-150"
      aria-label="PDF Source Viewer"
    >
      <Document
        file={fileUrl}
        loading="Loading PDF..."
        error="Failed to load PDF"
      >
        <Page
          pageNumber={metric.page}
          width={500}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>

      {/* Highlight Overlay */}
      <div
        className="absolute border-2 border-red-500 pointer-events-none"
        style={{
          top: metric.bbox.y,
          left: metric.bbox.x,
          width: metric.bbox.width,
          height: metric.bbox.height,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
