// Room - 01 Start
const hostel = [
  // Room 1
  { student: `Easin`, HouseRent: 00, Meal: 1000, Wifi: 100 },
  { student: `Limon2`, HouseRent: 00, Meal: 00, Wifi: 0 },
  { student: `Toufiq`, HouseRent: 00, Meal: 00, Wifi: 0 },

  //   Room 2
  { student: `Onik`, HouseRent: 1050, Meal: 1000, Wifi: 100 },
  { student: `Munayem`, HouseRent: 0, Meal: 0, Wifi: 0 },
  { student: `Maruf`, HouseRent: 0, Meal: 0, Wifi: 0 },

  // Room 3
  { student: `Bony`, HouseRent: 1050, Meal: 1500, Wifi: 100 },
  { student: `Limon1`, HouseRent: 1050, Meal: 1000, Wifi: 100 },
  { student: `Sadman`, HouseRent: 1050, Meal: 1000, Wifi: 100 },

  // Room 4
  { student: `Himel`, HouseRent: 1050, Meal: 1400, Wifi: 00 },
  { student: `Rajib`, HouseRent: 0, Meal: 0, Wifi: 0 },
  { student: `Muzahid`, HouseRent: 1050, Meal: 500, Wifi: 0 },

  // Room 5
  { student: `Tamim`, HouseRent: 1050, Meal: 500, Wifi: 100 },
  { student: `Mussaraf`, HouseRent: 1050, Meal: 0, Wifi: 0 },
  { student: `Rohan`, HouseRent: 0, Meal: 1000, Wifi: 0 },

  // Room 6
  { student: `Monir`, HouseRent: 1050, Meal: 1000, Wifi: 00 },
  { student: `Empty`, HouseRent: 0, Meal: 0, Wifi: 0 },
  { student: `Empty`, HouseRent: 0, Meal: 0, Wifi: 0 },

  // Room 7
  { student: `Inarul`, HouseRent: 1050, Meal: 1000, Wifi: 100 },
  { student: `Himu`, HouseRent: 0, Meal: 1000, Wifi: 100 },
  { student: `Fahim`, HouseRent: 1050, Meal: 0, Wifi: 0 },

  // Room 8
  { student: `Siam`, HouseRent: 00, Meal: 500, Wifi: 100 },
  { student: `Alamgir`, HouseRent: 0, Meal: 500, Wifi: 100 },
  { student: `Empty`, HouseRent: 0, Meal: 0, Wifi: 0 },

  //   Room 9
  { student: `Khaled`, HouseRent: 1050, Meal: 1000, Wifi: 100 },
  { student: `Topu`, HouseRent: 0, Meal: 0, Wifi: 0 },
  { student: `Sujayed`, HouseRent: 0, Meal: 0, Wifi: 0 },

  // Room 10
  { student: `Kamrul`, HouseRent: 00, Meal: 800, Wifi: 00 },
  { student: `Empty`, HouseRent: 0, Meal: 0, Wifi: 0 },
  { student: `Empty`, HouseRent: 0, Meal: 0, Wifi: 0 },
];

// House Rent Start
let totalHouseRent = 0;
for (const HouseRent of hostel) {
  totalHouseRent = totalHouseRent + HouseRent.HouseRent;
}
console.log(`Total house rent from Hostel = `, totalHouseRent);
// House Rent End

// Room - 01 Meal Start
let totalMealOfHostel = 0;
for (const totalMeal of hostel) {
  totalMealOfHostel = totalMealOfHostel + totalMeal.Meal;
}
console.log(`Total meal money from Hostel = `, totalMealOfHostel);
// Room - 01 Meal End

// Room - 01 Wifi Start
let totalWiFiOfHostel = 0;
for (const totalWiFi of hostel) {
  totalWiFiOfHostel = totalWiFiOfHostel + totalWiFi.Wifi;
}
console.log(`Total WiFi money from Hostel = `, totalWiFiOfHostel);
// Room - 01 Wifi End


