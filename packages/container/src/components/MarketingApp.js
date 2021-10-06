import { mount } from 'marketing/Marketing';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);

    useEffect(() => {
        console.log(ref);
        mount(ref.current);
    }, [])

    return <div ref={ref} />
};