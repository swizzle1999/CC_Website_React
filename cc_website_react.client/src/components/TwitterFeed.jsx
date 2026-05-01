import './TwitterFeed.scss';
import { useEffect, useRef } from 'react';

export default function TwitterFeed() {
    const ref = useRef(null);

    useEffect(() => {
        if (window.twttr) {
            window.twttr.widgets.load(ref.current);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.charset = 'utf-8';
        script.onload = () => window.twttr.widgets.load(ref.current);
        document.head.appendChild(script);
    }, []);

    return (
        <div ref={ref}>
            <a className="twitter-timeline" href="https://twitter.com/CaledonianClash?ref_src=twsrc%5Etfw">
                Tweets by CaledonianClash
            </a>
        </div>
    );
}