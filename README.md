# Teologia Acessível • Plataforma de Ensino Livre

Plataforma completa de formação bíblico-teológica com 30 disciplinas modulares, biblioteca digital, audiobooks narrados, videoaulas, avaliações automáticas, emissão de diploma solene com chancelas da reitoria, credencial de teólogo e histórico escolar oficial.

## 🚀 Tecnologias

- **Frontend**: React, TypeScript, Vite
- **UI & Ícones**: Lucide React, CSS Moderno com suporte a impressão A4 de documentos oficiais
- **Banco de Dados & Autenticação**: Supabase (PostgreSQL, Auth e Storage)
- **Meios de Pagamento**: Asaas (Cartão de Crédito em até 12x, PIX e Boleto)
- **Inteligência Artificial**: Tutor Teológico com assistência contextual RAG

## 📚 Estrutura Curricular

- **30 Disciplinas** organizadas em 5 Módulos Temáticos (Bíblica, Sistemática, Histórica e Pastoral)
- **1.200 Questões Avaliativas** com gabarito fundamentado
- **Documentação Oficial**: Diploma de Bacharel Livre em Teologia, Histórico Escolar Oficial e Credencial de Teólogo
- **Validador Público**: Verificação de autenticidade documental por QR Code

## 🛠️ Como Executar

```bash
# Instalar dependências
npm install

# Iniciar ambiente de desenvolvimento
npm run dev

# Compilar para produção
npm run build

# Executar bateria de testes automatizados
node tests/appVerification.mjs
```

### Persistência das videoaulas

Os links personalizados das videoaulas são compartilhados pela plataforma usando o Supabase. Em projetos já configurados, execute o SQL de [supabase/migrations/20261019000000_persist_videoaulas.sql](./supabase/migrations/20261019000000_persist_videoaulas.sql) no SQL Editor do Supabase. Instalações novas também podem usar o schema completo em `supabase/schema.sql`. Sem Supabase configurado, o app avisa que as alterações ficam somente no navegador atual.

## 📄 Amparo Legal

Curso Livre de Teologia amparado pelo **Decreto Presidencial nº 5.154 de 23 de julho de 2004** e Resolução CNE nº 04/99.
