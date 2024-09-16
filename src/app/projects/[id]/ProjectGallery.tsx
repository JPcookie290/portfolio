"use client";

import React, { useState } from "react";
import Image from "next/image";

type ProjectGalleryProps = {
  images: string[];
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {images && images.length > 0 && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={400}
                  height={300}
                  className="object-cover w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative w-full max-w-4xl">
            <Image
              src={selectedImage}
              alt="Enlarged image"
              width={1200}
              height={800}
              className="rounded-lg"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectGallery;
