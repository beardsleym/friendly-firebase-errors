export const DEFAULT_MESSAGES = {
  "auth/admin-restricted-operation":
    "This operation is restricted to administrators.",
  "auth/argument-error":
    "Invalid argument provided. Please check the input and try again.",
  "auth/app-not-authorized":
    "This app is not authorized to connect to Firebase. Please check the configuration.",
  "auth/app-not-installed":
    "The requested app is not installed on this device.",
  "auth/captcha-check-failed": "The CAPTCHA check failed. Please try again.",
  "auth/code-expired": "The code has expired. Please request a new one.",
  "auth/cordova-not-ready":
    "The Cordova framework is not ready. Please try again later.",
  "auth/cors-unsupported":
    "Your browser does not support cross-origin requests. Try a different browser.",
  "auth/credential-already-in-use":
    "This credential is already linked to another account.",
  "auth/custom-token-mismatch":
    "There is a mismatch with the provided custom token.",
  "auth/requires-recent-login":
    "You need to log in again to perform this action.",
  "auth/dependent-sdk-initialized-before-auth":
    "Another SDK was initialized before Auth. Please check your setup.",
  "auth/dynamic-link-not-activated":
    "Dynamic links are not activated for this project.",
  "auth/email-change-needs-verification":
    "You must verify your email address before making changes.",
  "auth/email-already-in-use":
    "This email is already associated with an account. Try logging in or resetting your password.",
  "auth/expired-action-code":
    "The action code has expired. Please request a new one.",
  "auth/cancelled-popup-request":
    "The popup request was canceled. Please try again.",
  "auth/internal-error": "An internal error occurred. Please try again later.",
  "auth/invalid-api-key":
    "The API key provided is invalid. Please check your configuration.",
  "auth/invalid-app-credential":
    "The app credential provided is invalid. Please try again.",
  "auth/invalid-app-id":
    "The app ID provided is invalid. Please check and try again.",
  "auth/invalid-user-token": "The user token is invalid. Please log in again.",
  "auth/invalid-auth-event":
    "The authentication event is invalid. Please try again.",
  "auth/invalid-cert-hash": "The certificate hash provided is invalid.",
  "auth/invalid-verification-code":
    "The OTP entered is incorrect. Please check and try again.",
  "auth/invalid-continue-uri":
    "The continue URL provided is invalid. Please check and try again.",
  "auth/invalid-cordova-configuration": "The Cordova configuration is invalid.",
  "auth/invalid-custom-token":
    "The provided token is invalid. Please log in again.",
  "auth/invalid-dynamic-link-domain":
    "The dynamic link domain provided is invalid.",
  "auth/invalid-email":
    "The email address provided is invalid. Please check and try again.",
  "auth/invalid-emulator-scheme": "The emulator scheme provided is invalid.",
  "auth/invalid-credential":
    "Invalid credentials provided. Please check your details and try again.",
  "auth/invalid-message-payload": "The message payload provided is invalid.",
  "auth/invalid-multi-factor-session":
    "The multi-factor session is invalid. Please try again.",
  "auth/invalid-oauth-client-id": "The OAuth client ID provided is invalid.",
  "auth/invalid-oauth-provider": "The OAuth provider is invalid.",
  "auth/invalid-action-code": "The action code provided is invalid.",
  "auth/unauthorized-domain":
    "The domain is unauthorized. Please check your Firebase settings.",
  "auth/wrong-password": "The password entered is incorrect. Please try again.",
  "auth/invalid-persistence-type": "The persistence type provided is invalid.",
  "auth/invalid-phone-number":
    "The phone number provided is invalid. Please check and try again.",
  "auth/invalid-provider-id": "The provider ID provided is invalid.",
  "auth/invalid-recipient-email": "The recipient email address is invalid.",
  "auth/invalid-sender": "The sender email address is invalid.",
  "auth/invalid-verification-id": "The verification ID provided is invalid.",
  "auth/invalid-tenant-id": "The tenant ID provided is invalid.",
  "auth/multi-factor-info-not-found":
    "The multi-factor information provided is not found.",
  "auth/multi-factor-auth-required": "Multi-factor authentication is required.",
  "auth/missing-android-pkg-name": "The Android package name is missing.",
  "auth/missing-app-credential": "The app credential is missing.",
  "auth/auth-domain-config-required":
    "The authentication domain configuration is required.",
  "auth/missing-verification-code": "The verification code is missing.",
  "auth/missing-continue-uri": "The continue URL is missing.",
  "auth/missing-iframe-start": "The iframe start is missing.",
  "auth/missing-ios-bundle-id": "The iOS bundle ID is missing.",
  "auth/missing-or-invalid-nonce": "The nonce is missing or invalid.",
  "auth/missing-multi-factor-info": "The multi-factor information is missing.",
  "auth/missing-multi-factor-session": "The multi-factor session is missing.",
  "auth/missing-phone-number": "The phone number is missing.",
  "auth/missing-verification-id": "The verification ID is missing.",
  "auth/app-deleted": "The Firebase app has been deleted.",
  "auth/account-exists-with-different-credential":
    "An account already exists with a different credential.",
  "auth/network-request-failed":
    "Network error occurred. Please check your internet connection and try again.",
  "auth/null-user": "No user is currently signed in.",
  "auth/no-auth-event": "No authentication event was found.",
  "auth/no-such-provider": "The provider is not found.",
  "auth/operation-not-allowed": "This operation is not allowed.",
  "auth/operation-not-supported-in-this-environment":
    "This operation is not supported in your environment.",
  "auth/popup-blocked":
    "The popup was blocked by your browser. Please enable popups and try again.",
  "auth/popup-closed-by-user":
    "The popup was closed before completing the operation. Please try again.",
  "auth/provider-already-linked":
    "This provider is already linked to your account.",
  "auth/quota-exceeded":
    "The quota for this operation has been exceeded. Please try again later.",
  "auth/redirect-cancelled-by-user": "The redirect was canceled by the user.",
  "auth/redirect-operation-pending":
    "A redirect operation is already in progress.",
  "auth/rejected-credential": "The credential was rejected. Please try again.",
  "auth/second-factor-already-in-use": "The second factor is already in use.",
  "auth/maximum-second-factor-count-exceeded":
    "The maximum number of second factors has been reached.",
  "auth/tenant-id-mismatch": "The tenant ID does not match.",
  "auth/timeout": "The operation timed out. Please try again later.",
  "auth/user-token-expired": "Your session has expired. Please log in again.",
  "auth/too-many-requests":
    "Too many attempts. Please wait and try again later.",
  "auth/unauthorized-continue-uri": "The continue URL is unauthorized.",
  "auth/unsupported-first-factor": "The first factor is unsupported.",
  "auth/unsupported-persistence-type": "The persistence type is unsupported.",
  "auth/unsupported-tenant-operation": "The tenant operation is unsupported.",
  "auth/unverified-email": "Your email is not verified.",
  "auth/user-cancelled": "The operation was canceled by the user.",
  "auth/user-not-found": "No account found with the provided details.",
  "auth/user-disabled":
    "This account has been disabled. Please contact support.",
  "auth/user-mismatch": "The user credentials do not match.",
  "auth/user-signed-out": "The user has been signed out.",
  "auth/weak-password":
    "Your password is too weak. Please use a stronger password.",
  "auth/web-storage-unsupported": "Your browser does not support web storage.",
  "auth/already-initialized": "The Firebase app has already been initialized.",
} as const;
