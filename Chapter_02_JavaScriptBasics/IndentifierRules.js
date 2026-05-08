// JavaScript Identifier Naming Conventions (Cases)

// 1. camelCase - first word lowercase, subsequent words capitalized
// Most common in JavaScript for variables and functions
let userName = "John";
let totalPrice = 99.99;
function getUserInfo() {
    return "User Info";
}

// 2. PascalCase - every word starts with uppercase
// Used for classes, constructors, React components
let UserProfile = {};
class ProductDetails {
    constructor() {}
}
function MainComponent() {}

// 3. snake_case - lowercase words separated by underscores
// Common in Python, sometimes used in JS constants or config keys
let user_name = "John";
let total_price = 99.99;
const API_BASE_URL = "https://api.example.com";
const MAX_RETRY_COUNT = 3;

// 4. UPPER_SNAKE_CASE (SCREAMING_SNAKE_CASE) - all uppercase with underscores
// Used for constants and environment variables
const DATABASE_URL = "postgres://localhost";
const PORT_NUMBER = 3000;
const ENVIRONMENT = "production";

// 5. kebab-case (dash-case) - lowercase words separated by hyphens
// Not valid for JS identifiers, but used in HTML/CSS class names and file names
// Example: user-name, total-price, main-container
// Usage in HTML/CSS:
// <div class="user-profile-card"></div>
// file-name: user-profile.js

// 6. Train-Case (HTTP-Header-Case) - words capitalized and separated by hyphens
// Common in HTTP headers and some configurations
// Example: Content-Type, X-Custom-Header, Accept-Encoding

// 7. dot.case - lowercase words separated by dots
// Used in object property access or file names sometimes
// Example: user.name, config.database.url

// Summary:
// camelCase     -> variables, functions        (userName, getData)
// PascalCase    -> classes, components         (UserName, GetData)
// snake_case    -> some constants, config       (user_name, api_key)
// UPPER_SNAKE_CASE -> constants                (API_KEY, MAX_COUNT)
// kebab-case    -> CSS classes, file names      (user-name, my-file.js)
// Train-Case    -> HTTP headers                 (Content-Type)
// dot.case      -> object paths, namespaces     (user.profile.name)
