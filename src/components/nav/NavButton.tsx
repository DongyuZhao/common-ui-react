import * as React from 'react';
import { LogUtil } from '../../utils/Log';
import { NavIcon, NavIconProps } from './NavIcon';

export class NavButtonProps {
    public id?: string;
    public text: string;
    public icon?: NavIconProps;
    public onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    public onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    public onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export class NavButton extends React.Component<NavButtonProps> {
    private static LOG_TAG = 'NavButton';

    constructor(props: NavButtonProps) {
        super(props);

        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    public render() {
        return (
            <button
                className='nav-button'
                onClick={this.onClick}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onMouseEnter={this.onMouseEnter}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            >    
                {this.renderIcon()}
                <span>{this.props.text}</span>
            </button>
        );
    }

    public onClick(event: React.MouseEvent<HTMLButtonElement>): void {
        this.log('onClick', 'Invoked');
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
        if (this.props.onMouseLeave) {
            this.props.onMouseLeave(event);
        }
    }

    private renderIcon() {
        if (this.props.icon) {
            return React.createElement(NavIcon, this.props.icon);
        }
        return null;
    }

    private log(event: string, message: string) {
        LogUtil.logMessage(NavButton.LOG_TAG, this.props.id, event, message);
    }
}
