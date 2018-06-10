import * as React from 'react';
import { IBaseProps, IMultipleChoiseProps } from '../../shared/BaseProps';
import { IRadioProps, Radio } from './Radio';

export interface IRadioSetProps<T> extends
    IBaseProps,
    IMultipleChoiseProps<T> {
    choices: Array<IRadioProps<T>>;
    default?: T;
    noMinWidth?: boolean;
    noMaxWidth?: boolean;
}

interface IRadioSetState<T> {
    selected?: T;
}

export class RadioSet<T> extends React.Component<IRadioSetProps<T>, IRadioSetState<T>> {
    private callbackEvents: Map<T, (value: T) => void>;

    constructor(props: IRadioSetProps<T>) {
        super(props);

        this.state = {
            selected: this.props.default,
        };

        this.registerCallback();
        this.onChoose = this.onChoose.bind(this);
    }

    public render() {
        return (
            <div
                {...this.props}
                className={this.getLayoutDecorator('radio-set')}
            >
                {this.renderRadioEntires()}
            </div>
        );
    }

    private renderRadioEntires() {
        return (
            this.props.choices.map(entry => {
                return (
                    <Radio
                        {...entry}
                        key={entry.id + (this.state.selected === entry.value)}
                        onCheck={this.onChoose}
                        checked={this.state.selected === entry.value}
                    />
                );
            })
        );
    }

    private registerCallback() {
        this.callbackEvents = new Map<T, (value: T) => void>();
        this.props.choices.forEach(choice => {
            if (choice.onCheck) {
                this.callbackEvents.set(choice.value, choice.onCheck);
            }
        });
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

    private onChoose(value: T) {
        this.setState({
            selected: value
        }, this.handleCallback);
    }

    private handleCallback() {
        if (this.state.selected) {
            const callback = this.callbackEvents.get(this.state.selected);
            if (callback) {
                callback(this.state.selected);
            }
        }
        if (this.props.onChoose && this.state.selected) {
            this.props.onChoose(this.state.selected);
        }
    }
}
