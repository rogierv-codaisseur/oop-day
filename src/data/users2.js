module.exports.data = [
  {
    name: "Ava",
    birthday: 638928000000
  },
  {
    name: "James",
    birthday: -60048000000
  },
  {
    name: "Danielle",
    birthday: 558662400000
  },
  {
    name: "Darnell",
    birthday: 393552000000
  }
]

module.exports.getUserBirthDate = function (user) {
  return user.birthday;
}
