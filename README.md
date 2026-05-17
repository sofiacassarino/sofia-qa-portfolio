Demo testing websites:
1. https://practicesoftwaretesting.com/
2. https://www.saucedemo.com/
3. https://opensource-demo.orangehrmlive.com/web/index.php/auth/login 
______________________________________________________________________________
Personal github URL: https://github.com/sofiacassarino
______________________________________________________________________________
Playwright codegen:
1. npx playwright codegen https://practicesoftwaretesting.com

The --headed means you'll see the browser doing the actions in real time
2. npx playwright test tests/login-practicesoftwaretesting.spec.ts --headed

To run a specific test only, use --grep with the test name
3. npx playwright test tests/login-practicesoftwaretesting.spec.ts --headed --grep "home page loads correctly"

4. npx playwright test tests/login-practicesoftwaretesting.spec.ts --ui 
______________________________________________________________________________
GitHub/GitLab git commands:
# 1. Check what files you changed 
git status

# 2. Stage the changes
git add .

# 3. Commit with a message
git commit -m "add login tests for practicesoftwaretesting"

# 4. Push to GitHub
git push

For branches — also identical:
# Create and switch to a new branch
git checkout -b feature/login-tests

# Push branch to GitHub
git push -u origin feature/login-tests
______________________________________________________________________________