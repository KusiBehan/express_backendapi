# m295 LB2

### Link zur Swagger/OpenAPi Dokumentation
Wenn sie mein main.js file ausführen denn können Sie über http://localhost:8080/api-docs/ auf dem Swagger zugreifen

### Hinweise
Dependencies installieren mit npm:
npm install "swagger-jsdoc"
npm install"swagger-ui-express"
npm install"./server.js"
npm install"express-session"
npm install"express"
npm install"body-parser"


function IsNotNullChecker(report) {
    return !Object.values(report).every((o) => o === "");
}
Zum überprüfen der Null werte habe ich auf folgender Seite gefunden : 
// https://stackoverflow.com/questions/50619910/how-to-check-if-every-properties-in-an-object-are-null
