import './ImageCarousel.scss';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

export default function ImageCarousel({ manifest }) {
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}${manifest}`)
            .then(r => r.json())
            .then(setImages)
            .catch(() => setImages([]));
    }, [manifest]);

    if (images.length === 0) return null;

    const basePath = manifest.substring(0, manifest.lastIndexOf('/') + 1);

    return (
        <Carousel className="image-carousel" activeIndex={activeIndex} onSelect={setActiveIndex}>
            {images.map((filename, imageIndex) => {
                // Only load the current slide and the next one to avoid fetching all images upfront.
                // % images.length wraps the index around so the last slide's "next" resolves to the first
                // e.g. with 5 images: (4 + 1) % 5 = 0
                const shouldLoad = imageIndex === activeIndex || imageIndex === (activeIndex + 1) % images.length;
                return (
                    <Carousel.Item key={imageIndex}>
                        <img
                            src={shouldLoad ? `${import.meta.env.BASE_URL}${basePath}${filename}` : undefined}
                            className="d-block w-100 image-carousel-img"
                            alt={`Slide ${imageIndex + 1}`}
                        />
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
}
