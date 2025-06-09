# Sentinela Digital - Site Institucional

## Descrição do Projeto

Site institucional moderno, responsivo e leve para o serviço **Sentinela Digital**, especializado em monitoramento inteligente de conteúdos online usando IA. O site apresenta um visual profissional com estilo tech elegante e paleta de cores neutras (cinza escuro, branco, azul discreto).

## Estrutura do Site

### Seções Principais:

1. **Página Inicial (Home)**
   - Título de impacto: "Seu conteúdo sob vigilância inteligente"
   - Subtítulo explicativo sobre o serviço
   - Botões de chamada para ação: "Experimente Grátis" e "Assista à Demonstração"
   - Ilustração vetorial com IA analisando texto

2. **Como Funciona**
   - Processo em três etapas com ícones representativos:
     - Conectar fonte de conteúdo
     - Análise de IA (gramática e sentimento)
     - Recebimento de alertas e relatórios

3. **Planos e Preços**
   - Três planos: Gratuito, Profissional (destacado), Empresarial
   - Tabela comparativa com funcionalidades
   - Botões de assinatura

4. **Depoimentos**
   - Dois depoimentos de clientes satisfeitos
   - Layout em cards com citações

5. **Formulário de Contato/Cadastro**
   - Campos: Nome, E-mail, Site/URL
   - Botão "Quero Testar"
   - Validação JavaScript simples

6. **Rodapé**
   - Informações da empresa
   - Links para redes sociais
   - Links rápidos de navegação
   - Informações de contato

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos responsivos com Flexbox e Grid
- **JavaScript**: Interatividade e validação de formulários
- **Google Fonts**: Fonte Roboto para tipografia moderna
- **Font Awesome**: Ícones vetoriais para interface

## Características Técnicas

### Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Breakpoints otimizados para diferentes tamanhos de tela
- Navegação mobile-friendly

### Performance
- Código otimizado e leve
- Imagens otimizadas
- CSS e JavaScript minificados para produção

### Acessibilidade
- Estrutura HTML semântica
- Contraste adequado de cores
- Navegação por teclado

### Funcionalidades JavaScript
- Scroll suave entre seções
- Animações de entrada para elementos
- Validação de formulário
- Interatividade nos botões e links

## Estrutura de Arquivos

```
sentinela-digital/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos principais
├── js/
│   └── script.js       # Scripts de interatividade
└── assets/
    └── ai-illustration.png  # Ilustração da IA
```

## Paleta de Cores

- **Cinza Escuro**: #333 (textos principais)
- **Branco**: #fff (fundo principal)
- **Azul**: #007bff (elementos de destaque)
- **Cinza Claro**: #f4f4f4 (fundos de seção)
- **Cinza Médio**: #ccc (bordas e elementos secundários)
- **Texto**: #555 (textos secundários)

## Como Usar

### Para Desenvolvimento Local:
1. Faça o download dos arquivos
2. Abra o arquivo `index.html` em um navegador
3. O site estará funcionando localmente

### Para Hospedagem:
O site é compatível com:
- **GitHub Pages**: Faça upload dos arquivos para um repositório GitHub
- **Netlify**: Arraste a pasta do projeto para o painel do Netlify
- **Vercel**: Conecte o repositório GitHub ao Vercel
- Qualquer servidor web estático

### Instruções de Deploy:

#### GitHub Pages:
1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos
3. Vá em Settings > Pages
4. Selecione a branch main como source
5. O site estará disponível em `https://seuusuario.github.io/nome-do-repositorio`

#### Netlify:
1. Acesse netlify.com
2. Arraste a pasta `sentinela-digital` para a área de deploy
3. O site será publicado automaticamente com URL personalizada

## Customização

### Alterando Cores:
Edite as variáveis CSS no início do arquivo `style.css`:
```css
:root {
    --dark-gray: #333;
    --light-gray: #f4f4f4;
    --blue: #007bff;
    /* ... outras variáveis */
}
```

### Alterando Conteúdo:
- Textos: Edite diretamente no arquivo `index.html`
- Imagens: Substitua os arquivos na pasta `assets/`
- Estilos: Modifique o arquivo `css/style.css`

### Adicionando Funcionalidades:
- Edite o arquivo `js/script.js` para adicionar novas interações
- Integre com APIs de formulário (Formspree, Netlify Forms, etc.)

## Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge (versões modernas)
- **Dispositivos**: Desktop, Tablet, Mobile
- **Resolução**: Otimizado para 320px até 1920px+

## Manutenção

O site foi desenvolvido com código limpo e bem documentado para facilitar futuras manutenções e atualizações. Todas as dependências externas (Google Fonts, Font Awesome) são carregadas via CDN para garantir sempre as versões mais atualizadas.

