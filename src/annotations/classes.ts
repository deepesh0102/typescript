class Vehicle {
	/* color: string;

	constructor(color: string) {
		this.color = color;
	} */

	constructor(public color: string) {}
	protected honk(): void {
		console.log('Honk');
	}
}

const vehicle: Vehicle = new Vehicle('Orange');

console.log(vehicle.color);

class Car extends Vehicle {
	constructor(public color: string, public wheels: number) {
		console.log(wheels);
		const a = 10;
		super(color);
	}
}

const car = new Car('Orange', 4);

export {};
