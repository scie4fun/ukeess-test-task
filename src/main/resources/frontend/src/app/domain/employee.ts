import { Department } from "./department";

export class Employee {
    constructor(
        public id: number, public name: string, public active: number, 
        public department: Department
    ) {}
}
