# Netlify Environment Variables Configuration

## Setup Instructions

### 1. Configure no Netlify Dashboard

1. Vá para o **Netlify Dashboard**
2. Selecione seu site
3. Vá em **Site settings** > **Environment variables**
4. Clique em **Add variable** e adicione cada uma:

```
FIREBASE_API_KEY = AIzaSyBuzlggCmuCkOgorMnLFw6aAmgh25b8FIs
FIREBASE_AUTH_DOMAIN = promptgames-65e49.firebaseapp.com
FIREBASE_PROJECT_ID = promptgames-65e49
FIREBASE_STORAGE_BUCKET = promptgames-65e49.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID = 617690670802
FIREBASE_APP_ID = 1:617690670802:web:3c5be7009be9af5238ef0b
```

### 2. Opcional: Build Script (se quiser usar variáveis de ambiente)

Se você quiser usar variáveis de ambiente no Netlify (por segurança), você pode criar um script de build que injeta as variáveis no HTML. Mas isso não é necessário - o código já funciona com as credenciais configuradas diretamente.

### 3. Como funciona

- **Localmente**: Usa as credenciais configuradas diretamente no código
- **No Netlify**: 
  - Se você configurar variáveis de ambiente, elas serão usadas (precisa de script de build)
  - Se não configurar, usa as credenciais do código (funciona perfeitamente!)

### 4. Status atual

✅ **Já está funcionando!** O código já tem as credenciais configuradas, então funcionará no Netlify mesmo sem configurar variáveis de ambiente.

### 5. Recomendação

Para um projeto educacional como este, **não é necessário** configurar variáveis de ambiente no Netlify. As credenciais do Firebase são públicas por natureza (elas aparecem no código JavaScript do cliente) e não são secretas. Elas são protegidas pelas regras de segurança do Firestore que você vai publicar.

**Configure variáveis de ambiente apenas se:**
- Você quiser usar credenciais diferentes para produção vs desenvolvimento
- Você tiver múltiplos projetos Firebase

Para este projeto, você pode usar as credenciais diretamente no código sem problemas de segurança!

