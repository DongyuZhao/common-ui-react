export class LogUtil {
    public static logMessage(tag: string, id?: string, event?: string, extraMessage?: string) {
        console.log(tag + '#' + id + '.' + event + ': ' + extraMessage + ';');
    }

    public static logObject(tag: string, id?: string, event?: string, target?: any) {
        console.log(tag + '#' + id + '.' + event + ': ' + JSON.stringify(target) + ';');
        console.log(target);
    }
}
