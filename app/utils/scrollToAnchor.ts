export function getHashFromHref(href: string): string | null {
  const index = href.indexOf("#");
  if (index === -1) return null;
  const hash = href.slice(index + 1);
  return hash || null;
}

export function getPathFromHref(href: string): string {
  const index = href.indexOf("#");
  const path = index === -1 ? href : href.slice(0, index);
  return path || "/";
}

export function scrollToAnchor(
  hash: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const element = document.getElementById(hash);
  if (!element) return false;

  element.scrollIntoView({ behavior, block: "start" });
  return true;
}

/**
 * Forces scroll on same-page hash links, including when the hash is already active.
 * Returns true when the click was handled locally.
 */
export function handleSamePageAnchorClick(
  href: string,
  event: { preventDefault: () => void },
): boolean {
  const hash = getHashFromHref(href);
  if (!hash || typeof window === "undefined") return false;

  const targetPath = getPathFromHref(href);
  if (window.location.pathname !== targetPath) return false;

  event.preventDefault();
  scrollToAnchor(hash);

  const nextUrl = `${targetPath}#${hash}`;
  if (`${window.location.pathname}${window.location.hash}` !== nextUrl) {
    window.history.pushState(null, "", nextUrl);
  }

  return true;
}
