import * as React from 'react';
import { Theme, ThemeUtil } from '../utils/Theme';
import { NavGroup, NavGroupProps } from './NavGroup';
import { NavToggler } from './NavToggler';

export class NavBarProps {
    public id?: string;
    public theme?: Theme;
    public tabIndex?: number;
    public entryGroups?: NavGroupProps[];
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
                {this.renderEntryGroups()}
            </div>
        );
    }

    private renderEntryGroups() {
        if (this.props.entryGroups) {
            return this.props.entryGroups.map((group) => {
                return React.createElement(NavGroup, group);
            });
        }
        return null;
    }
}
