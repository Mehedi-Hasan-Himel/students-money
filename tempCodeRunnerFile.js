// Room - 01 Start
const hostel = [
  // Room 1
  {
    student: `Easin`,
    HouseRent: 00,
    Meal: 1100,
    Wifi: 100,
    MealDay: 15,
    // MyMealCost: perMealPrice * MealDay;
  },
  {
    student: `Limon2`,
    HouseRent: 00,
    Meal: 100,
    Wifi: 0,
    MealDay: 18,
  },
  {
    student: `Toufiq`,
    HouseRent: 00,
    Meal: 400,
    Wifi: 0,
    MealDay: 7,
  },

  //   Room 2
  {
    student: `Onik`,
    HouseRent: 1050,
    Meal: 1600,
    Wifi: 100,
    MealDay: 23,
  },

  {
    student: `Fahim`,
    HouseRent: 1050,
    Meal: 500,
    Wifi: 0,
    MealDay: 7,
  },

  // Room 3
  {
    student: `Bony`,
    HouseRent: 1050,
    Meal: 1600,
    Wifi: 100,
    MealDay: 22,
  },
  {
    student: `Limon1`,
    HouseRent: 1050,
    Meal: 1600,
    Wifi: 100,
    MealDay: 21,
  },
  {
    student: `Sadman`,
    HouseRent: 1050,
    Meal: 1600,
    Wifi: 100,
    MealDay: 23,
  },

  // Room 4
  {
    student: `Himel`,
    HouseRent: 1050,
    Meal: 1500,
    Wifi: 00,
    MealDay: 23,
  },

  {
    student: `Dokan`,
    HouseRent: 0,
    Meal: 2500,
    Wifi: 0,
    MealDay: 0,
  },

  // Room 5
  {
    student: `Tamim`,
    HouseRent: 1050,
    Meal: 500,
    Wifi: 100,
    MealDay: 16,
  },
  {
    student: `Mussaraf`,
    HouseRent: 1050,
    Meal: 500,
    Wifi: 0,
    MealDay: 11,
  },
  {
    student: `Rohan`,
    HouseRent: 0,
    Meal: 1100,
    Wifi: 0,
    MealDay: 16,
  },

  // Room 6
  {
    student: `Monir`,
    HouseRent: 1050,
    Meal: 1600,
    Wifi: 00,
    MealDay: 23,
  },
  {
    student: `Rifat`,
    HouseRent: 0,
    Meal: 100,
    Wifi: 0,
    MealDay: 11,
  },
  {
    student: `Rudra`,
    HouseRent: 0,
    Meal: 100,
    Wifi: 0,
    MealDay: 7,
  },

  // Room 7
  {
    student: `Inarul`,
    HouseRent: 1050,
    Meal: 1100,
    Wifi: 100,
    MealDay: 18,
  },
  {
    student: `Himu`,
    HouseRent: 0,
    Meal: 1100,
    Wifi: 100,
    MealDay: 16,
  },

  // Room 8
  {
    student: `Siam`,
    HouseRent: 00,
    Meal: 1400,
    Wifi: 100,
    MealDay: 16,
  },
  {
    student: `Alamgir`,
    HouseRent: 0,
    Meal: 500,
    Wifi: 100,
    MealDay: 16,
  },
  {
    student: `Prolith`,
    HouseRent: 0,
    Meal: 0,
    Wifi: 0,
    MealDay: 7,
  },

  //   Room 9
  {
    student: `Khaled`,
    HouseRent: 1050,
    Meal: 1500,
    Wifi: 100,
    MealDay: 23,
  },

  // Room 10
  {
    student: `Kamrul`,
    HouseRent: 00,
    Meal: 900,
    Wifi: 00,
    MealDay: 15,
  },
  {
    student: `Muzahid`,
    HouseRent: 1050,
    Meal: 1100,
    Wifi: 0,
    MealDay: 19,
  },
];

// House Rent Start
/*

let totalHouseRent = 0;
for (const HouseRent of hostel) {
  totalHouseRent = totalHouseRent + HouseRent.HouseRent;
}
console.log(`Total house rent from Hostel = `, totalHouseRent);

*/
// House Rent End

