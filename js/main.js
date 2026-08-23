// ===================================================
// DATA
// ===================================================
const PILLARS = [
  {
    num:1, cls:'pillar-1', icon:'⚙️',
    title:'Platform Engineering',
    desc:'Building Salesforce as a structured engineering platform — not a configuration tool. Apex/FFLIB frameworks, Custom Metadata-driven architecture, LWC component libraries, Platform Events, and rigorous pattern-first design ensure solutions scale reliably.',
    tags:['Apex/FFLIB','Custom Metadata','LWC','Platform Events','Pattern Design']
  },
  {
    num:2, cls:'pillar-2', icon:'🔗',
    title:'Enterprise Integration',
    desc:'Owning the full integration stack from protocol selection to production monitoring. REST, SOAP, OAuth2, JWT, SAML, Webhooks — connecting ERP, IdP, PIM, Payment, and Middleware systems through reusable, observable callout frameworks.',
    tags:['REST/SOAP','OAuth2/JWT','SAML','Named Credentials','Callout Frameworks']
  },
  {
    num:3, cls:'pillar-3', icon:'🛡️',
    title:'Governance & Quality Engineering',
    desc:'Embedding quality at every stage: CI/CD pipelines, test coverage standards, release management, bulkification patterns, and RCA methodologies that prevent recurrence. Observability as a first-class architectural concern.',
    tags:['CI/CD','Observability','Release Mgmt','Bulkification','RCA']
  }
];

const CERTIFICATIONS = [
  {name:'Certified System Architect',track:'architect',legendary:true},
  {name:'Certified Application Architect',track:'architect',legendary:true},
  {name:'Identity & Access Management Architect',track:'architect'},
  {name:'Platform Integration Architect',track:'architect'},
  {name:'Data Architect',track:'architect'},
  {name:'Development Lifecycle & Deployment Architect',track:'architect'},
  {name:'Service Cloud Consultant',track:'consultant'},
  {name:'Field Service Consultant',track:'consultant'},
  {name:'Experience Cloud Consultant',track:'consultant'},
  {name:'OmniStudio Consultant',track:'consultant'},
  {name:'OmniStudio Developer',track:'consultant'},
  {name:'Data Cloud Consultant',track:'consultant'},
  {name:'Platform Developer I',track:'developer'},
  {name:'Platform Developer II',track:'developer'},
  {name:'JavaScript Developer I',track:'developer'},
  {name:'Salesforce Certified Administrator',track:'admin'},
  {name:'Platform App Builder',track:'admin'},
  {name:'Order Management Administrator',track:'admin'},
  {name:'Salesforce AI Specialist',track:'admin'}
];

const SKILLS = [
  {
    group:'Platform Development', icon:'⚙️',
    items:[
      {name:'Apex',pct:98,level:'Expert'},
      {name:'LWC',pct:95,level:'Expert'},
      {name:'FFLIB',pct:93,level:'Expert'},
      {name:'Flows',pct:90,level:'Expert'},
      {name:'Custom Metadata',pct:95,level:'Expert'},
      {name:'Security Model',pct:92,level:'Expert'}
    ]
  },
  {
    group:'Async Architecture', icon:'⚡',
    items:[
      {name:'Batch Apex',pct:95,level:'Expert'},
      {name:'Queueable Apex',pct:93,level:'Expert'},
      {name:'Scheduled Apex',pct:92,level:'Expert'},
      {name:'Platform Events',pct:90,level:'Expert'},
      {name:'CDC',pct:88,level:'Advanced'},
      {name:'Governor Limit Profiling',pct:95,level:'Expert'}
    ]
  },
  {
    group:'Enterprise Integrations', icon:'🔗',
    items:[
      {name:'REST API',pct:97,level:'Expert'},
      {name:'SOAP/WSDL',pct:90,level:'Expert'},
      {name:'OAuth2/JWT/SAML',pct:93,level:'Expert'},
      {name:'Named Credentials',pct:95,level:'Expert'},
      {name:'Connected Apps',pct:90,level:'Expert'},
      {name:'Webhooks',pct:88,level:'Advanced'}
    ]
  },
  {
    group:'Products & Clouds', icon:'☁️',
    items:[
      {name:'Sales/Service Cloud',pct:97,level:'Expert'},
      {name:'Field Service',pct:90,level:'Expert'},
      {name:'OmniStudio',pct:88,level:'Advanced'},
      {name:'Data Cloud',pct:85,level:'Advanced'},
      {name:'Order Management',pct:88,level:'Advanced'},
      {name:'Experience Cloud',pct:87,level:'Advanced'}
    ]
  },
  {
    group:'Quality & DevOps', icon:'🛡️',
    items:[
      {name:'CI/CD',pct:90,level:'Expert'},
      {name:'Test Coverage',pct:92,level:'Expert'},
      {name:'Observability',pct:88,level:'Advanced'},
      {name:'Release Mgmt',pct:92,level:'Expert'},
      {name:'RCA',pct:90,level:'Expert'},
      {name:'SOQL/SOSL',pct:95,level:'Expert'}
    ]
  },
  {
    group:'AI & Emerging', icon:'🤖',
    items:[
      {name:'Einstein AI',pct:82,level:'Advanced'},
      {name:'Data Cloud Segments',pct:80,level:'Advanced'},
      {name:'CRM Analytics',pct:75,level:'Proficient'},
      {name:'Agentforce',pct:78,level:'Proficient'},
      {name:'Salesforce Identity',pct:90,level:'Expert'},
      {name:'Prompt Engineering',pct:76,level:'Proficient'}
    ]
  }
];

