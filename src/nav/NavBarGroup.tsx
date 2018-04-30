import * as React from 'react';
import { Theme } from '../utils/Theme';
import { NavBarEntry, NavBarEntryProps } from './NavBarEntry';

export class NavBarGroupProps {
    public id?: string;
    public theme?: Theme;
    public tabIndex?: number;
    public entries: NavBarEntryProps[];
}

export class NavBarGroup extends React.Component<NavBarGroupProps> {
    constructor(props: NavBarGroupProps) {
        super(props);
    }

    public render() {
        return (
            <ul>
                {this.props.entries.map((entry, i) => {
                    return (
                        <li key={i}>
                            {React.createElement(NavBarEntry, entry)}
                        </li>
                    );
                })}
            </ul>
        );
    }
}
