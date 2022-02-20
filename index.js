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
    const epochTime = readLineSync.question("Enter Epoch time\n");
    var myDate = new Date(epochTime * 1000);
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
  const convertionsTypes = [
    "Binary to Decimal",
    "Binary to Hex",
    "Binary to Octal",
    "Decimal to Binary",
    "Decimal to Hex",
    "Decimal to Octal",
    "Hex to Binary",
    "Hex to Decimal",
    "Hex to Octal",
    "Octal to Binary",
    "Octal to Decimal",
    "Octal to Hex",
  ];
  convertionsTypes.forEach((convertionType, index) => {
    console.log(`${index + 1} ${convertionType}`);
  });
  const userOption = readLineSync.question("Select your option\n");
  const number = readLineSync.question("Enter  number\n");
  if (
    parseInt(userOption) === 1 ||
    parseInt(userOption) === 2 ||
    parseInt(userOption) === 3 ||
    parseInt(userOption) === 8
  ) {
    console.log(parseInt(number, 2));
  } else if (
    parseInt(userOption) === 4 ||
    parseInt(userOption) === 7 ||
    parseInt(userOption) === 10
  ) {
    console.log(number.toString(2));
  } else if (parseInt(userOption) === 5 || parseInt(userOption) === 12) {
    console.log(number.toString(16));
  } else if (parseInt(userOption) === 6 || parseInt(userOption) === 9) {
    console.log(number.toString(8));
  } else if (parseInt(userOption) === 11) {
    console.log(number.toString(11));
  }
};

const rgbToHex = () => {
  const redColor = readLineSync.question("Enter red color code\n");
  const blueColor = readLineSync.question("Enter blue color code\n");
  const greenColor = readLineSync.question("Enter green color code\n");
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  console.log(rgbToHex(redColor, blueColor, greenColor));
};

const hexToRgb = () => {
  console.log("building in process...");
};

const temperatureConverters = () => {
  const userOption = readLineSync.question(
    "1 Celsius to Fahrenheit\n2 Fahrenheit to Celsius\n"
  );
  if (parseInt(userOption) === 1) {
    const celsius = readLineSync.question("Enter Celsius temperature\n");
    const fahrenheit = celsius * (9 / 5) + 32;
    console.log(`Fahrenheit : ${fahrenheit}`);
  } else if (parseInt(userOption) === 2) {
    const fahrenheit = readLineSync.question("Enter Fahrenheit temperature\n");
    const celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(`Celsius : ${celsius}`);
  }
};

const startApp = (utills) => {
  utills.forEach((feature, index) => console.log(`${index + 1} ${feature}`));
  const userOption = readLineSync.question("Select your option...\n");
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
    case 10:
      temperatureConverters();
      break;

    default:
      break;
  }
};

startApp(utills);
