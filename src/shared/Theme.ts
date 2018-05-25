import { IThemeProps } from './BaseProps';
export enum Theme {
    Primary = 'Primary',
    Secondary = 'Secondary',
    Success = 'Success',
    Info = 'Info',
    Warning = 'Warning',
    Caution = 'Caution',
    Error = 'Error',
    Light = 'Light',
    Dark = 'Dark',
    Blue = 'Blue',
    Purple = 'Purple',
    Pink = 'Pink',
    Red = 'Red',
    Orange = 'Orange',
    Yellow = 'Yellow',
    Green = 'Green',
    Cyan = 'Cyan',
}

export class ThemeUtils {
    public static getOutlineDecorator(props: IThemeProps) {
        if (props.outline) {
            return 'outline';
        }
        return '';
    }

    public static getFillDecorator(props: IThemeProps) {
        if (props.fill) {
            return 'fill';
        }
        return '';
    }

    public static getThemeDecorator(props: IThemeProps) {
        if (props.theme) {
            return props.theme.toLowerCase();
        }
        return '';
    }

    public static getThemedStyleClassName(className: string, props: IThemeProps) {
        return (
            className + ' ' +
            ThemeUtils.getThemeDecorator(props) + ' ' +
            ThemeUtils.getOutlineDecorator(props) + ' ' +
            ThemeUtils.getFillDecorator(props)
        );
    }
}
