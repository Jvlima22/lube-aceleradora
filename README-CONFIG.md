# 🔐 Configuração de Credenciais

## ⚠️ Importante - Segurança

Este projeto usa credenciais que são carregadas via arquivo `config.js`. **IMPORTANTE**: As credenciais ainda são visíveis no frontend (limitação de sites estáticos).

## 📁 Estrutura de Arquivos

- `config.js` - Suas credenciais reais (não commitado)
- `config.example.js` - Exemplo para outros desenvolvedores
- `.gitignore` - Protege o arquivo de configuração

## 🚀 Como Configurar

### 1. Para Desenvolvimento Local

```bash
# O arquivo config.js já está configurado com suas credenciais
# Ele não será commitado no Git (está no .gitignore)
```

### 2. Para Outros Desenvolvedores

```bash
# 1. Copie o arquivo de exemplo
cp config.example.js config.js

# 2. Edite o config.js com suas credenciais
# 3. O arquivo config.js não será commitado
```

### 3. Para Produção

- Crie um `config.js` específico para produção
- Ou use variáveis de ambiente se tiver um servidor

## 🔧 Credenciais Necessárias

```javascript
window.APP_CONFIG = {
  SUPABASE_URL: "https://seu-projeto.supabase.co",
  SUPABASE_ANON_KEY: "sua-chave-anonima-aqui",
  WHATSAPP_NUMBER: "5511999999999",
};
```

## 🛡️ Segurança

### ✅ O que é Seguro:

- A chave anônima do Supabase é projetada para ser pública
- Use Row Level Security (RLS) no Supabase para proteger dados
- O arquivo `config.js` não é commitado no Git

### ⚠️ Limitações:

- Credenciais ainda são visíveis no frontend
- Qualquer pessoa pode ver o código fonte
- Para máxima segurança, use uma API backend

## 🔒 Configuração RLS no Supabase

```sql
-- No painel do Supabase, execute:
CREATE POLICY "Permitir inserção de leads" ON leads
FOR INSERT WITH CHECK (true);
```

## 🚨 Troubleshooting

### Erro: "Arquivo de configuração não foi carregado"

- Verifique se o arquivo `config.js` existe
- Verifique se o arquivo está sendo carregado antes do script principal

### Erro: "Credenciais não configuradas"

- Verifique se todas as credenciais estão preenchidas no `config.js`
- Verifique se não há erros de sintaxe no arquivo

### Erro: "Supabase JS não foi carregado"

- Verifique sua conexão com a internet
- Verifique se o CDN do Supabase está acessível
