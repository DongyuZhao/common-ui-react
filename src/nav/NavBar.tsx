import * as React from 'react';
import { Theme, ThemeUtil } from '../utils/Theme';
import { NavToggler } from './NavToggler';

export class NavBarProps {
    public id?: string;
    public theme?: Theme;
    public tabIndex?: number;
}

export class NavBar extends React.Component<NavBarProps> {

    constructor(props: NavBarProps) {
        super(props);
    }

    public render() {
        return (
            <div
                className={ThemeUtil.getThemedClassName('nav-bar', this.props.theme)}
                tabIndex={this.props.tabIndex}
            >
                <NavToggler
                    theme={this.props.theme}
                    toggled={false}
                />
                {this.props.children}
            </div>
        );
    }
}
