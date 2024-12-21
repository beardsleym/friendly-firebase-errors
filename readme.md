# Friendly Firebase Errors

A utility for converting Firebase Auth errors into user-friendly messages.

## Installation

```bash
npm install friendly-firebase-errors
```

## Usage

```ts
import { friendlyFirebaseError } from 'friendly-firebase-errors';

const error = { code: "auth/code-expired", message: "The code has expired." };
const result = friendlyFirebaseError(error);

console.log(result.friendlyMessage); // "The code has expired. Please request a new one."
```

### Custom Messages

```ts
const customMessages = {
  "auth/code-expired": "Oops! Your code expired. Try again.",
};

const result = friendlyFirebaseError(error, customMessages);
console.log(result.friendlyMessage); // "Oops! Your code expired. Try again."
```