const LIFECYCLE = [
  {phase:'01',title:'Requirements & Solution Design',color:'phase-color-1',deliverables:['ADR Documentation','Gap Analysis','Stakeholder Alignment']},
  {phase:'02',title:'Technical Architecture',color:'phase-color-2',deliverables:['Data Modeling','Security Architecture','FFLIB Patterns','Integration Topology']},
  {phase:'03',title:'Implementation & Code Review',color:'phase-color-3',deliverables:['Apex/LWC','Bulkification','Code Review','Test Coverage']},
  {phase:'04',title:'CI/CD & Deployment Engineering',color:'phase-color-4',deliverables:['CI/CD Pipelines','SFDX/Source Control','Release Management']},
  {phase:'05',title:'Production Support & Observability',color:'phase-color-5',deliverables:['Observability','RCA Analysis','Governor Limits','Incident Response']}
];

const PROTOCOLS = [
  {icon:'🌐',title:'API Protocols',items:['RESTful APIs','SOAP/WSDL','GraphQL','Bulk API 2.0']},
  {icon:'🔑',title:'Auth & Identity',items:['OAuth 2.0 (all flows)','JWT Bearer Token','SAML 2.0 SSO','OpenID Connect']},
  {icon:'📡',title:'Event Architecture',items:['Platform Events (pub/sub)','Change Data Capture','Webhooks','Streaming API (CometD)']},
  {icon:'🏢',title:'Integration Targets',items:['ERP (SAP, Oracle)','Identity Providers (Okta, AD)','Payment Gateways','PIM/Middleware/Analytics']},
  {icon:'🛡️',title:'SF Security Layer',items:['Named Credentials','Auth Providers','Connected Apps','External Credentials']},
  {icon:'⚡',title:'Async & Reliability',items:['Retry & idempotency','Dead-letter queue','Async callout queueables','Outbound Message fallback']}
];

const INDUSTRIES = [
  {icon:'🏭',name:'Manufacturing'},
  {icon:'🛒',name:'Retail'},
  {icon:'🏠',name:'Home Appliances'},
  {icon:'💎',name:'Luxury Goods'},
  {icon:'🚗',name:'Automotive Distribution'}
];

const VALUE_PROPS = [
  {num:'01',title:'Architect-Grade Delivery at Consultant Speed',desc:'Combining strategic architectural thinking with hands-on delivery velocity for faster, more durable outcomes.'},
  {num:'02',title:'Platform Engineering Mindset',desc:'Every solution is built as a platform capability — reusable, testable, and extensible beyond the initial requirement.'},
  {num:'03',title:'Full Integration Stack Ownership',desc:'From protocol selection to production monitoring, owning the entire integration lifecycle end-to-end.'},
  {num:'04',title:'Certification-Backed Architecture Decisions',desc:'19 credentials across 4 tracks ensure decisions are grounded in Salesforce-endorsed best practices and deep product knowledge.'},
  {num:'05',title:'Production-Proven at Scale',desc:'Designed and delivered solutions running in enterprise environments across manufacturing, retail, luxury, and automotive.'},
  {num:'06',title:'Strategic Architect-Level Readiness',desc:'Dual Application and System Architect status positions for full technical strategy leadership and governance ownership.'}
];

const ARCH_NODES = [
  {label:'ERP/SAP',color:'#f59e0b',stroke:'#f59e0b',tech:['SAP RFC','IDocs','REST/SOAP','BAPI']},
  {label:'Azure AD',color:'#3b82f6',stroke:'#3b82f6',tech:['SAML 2.0','OAuth2','OpenID Connect','JWT']},
  {label:'Commerce',color:'#06b6d4',stroke:'#06b6d4',tech:['Salesforce B2C','REST APIs','Webhooks','Order Sync']},
  {label:'Data Cloud',color:'#a855f7',stroke:'#a855f7',tech:['Ingestion API','Segments','Identity Resolution','Activations']},
  {label:'Identity/IAM',color:'#10b981',stroke:'#10b981',tech:['Okta SSO','MFA','Auth Providers','Connected Apps']},
  {label:'Payment GW',color:'#e11d48',stroke:'#e11d48',tech:['Tokenization','REST callbacks','Webhooks','PCI Compliance']},
  {label:'Middleware',color:'#64748b',stroke:'#64748b',tech:['MuleSoft','Event Bus','Transformation','Routing']},
  {label:'Experience Cloud',color:'#0ea5e9',stroke:'#0ea5e9',tech:['Communities','LWC OSS','Guest Access','Digital Experience']},
  {label:'Service Cloud',color:'#3b82f6',stroke:'#3b82f6',tech:['Case Mgmt','OmniChannel','Entitlements','CTI']},
  {label:'Sales Cloud',color:'#635bff',stroke:'#635bff',tech:['Opportunity Mgmt','CPQ','Territory','Forecasting']},
  {label:'Platform Events',color:'#8b5cf6',stroke:'#8b5cf6',tech:['Pub/Sub','CDC','Streaming API','Event Replay']},
  {label:'External APIs',color:'#ec4899',stroke:'#ec4899',tech:['Named Credentials','HTTP Callouts','Auth Providers','External Creds']}
];

