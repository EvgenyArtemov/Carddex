// @ts-ignore
import React, { useEffect, useState } from 'react';
import './Fade.scss';

const Fade = (props: any) => {
    const [shouldRender, setRender] = useState(props.show);

    useEffect(() => {
        if (props.show) setRender(true);
    }, [props.show]);

    const onAnimationEnd = () => {
        if (!props.show) setRender(false);
    };

    return (
        shouldRender && (
            <div
                className={'sidefilter'}
                style={{ animation: `${props.show ? 'fadeIn' : 'fadeOut'} .2s` }}
                onAnimationEnd={onAnimationEnd}
            >
                {props.children}
            </div>
        )
    );
};

export default Fade;
