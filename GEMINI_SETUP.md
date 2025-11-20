# Configuração do Gemini API

## Problema Resolvido

O Gemini não estava funcionando porque:
1. As variáveis de ambiente do Netlify não estão disponíveis no frontend em runtime
2. A autenticação da API estava usando formato incorreto (Bearer token em vez de query parameter)

## Solução Implementada

Foi criada uma **Netlify Function** que faz o proxy da chamada ao Gemini API, mantendo a API key segura no servidor.

### Arquivos Criados/Modificados

1. **`netlify/functions/gemini-evaluate.js`** - Netlify Function que faz o proxy
2. **`gemini-integration.js`** - Atualizado para usar a Netlify Function em produção

## Configuração no Netlify

### 1. Variáveis de Ambiente

No Netlify Dashboard, configure as seguintes variáveis de ambiente:

```
GEMINI_API_KEY=sua_chave_api_aqui
```

Ou alternativamente:

```
GOOGLE_KEY_API=sua_chave_api_aqui
```

**Onde encontrar sua API key:**
- Acesse [Google AI Studio](https://makersuite.google.com/app/apikey)
- Crie uma nova API key ou use uma existente

### 2. Modelo do Gemini (Opcional)

Por padrão, o sistema usa `gemini-2.0-flash-exp`. Se quiser usar outro modelo, adicione:

```
GEMINI_MODEL=gemini-2.0-flash-exp
```

Modelos disponíveis:
- `gemini-2.0-flash-exp` (padrão, rápido e eficiente)
- `gemini-1.5-pro`
- `gemini-1.5-flash`

### 3. Deploy

Após configurar as variáveis de ambiente:
1. Faça commit das mudanças
2. Faça push para o repositório
3. O Netlify fará o deploy automaticamente
4. A Netlify Function estará disponível em `/.netlify/functions/gemini-evaluate`

## Como Funciona

### Em Produção (Netlify)
- O frontend detecta que está no Netlify
- Faz chamada para `/.netlify/functions/gemini-evaluate`
- A função pega a API key das variáveis de ambiente
- Faz a chamada ao Gemini API com autenticação correta
- Retorna a resposta para o frontend

### Em Desenvolvimento Local
- O sistema verifica se existe `js/gemini-config.local.js`
- Se existir, usa a API key diretamente (apenas para desenvolvimento)
- Se não existir, usa modo mock

## Desenvolvimento Local

Para testar localmente com a API real:

1. Crie o arquivo `js/gemini-config.local.js`:

```javascript
window.__GEMINI_LOCAL_CONFIG__ = {
    apiKey: "SUA_API_KEY_AQUI"
};
```

2. Este arquivo está no `.gitignore` e não será commitado

## Troubleshooting

### Erro: "Gemini API key not configured"
- Verifique se a variável `GEMINI_API_KEY` ou `GOOGLE_KEY_API` está configurada no Netlify
- Certifique-se de que fez o deploy após adicionar a variável

### Erro: "Netlify Function error"
- Verifique os logs do Netlify Function no dashboard
- Certifique-se de que a API key é válida
- Verifique se o modelo especificado existe

### Ainda está usando mock mode
- Verifique o console do navegador
- Certifique-se de que está acessando via domínio Netlify (netlify.app)
- Verifique se a Netlify Function foi deployada corretamente

## Segurança

✅ **API Key protegida**: A chave nunca é exposta no frontend
✅ **CORS configurado**: A função permite requisições do seu domínio
✅ **Validação**: A função valida os dados antes de fazer a chamada

## Testando

Após configurar, teste enviando um prompt em qualquer desafio. Você deve ver no console:
- `✅ Gemini Integration initialized for Netlify. Using server-side function.`
- A resposta deve vir do Gemini real, não do mock

