export enum Theme {
    Light = 'Light',
    Dark = 'Dark'
}

export class ThemeUtil {
    public static getThemedClassName(className: string, theme?: Theme) {
        if (theme) {
            return (className + ' ' + theme).toLowerCase();
        } else {
            return (className + ' ' + Theme.Light).toLowerCase();
        }
    }
}
