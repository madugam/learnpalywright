// JavaScript Naming Cases Examples

// 1. camelCase
// First word lowercase, each subsequent word capitalized
// Commonly used for: variables, functions
let firstName = "Narsimha";
let totalPriceAmount = 199.99;
let isUserLoggedIn = true;

function getUserDetails() {
    return "Fetching user details...";
}

function calculateTotalPrice() {
    return firstName + " - " + totalPriceAmount;
}

// 2. PascalCase
// Every word starts with an uppercase letter
// Commonly used for: classes, constructors, React components
let UserProfile = { name: "Madugam", age: 30 };

class OrderDetails {
    constructor(orderId, amount) {
        this.orderId = orderId;
        this.amount = amount;
    }
}

function MainHeaderComponent() {
    return "Rendering Header...";
}

// 3. snake_case
// All lowercase with words separated by underscores
// Commonly used for: some config keys, database fields, Python-style JS
let user_name = "Madugam";
let total_price = 49.99;
let is_active_user = false;

function get_user_data() {
    return "User data loaded";
}

// 4. UPPER_SNAKE_CASE (SCREAMING_SNAKE_CASE)
// All uppercase with underscores
// Commonly used for: constants, environment variables
const MAX_LOGIN_ATTEMPTS = 5;
const DATABASE_HOST_NAME = "localhost";
const API_SECRET_KEY = "sk-1234567890abcdef";

function SHOW_WARNING_MESSAGE() {
    console.log("WARNING: System overload!");
}

// 5. kebab-case (dash-case)
// Lowercase words separated by hyphens
// NOT valid for JS variable/function names, but used in CSS classes and file names
// Examples:
// CSS class: user-profile-card
// File name: user-profile.js
// ID: main-content-area

// Usage demonstration (in strings or HTML contexts):
let cssClassName = "user-profile-card";
let fileName = "my-script-file.js";
let routePath = "/user-dashboard/settings";

// 6. Train-Case (HTTP-Header-Case)
// Capitalized words separated by hyphens
// Commonly used for: HTTP headers
let contentType = "Content-Type";
let acceptEncoding = "Accept-Encoding";
let xCustomHeader = "X-Custom-Header";

// 7. dot.case
// Lowercase words separated by dots
// Commonly used for: object property paths, namespaces, config keys
let userEmail = "user.profile.email";
let appConfig = "app.settings.debugMode";

// Example of dot.case in object access:
let config = {
    database: {
        host: "localhost",
        port: 5432
    }
};

console.log(config.database.host); // dot notation access

// Summary Table:
// Case               Example                Usage
// camelCase          firstName              variables, functions
// PascalCase         UserProfile            classes, components
// snake_case         first_name             config, database fields
// UPPER_SNAKE_CASE   MAX_COUNT              constants
// kebab-case         first-name             CSS classes, file names
// Train-Case         Content-Type           HTTP headers
// dot.case           user.name              object paths, namespaces
