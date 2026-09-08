/* ------------------------------------------------------------------
   CONFIGURAÇÃO — os dois valores abaixo são os únicos que você
   precisa trocar se o domínio do app ou o WhatsApp mudarem.
   ------------------------------------------------------------------ */
const APP = 'https://app.zapdorepresentante.com';   // onde fica o cadastro
const WHATSAPP = '';                                 // ex.: '5511999999999' (só números). Vazio = manda pro cadastro.

/* Redes sociais e e-mail do rodapé. O que ficar vazio some do rodapé
   em vez de virar link quebrado — é só preencher a URL para aparecer. */
const REDES = { instagram: '', facebook: '', linkedin: '', email: '' };
const falarComEspecialista = WHATSAPP
  ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Quero saber mais sobre o plano RepCustom do Zap do Representante.')}`
  : `${APP}/signup?plano=personalizado`;

const features = [
  ['💬','Multicanal Integrado','WhatsApp, Instagram, Facebook, Telegram e E-mail em uma única tela. Todas as conversas centralizadas.'],['📊','CRM Inteligente','Transforme sua carteira em uma máquina organizada de vendas. Acompanhe negociações e retornos pendentes.'],['🤖','Inteligência Artificial','IA treinada para sugerir respostas, ler catálogos, interpretar produtos e gerar resumos de conversa.'],['🔁','Follow-up Automatizado','Lembretes inteligentes que cuidam dos seus clientes sozinhos. Nunca mais esqueça um retorno.'],['👥','Multiatendimento','Toda a equipe no mesmo número de WhatsApp, sem confusão. Distribuição inteligente de conversas.'],['📅','Tarefas','Crie tarefas, defina responsáveis, estabeleça prazos e acompanhe o desempenho da equipe.'],['📈','Monitoramento de Conversas','Saiba por que cada negociação foi fechada ou perdida. Identifique gargalos com dados reais.'],['✉️','Mensagens Agendadas','Programe mensagens no melhor horário. Aniversários, lembretes e follow-ups automatizados.'],['⚙️','Gestão de Equipe','Defina metas, acompanhe a produtividade e veja em tempo real como sua equipe está performando.'],['📑','Relatórios Avançados','Dashboard completo com métricas de atendimento, vendas, tempo de resposta e conversão.']
];
const audiences = [['🚚','Representantes Comerciais','Você que está em campo todo dia, com dezenas de clientes em diferentes regiões, orçamentos, follow-ups e visitas.'],['💼','Vendedores Autônomos','Você que trabalha sozinho e precisa ter uma estrutura profissional, sem perder oportunidades.'],['🏢','Equipes de Vendas','Empresas com múltiplos vendedores que precisam de gestão, padronização e visibilidade.'],['📦','Distribuidores e Atacadistas','Operações com volume alto de clientes e pedidos, que precisam centralizar e automatizar para escalar.']];
const why = [['🎯','Não é uma ferramenta. É um canhão de vendas.','Cada recurso foi pensado para aumentar sua produtividade, fortalecer o relacionamento e transformar oportunidades em vendas.'],['🔗','Multicanal de verdade','WhatsApp + Instagram + Facebook + Telegram + E-mail. Todas as oportunidades em uma central, sem pular entre apps.'],['🧠','IA que vende, não só responde','Leitura de catálogos, sugestão de respostas, resumo de conversa e suporte estratégico no atendimento.'],['📊','Monitoramento que outras plataformas não têm','Saiba exatamente por que cada conversa foi fechada ou perdida. O dado que separa quem cresce de quem fica parado.'],['🛟','Suporte e treinamento incluídos','Você não recebe a plataforma e fica sozinho. Treinamento, assistência personalizada e suporte por WhatsApp.']];
const plans = [['📱','RepMobile','R$ 97','/mês','Para representantes autônomos que querem organizar tudo no celular.',['1 usuário','WhatsApp integrado','CRM básico com funil Kanban','Mensagens agendadas','Tarefas e calendário','Aplicativo mobile completo','Suporte por WhatsApp'],'Testar RepMobile grátis',`${APP}/signup?plano=pequeno`],['💼','RepBasico','R$ 197','/mês','Para representantes e pequenas equipes que querem profissionalizar o atendimento.',['Até 3 usuários','WhatsApp + Instagram + Facebook','CRM completo com pipeline avançado','Multiatendimento para a equipe','Follow-up automatizado','Relatórios e dashboard básico','Inteligência Artificial inclusa','Suporte prioritário'],'Testar RepBasico grátis',`${APP}/signup?plano=medio`],['🚀','RepAvançado','R$ 397','/mês','Para equipes que vendem alto volume e querem escalar com inteligência.',['Até 10 usuários','Todos os canais integrados','CRM avançado com automações','Multiatendimento ilimitado','IA avançada com leitura de catálogos','Monitoramento de conversas','Gestão completa de equipe e metas','Relatórios avançados e exportação','Treinamento personalizado','Suporte VIP dedicado'],'Testar RepAvançado grátis',`${APP}/signup?plano=grande`],['🏢','RepCustom','Sob consulta','','Para grandes operações que precisam de uma solução totalmente personalizada.',['Usuários ilimitados','Tudo do RepAvançado','Integrações customizadas (ERP, API)','API Oficial do WhatsApp','Onboarding e implantação dedicada','Gerente de conta exclusivo','SLA garantido','Treinamento da equipe inteira'],'Falar com especialista',falarComEspecialista]];
const faqs=[
['Como funciona o teste grátis?','Você usa a plataforma por 7 dias com acesso total a todas as funcionalidades do plano escolhido. Não pedimos fidelidade: se decidir não continuar, é só cancelar.'],
['Preciso instalar alguma coisa no celular?','Não é obrigatório. A plataforma funciona direto no navegador, no computador ou no celular. Se preferir, dá para instalar como aplicativo na tela inicial do telefone.'],
['Meu WhatsApp atual vai funcionar normalmente?','Sim. Você conecta o número que já usa e continua conversando normalmente — a diferença é que tudo passa a ficar organizado, com histórico, funil e follow-up. Para operações que precisam de mais estabilidade, há integração com a API Oficial do WhatsApp.'],
['Funciona para equipes? Todo mundo no mesmo número?','Sim. Vários atendentes trabalham no mesmo número, com distribuição inteligente das conversas e sem um atropelar o outro. O multiatendimento está disponível a partir do RepBasico.'],
['Tem fidelidade? Preciso assinar contrato?','Não. A assinatura é mensal e você cancela quando quiser, sem multa e sem letras miúdas.'],
['Como funciona o suporte técnico?','Todos os planos têm suporte por WhatsApp. A partir do RepBasico o atendimento é prioritário, e no RepCustom você tem gerente de conta exclusivo e SLA garantido.'],
['Posso migrar meus contatos atuais?','Pode. Dá para importar sua base por planilha, em CSV ou Excel, usando um modelo pronto para preencher.'],
['Recebo treinamento para usar a plataforma?','Sim, treinamento e assistência estão incluídos. No RepAvançado o treinamento é personalizado; no RepCustom cobre a equipe inteira, junto com o onboarding de implantação.'],
['Quais formas de pagamento?','PIX, boleto ou cartão de crédito.'],
['Funciona para qualquer segmento de venda?','Funciona para quem vende conversando. Representantes, vendedores autônomos, equipes e distribuidores usam a plataforma do mesmo jeito: o segmento muda, mas a rotina de atender, negociar e fazer follow-up é a mesma.']
];
const cards=(items,target,klass)=>document.querySelector(target).innerHTML=items.map(([icon,title,text])=>`<article class="${klass}"><i>${icon}</i><h3>${title}</h3><p>${text}</p></article>`).join('');
cards(features,'#feature-grid','feature-card'); cards(audiences,'#audience-grid','audience-card'); cards(why,'#why-list','why-card');
document.querySelector('#plans-grid').innerHTML=plans.map((p,i)=>`<article class="plan ${i===1?'popular':''}">${i===1?'<em>★ Mais popular</em>':''}<i>${p[0]}</i><h3>${p[1]}</h3><div class="price">${p[2]} <small>${p[3]}</small></div><p>${p[4]}</p><ul>${p[5].map(x=>`<li>✓ ${x}</li>`).join('')}</ul><a class="button ${i!==1?'button-muted':''}" href="${p[7]}">${p[6]} <b>→</b></a></article>`).join('');
document.querySelector('#faq-list').innerHTML=faqs.map(([q,a])=>`<details><summary>${q}<b>⌄</b></summary><p>${a}</p></details>`).join('');
const menuButton=document.querySelector('.menu-toggle'),menu=document.querySelector('.main-nav');
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12}); document.querySelectorAll('.reveal,.feature-card,.audience-card,.plan,.why-card').forEach(el=>observer.observe(el));

/* ---- rodapé: liga redes sociais e contato ---- */
document.querySelectorAll('.socials a[data-rede]').forEach(a=>{
  const v=REDES[a.dataset.rede];
  if(v) a.href = a.dataset.rede==='email' ? `mailto:${v}` : v;
  else a.remove();
});
const contato=document.querySelector('a[data-contato]');
if(contato && WHATSAPP) contato.href=falarComEspecialista;
