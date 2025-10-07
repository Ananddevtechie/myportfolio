import nextJest from "next/jest.js"; // note the .js extension

const createJestConfig = nextJest({
  dir: "./", // path to your Next.js app root
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/app/about/page.test.tsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};

export default createJestConfig(customJestConfig);
