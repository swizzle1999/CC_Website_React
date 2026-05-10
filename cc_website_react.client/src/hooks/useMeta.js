import { useEffect } from 'react';

const SITE_NAME = 'Caledonian Clash';

export function useMeta(title, description) {
    useEffect(() => {
        document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

        const tag = document.querySelector('meta[name="description"]');
        if (tag && description) tag.setAttribute('content', description);
    }, [title, description]);
}
