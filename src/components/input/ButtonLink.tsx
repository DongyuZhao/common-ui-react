import * as React from 'react';
import { IBaseProps, IFocusableProps, IMouseAwareProps, IThemeProps, ITouchableProps, IUrlProps } from '../../shared/BaseProps';
import { ThemeUtils } from '../../shared/Theme';

export interface IButtonLinkProps extends
    IBaseProps,
    IUrlProps,
    IFocusableProps<HTMLAnchorElement>,
    IMouseAwareProps<HTMLAnchorElement>,
    ITouchableProps<HTMLAnchorElement>,
    IThemeProps {
}

export class ButtonLink extends React.Component<IButtonLinkProps> {
    constructor(props: IButtonLinkProps) {
        super(props);
    }

    public render() {
        return (
            <a
                href={this.props.url}
                className={ThemeUtils.getThemedStyleClassName('button', this.props)}
                role='button'
                {...this.props}
            >
                {this.props.text}
            </a>
        );
    }
}
