import { HTMLAttributes, createElement } from 'react';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
}

export const Title = (props: TitleProps): JSX.Element => {
    const { text, level, ...htmlProps } = props;
    return createElement(`h${level}`, htmlProps, text);
}
