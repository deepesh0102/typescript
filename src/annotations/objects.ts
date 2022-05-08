const profile = {
	name: 'Deepesh',
	age: 20,
	coordinates: { lat: 10, lng: 20 },
	setAge(age: number): void {
		this.age = age;
	},
};

const { age, name: names }: { age: number; name: string } = profile;

const {
	coordinates: { lat, lng },
}: { coordinates: { lat: number; lng: number } } = profile;

export {};
