export interface UrlOrigin {
  readonly protocol: string;
  readonly hostname: string;
  readonly port: string;
}
export function parseUrlOrigin(value: string): UrlOrigin {
  if (typeof value !== 'string') throw new TypeError('Expected URL text');
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new RangeError('Expected absolute valid URL');
  }
  return { protocol: url.protocol, hostname: url.hostname, port: url.port };
}
