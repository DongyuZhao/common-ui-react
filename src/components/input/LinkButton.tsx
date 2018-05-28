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

export class LinkButton extends React.Component<IButtonProps> {
    constructor(props: IButtonProps) {
        super(props);
    }

    public render() {
        return (
            <button
                className={ThemeUtils.getThemedStyleClassName('link-button', this.props)}
                role='button'
                {...this.props}
            >
                {this.props.children}
            </button>
        );
    }
}
