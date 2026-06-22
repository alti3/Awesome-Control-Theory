export function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>This page did not load</title>
  <style>
    body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#111827;color:#f9fafb}
    main{max-width:32rem;padding:2rem;text-align:center}
    a{color:#93c5fd}
  </style>
</head>
<body>
  <main>
    <h1>This page did not load</h1>
    <p>Something went wrong on our end. Try refreshing, or return to the map.</p>
    <p><a href="/map">Go to the map</a></p>
  </main>
</body>
</html>`;
}
