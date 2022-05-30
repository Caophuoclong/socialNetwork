import { IMessage } from "../../interfaces";
import moment from 'moment';
function isSameSender(messages: IMessage[], index: number): boolean {
    return false;
}
// TODO: I don't know what it called
function dateToSomeThing(someDate: string | Date, locale: "en" | "vi") {
    let date = moment(someDate);
    if (moment().diff(date, 'days') >= 2) {
        return date.fromNow(); // '2 days ago' etc.
    }
    if (locale === "en")
        return date.calendar().split(' ')[0];
    const xxx = date.calendar().split(' ');
    return xxx[0] + " " + xxx[1];
}
function away(someDate: string | Date, locale: "en" | "vi") {
    let date = moment(someDate);
    if (moment().diff(date, 'days') <= 1) {
        return date.fromNow(); // '2 days ago' etc.
    }
    if (moment().diff(date, 'days') >= 2) {
        return date.fromNow(); // '2 days ago' etc.
    }


    if (locale === "en")
        return date.calendar().split(' ')[0];
    const xxx = date.calendar().split(' ');
    return xxx[0] + " " + xxx[1];
}
export { isSameSender, dateToSomeThing, away };