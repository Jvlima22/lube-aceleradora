# Configuração do Deploy na Netlify

## Problema Resolvido

O erro "Erro de configuração. Verifique se o arquivo config.js está presente." ocorria porque o arquivo `config.js` estava no `.gitignore` e não estava sendo enviado para o repositório.

## Soluções Implementadas

### 1. Arquivo config.js Commitado

- O arquivo `config.js` foi removido do `.gitignore` e agora é commitado no repositório
- Isso garante que as configurações estejam disponíveis no deploy

### 2. Sistema de Fallback com Variáveis de Ambiente

- O código foi atualizado para usar variáveis de ambiente como fallback
- Se o `config.js` não estiver disponível, o sistema tenta usar variáveis de ambiente

### 3. Configuração Automática na Netlify

- Arquivo `netlify.toml` configurado com variáveis de ambiente
- Script `inject-env.js` que injeta as variáveis durante o build
- `package.json` criado para gerenciar dependências

## Como Configurar na Netlify

### Opção 1: Usar o arquivo config.js (Mais Simples)

1. Faça commit e push das alterações
2. O deploy deve funcionar automaticamente

### Opção 2: Usar Variáveis de Ambiente (Mais Seguro)

1. No painel da Netlify, vá em **Site settings** > **Environment variables**
2. Adicione as seguintes variáveis:
   - `SUPABASE_URL`: `https://cnyowhlgntkgkplwgwkd.supabase.co`
   - `SUPABASE_ANON_KEY`: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNueW93aGxnbnRrZ2twbHdnd2tkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODQzODIsImV4cCI6MjA2ODM2MDM4Mn0.1YPIt8ebrOOiuICFaf3PfW7bTz2tG7zJk05U9FBl0Ac`
   - `WHATSAPP_NUMBER`: `5511993561444`
3. Faça um novo deploy

## Arquivos Modificados

- `config.js` - Criado e commitado
- `.gitignore` - Removido config.js da lista
- `index.html` - Atualizado para usar sistema de fallback
- `netlify.toml` - Configurado para build automático
- `inject-env.js` - Script para injetar variáveis de ambiente
- `package.json` - Dependências do projeto

## Teste Local

Para testar localmente:

```bash
npm install
npm run build
npm start
```

O site deve funcionar tanto localmente quanto na Netlify após essas configurações.
