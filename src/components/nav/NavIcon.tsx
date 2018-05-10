import * as React from 'react';

export class NavIconProps {
    public src: string;
    public alt: string;
}

export class NavIcon extends React.Component<NavIconProps> {
    constructor(props: NavIconProps) {
        super(props);
    }

    public render() {
        return (
            <img
                className='nav-icon'
                src={this.props.src}
                alt={this.props.alt}
            />
        );
    }
}
