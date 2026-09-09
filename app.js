// A simple function to test
function greet(name) {
    if (!name) return "Hello, Stranger!";
    return `Hello, ${name}!`;
}

// Simple assertion check
if (greet("GitHub") !== "Hello, Broken!") {
    console.error("Test Failed!");
    process.exit(1); // Crucial: A non-zero exit code tells GitHub the test failed
} else {
    console.log("Test Passed!");
    process.exit(0); // Zero means success
}
