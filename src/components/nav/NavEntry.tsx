import * as React from 'react';
import { NavButton, NavButtonProps } from './NavButton';
import { NavLink, NavLinkProps } from './NavLink';

export enum NavEntryType {
    Button = 'Button',
    Link = 'Link',
}

export class NavEntryProps {
    public type: NavEntryType;
    public props: NavButtonProps | NavLinkProps;
}

export class NavEntry extends React.Component<NavEntryProps> {
    public render() {
        switch (this.props.type) {
            case NavEntryType.Button:
                return React.createElement(NavButton, this.props.props as NavButtonProps);    
            case NavEntryType.Link:
                return React.createElement(NavLink, this.props.props as NavLinkProps);    
        }
    }
}
