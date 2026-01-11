//=================================================
// Class Car
// =================================================

class Car {
  constructor(vin, price, brand, model, type, fuel, color) {
    this.vin   = vin;
    this.price = price;
    this.brand = brand;
    this.model = model;
    this.type  = type;
    this.fuel  = fuel;
    this.color = color;
  }

  getVin   = () => this.vin;
  getPrice = () => this.price;
  setPrice = (newPrice) => this.price = newPrice;

  getBrand = () => this.brand;
  getModel = () => this.model;
  getType  = () => this.type;
  getFuel  = () => this.fuel;
  getColor = () => this.color;
}



// =================================================
// Class CarInventory
// =================================================

class CarInventory {
  constructor() {
    this.cars = [];
  }

  addCar = (vin, price, brand, model, type, fuel, color) => {
    this.cars.push(new Car(vin, price, brand, model, type, fuel, color));
  };

  getCar = (vin) =>
    this.cars.find(c => c.getVin() === vin) || null;

  // Cari satu mobil (pertama cocok)
  searchOne = (spec) =>
    this.cars.find(c =>
      (!spec.getBrand() || spec.getBrand() === c.getBrand()) &&
      (!spec.getModel() || spec.getModel().toLowerCase() === c.getModel().toLowerCase()) &&
      (!spec.getType()  || spec.getType() === c.getType()) &&
      (!spec.getFuel()  || spec.getFuel() === c.getFuel()) &&
      (!spec.getColor() || spec.getColor() === c.getColor())
    ) || null;

  // Cari semua mobil yang cocok
  searchMany = (spec) =>
    this.cars.filter(c =>
      (!spec.getBrand() || spec.getBrand() === c.getBrand()) &&
      (!spec.getModel() || spec.getModel().toLowerCase() === c.getModel().toLowerCase()) &&
      (!spec.getType()  || spec.getType() === c.getType()) &&
      (!spec.getFuel()  || spec.getFuel() === c.getFuel()) &&
      (!spec.getColor() || spec.getColor() === c.getColor())
    );
}



// =================================================
// Data Mobil
// =================================================

const carInventory = new CarInventory();

// Toyota
carInventory.addCar("VIN001", 300000000, "Toyota", "Avanza", "MPV", "Bensin", "Hitam");
carInventory.addCar("VIN002", 350000000, "Toyota", "Rush", "SUV", "Bensin", "Putih");

// Honda
carInventory.addCar("VIN003", 400000000, "Honda", "Civic", "Sedan", "Bensin", "Merah");
carInventory.addCar("VIN004", 450000000, "Honda", "CR-V", "SUV", "Hybrid", "Abu-abu");

// Tesla
carInventory.addCar("VIN005", 900000000, "Tesla", "Model 3", "Sedan", "Electric", "Putih");



// =================================================
// Contoh Pencarian
// =================================================

// Cari mobil SUV
const findSUV = new Car(null, null, null, null, "SUV", null, null);
console.log("\n🚙 Semua mobil SUV:");
console.log(carInventory.searchMany(findSUV));

// Cari mobil merk Honda
const findHonda = new Car(null, null, "Honda", null, null, null, null);
console.log("\n🔍 Mobil Honda ditemukan:");
console.log(carInventory.searchMany(findHonda));

// Cari Tesla Model 3
const findTesla = new Car(null, null, "Tesla", "Model 3", null, null, null);
console.log("\n⚡ Tesla Model 3:");
console.log(carInventory.searchOne(findTesla));
