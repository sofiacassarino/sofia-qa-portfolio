# Demo testing websites:
1. https://practicesoftwaretesting.com/
2. https://www.saucedemo.com/
3. https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
______________________________________________________________________________
# Personal github URL: 
https://github.com/sofiacassarino
______________________________________________________________________________
# PLAYWRIGHT COMMANDS: 
Playwright codegen:
1. npx playwright codegen https://practicesoftwaretesting.com

The --headed means you'll see the browser doing the actions in real time
2. npx playwright test tests/login.spec.ts --headed

To run a specific test only, use --grep with the test name
3. npx playwright test tests/login.spec.ts --headed --grep "home page loads correctly"

4. npx playwright test tests/login.spec.ts --ui
______________________________________________________________________________
# GitHub/GitLab git commands:
1. Check what files you changed: 
git status

2. Stage the changes: 
git add .

3. Commit with a message:
git commit -m "add login tests for practicesoftwaretesting"

4. Push to GitHub:
git push

# For branches — also identical:
1. Create and switch to a new branch:
git checkout -b feature/login-tests

2. Push branch to GitHub:
git push -u origin feature/login-tests
______________________________________________________________________________
# ACTIONS (no expect)
page.goto()      Navigate to URL
page.locator()   Find element
page.click()     Click element
page.fill()      Type into input
page.nth()       Pick element by index

# ASSERTIONS (use expect)
toHaveTitle()    Page tab title
toHaveURL()      Address bar URL
toBeVisible()    Element is visible
toHaveText()     Element contains text
toBeEnabled()    Button/input not disabled
toHaveCount()    Number of elements
toBeChecked()    Checkbox is checked
expect()         Assertion, to check an element is visible

# KEY CONCEPTS
async   = this function does slow things (browser actions)
await   = wait here until this finishes before next step
const   = variable that won't change

# PICKING ELEMENTS BY INDEX
page.locator('.card').first()   first element
page.locator('.card').last()    last element
page.locator('.card').nth(2)    third element (0 based)

# ID vs CLASS selectors
1. data-test attribute (best)   [data-test="nav-home"]
2. id (good)                    #navbarSupportedContent
3. class (avoid)                .navbar-collapse (first to be changed by devs)
______________________________________________________________________________