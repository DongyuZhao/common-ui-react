import * as React from 'react';
import { NavBarGroup } from './NavBarGroup';
import { NavBrand, NavBrandProps } from './NavBrand';
import { NavGroupData } from './NavGroup';
import { NavToggler } from './NavToggler';

export class NavBarProps {
    public id?: string;
    public brand?: NavBrandProps;
    public entryGroups: NavGroupData[];
}

export class NavBar extends React.Component<NavBarProps> {
    constructor(props: NavBarProps) {
        super(props);
    }

    public render() {
        return (
            <nav
                id={this.props.id}    
                className='nav-bar'
            >
                <NavToggler
                    toggled={false}
                />
                {this.renderBrand()}
                {this.renderGroups()}
            </nav>
        );
    }

    private renderBrand() {
        if (this.props.brand) {
            return React.createElement(NavBrand, this.props.brand);
        }
        return null;
    }

    private renderGroups() {
        if (this.props.entryGroups) {
            return this.props.entryGroups.map((group, i) => {
                group.key = '' + i;
                return React.createElement(NavBarGroup, group);
            });
        }
        return null;
    }
}
