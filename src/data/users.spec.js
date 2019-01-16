const assert = require("assert")
const userData1 = require("./users").data
const userData2 = require("./users2").data
const userDate1 = require("./users").getUserBirthDate
const userDate2 = require("./users2").getUserBirthDate

describe("users data 1", function () {
  it("is complete/valid", () => {
    userData1.forEach(user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(
        typeof user.dateOfBirth === "string",
        "user dateOfBirth property should be a non-empty string"
      )
    })
  })
  it("returns a parsed birthdate", () => {
    assert.equal(userDate1(
      {
        name: "Ava",
        dateOfBirth: "1990-04-01"
      }
    ), 638928000000)
  })
})

describe("users data 2", function () {
  it("is complete/valid", () => {
    userData2.forEach(user => {
      assert.ok(user.name, "user name property should be a non-empty string")
      assert.ok(
        user.birthday && typeof user.birthday === "number",
        "user birthday property should be a non-zero number"
      )
    })
  })
  it("returns a normal birthdate", () => {
    assert.equal(userDate2(
      {
        name: "Ava",
        birthday: 638928000000
      }
    ), 638928000000)
  })
})
