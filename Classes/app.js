class Color {
	constructor(r, g, b, name) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}
	greet() {
		console.log(`Hello from ${this.name}!!`);
	}
	rgb() {
		const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
	}
	hex() {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
}

const c1 = new Color(255, 67, 89, 'tomato');
c1.greet();
console.log("RGB Color: ", c1.rgb());
console.log("Hex Color: ", c1.hex());