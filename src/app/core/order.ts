export class Order {
    constructor(
        public name?: string,
        public lastName?: string,
        public address?: string,
        public email?: string,
        public phone?: number,
        public timePreference: string = 'morning'
    ){}
}
