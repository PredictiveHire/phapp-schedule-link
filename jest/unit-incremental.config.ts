module.exports = {
  rootDir: "..",
  testRegex: ".*\\.test\\.tsx?$",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest/unit.setup.ts"],
  collectCoverage: true,
  coverageDirectory: "./ci/coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "index.ts", "vite.config.ts"],
}
