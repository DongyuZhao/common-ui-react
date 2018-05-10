import * as React from 'react';
import { LogUtil } from '../../utils/Log';

export class NavTogglerProps {
    public id?: string;
    public toggled: boolean;
    public onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    public onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    public onSwitchOn?: () => void;
    public onSwitchOff?: () => void;
    public onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class NavTogglerState {
    public toggled: boolean;
}

export class NavToggler extends React.Component<NavTogglerProps, NavTogglerState> {
    private static LOG_TAG = 'NavToggler';

    constructor(props: NavTogglerProps) {
        super(props);

        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = {
            toggled: this.props.toggled,
        };
    }

    public render() {
        return (
            <button   
                className='nav-toggler'
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
        if (this.state.toggled) {
            this.onSwitchOff();
        } else {
            this.onSwitchOn();
        }
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    public onFocus(event: React.FocusEvent<HTMLButtonElement>): void {
        this.log('onFocus', 'Invoked');
        this.logState('onFocus');
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    public onBlur(event: React.FocusEvent<HTMLButtonElement>): void {
        this.log('onBlur', 'Invoked');
        this.logState('onBlur');
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    public onMouseEnter(event: React.MouseEvent<HTMLButtonElement>): void {
        this.log('onMouseEnter', 'Invoked');
        this.logState('onMouseEnter');
        if (this.props.onMouseEnter) {
            this.props.onMouseEnter(event);
        }
    }

    public onMouseOver(event: React.MouseEvent<HTMLButtonElement>): void {
        this.log('onMouseOver', 'Invoked');
        this.logState('onMouseOver');
        if (this.props.onMouseOver) {
            this.props.onMouseOver(event);
        }
    }

    public onMouseLeave(event: React.MouseEvent<HTMLButtonElement>): void {
        this.log('onMouseLeave', 'Invoked');
        this.logState('onMouseLeave');
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    }

    private onSwitchOn() {
        this.log('onSwitchOn', 'Invoked');
        this.logState('onSwitchOn');
        this.setState({
            toggled: true,
        }, () => {
            this.logState('onSwitchOn');
            if (this.props.onSwitchOn) {
                this.props.onSwitchOn();
            }
        });
    }

    private onSwitchOff() {
        this.log('onSwitchOff', 'Invoked');
        this.logState('onSwitchOff');
        this.setState({
            toggled: false,
        }, () => {
            this.logState('onSwitchOff');
            if (this.props.onSwitchOff) {
                this.props.onSwitchOff();
            }
        });
    }

    private log(event: string, message: string) {
        LogUtil.logMessage(NavToggler.LOG_TAG, this.props.id, event, message);
    }

    private logState(event: string) {
        LogUtil.logObject(NavToggler.LOG_TAG, this.props.id, event, this.state);
    }
}
