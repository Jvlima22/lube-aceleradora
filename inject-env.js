// Script para injetar variáveis de ambiente na Netlify
// Este script substitui as variáveis de ambiente durante o build

const fs = require("fs");
const path = require("path");

// Lê o arquivo HTML
const htmlPath = path.join(__dirname, "index.html");
let html = fs.readFileSync(htmlPath, "utf8");

// Injeta as variáveis de ambiente no HTML
const envScript = `
  <script>
    // Variáveis de ambiente injetadas pelo build
    window.SUPABASE_URL = '${
      process.env.SUPABASE_URL || "https://cnyowhlgntkgkplwgwkd.supabase.co"
    }';
    window.SUPABASE_ANON_KEY = '${
      process.env.SUPABASE_ANON_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueW93aGxnbnRrZ2twbHdnd2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODQzODIsImV4cCI6MjA2ODM2MDM4Mn0.1YPIt8ebrOOiuICFaf3PfW7bTz2tG7zJk05U9FBl0Ac"
    }';
    window.WHATSAPP_NUMBER = '${
      process.env.WHATSAPP_NUMBER || "5511993561444"
    }';
  </script>
`;

// Insere o script antes do fechamento do head
html = html.replace("</head>", envScript + "\n</head>");

// Escreve o arquivo modificado
fs.writeFileSync(htmlPath, html);

console.log("Variáveis de ambiente injetadas com sucesso!");
