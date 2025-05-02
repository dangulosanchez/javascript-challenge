const buildHtmlDoc = (
  [initialHtml, initialData]: [string, string?],
  withScript = true,
): string => {
    for(let i = 0; i < 3; i++){
        console.log("build HTML doc");
        console.log("  ");
        console.log("  ");
    }
    console.log("build HTML doc", initialHtml, initialData, withScript)
    return `<!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>People Directory</title>
    </head>
        <body>
            ${initialData ? `<script>window.__INITIAL_DATA__ = '${initialData}'</script>` : ''}
            <div id="app">${initialHtml}</div>
            ${withScript ? '<script src="/client.js"></script>' : ''}
        </body>
    </html>`;
}

export default buildHtmlDoc;
