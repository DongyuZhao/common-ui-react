import * as React from 'react';
import { IBaseProps, IFocusableProps, IFormControlProps, IMouseAwareProps, IThemeProps, ITouchableProps } from '../../shared/BaseProps';
import { ThemeUtils } from '../../shared/Theme';

export interface IButtonInputProps extends
    IBaseProps,
    IFormControlProps<HTMLInputElement>,
    IFocusableProps<HTMLInputElement>,
    IMouseAwareProps<HTMLInputElement>,
    ITouchableProps<HTMLInputElement>,
    IThemeProps {
}

export class ButtonInput extends React.Component<IButtonInputProps> {
    constructor(props: IButtonInputProps) {
        super(props);
    }

    public render() {
        return (
            <input
                className={ThemeUtils.getThemedStyleClassName('button', this.props)}
                role='button'
                type='submit'
                {...this.props}
                value={this.props.value}
            />
        );
    }
}
