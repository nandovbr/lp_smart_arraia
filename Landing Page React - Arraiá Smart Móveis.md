# Landing Page React - Arraiá Smart Móveis

## Descrição

Esta é uma landing page moderna e responsiva desenvolvida em React JS para o evento promocional "Arraiá, melhor que desapega" da Smart Móveis. A aplicação apresenta um design temático de festa junina brasileira com funcionalidades interativas e otimizada para conversão.

## Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **shadcn/ui** - Componentes de interface pré-construídos
- **JavaScript (JSX)** - Linguagem de programação

## Características Principais

### Design e UX
- Layout totalmente responsivo para desktop, tablet e mobile
- Tema de festa junina com cores vibrantes e elementos decorativos
- Animações suaves e efeitos de hover
- Navegação fixa com scroll suave entre seções
- Otimizado para conversão com call-to-actions estratégicos

### Funcionalidades
- **Contador regressivo** em tempo real para o evento
- **Integração WhatsApp** nos botões de produtos
- **Formulário de contato** funcional
- **Navegação por âncoras** entre seções
- **Cards de produtos** interativos com hover effects
- **Seção de benefícios** destacada

### Produtos Apresentados
- **6 Sofás** com diferentes modelos e preços promocionais
- **6 Colchões** com base box e baú
- Badges de desconto dinâmicos
- Preços originais e promocionais
- Características técnicas de cada produto

## Estrutura do Projeto

```
arraia-landing-page-react/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Imagens e recursos estáticos
│   │   ├── banner_principal.png
│   │   ├── logo_smart.png
│   │   ├── sofa_retratil_3lugares.jpg
│   │   ├── sofa_canto_chaise.jpg
│   │   └── colchao_molas_ensacadas.jpg
│   ├── components/
│   │   └── ui/          # Componentes shadcn/ui
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos customizados
│   ├── index.css        # Estilos globais
│   └── main.jsx         # Ponto de entrada
├── index.html           # Template HTML
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração Tailwind
├── vite.config.js       # Configuração Vite
└── README.md           # Este arquivo
```

## Instalação e Configuração

### Pré-requisitos
- Node.js 18+ instalado
- pnpm, npm ou yarn como gerenciador de pacotes

### Passos para Instalação

1. **Clone ou baixe o projeto**
```bash
# Se usando git
git clone <repository-url>
cd arraia-landing-page-react

# Ou extraia o arquivo compactado
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
pnpm run dev
# ou
npm run dev
# ou
yarn dev
```

4. **Acesse a aplicação**
Abra o navegador em `http://localhost:5173`

## Scripts Disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Gera build de produção
- `pnpm run preview` - Visualiza o build de produção
- `pnpm run lint` - Executa linting do código

## Personalização

### Alterando Conteúdo

#### Informações da Empresa
Edite as seguintes seções no arquivo `src/App.jsx`:

```jsx
// Telefone de contato
<span>(11) 99999-9999</span>

// Endereço da loja
<p className="text-gray-600">Rua das Flores, 123 - Centro<br />São Paulo - SP, 01234-567</p>

// Horários de funcionamento
<p className="text-gray-600">
  Segunda a Sexta: 8h às 18h<br />
  Sábado: 8h às 17h<br />
  Domingo: 9h às 15h<br />
  <strong>Dias 20 e 21/06: Até 20h</strong>
</p>
```

#### Data do Evento
Altere a data do contador regressivo:

```jsx
const countDownDate = new Date("Jun 21, 2024 20:00:00").getTime()
```

#### Produtos
Os produtos estão definidos como objetos no componente. Para adicionar/editar produtos, modifique as seções correspondentes no JSX.

### Alterando Estilos

#### Cores Principais
As cores estão definidas usando classes Tailwind CSS:
- Azul do header: `bg-[#24476e]`
- Laranja/Vermelho: `from-orange-500 to-yellow-500`
- Vermelho dos preços: `text-red-600`

#### Fontes
As fontes são importadas no `App.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&family=Dancing+Script:wght@400;700&display=swap');
```

