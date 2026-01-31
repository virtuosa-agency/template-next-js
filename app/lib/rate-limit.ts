export default function rateLimit({
  interval,
  uniqueTokenPerInterval = 500,
}: {
  interval: number;
  uniqueTokenPerInterval?: number;
}) {
  const tokens = new Map<string, number[]>();

  return {
    check: (limit: number, token: string) =>
      new Promise<boolean>((resolve, reject) => {
        const now = Date.now();
        const timestamps = tokens.get(token) || [];

        const validTimestamps = timestamps.filter(
          (timestamp) => now - timestamp < interval,
        );

        validTimestamps.push(now);
        tokens.set(token, validTimestamps);

        // Protection mémoire : limiter le nombre de tokens stockés
        if (tokens.size > uniqueTokenPerInterval) {
          const oldestKey = tokens.keys().next().value;

          if (oldestKey !== undefined) {
            tokens.delete(oldestKey);
          }
        }

        if (validTimestamps.length > limit) {
          reject(new Error("Rate limit exceeded"));
        } else {
          resolve(true);
        }
      }),
  };
}
