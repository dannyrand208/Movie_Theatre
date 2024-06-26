import React from 'react';
import { CustomComponentProps } from '../interface'
import { mergeClassName} from '../utilis'

export const Container = (props: CustomComponentProps) => {
    return (
        <div className={mergeClassName('px-6 py-1.5 max-w-screen-lg mx-auto')}>
            {props.children}
        </div>
    );
};
