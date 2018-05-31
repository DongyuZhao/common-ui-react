import * as React from 'react';
import { IBaseProps, ICheckableProps, IThemeProps } from '../../shared/BaseProps';
import { ThemeUtils } from '../../shared/Theme';

export interface ICheckBoxProps<T> extends
    IBaseProps,
    ICheckableProps<T>,
    IThemeProps {
    id: string;
    noMinWidth?: boolean;
    noMaxWidth?: boolean;
}

interface ICheckBoxState {
    checked: boolean;
}

export class CheckBox<T> extends React.Component<ICheckBoxProps<T>, ICheckBoxState> {
    constructor(props: ICheckBoxProps<T>) {
        super(props);

        this.state = {
            checked: this.props.checked
        };

        this.onToggle = this.onToggle.bind(this);
    }

    public render() {
        return (
            <div
                className={this.getLayoutDecorator(ThemeUtils.getThemedStyleClassName('checkbox choice', this.props))}
                {...this.props}
            >
                <input
                    type='checkbox'
                    id={this.props.id + '-input'}
                    checked={this.state.checked}
                    onChange={this.onToggle}
                    name={this.props.forName}
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
        this.setState((prevState: ICheckBoxState) => ({
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
        if (!this.state.checked && this.props.onUncheck) {
            this.props.onUncheck(this.props.value);
        }
    }
}
