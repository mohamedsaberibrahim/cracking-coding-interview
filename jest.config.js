module.exports = {
    testEnvironment: "node",
    roots: ["<rootDir>"],
    testMatch: [
        '**/(*.)test.+(ts|js)'
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
};
