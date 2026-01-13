// =================================================
// Class Guitar 
// =================================================
class Guitar {
  constructor(serialNumber, price, builder, model, type, backWood, topWood) {
    this.serialNumber = serialNumber;
    this.price        = price;
    this.builder      = builder;
    this.model        = model;
    this.type         = type;
    this.backWood     = backWood;
    this.topWood      = topWood;
  }

  getSerialNumber = () => this.serialNumber;
  getPrice        = () => this.price;
  setPrice        = (newPrice) => this.price = newPrice;
  getBuilder      = () => this.builder;
  getModel        = () => this.model;
  getType         = () => this.type;
  getBackWood     = () => this.backWood;
  getTopWood      = () => this.topWood;
}



// =================================================
// Class Inventory
// =================================================
class Inventory {
  constructor() {
    this.guitars = [];
  }

  addGuitar = (sn, price, builder, model, type, back, top) => {
    this.guitars.push(new Guitar(sn, price, builder, model, type, back, top));
  };

  getGuitar = (sn) =>
    this.guitars.find(g => g.getSerialNumber() === sn) || null;

  // Cari satu hasil (pertama cocok)
  searchOne = (spec) =>
    this.guitars.find(g =>
      (!spec.getBuilder()  || spec.getBuilder()  === g.getBuilder()) &&
      (!spec.getModel()    || spec.getModel().toLowerCase() === g.getModel().toLowerCase()) &&
      (!spec.getType()     || spec.getType()     === g.getType()) &&
      (!spec.getBackWood() || spec.getBackWood() === g.getBackWood()) &&
      (!spec.getTopWood()  || spec.getTopWood()  === g.getTopWood())
    ) || null;

  // Cari semua hasil (multiple match)
  searchMany = (spec) =>
    this.guitars.filter(g =>
      (!spec.getBuilder()  || spec.getBuilder()  === g.getBuilder()) &&
      (!spec.getModel()    || spec.getModel().toLowerCase() === g.getModel().toLowerCase()) &&
      (!spec.getType()     || spec.getType()     === g.getType()) &&
      (!spec.getBackWood() || spec.getBackWood() === g.getBackWood()) &&
      (!spec.getTopWood()  || spec.getTopWood()  === g.getTopWood())
    );
}



// =================================================
// Data Gitar
// =================================================
const inventory = new Inventory();

// Fender Electric - tipe Strat
inventory.addGuitar("F001", 1500, "Fender", "Stratocaster", "Electric", "Alder", "Maple");

// Gibson Electric - tipe SG
inventory.addGuitar("G002", 2200, "Gibson", "SG Standard", "Electric", "Mahogany", "Rosewood");

// Ibanez Electric - tipe Metal
inventory.addGuitar("I003", 1800, "Ibanez", "RG550", "Electric", "Basswood", "Maple");

// Yamaha Acoustic - Natural Sound
inventory.addGuitar("Y004", 900, "Yamaha", "FG830", "Acoustic", "Rosewood", "Spruce");

// Taylor Acoustic - High Spec
inventory.addGuitar("T005", 2500, "Taylor", "214CE", "Acoustic", "Mahogany", "Spruce");

// Cort Acoustic - Mid Range
inventory.addGuitar("C006", 1200, "Cort", "AD810", "Acoustic", "Mahogany", "Spruce");



// =================================================
// Contoh Pencarian
// =================================================

// Cari gitar elektrik merk Gibson
const findGibson = new Guitar(null, null, "Gibson", null, "Electric", null, null);
console.log("\n🔍 Hasil pencarian Gibson Electric:");
console.log(inventory.searchOne(findGibson));

// Cari semua gitar akustik
const findAcoustic = new Guitar(null, null, null, null, "Acoustic", null, null);
console.log("\n🎸 Semua gitar Acoustic:");
console.log(inventory.searchMany(findAcoustic));

// Cari gitar dengan model tertentu (Ibanez RG550)
const findIbanez = new Guitar(null, null, "Ibanez", "RG550", null, null, null);
console.log("\n⚙️ Ibanez RG550 ditemukan:");
console.log(inventory.searchOne(findIbanez));
