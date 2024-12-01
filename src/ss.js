import puppeteer from "puppeteer";

(async () => {
  // Launch Puppeteer browser
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set a viewport with specific dimensions (1200x720)
  await page.setViewport({ width: 1200, height: 720 });

  // Navigate to your website (replace the URL with your website)
  await page.goto("http://localhost:5174/"); // Replace with your actual URL

  await page.evaluate(() => {
    document.body.style.backgroundColor = "transparent";
  });

  // Wait for the element to load (replace '#element-id' with the actual ID of the element you want to capture)
  const element = await page.$("#capture"); // Replace with your element's ID

  if (element) {
    // Take a screenshot of the element and save it as an image
    await element.screenshot({
      path: "element-screenshot.png",
      omitBackground: true,
      clip: await element.boundingBox(), // Clip the screenshot to the element's bounding box
    });
    console.log("Screenshot saved successfully!");
  } else {
    console.log("Element not found!");
  }

  // Close the browser
  await browser.close();
})();
