# Troubleshooting - Erro de Autenticação

## Erro: "auth/invalid-credential"

Se você está recebendo este erro ao tentar criar conta ou fazer login, siga estes passos:

### 1. Verificar se Authentication está habilitado no Firebase ⚠️

**CRÍTICO - Faça isso primeiro:**

1. Acesse: https://console.firebase.google.com/u/0/project/promptgames-65e49/authentication
2. Clique em **"Get started"** (se aparecer)
3. Vá em **"Sign-in method"**
4. Verifique se **"Email/Password"** está habilitado:
   - Se não estiver, clique em "Email/Password"
   - Ative o toggle
   - Clique em "Save"
5. Verifique se **"Google"** está habilitado (opcional mas recomendado)

### 2. Verificar Domínios Autorizados ⚠️

1. Acesse: https://console.firebase.google.com/u/0/project/promptgames-65e49/authentication/settings
2. Vá em **"Authorized domains"**
3. Certifique-se de que seu domínio Netlify está listado:
   - Exemplo: `promptgames.netlify.app`
   - Se não estiver, clique em "Add domain" e adicione

### 3. Tentar Criar Conta vs Fazer Login

**Erro comum:** Tentar fazer login quando não tem conta ainda.

- **Para criar conta**: Use a aba "Create Account"
- **Para fazer login**: Use a aba "Sign In" (depois de criar conta)

### 4. Verificar Credenciais

- Email deve ser válido (ex: `seu@email.com`)
- Senha deve ter **mínimo 6 caracteres**
- Não use espaços no email ou senha

### 5. Mensagens de Erro Comuns

| Erro | Significado | Solução |
|------|-------------|---------|
| `auth/invalid-credential` | Credenciais inválidas ou usuário não existe | Criar conta primeiro ou verificar se Authentication está habilitado |
| `auth/operation-not-allowed` | Authentication não está habilitado | Habilitar Email/Password no Firebase Console |
| `auth/unauthorized-domain` | Domínio não autorizado | Adicionar domínio em Authorized domains |
| `auth/user-not-found` | Usuário não existe | Criar conta primeiro |

## Passos Rápidos para Resolver

1. ✅ Verificar Firebase Console > Authentication > Sign-in method está habilitado
2. ✅ Verificar domínio autorizado está configurado
3. ✅ Tentar criar conta (não fazer login)
4. ✅ Verificar senha tem pelo menos 6 caracteres

