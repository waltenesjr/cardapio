# 🍽️ Cardápio Online

Um cardápio digital moderno e responsivo, perfeito para ser acessado via QR Code em dispositivos móveis.

## ✨ Características

- 📱 **Totalmente Responsivo** - Otimizado para dispositivos móveis
- 🎨 **Design Moderno** - Interface atrativa com animações suaves
- 🍽️ **Bem Organizado** - Categorias claras (Pratos Principais, Acompanhamentos, Chapas Premium, Bebidas)
- ⚡ **Rápido** - Carregamento instantâneo
- 🔄 **Atualização Automática** - Data e hora sempre atualizadas

## 🗂️ Estrutura dos Arquivos

```
cardapio/
├── index.html      # Página principal do cardápio
├── styles.css      # Estilos e design responsivo
├── script.js       # Interatividade e animações
├── server.py       # Servidor Python para testes
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### Método 1: Servidor Python (Recomendado para testes)

```bash
# 1. Navegar até a pasta do projeto
cd /home/squadra/Documentos/workspace/cardapio

# 2. Executar o servidor
python server.py

# 3. Acessar no navegador
# http://localhost:8000
```

### Método 2: Servidor Web

1. Hospede os arquivos em qualquer servidor web
2. Acesse através da URL do servidor
3. Gere um QR Code da URL para facilitar o acesso

## 📱 Gerando QR Code

1. Execute o servidor (ver instruções acima)
2. Use qualquer gerador de QR Code online (ex: qr-code-generator.com)
3. Insira a URL: `http://localhost:8000` (ou sua URL de produção)
4. Baixe e imprima o QR Code
5. Coloque o QR Code nas mesas do restaurante

### 🔗 Geradores de QR Code Recomendados:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QRCode Monkey](https://www.qrcode-monkey.com/)
- [QR Tiger](https://www.qrtiger.com/)

## 🍽️ Itens do Cardápio Incluídos

### Pratos Principais
- Filé de Tilápia - R$ 50,00
- Costela de Caranha - R$ 45,00
- Tábua de Frios - R$ 50,00
- Kibe com Queijo - R$ 40,00
- Frango Kiev - R$ 55,00
- Filé de Pintado - R$ 50,00

### Acompanhamentos  
- Batata Simples - R$ 35,00
- Batata Especial - R$ 45,00
- Arroz - R$ 16,00
- Feijão Tropeiro - R$ 15,00

### Chapas Premium
- Chapa de Picanha - R$ 100,00
- Chapa de Contra Filé - R$ 90,00
- Chapa de Filé Mignon - R$ 100,00

### Cervejas 600ml
- Heineken - R$ 16,00
- Antártica - R$ 13,00
- Brahma - R$ 13,00

## 🎨 Personalização

Para personalizar o cardápio:

1. **Editar itens**: Modifique o arquivo `index.html`
2. **Mudar cores**: Ajuste as variáveis CSS em `styles.css`
3. **Adicionar logo**: Substitua o ícone na seção `.logo`
4. **Modificar animações**: Ajuste em `script.js`

## 🔧 Requisitos

- **Python 3.6+** (para o servidor local)
- **Navegador moderno** (Chrome, Firefox, Safari, Edge)
- **Conexão com internet** (para fontes e ícones externos)

## 📋 Para Produção

1. Hospede os arquivos em um servidor web
2. Configure HTTPS para segurança
3. Otimize imagens se adicionar fotos dos pratos
4. Configure um domínio personalizado
5. Teste em diferentes dispositivos móveis

## 🎯 Dicas de Uso

- **QR Code**: Imprima em tamanho mínimo de 3x3 cm
- **Posicionamento**: Coloque em local visível nas mesas
- **Teste**: Sempre teste o QR Code antes de imprimir
- **Backup**: Mantenha uma versão física do cardápio como backup

## 📞 Suporte

Para modificações ou dúvidas sobre o cardápio, entre em contato com o desenvolvedor.

---

**🚀 Seu cardápio digital está pronto para impressionar os clientes!**