### Adicionando Novas Imagens

1. Coloque as imagens na pasta `src/assets/`
2. Importe no componente:
```jsx
import novaImagem from './assets/nova-imagem.jpg'
```
3. Use na tag img:
```jsx
<img src={novaImagem} alt="Descrição" />
```

## Funcionalidades Detalhadas

### Contador Regressivo
Implementado com `useEffect` e `setInterval`, atualiza a cada segundo:

```jsx
useEffect(() => {
  const countDownDate = new Date("Jun 21, 2024 20:00:00").getTime()
  
  const timer = setInterval(() => {
    const now = new Date().getTime()
    const distance = countDownDate - now
    
    if (distance > 0) {
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    } else {
      clearInterval(timer)
    }
  }, 1000)

  return () => clearInterval(timer)
}, [])
```

### Integração WhatsApp
Cada produto tem um botão que abre o WhatsApp com mensagem pré-formatada:

```jsx
const handleProductClick = (productName) => {
  const message = `Olá! Tenho interesse no produto: ${productName} da promoção Arraiá Smart Móveis. Gostaria de mais informações.`
  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, '_blank')
}
```

### Navegação Suave
Implementada com scroll behavior smooth:

```jsx
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
```

## Responsividade

A aplicação é totalmente responsiva usando Tailwind CSS:

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Adaptações Mobile
- Menu de navegação oculto em telas pequenas
- Grid de produtos em coluna única
- Tamanhos de fonte reduzidos
- Espaçamentos otimizados
- Imagens responsivas

## Otimizações de Performance

### Imagens
- Formato otimizado (JPG/PNG)
- Lazy loading nativo do navegador
- Alt text para acessibilidade

### CSS
- Tailwind CSS com purge automático
- Estilos críticos inline
- Fontes carregadas de forma otimizada

### JavaScript
- Componentes funcionais React
- Hooks otimizados
- Event listeners limpos no useEffect

## SEO e Acessibilidade

### Meta Tags
Configuradas no `index.html`:
```html
<title>Arraiá Smart Móveis - Melhor que Desapega!</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Acessibilidade
- Alt text em todas as imagens
- Estrutura semântica HTML5
- Contraste adequado de cores
- Navegação por teclado funcional

## Deploy e Produção

### Build de Produção
```bash
pnpm run build
```

Isso gera uma pasta `dist/` com os arquivos otimizados para produção.

### Opções de Deploy

#### Vercel (Recomendado)
1. Conecte o repositório no Vercel
2. Configure o build command: `pnpm run build`
3. Configure o output directory: `dist`

#### Netlify
1. Arraste a pasta `dist` para o Netlify
2. Ou conecte via Git com as mesmas configurações

#### Servidor Próprio
1. Faça upload da pasta `dist` para o servidor
2. Configure o servidor web para servir arquivos estáticos
3. Configure redirects para SPA se necessário

## Manutenção e Atualizações

### Atualizando Dependências
```bash
pnpm update
```

### Verificando Vulnerabilidades
```bash
pnpm audit
```

### Linting e Formatação
```bash
pnpm run lint
```

## Troubleshooting

### Problemas Comuns

#### Imagens não carregam
- Verifique se as imagens estão na pasta `src/assets/`
- Confirme se os imports estão corretos
- Verifique os caminhos relativos

#### Estilos não aplicam
- Confirme se o Tailwind CSS está configurado
- Verifique se as classes estão escritas corretamente
- Limpe o cache do navegador

#### Contador não funciona
- Verifique se a data está no formato correto
- Confirme se o useEffect está sendo executado
- Verifique o console para erros JavaScript

## Suporte e Contato

Para dúvidas técnicas ou modificações:
- Consulte a documentação do React: https://react.dev
- Documentação do Tailwind CSS: https://tailwindcss.com
- Documentação do Vite: https://vitejs.dev

## Licença

Este projeto foi desenvolvido especificamente para a Smart Móveis e seu evento "Arraiá, melhor que desapega".

---

**Desenvolvido com React JS para Smart Móveis - Evento Arraiá 2024**

