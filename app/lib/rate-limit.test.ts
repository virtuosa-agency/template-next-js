import { describe, expect, it } from "vitest";
import rateLimit from "./rate-limit";

describe("rateLimit", () => {
  it("allows requests under the limit", async () => {
    const limiter = rateLimit({ interval: 60_000 });

    await expect(limiter.check(3, "token-a")).resolves.toBe(true);
    await expect(limiter.check(3, "token-a")).resolves.toBe(true);
    await expect(limiter.check(3, "token-a")).resolves.toBe(true);
  });

  it("rejects when the limit is exceeded", async () => {
    const limiter = rateLimit({ interval: 60_000 });

    await limiter.check(2, "token-b");
    await limiter.check(2, "token-b");

    await expect(limiter.check(2, "token-b")).rejects.toThrow(
      "Rate limit exceeded",
    );
  });

  it("tracks tokens independently", async () => {
    const limiter = rateLimit({ interval: 60_000 });

    await limiter.check(1, "token-c");
    await expect(limiter.check(1, "token-d")).resolves.toBe(true);
  });
});
