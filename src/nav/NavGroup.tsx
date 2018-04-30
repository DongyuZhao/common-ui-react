import * as React from 'react';
import { Theme, ThemeUtil } from '../utils/Theme';
import { NavEntry, NavEntryProps } from './NavEntry';

export enum NavGroupMode {
    Row = 'Row',
    Column = 'Column'
}

export class NavGroupProps {
    public id?: string;
    public theme?: Theme;
    public tabIndex?: number;
    public entries?: NavEntryProps[];
    public mode?: NavGroupMode;
    public inline?: boolean;
}

export class NavGroup extends React.Component<NavGroupProps> {
    constructor(props: NavGroupProps) {
        super(props);
    }

    public render() {
        return (
            <ul
                id={this.props.id}
                className={ThemeUtil.getThemedClassName(this.getRawClassName(), this.props.theme)}
                tabIndex={this.props.tabIndex}
            >
                {this.renderEntries()}
            </ul>
        );
    }

    private renderEntries() {
        if (this.props.entries) {
            return this.props.entries.map((entry, i) => {
                return (
                    <li key={i}>
                        {React.createElement(NavEntry, entry)}
                    </li>
                );
            });
        }
        return null;
    }

    private getRawClassName() {
        if (this.props.mode) {
            return ('nav-group ' + this.props.mode + this.getInlineDecorator()).toLowerCase();
        } else {
            return ('nav-group ' + NavGroupMode.Column + this.getInlineDecorator()).toLowerCase();
        }
    }

    private getInlineDecorator() {
        if (this.props.inline) {
            return ' inline';
        } else {
            return ' ';
        }
    }
}
