// this is a private variable

class TaxPayer {
  #gstNumber; // private variable
  constructor(name, panNumber, gstNumber) {
    this.name = name;
    this.panNumber = panNumber;
    this.gstNumber = gstNumber; // private key
  }

  // private method
  #printTaxPayerDetails() {}
  printTaxPayerDetails() {
    console.log(
      `\n Name: ${this.name} ,\n Pan Number: ${this.panNumber} ,\n GST Number: ${this.gstNumber}\n`
    );
  }
}

let taxPayer1 = new TaxPayer("John", "ABC123", "GST12345");
taxPayer1.printTaxPayerDetails();

// inheritance class
class BusinessMen extends TaxPayer {
  constructor(
    name,
    panNumber,
    gstNumber,
    businessName,
    businessType,
    businessAddress
  ) {
    super(name, panNumber, gstNumber);
    this.businessName = businessName;
    this.businessType = businessType;
    this.businessAddress = businessAddress;
  }
  printTaxPayerDetails() {
    console.log(
      `\n\n Name: ${this.name} ,\n Pan Number: ${this.panNumber} ,\n GST Number: ${this.gstNumber},\n BusinessName: ${this.businessName},\n BusinessType: ${this.businessType},\n BusinessAddress: ${this.businessAddress}\n`
    );
  }
}
let taxPayer2 = new BusinessMen(
  "John",
  "ABC123",
  "GST12345",
  "Ender co.",
  "startup",
  "123 borivali Street"
);
taxPayer2.printTaxPayerDetails();
// Error: Cannot access private member #printTaxPayerDetails
