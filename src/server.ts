import { URLPattern as URLPatternPolyfill } from "urlpattern-polyfill";
if (typeof (globalThis as any).URLPattern === "undefined") {
  (globalThis as any).URLPattern = URLPatternPolyfill;
}
import { paraglideMiddleware } from "./paraglide/server.js";
import handler from "@tanstack/react-start/server-entry";
export default {
  fetch(req: Request): Promise<Response> {
    return paraglideMiddleware(req, () => handler.fetch(req));
  },
};
