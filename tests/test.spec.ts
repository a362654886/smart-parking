import { test, expect } from "@playwright/test";

test.describe("Home Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/smartParking"); // Replace with your dev server URL
  });

  test("should toggle checkbox and background colors correctly", async ({
    page,
  }) => {
    const sheetsCheckbox = page.locator("#sheets-status");
    const sheetsStation = page.locator("#sheets-station");

    // Log initial state
    console.log(
      "Initial Sheets Background:",
      await sheetsStation.evaluate(
        (el) => window.getComputedStyle(el).backgroundColor
      )
    );

    // Check "sheets"
    await sheetsCheckbox.check();
    await page.waitForTimeout(100); // Allow state to update
    console.log(
      "After Sheets Check Background:",
      await sheetsStation.evaluate(
        (el) => window.getComputedStyle(el).backgroundColor
      )
    );

    // Verify background color is transparent
    await expect(sheetsStation).toHaveCSS(
      "background-color",
      "rgba(0, 0, 0, 0)"
    ); // Adjust if needed
  });
});
