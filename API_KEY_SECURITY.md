# Firebase API Key - Segurança e Restrições

## ⚠️ Aviso do Google Cloud Platform

Você recebeu um aviso sobre a API key estar pública no GitHub. **Isso é NORMAL e ESPERADO** para aplicações Firebase!

## Por que a API Key do Firebase é pública?

### ✅ Isso é por design
- O Firebase SDK roda no navegador do cliente (JavaScript)
- A API key **deve** estar no código JavaScript que é enviado para o navegador
- Isso é diferente de outras API keys que devem ser secretas
- A segurança NÃO vem da privacidade da API key

### ✅ Como o Firebase protege seu projeto
1. **Firestore Security Rules**: Você já configurou regras que protegem os dados
2. **Authentication**: Apenas usuários autenticados podem acessar certos dados
3. **Domain Restrictions**: Você pode restringir a API key para funcionar apenas em domínios específicos

## 🔒 O que fazer agora?

### Opção 1: Não fazer nada (Recomendado para este projeto)
- Se você já configurou as regras do Firestore corretamente
- Se você já habilitou Authentication
- A aplicação já está segura

### Opção 2: Adicionar restrições de domínio (Recomendado para produção)
Isso adiciona uma camada extra de segurança:

1. Acesse: https://console.cloud.google.com/apis/credentials?project=promptgames-65e49
2. Encontre sua API key: `AIzaSyBuzlggCmuCkOgorMnLFw6aAmgh25b8FIs`
3. Clique para editar
4. Em **"Application restrictions"**, selecione **"HTTP referrers (web sites)"**
5. Adicione os domínios permitidos:
   ```
   promptgames.netlify.app/*
   localhost:8000/*
   localhost:*
   ```
6. Clique em **"Save"**

### Opção 3: Regenerar a API key (apenas se necessário)
**NÃO FAÇA ISSO** a menos que você tenha certeza que a key foi comprometida:
- Você teria que atualizar o código em todos os lugares
- Não é necessário neste caso

## ✅ Checklist de Segurança

Certifique-se de que você tem:

1. ✅ **Firestore Rules** publicadas e funcionando
2. ✅ **Authentication** habilitado
3. ✅ **Domain Restrictions** na API key (opcional mas recomendado)
4. ✅ **Billing Alerts** configurados no Google Cloud Console

## 📝 Nota Importante

**A API key do Firebase NÃO é uma credencial secreta!**

- É como uma chave pública que identifica seu projeto
- Ela só funciona junto com as regras de segurança que você configurou
- Até mesmo o Google recomenda que ela seja pública no código do cliente
- A segurança real vem das **Firestore Security Rules** que você já configurou

## 🚨 Quando se preocupar?

Apenas se:
- ❌ Você não configurou Firestore Rules
- ❌ Você não habilitou Authentication
- ❌ Você não tem restrições de domínio configuradas
- ❌ Você está vendo uso não autorizado no billing

## ✅ Conclusão

**Para este projeto educacional, você está seguro!** O aviso é apenas informativo. O Google está fazendo seu trabalho de notificar sobre keys públicas, mas no caso do Firebase, isso é esperado e correto.

**Ação recomendada**: Adicionar restrições de domínio (Opção 2) para melhor segurança, mas não é urgente.