const EXPERIENCE = [
  {
    company:'Salesforce Technical Consultant',
    period:'Jan 2023 – Present',
    dotClass:'c1',
    projects:[
      {
        id:'A', cls:'exp-proj-a',
        title:'Enterprise Integration Program',
        period:'10/2025 – Present',
        bullets:[
          'Designed and delivered end-to-end inbound & outbound integrations with ERP, Payment Gateway, Master Data Governance, Consent & Compliance, and Cloud Analytics platforms.',
          'Configured Connected Apps, Permission Sets, External & Named Credentials for secure third-party and MuleSoft access.',
          'Built a reusable callout framework to standardize outbound integrations and enforce consistent architecture.',
          'Implemented integration logging for monitoring, traceability, and error handling.',
          'Developed Apex, LWC, Flows, Batch Jobs, and Asynchronous processing to support automation and functional requirements.',
          'Authored technical documentation for solution design, integration architecture, and QA testing guides.',
          'Managed deployments and version control via Git and Azure DevOps.'
        ]
      },
      {
        id:'B', cls:'exp-proj-b',
        title:'Field Service & Service Cloud Implementation',
        period:'12/2023 – 09/2025',
        bullets:[
          'Delivered end-to-end Field Service and Service Cloud implementations within agile project frameworks.',
          'Configured and customized Sales Cloud and Service Cloud in alignment with business objectives.',
          'Built custom solutions using Apex, LWC, and Visualforce to address complex functional requirements.',
          'Designed and implemented REST API integrations, including interface contracts and third-party connectivity.',
          'Managed deployment, UAT coordination, and bug resolution in collaboration with business and QA teams.',
          'Architected Agentforce AI agents and Salesforce Bots with omni-channel support across WhatsApp, Facebook, SMS, and Web.',
          'Facilitated client workshops, POCs, and technical discovery sessions to translate business needs into scalable solutions.',
          'Managed version control and deployment pipelines using Git.'
        ]
      },
      {
        id:'C', cls:'exp-proj-c',
        title:'Sales Cloud & Experience Cloud Delivery',
        period:'05/2023 – 10/2023',
        bullets:[
          'Implemented and customized Sales Cloud and Experience Cloud solutions within an agile framework.',
          'Developed custom solutions using Apex, LWC, and Visualforce to meet business requirements.',
          'Performed code refactoring and LWC optimization to improve performance and maintainability.',
          'Delivered new feature implementations aligned with Salesforce best practices.',
          'Managed deployments and version control using Git.'
        ]
      }
    ]
  },
  {
    company:'Salesforce Technical Consultant',
    period:'Aug 2021 – Jan 2023',
    dotClass:'c2',
    projects:[
      {
        id:'D', cls:'exp-proj-d',
        title:'Salesforce OMS & Sales Cloud — Enterprise Order Management',
        period:'10/2022 – 01/2023',
        bullets:[
          'Implemented and configured Salesforce OMS and Sales Cloud within an agile delivery framework.',
          'Developed Apex triggers, Batch jobs, REST web services, and Flows for order processing automation.',
          'Delivered integrations with payment processing, shipping, and delivery management systems.',
          'Built a retry mechanism for failed outbound callouts to ensure reliable connectivity.',
          'Participated in technical workshops for requirement gathering and solution design.',
          'Managed deployments and version control using Git.'
        ]
      },
      {
        id:'E', cls:'exp-proj-e',
        title:'Consent Management & Order Management Platform',
        period:'08/2021 – 09/2022',
        bullets:[
          'Designed and developed a custom Consent Management solution on top of Salesforce standard capabilities.',
          'Delivered data integration to synchronize customer and consent records across systems.',
          'Implemented new features and bug fixes within Salesforce Order Management (OMS).',
          'Developed Apex triggers, Batch jobs, REST web services, and Flows for order processing.',
          'Worked closely with Commerce Cloud and Marketing Cloud teams.',
          'Supported and resolved production hotfixes ensuring business continuity.',
          'Managed version control and CI/CD pipelines for automated deployments.'
        ]
      }
    ]
  }
];

const PRODUCTS = ['Sales Cloud','Service Cloud','Experience Cloud','Field Service','OmniStudio','Data Cloud','Order Management','CRM Analytics','Salesforce Identity','AI Capabilities'];

