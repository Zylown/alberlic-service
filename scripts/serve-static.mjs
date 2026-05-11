import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.cwd(), "out");
const port = Number(process.env.PORT || 3000);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".xml", "application/xml; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"]
]);

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", `http://127.0.0.1:${port}`);
    let pathname = decodeURIComponent(requestUrl.pathname);

    if (pathname.endsWith("/")) {
      pathname += "index.html";
    }

    let target = path.normalize(path.join(root, pathname));

    if (!target.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    try {
      const fileStat = await stat(target);
      if (fileStat.isDirectory()) {
        target = path.join(target, "index.html");
      }
    } catch {
      target = path.join(root, "index.html");
    }

    const data = await readFile(target);
    response.writeHead(200, {
      "content-type": mimeTypes.get(path.extname(target)) || "application/octet-stream"
    });
    response.end(data);
  } catch {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`ALBERLICSAC preview running at http://127.0.0.1:${port}`);
});
