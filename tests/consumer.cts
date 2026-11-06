import * as api from '@lp-labs/url-origin-parser';
import { parseUrlOrigin } from '@lp-labs/url-origin-parser';
console.log(parseUrlOrigin('https://example.com:8443/path'));
// @ts-expect-error invalid argument must be rejected by declarations
api.parseUrlOrigin(1);
