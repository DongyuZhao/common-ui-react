import * as React from 'react';
import { NavIcon, NavIconProps } from './NavIcon';

export class NavLinkProps {
    public id?: string;
    public href: string;
    public text: string;
    public icon?: NavIconProps;
}

export class NavLink extends React.Component<NavLinkProps> {
    constructor(props: NavLinkProps) {
        super(props);
    }

    public render() {
        return (
            <a
                className='nav-link'
                href={this.props.href}
            >
                {this.renderIcon()}
                <span>{this.props.text}</span>
            </a>
        );
    }

    private renderIcon() {
        if (this.props.icon) {
            return React.createElement(NavIcon, this.props.icon);
        }
        return null;
    }
}
