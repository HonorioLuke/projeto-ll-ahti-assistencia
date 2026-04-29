# AH.TI - Site de Assistência Técnica

Site desenvolvido para a assistência técnica AH.TI - Levy & Lucas

## 📁 Arquivos do Site

- **index.html** - Página principal do site
- **style.css** - Estilos e design do site
- **script.js** - Funcionalidades interativas
- **logo.png** - Logo da AH.TI

## 🚀 Como Usar

1. **Abrir o site**: Basta clicar duas vezes no arquivo `index.html` para abrir no navegador
2. **Editar**: Abra os arquivos com qualquer editor de texto (Notepad, VS Code, Sublime, etc.)

## ✏️ Como Editar o Site

### 📞 Adicionar Contatos

Abra o arquivo `index.html` e procure pela seção `<!-- SEÇÃO CONTATO -->`. Você verá comentários como `<!-- ADICIONE SEU LINK AQUI -->`.

#### WhatsApp
Encontre:
```html
<a href="#" class="contato-card whatsapp">
```
Substitua por:
```html
<a href="https://wa.me/5585999999999" class="contato-card whatsapp">
```
*Formato: 55 (país) + 85 (DDD) + número*

#### Instagram
```html
<a href="https://instagram.com/seu_usuario" class="contato-card instagram">
```

#### Facebook
```html
<a href="https://facebook.com/sua_pagina" class="contato-card facebook">
```

#### E-mail
```html
<a href="mailto:contato@ahti.com.br" class="contato-card email">
```

#### Telefone
```html
<a href="tel:+5585999999999" class="contato-card telefone">
```

Também edite o texto dentro do parágrafo `<p>`:
```html
<p>(85) 99999-9999</p>
```

### 👥 Adicionar Informações da Equipe

Procure por `<!-- Técnico 1 - EDITAR AQUI -->` e `<!-- Técnico 2 - EDITAR AQUI -->`.

1. **Nome**: Substitua "Nome do Técnico 1" pelo nome real
2. **Foto**: 
   - Adicione a foto na mesma pasta do site
   - Altere `src="foto-tecnico-1.jpg"` para o nome da sua foto
3. **Descrição**: Escreva uma breve descrição no parágrafo
4. **Redes Sociais**: Adicione os links do Instagram, Facebook, LinkedIn

Exemplo:
```html
<h3 class="tecnico-nome">Levy Silva</h3>
<p class="tecnico-desc">
    Apaixonado por hardware e manutenção de computadores. 
    Focado em diagnóstico e resolução de problemas.
</p>
<div class="tecnico-social">
    <a href="https://instagram.com/levy" class="social-link">📷 Instagram</a>
    <a href="https://facebook.com/levy" class="social-link">📘 Facebook</a>
</div>
```

### 🎨 Mudar Cores

Abra o arquivo `style.css` e procure por `:root` no início do arquivo. Lá você encontra todas as cores:

```css
:root {
    --roxo-primario: #8B5CF6;    /* Roxo principal */
    --verde-primario: #10B981;    /* Verde principal */
    --bg-principal: #0F172A;      /* Fundo escuro */
    /* ... outras cores ... */
}
```

### 📝 Editar Textos

1. **Título Principal**: Procure por `<h1 class="hero-title">` em index.html
2. **Sobre Nós**: Procure por `<!-- SEÇÃO SOBRE NÓS -->`
3. **Serviços**: Procure por `<!-- SEÇÃO SERVIÇOS -->`

## 🎯 Estrutura do Site

1. **Cabeçalho** - Logo e menu de navegação
2. **Hero** - Apresentação principal
3. **Sobre** - Quem somos
4. **Serviços** - O que fazemos
5. **Diferenciais** - Por que escolher
6. **Equipe** - Perfis dos técnicos
7. **Contato** - Formas de contato
8. **Rodapé** - Informações finais

## 📱 Responsividade

O site já é responsivo e funciona bem em:
- 📱 Celulares
- 📱 Tablets
- 💻 Computadores

## 💡 Dicas

- **Backup**: Sempre faça backup antes de editar
- **Teste**: Após editar, abra o site no navegador para ver as mudanças
- **Cores**: Use um site como [coolors.co](https://coolors.co) para criar paletas
- **Imagens**: Use imagens leves (menos de 500KB) para o site carregar rápido

## 🆘 Precisa de Ajuda?

Se tiver dúvidas:
1. Procure os comentários no código (linhas que começam com `<!--` ou `/*`)
2. Use Ctrl+F para buscar textos específicos nos arquivos
3. Teste cada mudança separadamente

## 📌 Checklist de Personalização

- [ ] Adicionar número de WhatsApp
- [ ] Adicionar usuário do Instagram
- [ ] Adicionar página do Facebook
- [ ] Adicionar e-mail de contato
- [ ] Adicionar telefone
- [ ] Adicionar foto do Técnico 1
- [ ] Adicionar nome do Técnico 1
- [ ] Adicionar redes sociais do Técnico 1
- [ ] Adicionar foto do Técnico 2
- [ ] Adicionar nome do Técnico 2
- [ ] Adicionar redes sociais do Técnico 2
- [ ] Revisar todos os textos

## 🎨 Paleta de Cores Atual

- **Roxo Principal**: #8B5CF6
- **Verde Principal**: #10B981
- **Fundo Escuro**: #0F172A
- **Fundo Cards**: #1E293B

---

**Desenvolvido com 💜 e 💚 para AH.TI**
