import React from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import LazyImage from './LazyImage';

interface Image {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const images: Image[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80',
    alt: 'Modern Living Room',
    category: 'Living Room',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&q=80',
    alt: 'Elegant Dining Area',
    category: 'Dining Room',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1618219944342-824e40a13285?auto=format&fit=crop&q=80',
    alt: 'Luxurious Bedroom',
    category: 'Bedroom',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80',
    alt: 'Home Office Setup',
    category: 'Office',
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = React.useState<Image | null>(null);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <LazyImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="text-white text-center">
                <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                <p className="font-medium">{image.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-4xl w-full"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}