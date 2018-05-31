import * as React from 'react';
import { IBaseProps, IFocusableProps, IMouseAwareProps, IThemeProps, ITouchableProps } from '../../shared/BaseProps';
import { ThemeUtils } from '../../shared/Theme';

export interface IButtonProps extends
    IBaseProps,
    IFocusableProps<HTMLButtonElement>,
    IMouseAwareProps<HTMLButtonElement>,
    ITouchableProps<HTMLButtonElement>,
    IThemeProps {
}

export class Button extends React.Component<IButtonProps> {
    constructor(props: IButtonProps) {
        super(props);
    }

    public render() {
        return (
            <button
                {...this.props}
                className={ThemeUtils.getThemedStyleClassName('button', this.props)}
                role='button'
            >
                {this.props.children}
            </button>
        );
    }
}
