# Zap do Representante — site

Landing page estática, responsiva e sem build. Para publicar, basta servir esta pasta.

```
index.html            conteúdo e estrutura
assets/css/styles.css tema, layout responsivo e as ilustrações feitas em CSS
assets/js/main.js     configuração, dados dos cards, menu mobile, FAQ e animações
assets/img/           logo, ícone e imagem de compartilhamento
```

Para ver localmente:

```bash
python3 -m http.server 8080   # depois abra http://localhost:8080
```

## Configuração

Tudo que muda com frequência está no topo do `assets/js/main.js`:

| Constante | Para que serve |
|---|---|
| `APP` | domínio do sistema, onde fica o cadastro. Hoje: `https://app.zapdorepresentante.com` |
| `WHATSAPP` | número só com dígitos (ex.: `5511999999999`). Vazio: os botões de "falar com especialista" e "Contato" mandam para o cadastro. |
| `REDES` | Instagram, Facebook, LinkedIn e e-mail do rodapé. **O que ficar vazio some do rodapé** em vez de virar link quebrado. |

Os botões de plano levam para `APP/signup?plano=…`, usando os identificadores do
sistema (`pequeno`, `medio`, `grande`, `personalizado`).

## Pendências

- [ ] **Redes sociais e e-mail** — preencher `REDES` no `main.js`. Enquanto estiverem vazios, os ícones não aparecem.
- [ ] **WhatsApp comercial** — preencher `WHATSAPP` no `main.js`.
- [ ] **Garantia de 7 dias** — o texto atual promete cancelamento sem cobrança. O design do Figma prometia **devolução de 100% do valor pago**. São promessas diferentes; decidir qual vale e ajustar a seção "7 dias para testar" no `index.html`.
- [ ] **Domínio** — `index.html` usa `https://zapdorepresentante.com` no `canonical` e nas tags de compartilhamento (Open Graph). Se o domínio final for outro, trocar nessas 5 linhas do `<head>`, senão a prévia no WhatsApp aponta para o lugar errado.

## Preços

Os valores aqui (**R$ 97 / R$ 197 / R$ 397**) são os mesmos cobrados no checkout do
sistema (`plans-checkout.ts`). O design do Figma trazia R$ 99,90 / R$ 199,90 / R$ 299,90 —
valores antigos, que foram descartados para a landing não prometer um preço e o
checkout cobrar outro. Se os preços mudarem, mudam nos dois lugares.

## Publicação

Publicado por GitHub Pages, a partir da branch `main`. Para usar domínio próprio,
configure em *Settings → Pages → Custom domain* e aponte o DNS para o GitHub.

## Origem

O conteúdo veio do design no Figma (WGANER ZAP EMPRESARIAL). Logo, ícone e imagem de
compartilhamento foram extraídos do PDF exportado desse design, em resolução original.
