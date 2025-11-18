# Firebase Configuration Setup

## ⚠️ Credenciais removidas do código

As credenciais do Firebase foram removidas do código principal para evitar alertas do Google Cloud Platform.

## 🔧 Como configurar

### Para desenvolvimento local:

1. **Crie o arquivo de configuração local:**
   ```bash
   cp js/firebase-config.local.js.example js/firebase-config.local.js
   ```
   
   Ou crie manualmente o arquivo `js/firebase-config.local.js` com:
   ```javascript
   window.__FIREBASE_LOCAL_CONFIG__ = {
       apiKey: "SUA_API_KEY_AQUI",
       authDomain: "promptgames-65e49.firebaseapp.com",
       projectId: "promptgames-65e49",
       storageBucket: "promptgames-65e49.firebasestorage.app",
       messagingSenderId: "SEU_SENDER_ID",
       appId: "SEU_APP_ID"
   };
   ```

2. **O arquivo `js/firebase-config.local.js` está no `.gitignore`** - não será commitado!

### Para produção (Netlify):

Configure as variáveis de ambiente no Netlify Dashboard:
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

## 📝 Arquivos alterados

- ✅ `js/firebase-config.js` - Agora usa placeholders
- ✅ `js/firebase-config.local.js` - Arquivo local com credenciais (não commitado)
- ✅ `.gitignore` - Adicionado `*.local.js` para ignorar arquivos locais

## 🚀 Para Netlify

No Netlify, você pode:
1. Configurar variáveis de ambiente (recomendado)
2. Ou usar um build script que injeta as credenciais

O código já está preparado para funcionar com variáveis de ambiente do Netlify!

