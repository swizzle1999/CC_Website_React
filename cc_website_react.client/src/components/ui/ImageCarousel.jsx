import './ImageCarousel.scss';
import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

export default function ImageCarousel({ manifest }) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}${manifest}`)
            .then(r => r.json())
            .then(setImages)
            .catch(() => setImages([]));
    }, [manifest]);

    if (images.length === 0) return null;

    const basePath = manifest.substring(0, manifest.lastIndexOf('/') + 1);

    return (
        <Carousel className="image-carousel">
            {images.map((filename, i) => (
                <Carousel.Item key={i}>
                    <img
                        src={`${import.meta.env.BASE_URL}${basePath}${filename}`}
                        className="d-block w-100 image-carousel-img"
                        alt={`Slide ${i + 1}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