// ===================================================
// BOOT SEQUENCE
// ===================================================
(function(){
  const lines = [
    {text:'[SYS]  Initializing portfolio runtime v4.0.0...', cls:''},
    {text:'[OK]   Architect credentials loaded (19 certs)', cls:'ok'},
    {text:'[OK]   Integration stack: REST · SOAP · OAuth2 · JWT · SAML', cls:'ok'},
    {text:'[INFO] Loading enterprise delivery history...', cls:'info'},
    {text:'[OK]   5 projects across 2 organizations verified', cls:'ok'},
    {text:'[OK]   FFLIB framework patterns initialized', cls:'ok'},
    {text:'[WARN] Governor limits: monitoring enabled', cls:'warn'},
    {text:'[OK]   CI/CD pipeline: Azure DevOps + Git connected', cls:'ok'},
    {text:'[INFO] Platform Engineering mindset: activated', cls:'info'},
    {text:'[OK]   All systems nominal — portfolio ready', cls:'ok'}
  ];

  const container = document.getElementById('boot-lines');
  const fill = document.getElementById('boot-fill');
  const pct = document.getElementById('boot-pct');
  const overlay = document.getElementById('boot-overlay');
  const skip = document.getElementById('boot-skip');

  let idx = 0;
  const total = lines.length;
  const interval = 380;

  function showLine(){
    if(idx >= total){
      setTimeout(()=>finishBoot(), 600);
      return;
    }
    const d = lines[idx];
    const el = document.createElement('div');
    el.className = 'boot-line';
    const span = document.createElement('span');
    span.className = d.cls;
    span.textContent = d.text;
    el.appendChild(span);
    container.appendChild(el);
    requestAnimationFrame(()=>{ el.classList.add('visible'); });
    const progress = Math.round(((idx+1)/total)*100);
    fill.style.width = progress+'%';
    pct.textContent = progress+'%';
    idx++;
    setTimeout(showLine, interval);
  }

  function finishBoot(){
    overlay.classList.add('fade-out');
    setTimeout(()=>{ overlay.style.display='none'; }, 800);
  }

  skip.addEventListener('click', finishBoot);
  setTimeout(showLine, 400);
})();

