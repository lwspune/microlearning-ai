const LEARN_PATH = /^\/learn(\/[a-z0-9-]+){0,2}(\?course=[a-z0-9-]+)?$/;

/**
 * Where to send a guest after sign-in: a /learn path (optionally keeping the
 * course), never anywhere else. Unknown input falls back to /learn.
 */
export function safeLearnPath(next: string): string {
  return LEARN_PATH.test(next) ? next : "/learn";
}
