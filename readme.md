# Friendly Firebase Errors

A utility for converting Firebase Auth errors into user-friendly messages. This package helps developers transform Firebase error codes into human-readable and customizable error messages.

## Features

- **Comprehensive Coverage**: Includes all Firebase Auth error codes.
- **Customizable Messages**: Override default messages for any error code.
- **Debugging Support**: Returns the original error object alongside the friendly message.
- **Type Safety**: Fully typed for seamless TypeScript integration.

---

## Installation

```bash
npm install friendly-firebase-errors
```

---

## Usage

### Basic Usage

Transform a Firebase error into a user-friendly message:

```ts
import { friendlyFirebaseError } from 'friendly-firebase-errors';

const error = { code: "auth/code-expired", message: "The code has expired." };
const result = friendlyFirebaseError(error);

console.log(result.friendlyMessage); 
// "The code has expired. Please request a new one."
```

---

### Custom Messages

You can override default messages with your own custom ones:

```ts
const customMessages = {
  "auth/code-expired": "Oops! Your code expired. Try again.",
};

const error = { code: "auth/code-expired", message: "The code has expired." };
const result = friendlyFirebaseError(error, customMessages);

console.log(result.friendlyMessage); 
// "Oops! Your code expired. Try again."
```

---

## API Reference

### `friendlyFirebaseError`

#### Parameters

1. **error**: The Firebase error object with the following structure:
   - `code`: A Firebase error code (e.g., `auth/code-expired`).
   - `message` (optional): Additional details about the error.

2. **customErrorMap** (optional): An object containing custom messages for specific error codes.

#### Returns

- An object with:
  - `friendlyMessage`: A user-friendly error message.
  - `originalError`: The original Firebase error object.

---

## Default Error Messages

Below is the complete list of error codes and their default friendly messages:

| Error Code                                   | Default Message                                                                 |
|---------------------------------------------|---------------------------------------------------------------------------------|
| `auth/admin-restricted-operation`           | This operation is restricted to administrators.                                |
| `auth/argument-error`                       | Invalid argument provided. Please check the input and try again.              |
| `auth/app-not-authorized`                   | This app is not authorized to connect to Firebase. Please check the configuration. |
| `auth/app-not-installed`                    | The requested app is not installed on this device.                            |
| `auth/captcha-check-failed`                 | The CAPTCHA check failed. Please try again.                                   |
| `auth/code-expired`                         | The code has expired. Please request a new one.                               |
| `auth/cordova-not-ready`                    | The Cordova framework is not ready. Please try again later.                   |
| `auth/cors-unsupported`                     | Your browser does not support cross-origin requests. Try a different browser. |
| `auth/credential-already-in-use`            | This credential is already linked to another account.                         |
| `auth/custom-token-mismatch`                | There is a mismatch with the provided custom token.                           |
| `auth/requires-recent-login`                | You need to log in again to perform this action.                              |
| `auth/dependent-sdk-initialized-before-auth`| Another SDK was initialized before Auth. Please check your setup.             |
| `auth/dynamic-link-not-activated`           | Dynamic links are not activated for this project.                             |
| `auth/email-change-needs-verification`      | You must verify your email address before making changes.                     |
| `auth/email-already-in-use`                 | This email is already associated with an account. Try logging in or resetting your password. |
| `auth/expired-action-code`                  | The action code has expired. Please request a new one.                        |
| `auth/cancelled-popup-request`              | The popup request was canceled. Please try again.                             |
| `auth/internal-error`                       | An internal error occurred. Please try again later.                           |
| `auth/weak-password`                        | Your password is too weak. Please use a stronger password.                    |
| `auth/web-storage-unsupported`              | Your browser does not support web storage. Please try a different browser.    |
| `auth/already-initialized`                  | The Firebase app has already been initialized.                                |
| ...                                         | ...                                                                           |

For the **complete list of error codes**, refer to the `DEFAULT_MESSAGES` object in the source code.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to enhance the package.

---

## License

This project is licensed under the [MIT License](LICENSE).

---