// ===================================================
// PARTICLE CANVAS
// ===================================================
(function(){
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let W = window.innerWidth, H = document.body.scrollHeight;
  const particles = [];
  const COUNT = 70;

  function resize(){
    W = window.innerWidth;
    H = Math.max(document.body.scrollHeight, window.innerHeight);
    canvas.width = W;
    canvas.height = H;
  }

  for(let i=0;i<COUNT;i++){
    particles.push({
      x:Math.random()*window.innerWidth,
      y:Math.random()*window.innerHeight*5,
      vx:(Math.random()-0.5)*0.3,
      vy:(Math.random()-0.5)*0.3,
      r:Math.random()*2.5+1
    });
  }

  function draw(){
    if(canvas.width !== W || canvas.height !== H) resize();
    ctx.clearRect(0,0,W,H);
    const viewY = window.scrollY;
    const viewH = window.innerHeight;

    particles.forEach(p=>{
      if(p.y < viewY-100 || p.y > viewY+viewH+100) return;
      p.x += p.vx;
      p.y += p.vy;
      if(p.x<0) p.x=W;
      if(p.x>W) p.x=0;
      if(p.y<0) p.y=H;
      if(p.y>H) p.y=0;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(99,91,255,0.15)';
      ctx.fill();
    });

    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a = particles[i], b = particles[j];
        if(Math.abs(a.y-viewY)>viewH+100 && Math.abs(b.y-viewY)>viewH+100) continue;
        const dx = a.x-b.x, dy = a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist<120){
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(99,91,255,${0.06*(1-dist/120)})`;
          ctx.lineWidth=0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener('resize',resize);
  draw();
})();

// ===================================================
// TYPEWRITER
// ===================================================
(function(){
  const phrases = [
    'Senior Salesforce Technical Consultant',
    'Enterprise Architect Candidate',
    'Platform Engineering Specialist',
    'Integration Architecture Lead'
  ];
  const el = document.getElementById('typewriter');
  let pi=0, ci=0, deleting=false;

  function type(){
    const phrase = phrases[pi];
    if(!deleting){
      el.textContent = phrase.slice(0,ci+1);
      ci++;
      if(ci===phrase.length){ deleting=true; setTimeout(type,2000); return; }
    } else {
      el.textContent = phrase.slice(0,ci-1);
      ci--;
      if(ci===0){ deleting=false; pi=(pi+1)%phrases.length; setTimeout(type,400); return; }
    }
    setTimeout(type, deleting?50:100);
  }
  setTimeout(type, 1200);
})();

// ===================================================
// MARQUEE
// ===================================================
(function(){
  const track = document.getElementById('marquee-track');
  const items = [...PRODUCTS,...PRODUCTS];
  items.forEach(p=>{
    const el = document.createElement('span');
    el.className='marquee-item';
    el.innerHTML=`<span class="marquee-dot"></span>${p}`;
    track.appendChild(el);
  });
})();

// ===================================================
// ARCHITECTURE SVG
// ===================================================
(function(){
  const svg = document.getElementById('arch-svg');
  const tooltip = document.getElementById('arch-tooltip');
  const ttTitle = document.getElementById('arch-tooltip-title');
  const ttTags = document.getElementById('arch-tooltip-tags');
  const cx=350, cy=350, outerR=240, nodeR=38, centerR=65;
  const N = ARCH_NODES.length;

  const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
  const grad = document.createElementNS('http://www.w3.org/2000/svg','radialGradient');
  grad.setAttribute('id','centerGrad');
  grad.setAttribute('cx','50%'); grad.setAttribute('cy','50%'); grad.setAttribute('r','50%');
  const s1=document.createElementNS('http://www.w3.org/2000/svg','stop');
  s1.setAttribute('offset','0%'); s1.setAttribute('stop-color','#635bff');
  const s2=document.createElementNS('http://www.w3.org/2000/svg','stop');
  s2.setAttribute('offset','100%'); s2.setAttribute('stop-color','#4f46e5');
  grad.appendChild(s1); grad.appendChild(s2); defs.appendChild(grad);
  svg.appendChild(defs);

  const bgCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
  bgCircle.setAttribute('cx',cx); bgCircle.setAttribute('cy',cy);
  bgCircle.setAttribute('r',outerR+nodeR+10);
  bgCircle.setAttribute('fill','rgba(99,91,255,0.03)');
  bgCircle.setAttribute('stroke','rgba(99,91,255,0.08)');
  bgCircle.setAttribute('stroke-width','1');
  svg.appendChild(bgCircle);

  ARCH_NODES.forEach((node, i) => {
    const angle = (i/N)*Math.PI*2 - Math.PI/2;
    const nx = cx + outerR*Math.cos(angle);
    const ny = cy + outerR*Math.sin(angle);
    node._x = nx; node._y = ny;

    const dashLen = 6, gapLen = 5;
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',cx); line.setAttribute('y1',cy);
    line.setAttribute('x2',nx); line.setAttribute('y2',ny);
    line.setAttribute('stroke',node.color);
    line.setAttribute('stroke-width','1.5');
    line.setAttribute('stroke-opacity','0.4');
    line.setAttribute('stroke-dasharray',`${dashLen} ${gapLen}`);
    line.setAttribute('stroke-dashoffset','0');
    line.style.animation=`dashMove ${2+i*0.15}s linear infinite`;
    svg.appendChild(line);
  });

  const styleEl = document.createElement('style');
  styleEl.textContent=`@keyframes dashMove{from{stroke-dashoffset:0}to{stroke-dashoffset:-44}}`;
  document.head.appendChild(styleEl);

  const centerCircle = document.createElementNS('http://www.w3.org/2000/svg','circle');
  centerCircle.setAttribute('cx',cx); centerCircle.setAttribute('cy',cy);
  centerCircle.setAttribute('r',centerR);
  centerCircle.setAttribute('fill','url(#centerGrad)');
  centerCircle.setAttribute('filter','drop-shadow(0 4px 16px rgba(99,91,255,0.3))');
  svg.appendChild(centerCircle);

  const centerText1 = document.createElementNS('http://www.w3.org/2000/svg','text');
  centerText1.setAttribute('x',cx); centerText1.setAttribute('y',cy-8);
  centerText1.setAttribute('text-anchor','middle');
  centerText1.setAttribute('fill','white');
  centerText1.setAttribute('font-weight','700');
  centerText1.setAttribute('font-size','12');
  centerText1.setAttribute('font-family','Inter,sans-serif');
  centerText1.textContent='Salesforce';
  svg.appendChild(centerText1);

  const centerText2 = document.createElementNS('http://www.w3.org/2000/svg','text');
  centerText2.setAttribute('x',cx); centerText2.setAttribute('y',cy+8);
  centerText2.setAttribute('text-anchor','middle');
  centerText2.setAttribute('fill','rgba(255,255,255,0.8)');
  centerText2.setAttribute('font-size','9');
  centerText2.setAttribute('font-family','Inter,sans-serif');
  centerText2.textContent='Platform Core';
  svg.appendChild(centerText2);

  ARCH_NODES.forEach((node, i) => {
    const nx = node._x, ny = node._y;
    const g = document.createElementNS('http://www.w3.org/2000/svg','g');
    g.style.cursor='pointer';

    const glow = document.createElementNS('http://www.w3.org/2000/svg','circle');
    glow.setAttribute('cx',nx); glow.setAttribute('cy',ny);
    glow.setAttribute('r',nodeR+6);
    glow.setAttribute('fill',node.color);
    glow.setAttribute('opacity','0.08');
    g.appendChild(glow);

    const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
    circle.setAttribute('cx',nx); circle.setAttribute('cy',ny);
    circle.setAttribute('r',nodeR);
    circle.setAttribute('fill','white');
    circle.setAttribute('stroke',node.color);
    circle.setAttribute('stroke-width','2');
    circle.setAttribute('filter','drop-shadow(0 2px 8px rgba(0,0,0,0.08))');
    g.appendChild(circle);

    const text = document.createElementNS('http://www.w3.org/2000/svg','text');
    text.setAttribute('x',nx); text.setAttribute('y',ny+4);
    text.setAttribute('text-anchor','middle');
    text.setAttribute('fill',node.color);
    text.setAttribute('font-weight','600');
    text.setAttribute('font-size','9');
    text.setAttribute('font-family','Inter,sans-serif');
    const words = node.label.split('/');
    if(words.length>1){
      text.setAttribute('y',ny);
      words.forEach((w,wi)=>{
        const t=document.createElementNS('http://www.w3.org/2000/svg','tspan');
        t.setAttribute('x',nx);
        t.setAttribute('dy',wi===0?0:12);
        t.textContent=w;
        text.appendChild(t);
      });
    } else {
      text.textContent = node.label;
    }
    g.appendChild(text);

    g.addEventListener('mouseenter',(e)=>{
      circle.setAttribute('stroke-width','3');
      glow.setAttribute('opacity','0.15');
      ttTitle.textContent = node.label;
      ttTags.innerHTML = node.tech.map(t=>`<span class="tag-chip">${t}</span>`).join('');
      const rect = svg.getBoundingClientRect();
      const svgW = rect.width, svgH = rect.height;
      const scaleX = svgW/700, scaleY = svgH/700;
      const px = nx*scaleX, py = ny*scaleY;
      let left = px+10, top = py-20;
      if(left+210 > svgW) left = px-220;
      if(top+100 > svgH) top = py-110;
      tooltip.style.left = left+'px';
      tooltip.style.top = top+'px';
      tooltip.classList.add('visible');
    });
    g.addEventListener('mouseleave',()=>{
      circle.setAttribute('stroke-width','2');
      glow.setAttribute('opacity','0.08');
      tooltip.classList.remove('visible');
    });
    svg.appendChild(g);
  });
})();

// ===================================================
// RENDER PILLARS
// ===================================================
(function(){
  const grid = document.getElementById('pillars-grid');
  PILLARS.forEach((p,i)=>{
    const card = document.createElement('div');
    card.className=`pillar-card pillar-${p.num} reveal reveal-delay-${i+1}`;
    card.innerHTML=`
      <div class="pillar-icon-wrap">${p.icon}</div>
      <div class="pillar-title">${p.title}</div>
      <p class="pillar-desc">${p.desc}</p>
      <div class="pillar-tags">${p.tags.map(t=>`<span class="tag-chip">${t}</span>`).join('')}</div>
    `;
    grid.appendChild(card);
  });
})();

// ===================================================
// RENDER CERTIFICATIONS
// ===================================================
(function(){
  const filtersEl = document.getElementById('cert-filters');
  const gridEl = document.getElementById('certs-grid');
  const filters = ['all','architect','consultant','developer','admin'];
  const labels = {all:'All (19)',architect:'Architect (6)',consultant:'Consultant (6)',developer:'Developer (3)',admin:'Admin & AI (4)'};
  let active = 'all';

  filters.forEach(f=>{
    const btn = document.createElement('button');
    btn.className='cert-filter-btn'+(f==='all'?' active':'');
    btn.textContent=labels[f];
    btn.addEventListener('click',()=>{
      active=f;
      document.querySelectorAll('.cert-filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.cert-card').forEach(c=>{
        if(active==='all'||c.dataset.track===active){
          c.classList.remove('cert-hidden');
        } else {
          c.classList.add('cert-hidden');
        }
      });
    });
    filtersEl.appendChild(btn);
  });

  CERTIFICATIONS.forEach(c=>{
    const card = document.createElement('div');
    card.className=`cert-card cert-track-${c.track}`;
    card.dataset.track=c.track;
    card.innerHTML=`
      ${c.legendary?'<span class="cert-badge-legendary">★ Legendary</span>':''}
      <div class="cert-track-bar"></div>
      <div class="cert-track-label">${c.track.charAt(0).toUpperCase()+c.track.slice(1)}</div>
      <div class="cert-name">${c.name}</div>
    `;
    gridEl.appendChild(card);
  });
})();

// ===================================================
// RENDER SKILLS + ANIMATION
// ===================================================
(function(){
  const grid = document.getElementById('skills-grid');
  SKILLS.forEach((group,gi)=>{
    const el = document.createElement('div');
    el.className='skill-group reveal';
    el.innerHTML=`
      <div class="skill-group-title">
        <span class="skill-group-icon">${group.icon}</span>
        ${group.group}
      </div>
      ${group.items.map(s=>`
        <div class="skill-item">
          <div class="skill-meta">
            <span class="skill-name">${s.name}</span>
            <span>
              <span class="skill-pct">${s.pct}%</span>
              <span class="skill-level"> · ${s.level}</span>
            </span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-fill" data-pct="${s.pct}"></div>
          </div>
        </div>
      `).join('')}
    `;
    grid.appendChild(el);
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.querySelectorAll('.skill-bar-fill').forEach((bar,bi)=>{
          const pct = bar.dataset.pct;
          setTimeout(()=>{ bar.style.width=pct+'%'; }, bi*80);
        });
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.2});

  document.querySelectorAll('.skill-group').forEach(g=>observer.observe(g));
})();

// ===================================================
// RENDER LIFECYCLE
// ===================================================
(function(){
  const wrap = document.getElementById('lifecycle-wrap');
  LIFECYCLE.forEach((phase,i)=>{
    const item = document.createElement('div');
    item.className=`phase-item ${phase.color}`;
    item.style.transitionDelay=`${i*0.1}s`;
    item.innerHTML=`
      <div class="phase-dot-wrap">
        <div class="phase-dot"></div>
        <span class="phase-num">Phase ${phase.phase}</span>
      </div>
      <div class="phase-card">
        <div class="phase-title">${phase.title}</div>
        <div class="phase-deliverables">
          ${phase.deliverables.map(d=>`<span class="tag-chip">${d}</span>`).join('')}
        </div>
      </div>
    `;
    wrap.appendChild(item);
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
      }
    });
  },{threshold:0.1});
  document.querySelectorAll('.phase-item').forEach(p=>observer.observe(p));
})();

// ===================================================
// RENDER PROTOCOLS
// ===================================================
(function(){
  const grid = document.getElementById('protocols-grid');
  PROTOCOLS.forEach((p,i)=>{
    const card = document.createElement('div');
    card.className='protocol-card reveal reveal-delay-'+(i%4+1);
    card.innerHTML=`
      <div class="protocol-icon">${p.icon}</div>
      <div class="protocol-title">${p.title}</div>
      <ul class="protocol-items">
        ${p.items.map(item=>`<li>${item}</li>`).join('')}
      </ul>
    `;
    grid.appendChild(card);
  });
})();

// ===================================================
// RENDER INDUSTRIES + VALUE PROPS
// ===================================================
(function(){
  const ig = document.getElementById('industries-grid');
  INDUSTRIES.forEach(ind=>{
    const card=document.createElement('div');
    card.className='industry-card reveal';
    card.innerHTML=`<div class="industry-icon">${ind.icon}</div><div class="industry-name">${ind.name}</div>`;
    ig.appendChild(card);
  });

  const vg = document.getElementById('value-props-grid');
  VALUE_PROPS.forEach((vp,i)=>{
    const card=document.createElement('div');
    card.className='value-prop-card reveal reveal-delay-'+(i%3+1);
    card.innerHTML=`
      <span class="value-prop-num">${vp.num}</span>
      <div>
        <div class="value-prop-title">${vp.title}</div>
        <div class="value-prop-desc">${vp.desc}</div>
      </div>
    `;
    vg.appendChild(card);
  });
})();

// ===================================================
// RENDER EXPERIENCE
// ===================================================
(function(){
  const wrap = document.getElementById('experience-wrap');
  EXPERIENCE.forEach(company=>{
    const el = document.createElement('div');
    el.className='exp-company reveal';
    el.innerHTML=`
      <div class="exp-company-header">
        <div class="exp-company-dot ${company.dotClass}"></div>
        <div>
          <div class="exp-company-name">${company.company}</div>
          <div class="exp-company-period">${company.period}</div>
        </div>
      </div>
      <div class="exp-projects">
        ${company.projects.map(proj=>`
          <div class="exp-project-card ${proj.cls}">
            <div class="exp-project-header">
              <div class="exp-project-title">Project ${proj.id} — ${proj.title}</div>
              <div class="exp-project-period">${proj.period}</div>
            </div>
            <ul class="exp-bullets">
              ${proj.bullets.map(b=>`<li>${b}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `;
    wrap.appendChild(el);
  });
})();

// ===================================================
// KPI COUNTERS
// ===================================================
(function(){
  const kpiNums = document.querySelectorAll('.kpi-num[data-target]');
  function easeOutQuart(t){return 1-(--t)*t*t*t;}

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix||'';
      const duration = 1800;
      const start = performance.now();
      function update(now){
        const elapsed = now-start;
        const progress = Math.min(elapsed/duration,1);
        const val = Math.floor(easeOutQuart(progress)*target);
        el.textContent = val+suffix;
        if(progress<1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  },{threshold:0.5});
  kpiNums.forEach(el=>observer.observe(el));
})();

// ===================================================
// SCROLL REVEAL
// ===================================================
(function(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
})();

// ===================================================
// NAV ACTIVE STATE
// ===================================================
(function(){
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('#nav-links a');
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.id;
        links.forEach(a=>{
          a.classList.remove('active');
          if(a.getAttribute('href')==='#'+id) a.classList.add('active');
        });
      }
    });
  },{rootMargin:'-30% 0px -60% 0px'});
  sections.forEach(s=>observer.observe(s));
})();

// ===================================================
// TERMINAL
// ===================================================
function toggleTerminal(){
  const w = document.getElementById('terminal-window');
  const isOpen = w.classList.toggle('open');
  if(isOpen){
    document.getElementById('term-input').focus();
    if(document.getElementById('term-body').children.length===0){
      appendTermOutput('system','<span class="hl">Bader Elkhal</span> portfolio terminal v4.0\nType <span class="acc">help</span> to see available commands.\n');
    }
  }
}

function toggleMobileNav(){
  const links = document.getElementById('nav-links');
  links.style.display = links.style.display==='flex'?'none':'flex';
}

function appendTermOutput(type, html){
  const body = document.getElementById('term-body');
  const div = document.createElement('div');
  div.className='term-output';
  if(type==='command'){
    div.innerHTML=`<span class="term-prompt">bader@portfolio:~$</span> <span class="term-cmd">${html}</span>`;
  } else {
    div.innerHTML=`<div class="term-result">${html}</div>`;
  }
  body.appendChild(div);
  body.scrollTop=body.scrollHeight;
}

const TERM_COMMANDS = {
  help(){
    return `Available commands:\n  <span class="hl">whoami</span>          — Display architect profile\n  <span class="hl">certifications</span>  — List all 19 certifications\n  <span class="hl">skills</span>          — Show skill matrix summary\n  <span class="hl">architecture</span>   — Integration topology overview\n  <span class="hl">industries</span>      — Covered industry verticals\n  <span class="hl">contact</span>         — Contact information\n  <span class="hl">hire</span>            — Engagement summary\n  <span class="hl">clear</span>           — Clear terminal`;
  },
  whoami(){
    return `<span class="hl">Bader Eddine Elkhal</span>\n<span class="acc">Role:</span>     Senior Salesforce Technical Consultant\n<span class="acc">Status:</span>   Enterprise Architect Candidate\n<span class="acc">Years:</span>    5+ enterprise delivery\n<span class="acc">Certs:</span>    19 active credentials · 4 tracks\n<span class="acc">Mindset:</span>  Platform Engineering First\n\n<span class="term-result">"I architect Salesforce platforms as long-term engineering\nassets — not delivery vehicles for isolated features."</span>`;
  },
  certifications(){
    const arch = CERTIFICATIONS.filter(c=>c.track==='architect').map(c=>`  <span class="acc">★</span> ${c.name}${c.legendary?' <span class="warn">[LEGENDARY]</span>':''}`).join('\n');
    const cons = CERTIFICATIONS.filter(c=>c.track==='consultant').map(c=>`  · ${c.name}`).join('\n');
    const dev = CERTIFICATIONS.filter(c=>c.track==='developer').map(c=>`  · ${c.name}`).join('\n');
    const adm = CERTIFICATIONS.filter(c=>c.track==='admin').map(c=>`  · ${c.name}`).join('\n');
    return `<span class="hl">ARCHITECT TRACK (6)</span>\n${arch}\n\n<span class="hl">CONSULTANT TRACK (6)</span>\n${cons}\n\n<span class="hl">DEVELOPER TRACK (3)</span>\n${dev}\n\n<span class="hl">ADMIN & AI TRACK (4)</span>\n${adm}`;
  },
  skills(){
    const lines = SKILLS.map(g=>`<span class="hl">${g.group}</span>\n${g.items.map(s=>`  ${s.name.padEnd(25,' ')} <span class="acc">${s.pct}%</span> ${s.level}`).join('\n')}`).join('\n\n');
    return lines;
  },
  architecture(){
    return `<span class="hl">Integration Topology</span>\n\nSalesforce Platform Core ← connected to →\n${ARCH_NODES.map(n=>`  · ${n.label.padEnd(18,' ')} [${n.tech.slice(0,2).join(', ')}]`).join('\n')}\n\n<span class="acc">Protocols:</span> REST · SOAP · OAuth2 · JWT · SAML · Webhooks · CDC · Platform Events`;
  },
  industries(){
    return `<span class="hl">Industry Coverage</span>\n${INDUSTRIES.map(i=>`  ${i.icon}  ${i.name}`).join('\n')}\n\nDelivered enterprise Salesforce programs across all 5 verticals.`;
  },
  contact(){
    return `<span class="hl">Contact Information</span>\n\n<span class="acc">Email:</span>    bader.elkhal@email.com\n<span class="acc">LinkedIn:</span> linkedin.com/in/bader-eddine-elkhal-salesforce-consultant\n<span class="acc">Status:</span>   <span class="warn">Available for Enterprise Projects</span>`;
  },
  hire(){
    return `<span class="hl">Engagement Summary</span>\n\nBader is available for:\n  · Enterprise architecture programs\n  · Multi-cloud Salesforce implementations\n  · Integration design & delivery\n  · Technical leadership & mentoring\n  · Architectural governance & review\n\n<span class="acc">Availability:</span> Immediate\n<span class="acc">Locations:</span>   Remote + On-site (global)\n<span class="acc">Contact:</span>     bader.elkhal@email.com`;
  },
  clear(){
    document.getElementById('term-body').innerHTML='';
    return null;
  }
};

document.getElementById('term-input').addEventListener('keydown',function(e){
  if(e.key==='Enter'){
    const cmd = this.value.trim().toLowerCase();
    if(!cmd) return;
    appendTermOutput('command', this.value.trim());
    this.value='';
    if(TERM_COMMANDS[cmd]){
      const result = TERM_COMMANDS[cmd]();
      if(result!==null) appendTermOutput('system',result);
    } else {
      appendTermOutput('system',`<span style="color:#e11d48">Command not found: ${cmd}</span>\nType <span class="acc">help</span> to see available commands.`);
    }
  }
});
