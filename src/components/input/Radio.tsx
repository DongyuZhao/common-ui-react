import * as React from 'react';
import { IBaseProps, IChoiceProps, IThemeProps } from '../../shared/BaseProps';
import { ThemeUtils } from '../../shared/Theme';

export interface IRadioProps<T> extends
    IBaseProps,
    IChoiceProps<T>,
    IThemeProps {
    id: string;
    forName: string;
    checked: boolean;
    noMinWidth?: boolean;
    noMaxWidth?: boolean;
}

interface IRadioState {
    checked: boolean;
}

export class Radio<T> extends React.Component<IRadioProps<T>, IRadioState> {
    constructor(props: IRadioProps<T>) {
        super(props);

        this.state = {
            checked: this.props.checked
        };

        this.onToggle = this.onToggle.bind(this);
    }

    public render() {
        return (
            <div
                className={this.getLayoutDecorator(ThemeUtils.getThemedStyleClassName('radio choice', this.props))}
                {...this.props}
            >
                <input
                    type='radio'
                    id={this.props.id + '-input'}
                    name={this.props.forName}
                    checked={this.state.checked}
                    onChange={this.onToggle}
                />
                <label htmlFor={this.props.id + '-input'}>
                    <div className={this.getStateDecorator()} />
                    <div>
                        {this.renderTitle()}
                        {this.renderDescription()}
                    </div>
                </label>
            </div>
        );
    }

    public onToggle() {
        this.setState((prevState: IRadioState) => ({
            checked: !prevState.checked
        }), this.handleCallback);
    }

    public renderTitle() {
        if (this.props.description) {
            return (
                <h6>{this.props.title}</h6>
            );
        }
        return this.props.title;
    }

    private renderDescription() {
        if (this.props.description) {
            return (
                <p>{this.props.description}</p>
            );
        }
        return null;
    }

    private getStateDecorator() {
        if (this.state.checked) {
            return 'indicator checked';
        }
        return 'indicator';
    }

    private getLayoutDecorator(className: string) {
        let result = className;
        if (this.props.noMinWidth) {
            result += ' no-min-width';
        }
        if (this.props.noMaxWidth) {
            result += ' no-max-width';
        }
        return result;
    }

    private handleCallback() {
        if (this.state.checked && this.props.onCheck) {
            this.props.onCheck(this.props.value);
        }
    }
}
