import * as React from 'react';
import { LogUtil } from '../utils/Log';
import { Theme, ThemeUtil } from '../utils/Theme';

export class NavTogglerProps {
    public id?: string;
    public theme?: Theme;
    public tabIndex?: number;
    public toggled: boolean;
    public onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    public onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}

export class NavTogglerState {
    public toggled: boolean;
}

export class NavToggler extends React.Component<NavTogglerProps, NavTogglerState> {
    private static LOG_TAG = 'NavToggler';
    private selfRef: HTMLButtonElement | null;

    constructor(props: NavTogglerProps) {
        super(props);

        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = {
            toggled: this.props.toggled
        };
    }

    public render() {
        return (
            <button
                ref={(btn) => this.selfRef = btn}
                className={ThemeUtil.getThemedClassName('nav-toggler', this.props.theme)}
                tabIndex={this.props.tabIndex}
                onClick={this.onClick}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onMouseEnter={this.onMouseEnter}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            />
        );
    }

    public onClick(event: React.MouseEvent<HTMLButtonElement>): void {
        this.log('onClick', 'Invoked');
        this.logState('onClick');
        this.setState({
            toggled: !this.state.toggled
        }, () => {
            this.logState('onClick');
        });
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    public onFocus(event: React.FocusEvent<HTMLButtonElement>): void {
        this.log('onFocus', 'Invoked');
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    public onBlur(event: React.FocusEvent<HTMLButtonElement>): void {
        this.log('onBlur', 'Invoked');
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    public onMouseEnter(event: React.MouseEvent<HTMLButtonElement>): void {
        this.log('onMouseEnter', 'Invoked');
        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    }

    public onMouseOver(event: React.MouseEvent<HTMLButtonElement>): void {
        this.log('onMouseOver', 'Invoked');
        if (this.props.onMouseOver) {
            this.props.onMouseOver(event);
        }
    }

    public onMouseLeave(event: React.MouseEvent<HTMLButtonElement>): void {
        this.log('onMouseLeave', 'Invoked');
        if (this.selfRef) {
            this.selfRef.blur();
        }
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    }

    private log(event: string, message: string) {
        LogUtil.logMessage(NavToggler.LOG_TAG, this.props.id, event, message);
    }

    private logState(event: string) {
        LogUtil.logObject(NavToggler.LOG_TAG, this.props.id, event, this.state);
    }
}
