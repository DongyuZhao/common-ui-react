import * as React from 'react';
import { NavEntry, NavEntryProps } from './NavEntry';

export enum NavGroupMode {
    Row = 'Row',
    Column = 'Column',
}

export class NavGroupData {
    public id?: string;
    public key?: string;
    public entries?: NavEntryProps[];
}

export class NavGroupProps extends NavGroupData {
    public inline?: boolean;
    public mode?: NavGroupMode;
}

export class NavGroup extends React.Component<NavGroupProps> {

    constructor(props: NavGroupProps) {
        super(props);
    }

    public render() {
        return (
            <ul
                className={this.getStyleClass()}
            >
                {this.renderEntries()}
            </ul>
        );
    }

    private getFlexDecorator() {
        if (this.props.inline) {
            return 'inline-flex';
        } 
        return 'flex';
    }

    private getModeDecorator() {
        if (this.props.mode) {
            return this.props.mode.toLocaleLowerCase();
        }
        return 'row';
    }

    private getStyleClass() {
        return 'nav-group ' + this.getFlexDecorator() + ' ' + this.getModeDecorator();
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
}
