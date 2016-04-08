export class Answer {
    id: number; // make private when binding to backend
    appid: number;
    order: number = 1;
    dtype: string;
    text: string;
    weight: number;
    
    constructor(type:string){
        this.appid = Math.floor(Math.random() * 1000);
        this.dtype = type;
    }
}
