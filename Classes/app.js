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
	// rgb() {
	// 	const { r, g, b } = this;
	// 	return `rgb(${r}, ${g}, ${b})`;
	// }

	innerRGB(){
		const { r, g, b } = this;
		return `${r}, ${g}, ${b}`;
	}

	rgb(){
		return `rgb(${this.innerRGB()})`;
	}

	rgba(a=1.0){
		return `rgba(${this.innerRGB()}, ${a})`;
	}

	hex() {
		const { r, g, b } = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
}

const c1 = new Color(255, 67, 89, 'tomato');
c1.greet();
console.log("RGB Color: ", c1.rgb());
console.log("RGBA Color: ", c1.rgba());
console.log("Hex Color: ", c1.hex());