
# Coonect - Site Estático

Este é o site institucional da Coonect Ltda., convertido para HTML estático com JavaScript vanilla.

## Estrutura do Projeto

```
/
├── index.html          # Página principal
├── js/
│   └── main.js        # JavaScript principal
├── public/
│   └── lovable-uploads/
│       ├── 17d1daff-699f-48c3-9635-1c05e3bc492c.png
│       └── 64035013-ec14-431f-a00e-bed24c6b1036.png
└── README.md
```

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **Tailwind CSS**: Framework CSS via CDN
- **JavaScript Vanilla**: Funcionalidades interativas
- **Lucide Icons**: Ícones via CDN

## Funcionalidades

### JavaScript Implementado
- Menu mobile responsivo
- Navegação suave (smooth scrolling)
- Formulário de contato funcional
- Animações de entrada (fade-in)
- Preenchimento dinâmico de conteúdo
- Inicialização automática de ícones

### Seções do Site
- **Header**: Logo, navegação e CTA
- **Hero**: Apresentação principal com slogan
- **Sobre**: Missão, visão, valores e propósito
- **Soluções**: Cards de serviços da Claro Empresas
- **Diferenciais**: Por que escolher a Coonect
- **Contato**: Informações e formulário
- **Footer**: Links e informações de contato

## Como Usar

### Hospedagem PHP
1. Faça upload de todos os arquivos para seu servidor PHP
2. Certifique-se de que as imagens estão no caminho correto
3. O site funcionará como HTML estático, sem necessidade de Node.js

### Personalização
- **Cores**: Editáveis no script Tailwind CSS no `index.html`
- **Conteúdo**: Modificável nos arrays de dados no `main.js`
- **Estilos**: Classes Tailwind CSS aplicadas diretamente no HTML

### Formulário de Contato
O formulário atualmente exibe um alert de sucesso. Para integração real:

1. **PHP**: Crie um script PHP para processar os dados
2. **JavaScript**: Modifique a função `initContactForm()` no `main.js`
3. **Exemplo de integração**:

```javascript
// Em main.js, substitua o alert por:
fetch('processar-contato.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
  alert('Mensagem enviada com sucesso!');
})
.catch(error => {
  alert('Erro ao enviar mensagem. Tente novamente.');
});
```

## Manutenção

### Atualizando Conteúdo
- **Valores da empresa**: Edite o array `values` no `main.js`
- **Soluções**: Modifique o array `solutions` no `main.js`
- **Diferenciais**: Altere o array `differentials` no `main.js`
- **Informações de contato**: Atualize o array `contactInfo` no `main.js`

### Adicionando Novas Seções
1. Adicione o HTML na `index.html`
2. Crie as funções JavaScript correspondentes no `main.js`
3. Chame as funções no evento `DOMContentLoaded`

## Browser Support
- Chrome/Edge (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Internet Explorer 11+ (limitado)

## Performance
- **Tailwind CSS**: Carregado via CDN
- **Lucide Icons**: Carregados via CDN, renderizados sob demanda
- **Imagens**: Otimize as imagens para web (WebP recomendado)
- **JavaScript**: Minifique o `main.js` para produção

## SEO
- Meta tags configuradas
- Estrutura semântica HTML5
- URLs amigáveis com âncoras
- Alt text nas imagens

## Próximos Passos
1. Implementar processamento real do formulário
2. Adicionar Google Analytics
3. Otimizar imagens
4. Configurar cache no servidor
5. Implementar HTTPS
6. Adicionar sitemap.xml
