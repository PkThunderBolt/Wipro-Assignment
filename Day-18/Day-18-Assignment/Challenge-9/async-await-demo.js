const fs = require("fs").promises;

// Simulated delay function (Bonus)
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function copyFile() {
  try {
    console.log("Reading file...");

    const data = await fs.readFile("input.txt", "utf8");

    console.log("File read. Simulating delay...");
    await delay(1000); // 1 second delay (Bonus)

    await fs.writeFile("output.txt", data);

    console.log("File copied successfully using async/await!");
  } catch (err) {
    console.error("Error:", err);
  }
}

copyFile();
