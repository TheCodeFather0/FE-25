    export interface IObj {
        age: number;
        name: string;
        klicka: string;
        isDeveloper: boolean;
        elArasindaKlicka: string;
    }

    // optional
    export interface IData {
        id?:string | number;
        name:string;
        username:string;
        users:string[]
    }



    interface IUser  {
        id:number | string, 
        name:string
    }

    export type IUsers = IUser[]