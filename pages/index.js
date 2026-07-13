export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{__html: `<!DOCTYPE html>
<html>
<head>
  <title>Yamana Bank Transaction Log</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75'>🏦</text></svg>">
</head>
<body style="margin:0;padding:0">
  <div id="root"></div>
  <script>
    // Your app will load here
    document.body.innerHTML = '<h1>Loading Yamana Bank...</h1>';
  </script>
</body>
</html>`}} />
  );
}
