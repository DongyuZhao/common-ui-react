import * as React from 'react';

export class NavBrandProps {
    public src: string;
    public alt: string;
    public href: string;
}

export class NavBrand extends React.Component<NavBrandProps> {
    constructor(props: NavBrandProps) {
        super(props);
    }

    public render() {
        return (
            <a
                className='nav-brand'
                href={this.props.href}
            >
                <img
                    src={this.props.src}
                    alt={this.props.alt}
                />
                <span>
                    {this.props.alt}
                </span>    
            </a>    
        );
    }
}
