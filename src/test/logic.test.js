import { handleClose } from "./logic.js"

describe("test handle close function", () => {
  it("should return an object", () => {
    expect(typeof handleClose).toBe("function")
  })
  it("should not return a number", () => {
    expect(typeof handleClose).not.toBe("number")
  })
  it("should not return a string", () => {
    expect(typeof handleClose).not.toBe("string")
  })
  it("should not return an array", () => {
    expect(typeof handleClose).not.toBe("array")
  })
  it("should not return a boolean", () => {
    expect(typeof handleClose).not.toBe("boolean")
  })
})
