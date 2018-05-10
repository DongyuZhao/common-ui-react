import * as React from 'react';
import { NavGroup, NavGroupData, NavGroupMode } from './NavGroup';

export class NavBarGroupProps extends NavGroupData {

}

export class NavBarGroup extends React.Component<NavBarGroupProps> {
    constructor(props: NavBarGroupProps) {
        super(props);
    }

    public render() {
        return (
            <NavGroup
                inline={true}
                mode={NavGroupMode.Row}
                {...this.props}
            />
        );
    }
}
