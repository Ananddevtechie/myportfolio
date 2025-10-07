
import nextJest from "next/jest.js"; // keep .js extension

// Provide the path to your Next.js app root
const createJestConfig = nextJest({
  dir: "./",
});

// Custom Jest config
const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  
  // Setup file after environment is loaded
  setupFilesAfterEnv: ["<rootDir>/src/app/about/page.test.tsx"],

  // Map module aliases from tsconfig
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  // Optional: Ignore Next.js internal folders
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};

export default createJestConfig(customJestConfig);
