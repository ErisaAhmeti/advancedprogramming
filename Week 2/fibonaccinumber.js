/**
 * Function to calculate the nth Fibonacci number.
 * The Fibonacci sequence starts with 0 and 1.
 * Each subsequent number is the sum of the two preceding ones.
 * 
 * @param {number} n - The position in the Fibonacci sequence (0-indexed).
 * @returns {number} - The nth Fibonacci number.
 */
function fibonacci(n) {
    // Handle edge cases for n < 0
    if (n < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    // Base cases for n = 0 and n = 1
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Iterative calculation for n >= 2
    let prev = 0; // Represents F(0)
    let curr = 1; // Represents F(1)

    for (let i = 2; i <= n; i++) {
        const next = prev + curr; // Calculate the next Fibonacci number
        prev = curr; // Update prev to the current value
        curr = next; // Update curr to the next value
    }

    return curr; // The nth Fibonacci number
}

// Example usage:
if (require.main === module) {
    const args = process.argv.slice(2);
    const n = parseInt(args[0], 10);

    if (isNaN(n)) {
        console.error("Please provide a valid non-negative integer as input.");
    } else {
        try {
            console.log(`The ${n}th Fibonacci number is:`, fibonacci(n));
        } catch (error) {
            console.error(error.message);
        }
    }
}