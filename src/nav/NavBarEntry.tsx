import * as React from 'react';
import { LogUtil } from '../utils/Log';
import { Theme, ThemeUtil } from '../utils/Theme';

export class NavBarEntryProps {
    public id?: string;
    public text?: string;
    public theme?: Theme;
    public tabIndex?: number;
    public onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    public onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    public onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
}

export class NavBarEntry extends React.Component<NavBarEntryProps> {
    private static LOG_TAG = 'NavBarEntry';

    constructor(props: NavBarEntryProps) {
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
                id={this.props.id}
                className={ThemeUtil.getThemedClassName('nav-button', this.props.theme)}
                tabIndex={this.props.tabIndex ? this.props.tabIndex : -1}
                onClick={this.onClick}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onMouseEnter={this.onMouseEnter}
                onMouseOver={this.onMouseOver}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.text}
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

    private log(event: string, message: string) {
        LogUtil.logMessage(NavBarEntry.LOG_TAG, this.props.id, event, message);
    }
}