// Meal Start
let totalMealOfHostel = 0;
for (const totalMeal of hostel) {
  totalMealOfHostel = totalMealOfHostel + totalMeal.Meal;
}
console.log(`Total meal money from Hostel = `, totalMealOfHostel);
// Meal End

// WiFi Start
/* 
let totalWiFiOfHostel = 0;
for (const totalWiFi of hostel) {
  totalWiFiOfHostel = totalWiFiOfHostel + totalWiFi.Wifi;
}
console.log(`Total WiFi money from Hostel = `, totalWiFiOfHostel);
*/
// WiFi End

// Meal Day Start

let totalMealDayOfHostel = 0;
for (const totalMealDay of hostel) {
  totalMealDayOfHostel = totalMealDayOfHostel + totalMealDay.MealDay;
}
console.log(`Total Meal from Hostel = `, totalMealDayOfHostel);
// Meal Day End

let perMealPrice = totalMealOfHostel / totalMealDayOfHostel;

console.log(`Per Meal Price of Hostel = `, perMealPrice);

// let MyMealCost = MealDay * perMealPrice;

// console.log(hostel);
console.log(`Room 01`);
let EasinMealCount = perMealPrice * 15;
console.log(`Easin Meal Money = `, EasinMealCount); //     MealDay: 15,

let Limon2MealCount = perMealPrice * 18;
console.log(`Limon2 Meal Money = `, Limon2MealCount); //     MealDay: 18,

let ToufiqMealCount = perMealPrice * 7;
console.log(`Toufiq Meal Money = `, ToufiqMealCount); //     MealDay: 7,

console.log(`Room 02`);

let OnikMealCount = perMealPrice * 23;
console.log(`Onik Meal Money = `, OnikMealCount); //     MealDay: 23,

let FahimMealCount = perMealPrice * 7;
console.log(`Fahim Meal Money = `, FahimMealCount); //     MealDay: 7,

console.log(`Room 03`);

let BonyMealCount = perMealPrice * 22;
console.log(`Bony Meal Money = `, BonyMealCount); //     MealDay: 22,

let Limon1MealCount = perMealPrice * 21;
console.log(`Limon1 Meal Money = `, Limon1MealCount); //     MealDay: 21,

let SadmanMealCount = perMealPrice * 23;
console.log(`Sadman Meal Money = `, SadmanMealCount); //     MealDay: 23,

console.log(`Room 04`);

let HimelMealCount = perMealPrice * 23;
console.log(`Himel Meal Money = `, HimelMealCount); //     MealDay: 23,

console.log(`Room 05`);

let TamimMealCount = perMealPrice * 16;
console.log(`Tamim Meal Money = `, TamimMealCount); //     MealDay: 16,

let MussarafMealCount = perMealPrice * 11;
console.log(`Mussaraf Meal Money = `, MussarafMealCount); //     MealDay: 11,

let RohanMealCount = perMealPrice * 16;
console.log(`Rohan Meal Money = `, RohanMealCount); //     MealDay: 16,

console.log(`Room 06`);

let MonirMealCount = perMealPrice * 16;
console.log(`Monir Meal Money = `, MonirMealCount); //     MealDay: 16,

let RifatMealCount = perMealPrice * 11;
console.log(`Rifat Meal Money = `, RifatMealCount); //     MealDay: 11,

let RudraMealCount = perMealPrice * 16;
console.log(`Rudra Meal Money = `, RudraMealCount); //     MealDay: 16,

console.log(`Room 07`);

let InarulMealCount = perMealPrice * 18;
console.log(`Inarul Meal Money = `, InarulMealCount); //     MealDay: 18,

let HimuMealCount = perMealPrice * 16;
console.log(`Himu Meal Money = `, HimuMealCount); //     MealDay: 16,

console.log(`Room 08`);

let SiamMealCount = perMealPrice * 16;
console.log(`Siam Meal Money = `, SiamMealCount); //     MealDay: 16,

let AlamgirMealCount = perMealPrice * 16;
console.log(`Alamgir Meal Money = `, AlamgirMealCount); //     MealDay: 16,

let ProlithMealCount = perMealPrice * 7;
console.log(`Prolith Meal Money = `, ProlithMealCount); //     MealDay: 7,
