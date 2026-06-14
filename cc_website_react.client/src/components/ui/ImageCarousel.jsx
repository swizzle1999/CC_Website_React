import './ImageCarousel.scss';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

export default function ImageCarousel({ manifest, maxHeight, maxWidth }) {
    const [images, setImages] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loadedIndices, setLoadedIndices] = useState(new Set());

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}${manifest}`)
            .then(r => r.json())
            .then(imgs => {
                setImages(imgs);
                if (imgs.length) setLoadedIndices(new Set([0, 1 % imgs.length]));
            })
            .catch(() => setImages([]));
    }, [manifest]);

    if (images.length === 0) return null;

    const handleSelect = (index) => {
        setActiveIndex(index);
        setLoadedIndices(prev => {
            const next = new Set(prev);
            next.add(index);
            next.add((index + 1) % images.length);
            return next;
        });
    };

    const basePath = manifest.substring(0, manifest.lastIndexOf('/') + 1);

    return (
        <Carousel className="image-carousel" activeIndex={activeIndex} onSelect={handleSelect} fade>
            {images.map((filename, imageIndex) => (
                <Carousel.Item key={imageIndex}>
                    <img
                        src={loadedIndices.has(imageIndex) ? `${import.meta.env.BASE_URL}${basePath}${filename}` : undefined}
                        className="d-block w-100 image-carousel-img"
                        alt={`Slide ${imageIndex + 1}`}
                        style={{ maxHeight, maxWidth }}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
