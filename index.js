const readLineSync = require("readline-sync");
const crypto = require("crypto");

const utills = [
  "URL Encoder",
  "URL Decoder",
  "Base64 Encoding",
  "Base64 Decoding",
  "md5 Hashing",
  "Epoch Converters",
  "Binary/Decimal/Hex/Octal Converters",
  "RGB to Hex",
  "Hex to RGB",
  "Temperature Converters",
];

const urlEncoder = () => {
  const userOption = readLineSync.question("Enter your url to Encode\n");
  const newUrl = encodeURIComponent(userOption);
  console.log(`Encoded url is : \n ${newUrl}`);
};

const urlDecoder = () => {
  const userOption = readLineSync.question("Enter your url to Decode\n");
  const newUrl = decodeURIComponent(userOption);
  console.log(`Decoded url is : \n ${newUrl}`);
};

const base64Encoding = () => {
  const userOption = readLineSync.question("Enter your url to Encode\n");
  const base64 = Buffer.from(userOption).toString("base64");
  console.log(`Encoded url is : \n ${base64}`);
};

const base64Decoding = () => {
  const userOption = readLineSync.question("Enter your url to Encode\n");
  const original = Buffer.from(userOption, "base64").toString("ascii");
  console.log(`Encoded url is : \n ${original}`);
};

const md5Hashing = () => {
  const userOption = readLineSync.question("Enter your url to Hash\n");
  const algo = "md5"; //could be sha1, sha256, sha512
  const hash = crypto.createHash(algo).update(userOption).digest("hex");
  console.log(`Hashed url is : \n ${hash}`);
};
const epochConverter = () => {
  const userOption = readLineSync.question("1 toHumanDate\n2 toEpoch\n");
  if (parseInt(userOption) === 1) {
    const userOption = readLineSync.question("Enter Epoch time\n");
    var myDate = new Date(userOption * 1000);
    console.log(myDate.toLocaleString());
  } else if (parseInt(userOption) === 2) {
    console.log("Enter time as follows...");
    const year = readLineSync.question("Enter year in YYYY format\n");
    const month = readLineSync.question("Enter month name\n");
    const date = readLineSync.question("Enter date in DD format\n");
    const hours = readLineSync.question("Enter hours in HH format\n");
    const minutes = readLineSync.question("Enter minutes in MM format\n");
    const seconds = readLineSync.question("Enter seconds in SS format\n");
    const myDate = new Date(
      `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`
    );
    const myEpoch = myDate.getTime() / 1000.0;
    console.log(myEpoch);
  }
};

const convertersBinaryDecimalHexOctal = () => {
  console.log("building in process...");
};

const rgbToHex = () => {
  console.log("building in process...");
};

const hexToRgb = () => {
  console.log("building in process...");
};

const temperatureConverters = () => {
  console.log("building in process...");
};

const startApp = (utills) => {
  utills.forEach((feature, index) => console.log(`${index + 1} ${feature}`));
  const userOption = readLineSync.question("Select your option...");
  switch (parseInt(userOption)) {
    case 1:
      urlEncoder();
      break;
    case 2:
      urlDecoder();
      break;
    case 3:
      base64Encoding();
      break;
    case 4:
      base64Decoding();
      break;
    case 5:
      md5Hashing();
      break;
    case 6:
      epochConverter();
      break;
    case 7:
      convertersBinaryDecimalHexOctal();
      break;
    case 8:
      rgbToHex();
      break;
    case 9:
      hexToRgb();
      break;
    case 9:
      temperatureConverters();
      break;

    default:
      break;
  }
};

startApp(utills);
