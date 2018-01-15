export class Vehicle {
    constructor(
        public plate: string,
        public brand: string,
        public model: string,
        public image?: string,
        public fuel?: string,
        public price?: number
    ) {

    }
}
