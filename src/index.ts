import { DEFAULT_MESSAGES } from "./default-messages";

type FirebaseErrorCode = keyof typeof DEFAULT_MESSAGES;

export type FirebaseError = {
  code: FirebaseErrorCode;
  message?: string;
};

// FriendlyErrorResult interface
export type FriendlyErrorResult = {
  friendlyMessage: string;
  originalError: FirebaseError;
};

// Allow customization of messages with a CustomErrorMap
export type CustomErrorMap = {
  [key in FirebaseErrorCode]?: string;
};

export function friendlyFirebaseError(
  error: FirebaseError,
  customErrorMap: CustomErrorMap = {}
): FriendlyErrorResult {
  const { code } = error;
  const friendlyMessage =
    customErrorMap[code] ||
    DEFAULT_MESSAGES[code] ||
    "An unexpected error occurred. Please try again.";

  return {
    friendlyMessage,
    originalError: error,
  };
}
