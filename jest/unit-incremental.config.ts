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
  collectCoverageFrom: ["src/pages/**/*.tsx", "src/components/**/*.tsx", "src/utils/**/*.ts", "App.tsx", "!index.ts"],
  coveragePathIgnorePatterns: ["/node_modules/", "index.ts"],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
}
