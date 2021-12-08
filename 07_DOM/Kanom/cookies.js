// class CookieUtil สำหรับการ get set unset 
export class CookieUtil {
    // get จะรับ parameter name เพื่อเอาค่า value ออกมา
    static get(name) {
        let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName), cookieValue = null;
        if (cookieStart > -1) {
            let cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    }

    /* set จะทำการกำหนดวันที่ให้หมดอายุเป็นอีก 7 วัน นับจากวันที่ set cookie
    มีรับ parameter name, value, valid_days โดย cookieText จะทำการเก็บ ชื่อ ผลลัพธ์ และวันหมดอายุ */
    static set(name, value, valid_days) {
        const expires = valid_days * 1000 * 60 * 60 * 24;
        let date = new Date()
        date.setTime(date.getTime() + expires);
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        if (date instanceof Date) {
            cookieText += `; expires=${date.toUTCString()}`;
        }
        document.cookie = cookieText;
    }

    // unset สำหรับ set cookie ใหม่
    static unset(name) {
        CookieUtil.set(name, '');
    }
};