export type Lang = 'zh' | 'en';

export interface SiteContent {
  nav: {
    home: string;
    services: string;
    canadaHR: string;
    usPayroll: string;
    adminOutsource: string;
    bookkeeping: string;
    businessMarketing: string;
    about: string;
    contact: string;
    bookConsultation: string;
  };
  footer: {
    tagline: string;
    partOf: string;
    disclaimer: string;
    disclaimerText: string;
    quickLinks: string;
    services: string;
    contact: string;
    phone: string;
    email: string;
    wechat: string;
    copyright: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    btnConsultation: string;
    btnServices: string;
    trustTags: string[];
    painTitle: string;
    painBody: string;
    painPoints: string[];
    servicesTitle: string;
    services: {
      title: string;
      desc: string;
      link: string;
      href: string;
    }[];
    whyTitle: string;
    whyBody: string;
    whyPoints: string[];
    industriesTitle: string;
    industriesBody: string;
    industries: string[];
    packagesTitle: string;
    packages: {
      name: string;
      desc: string;
    }[];
    packagesBtn: string;
    perfectTitle: string;
    perfectBody: string;
    perfectCompanies: {
      name: string;
      desc: string;
    }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaBtn1: string;
    ctaBtn2: string;
  };
  servicesPage: {
    title: string;
    body: string;
    services: {
      title: string;
      desc: string;
      href: string;
    }[];
    cta: string;
  };
  canadaHR: {
    title: string;
    subtitle: string;
    body: string;
    items: string[];
    suitable: string[];
    cta: string;
  };
  usPayroll: {
    title: string;
    subtitle: string;
    body: string;
    items: string[];
    suitable: string[];
    cta: string;
  };
  adminOutsource: {
    title: string;
    subtitle: string;
    body: string;
    items: string[];
    suitable: string[];
    cta: string;
  };
  bookkeeping: {
    title: string;
    subtitle: string;
    body: string;
    items: string[];
    suitable: string[];
    cta: string;
  };
  businessMarketing: {
    title: string;
    subtitle: string;
    body: string;
    items: string[];
    suitable: string[];
    cta: string;
  };
  about: {
    title: string;
    body: string;
    mission: string;
    perfectCompanies: {
      name: string;
      desc: string;
    }[];
  };
  contact: {
    title: string;
    body: string;
    name: string;
    company: string;
    city: string;
    email: string;
    phone: string;
    language: string;
    employees: string;
    serviceNeeded: string;
    message: string;
    submit: string;
    note: string;
    serviceOptions: string[];
    languageOptions: string[];
    employeeOptions: string[];
  };
  common: {
    learnMore: string;
    getStarted: string;
    contactUs: string;
  };
}

const zh: SiteContent = {
  nav: {
    home: '首页',
    services: '服务',
    canadaHR: '加拿大HR与Payroll',
    usPayroll: '美国Payroll Tax',
    adminOutsource: '行政外包',
    bookkeeping: '财务支持',
    businessMarketing: '商业与市场支持',
    about: '关于我们',
    contact: '预约咨询',
    bookConsultation: '预约咨询',
  },
  footer: {
    tagline: '为加拿大与美国小微企业提供 payroll、HR、行政、财务协调与雇主后台支持。',
    partOf: 'Part of the Perfect Solutions Group of Companies.',
    disclaimer: '免责声明',
    disclaimerText: '本网站信息仅供一般商业支持参考，不构成法律、税务或会计专业意见。具体服务将根据客户需求，由相应的 Perfect 系列公司或合资格专业合作方提供。',
    quickLinks: '快速链接',
    services: '服务项目',
    contact: '联系我们',
    phone: '电话',
    email: '邮箱',
    wechat: '微信',
    copyright: '版权所有',
  },
  home: {
    heroTitle: '让华人老板更安心的 Payroll、HR 与行政外包服务',
    heroSubtitle: 'Perfect Employer Solutions 为加拿大与美国华人小微企业提供普通话沟通的 payroll、HR、行政、财务协调与雇主后台支持服务。我们不只是提供软件，而是有人帮你把问题讲清楚、做明白、跟到底。',
    btnConsultation: '预约中文咨询',
    btnServices: '查看服务项目',
    trustTags: ['普通话沟通', '服务小微企业 14+ 年', '加拿大与美国雇主支持', 'Payroll、HR、行政与财务协调'],
    painTitle: '软件可以算工资，但老板需要有人把问题讲清楚。',
    painBody: '很多华人小微企业老板并不是不愿意使用 QuickBooks、ADP 或其他 payroll 工具，而是在实际经营中，经常遇到软件解决不了的沟通和判断问题。员工资料怎么整理？什么时候要开 payroll？ROE、T4、remittance、vacation pay、stat holiday、termination pay 应该怎么理解？加拿大公司和美国 LLC 的 payroll tax 又该怎么协调？我们理解这些问题背后的压力。你需要的不只是一个系统，而是一个能用普通话沟通、理解你业务情况、并愿意持续跟进的雇主支持团队。',
    painPoints: [
      '不想和英文客服反复解释同一个问题',
      '看不懂 payroll 和 HR 术语',
      '不清楚员工入职、离职和工资流程',
      '担心 CRA、IRS 或劳工规则处理不当',
      '员工资料、表格和工资记录混乱',
      '老板没有时间处理每天的行政细节',
    ],
    servicesTitle: '我们帮助你处理雇主后台的关键事务',
    services: [
      { title: '加拿大 HR & Payroll', desc: '为加拿大雇主提供 payroll 设置、工资流程、T4、ROE、员工资料、入职离职和基础 HR 文件支持。', link: '了解详情', href: '/services/canada-hr-payroll' },
      { title: '美国 Payroll Tax', desc: '通过 Perfect Payroll Tax LLC，为美国 LLC、美国雇主和跨境企业提供 payroll tax 相关支持。', link: '了解详情', href: '/services/us-payroll-tax' },
      { title: '行政外包', desc: '帮助小微企业整理员工资料、供应商文件、日常表格、业务流程和后台行政事项。', link: '了解详情', href: '/services/admin-outsourcing' },
      { title: '财务与 Bookkeeping 协调', desc: '与 Perfect Financial Solutions Ltd 配合，协助企业整理财务资料、记账文件和月度财务管理信息。', link: '了解详情', href: '/services/bookkeeping' },
      { title: '管理咨询与 Marketing 支持', desc: '与 Perfect Management Solutions 配合，为企业提供财务咨询、运营流程和华人市场 marketing 支持。', link: '了解详情', href: '/services/business-marketing' },
    ],
    whyTitle: '我们懂软件，也更懂华人老板真正需要的沟通。',
    whyBody: '大型 payroll 平台适合标准化流程，但很多小微企业真正需要的是有人听懂问题、解释规则、灵活处理细节。Perfect Employer Solutions 的价值在于，我们不仅理解加拿大和美国雇主服务流程，也理解华人老板在实际经营中的沟通习惯和决策方式。',
    whyPoints: [
      '普通话沟通，减少误解和压力',
      '14+ 年服务小微企业经验',
      '理解华人社区和本地商业环境',
      '不只是软件操作，而是实际问题跟进',
      '加拿大与美国 payroll 相关支持',
      '可连接财务、HR、行政和 marketing 服务',
    ],
    industriesTitle: '适合需要可靠后台支持的小微企业',
    industriesBody: '无论你是刚开始创业，还是已经有员工和固定业务，只要你需要 payroll、HR、行政或财务资料上的支持，我们都可以先从一次咨询开始，帮你判断最适合的服务方式。',
    industries: ['餐饮与食品服务', '零售与连锁门店', '美容、美甲与健康服务', '建筑、装修与维修行业', '地产与专业服务', '诊所、护理与教育培训', '电商、贸易与物流', '加拿大与美国跨境业务'],
    packagesTitle: '按照企业阶段选择合适的支持方式',
    packages: [
      { name: 'Payroll Starter', desc: '适合 1-5 名员工的小企业，帮助你完成基础 payroll 设置、员工资料整理和工资流程支持。' },
      { name: 'Employer Care', desc: '适合已有稳定员工的小微企业，提供 payroll、T4、ROE、入职离职 checklist 和员工文件整理支持。' },
      { name: 'HR + Payroll Plus', desc: '适合员工流动较多、需要 HR 文件和 payroll 结合管理的企业。' },
      { name: 'Cross-Border Payroll Support', desc: '适合加拿大和美国都有业务、美国 LLC 或美国 payroll tax 需求的企业。' },
      { name: 'Back Office Partner', desc: '适合希望长期外包后台事务的企业，涵盖 payroll、HR、行政、财务协调和业务流程支持。' },
    ],
    packagesBtn: '了解适合我的方案',
    perfectTitle: '一个入口，多项专业支持。',
    perfectBody: 'Perfect Employer Solutions 与 Perfect 系列公司协同服务小微企业，让老板在 payroll、HR、财务、行政、咨询、marketing 和美国 payroll tax 方面获得更完整的支持。',
    perfectCompanies: [
      { name: 'Perfect Financial Solutions Ltd', desc: '专注财务、记账、税务资料和企业财务支持。' },
      { name: 'Perfect HR & Payroll Solutions', desc: '专注加拿大 HR 与 payroll 服务。' },
      { name: 'Perfect Management Solutions', desc: '专注财务咨询、管理咨询和 marketing 支持。' },
      { name: 'Perfect Payroll Tax LLC', desc: '专注美国市场 payroll tax 服务。' },
    ],
    faqTitle: '常见问题',
    faqs: [
      { q: '你们是 payroll 软件公司吗？', a: '不是。我们不是单纯的软件平台。我们可以协助客户使用相关工具和流程，但我们的核心价值是普通话沟通、实际问题解释、流程整理和持续跟进。' },
      { q: '我已经有会计，还需要你们吗？', a: '很多客户已经有会计，但会计不一定处理员工入职、离职、HR 文件、payroll 沟通和后台行政流程。我们可以与会计配合，补上企业雇主后台支持这一块。' },
      { q: '我只有 1-2 个员工，也适合吗？', a: '适合。越早把 payroll 和员工资料流程设置清楚，未来越不容易出问题。' },
      { q: '你们可以服务美国公司吗？', a: '可以。美国 payroll tax 相关服务由 Perfect Payroll Tax LLC 提供或协调。' },
      { q: '可以用普通话沟通吗？', a: '可以。普通话沟通是我们的核心优势之一。' },
    ],
    ctaTitle: '先聊 15 分钟，把你的雇主问题讲清楚。',
    ctaBody: '如果你不确定自己需要 payroll、HR、行政、财务还是跨境 payroll tax 支持，可以先预约一次咨询。我们会根据你的员工人数、公司所在地、业务类型和目前遇到的问题，帮你判断下一步。',
    ctaBtn1: '预约咨询',
    ctaBtn2: '联系我们',
  },
  servicesPage: {
    title: '为小微企业老板提供完整的雇主后台支持',
    body: '经营企业时，老板每天面对的不只是销售和客户，还有员工、工资、文件、政府要求、供应商资料、财务记录和各种行政细节。Perfect Employer Solutions 帮助你把这些后台事务整理清楚，让业务运转更稳定。我们的服务不是单一模块，而是围绕小微企业雇主的真实需求设计。你可以从 payroll 开始，也可以从行政整理、HR 文件、美国 payroll tax 或财务协调开始。',
    services: [
      { title: 'Canada HR & Payroll', desc: '适合需要加拿大 payroll、员工资料、T4、ROE 和基础 HR 支持的企业。', href: '/services/canada-hr-payroll' },
      { title: 'U.S. Payroll Tax', desc: '适合美国 LLC、美国雇主和加拿大/美国跨境企业。', href: '/services/us-payroll-tax' },
      { title: 'Administrative Outsourcing', desc: '适合没有专职行政人员，但需要文件、表格和流程整理的小微企业。', href: '/services/admin-outsourcing' },
      { title: 'Bookkeeping & Financial Support', desc: '适合需要财务资料整理、记账协调和月度财务信息支持的企业。', href: '/services/bookkeeping' },
      { title: 'Business & Marketing Support', desc: '适合需要经营分析、流程优化或华人市场 marketing 支持的企业。', href: '/services/business-marketing' },
    ],
    cta: '不知道应该选哪一项？先预约一次咨询，我们帮你判断。',
  },
  canadaHR: {
    title: '加拿大 HR 与 Payroll 支持',
    subtitle: '为华人小微企业提供普通话沟通的加拿大 payroll、员工资料和基础 HR 流程支持。',
    body: '加拿大雇主在管理员工时，需要处理工资、假期、工时、入职、离职、T4、ROE、remittance 和员工文件等多项事务。对于小微企业老板来说，这些事情通常没有专人负责，但一旦处理不清楚，就可能带来时间、沟通和合规压力。Perfect Employer Solutions 帮助你把加拿大 payroll 和基础 HR 流程整理清楚。我们用普通话解释规则，用实用流程帮助你管理员工资料和雇主责任。',
    items: ['Payroll 设置与流程协调', '员工信息收集整理', '工资周期支持', 'T4 支持', 'ROE 支持', 'Payroll remittance 提醒', 'Vacation pay 与法定假日支持', '员工入职 checklist', '离职 checklist', '基础 HR 文件模板'],
    suitable: ['第一次雇员工的企业', '已经有员工但 payroll 流程混乱的企业', '员工流动较多的餐饮、零售、美容、服务业', '需要普通话解释 payroll 和 HR 问题的老板'],
    cta: '预约加拿大 payroll 咨询',
  },
  usPayroll: {
    title: '美国 Payroll Tax 支持',
    subtitle: '通过 Perfect Payroll Tax LLC，为美国 LLC、美国雇主和加拿大/美国跨境企业提供 payroll tax 相关支持。',
    body: '如果你有美国 LLC、美国员工、美国 contractor 或正在拓展美国市场，payroll tax 可能会变得复杂。不同州、不同雇佣安排和不同申报要求，都可能影响企业的责任。Perfect Payroll Tax LLC 专注美国市场 payroll 业务，帮助企业理解 payroll tax 流程、整理所需信息，并协调相关申报和雇主支持事项。',
    items: ['美国 payroll tax 设置协调', '联邦与州 payroll tax 支持', '雇主注册指导', '申报日历协调', 'Payroll tax 文件整理', '加拿大-美国雇主支持协调'],
    suitable: ['美国 LLC', '有美国员工的企业', '准备进入美国市场的加拿大企业', '同时有加拿大和美国业务的老板', '需要普通话解释美国 payroll tax 的客户'],
    cta: '咨询美国 Payroll Tax 支持',
  },
  adminOutsource: {
    title: '小微企业行政外包',
    subtitle: '把员工资料、表格、文件和日常后台事务整理起来，让老板少操心。',
    body: '很多小微企业不是没有业务，而是后台事务长期没人系统管理。员工文件放在不同地方，表格版本不统一，供应商资料找不到，老板每天被琐碎事情打断。Perfect Employer Solutions 可以作为你的外包行政支持团队，帮助你建立简单、清楚、可持续的后台流程。',
    items: ['员工资料整理', '供应商文件整理', '表格与模板', '归档与追踪系统', '月度行政支持', '业务流程整理', '沟通与文件跟进'],
    suitable: ['没有专职行政人员的小企业', '老板亲自处理所有文件的企业', '准备扩张或招聘员工的企业', '想把业务流程标准化的企业'],
    cta: '咨询行政外包方案',
  },
  bookkeeping: {
    title: '财务与 Bookkeeping 支持',
    subtitle: '协助企业整理财务资料、记账文件和月度财务管理信息。',
    body: '小微企业日常经营中，发票、收据、银行流水和财务文件积累很快，但老板往往没有时间系统整理。Perfect Employer Solutions 与 Perfect Financial Solutions Ltd 配合，帮助你建立清晰的财务资料管理体系，让月度、季度和年度财务工作更有条理。',
    items: ['记账协调', '财务文件整理', '月度报表协调', '销售税文件支持', '与会计/税务团队对接'],
    suitable: ['没有专职财务人员的小企业', '需要月度财务资料整理的企业', '希望财务流程更规范的企业', '需要与会计配合的老板'],
    cta: '咨询财务支持方案',
  },
  businessMarketing: {
    title: '商业与 Marketing 支持',
    subtitle: '为企业提供财务咨询、运营流程和华人市场 marketing 支持。',
    body: '很多小微企业发展到一定阶段，需要的不仅是日常事务处理，还有经营方向、流程优化和市场拓展上的专业建议。Perfect Employer Solutions 与 Perfect Management Solutions 配合，帮助企业在华人市场和本地市场更稳健地发展。',
    items: ['业务流程评估', '财务管理咨询', '小微企业 marketing 支持', '华人社区市场支持', '本地业务增长规划'],
    suitable: ['希望优化运营流程的企业', '需要财务和经营分析的企业', '想拓展华人市场的企业', '希望建立长期增长策略的企业'],
    cta: '咨询商业支持方案',
  },
  about: {
    title: '关于 Perfect Employer Solutions',
    body: 'Perfect Employer Solutions Ltd 成立的初衷，是为小微企业老板提供更贴近实际经营需求的雇主后台支持。我们发现，很多华人企业并不是不愿意使用大型 payroll 或财务软件，而是缺少能用普通话解释规则、理解业务场景、并灵活跟进问题的服务团队。过去 14 年，我们围绕华人小微企业的真实需求，逐步形成了 payroll、HR、行政、财务协调、管理咨询、marketing 和美国 payroll tax 支持的服务体系。我们相信，小企业老板最需要的不是更多复杂系统，而是清楚的流程、可靠的沟通和可以长期合作的专业支持。',
    mission: '帮助北美华人小微企业把雇主后台事务处理得更清楚、更专业、更安心。',
    perfectCompanies: [
      { name: 'Perfect Financial Solutions Ltd', desc: '专注财务、记账、税务资料和企业财务支持。' },
      { name: 'Perfect HR & Payroll Solutions', desc: '专注加拿大 HR 与 payroll 服务。' },
      { name: 'Perfect Management Solutions', desc: '专注财务咨询、管理咨询和 marketing 支持。' },
      { name: 'Perfect Payroll Tax LLC', desc: '专注美国市场 payroll tax 服务。' },
    ],
  },
  contact: {
    title: '预约咨询',
    body: '如果你不确定自己需要 payroll、HR、行政、财务协调还是美国 payroll tax 支持，可以先告诉我们你的基本情况。我们会根据你的公司所在地、员工人数、业务类型和目前遇到的问题，帮你判断下一步。',
    name: '姓名',
    company: '公司名称',
    city: '所在城市/国家',
    email: '邮箱',
    phone: '电话',
    language: '首选语言',
    employees: '员工人数',
    serviceNeeded: '需要的服务',
    message: '请简单描述你的问题',
    submit: '提交咨询',
    note: '提交表单后，我们会尽快与你联系。若事项紧急，也欢迎通过电话或微信联系我们。',
    serviceOptions: ['加拿大 Payroll', '美国 Payroll Tax', 'HR', '行政外包', '财务支持', 'Marketing', '不确定'],
    languageOptions: ['中文', 'English'],
    employeeOptions: ['0（尚未雇员工）', '1-5 人', '6-15 人', '16-50 人', '50+ 人'],
  },
  common: {
    learnMore: '了解更多',
    getStarted: '立即开始',
    contactUs: '联系我们',
  },
};

const en: SiteContent = {
  nav: {
    home: 'Home',
    services: 'Services',
    canadaHR: 'Canada HR & Payroll',
    usPayroll: 'U.S. Payroll Tax',
    adminOutsource: 'Admin Outsourcing',
    bookkeeping: 'Bookkeeping',
    businessMarketing: 'Business & Marketing',
    about: 'About',
    contact: 'Contact',
    bookConsultation: 'Book Consultation',
  },
  footer: {
    tagline: 'Payroll, HR, administrative, financial coordination and employer back-office support for small businesses in Canada and the U.S.',
    partOf: 'Part of the Perfect Solutions Group of Companies.',
    disclaimer: 'Disclaimer',
    disclaimerText: 'Information on this website is for general business support purposes only and does not constitute legal, tax, or accounting advice. Services may be provided by the appropriate Perfect company or qualified professional partner depending on the client\'s needs.',
    quickLinks: 'Quick Links',
    services: 'Services',
    contact: 'Contact',
    phone: 'Phone',
    email: 'Email',
    wechat: 'WeChat',
    copyright: 'All Rights Reserved',
  },
  home: {
    heroTitle: 'Payroll, HR and back-office support for Chinese-speaking businesses in North America',
    heroSubtitle: 'Perfect Employer Solutions helps small businesses in Canada and the U.S. manage payroll, HR administration, employee documents, bookkeeping coordination, and employer support with Mandarin-speaking communication and practical follow-through.',
    btnConsultation: 'Book a Consultation',
    btnServices: 'Explore Services',
    trustTags: ['Mandarin-speaking support', '14+ years supporting small businesses', 'Canada and U.S. employer services', 'Payroll, HR, admin and financial coordination'],
    painTitle: 'Payroll software can calculate wages. Business owners still need people who can explain what matters.',
    painBody: 'Many Chinese-speaking small business owners are willing to use tools like QuickBooks, ADP or other payroll platforms. The challenge is not always the software. The challenge is communication, judgment, and follow-through. When should payroll be set up? How should employee records be organized? What do ROE, T4, payroll remittance, vacation pay, statutory holiday pay and termination pay mean in practice? What happens when a Canadian business also has a U.S. LLC or U.S. payroll tax questions? We help business owners understand the process, organize the details, and move forward with more confidence.',
    painPoints: [
      'You do not want to explain complex questions repeatedly to an English-only support line',
      'Payroll and HR terms are confusing',
      'Employee onboarding and termination processes are unclear',
      'Employer compliance feels stressful',
      'Employee records and payroll documents are disorganized',
      'The owner has no time to manage every administrative detail',
    ],
    servicesTitle: 'Employer support for the back-office work that keeps your business running',
    services: [
      { title: 'Canada HR & Payroll', desc: 'Payroll setup, payroll coordination, T4, ROE, employee records, onboarding, termination checklists and basic HR document support for Canadian employers.', link: 'Learn More', href: '/services/canada-hr-payroll' },
      { title: 'U.S. Payroll Tax', desc: 'Payroll tax support for U.S. LLCs, U.S. employers and cross-border businesses through Perfect Payroll Tax LLC.', link: 'Learn More', href: '/services/us-payroll-tax' },
      { title: 'Administrative Outsourcing', desc: 'Employee records, vendor documents, forms, filing systems, business workflows and day-to-day administrative support.', link: 'Learn More', href: '/services/admin-outsourcing' },
      { title: 'Bookkeeping & Financial Coordination', desc: 'Financial document organization, bookkeeping coordination and monthly business information support in collaboration with Perfect Financial Solutions Ltd.', link: 'Learn More', href: '/services/bookkeeping' },
      { title: 'Business & Marketing Support', desc: 'Financial consulting, business process review and Chinese community marketing support in collaboration with Perfect Management Solutions.', link: 'Learn More', href: '/services/business-marketing' },
    ],
    whyTitle: 'We understand payroll systems. More importantly, we understand how Chinese-speaking business owners need to communicate.',
    whyBody: 'Large payroll platforms are built for standardized processes. Many small businesses need more than a platform. They need someone who can listen, explain, organize the details and follow through. Perfect Employer Solutions combines practical employer support with Mandarin-speaking communication and experience serving small businesses in Chinese-speaking communities.',
    whyPoints: [
      'Mandarin-speaking support',
      '14+ years serving small businesses',
      'Understanding of Chinese-speaking business communities',
      'Practical follow-through beyond software',
      'Canada and U.S. payroll-related support',
      'Connected support across payroll, HR, admin, finance and marketing',
    ],
    industriesTitle: 'Built for small businesses that need reliable back-office support',
    industriesBody: 'Whether you are hiring your first employee or already managing a growing team, we can help you understand what support you need and how to organize your employer responsibilities.',
    industries: ['Restaurants and food service', 'Retail and franchise businesses', 'Beauty, wellness and personal services', 'Construction, trades and repair businesses', 'Real estate and professional services', 'Clinics, care services and education', 'E-commerce, import/export and logistics', 'Canada-U.S. cross-border businesses'],
    packagesTitle: 'Support options for different stages of business',
    packages: [
      { name: 'Payroll Starter', desc: 'For businesses with 1-5 employees that need basic payroll setup, employee records and payroll process support.' },
      { name: 'Employer Care', desc: 'For small businesses with ongoing employees that need payroll, T4, ROE, onboarding, termination checklist and employee document support.' },
      { name: 'HR + Payroll Plus', desc: 'For businesses with frequent employee changes or a stronger need to connect HR documents with payroll operations.' },
      { name: 'Cross-Border Payroll Support', desc: 'For Canadian and U.S. businesses, U.S. LLCs, or companies with U.S. payroll tax questions.' },
      { name: 'Back Office Partner', desc: 'For business owners who want ongoing support across payroll, HR, administration, financial coordination and business workflows.' },
    ],
    packagesBtn: 'Find the Right Support',
    perfectTitle: 'One point of contact. Multiple specialized services.',
    perfectBody: 'Perfect Employer Solutions works with related Perfect companies to support small business owners across payroll, HR, finance, administration, consulting, marketing and U.S. payroll tax needs.',
    perfectCompanies: [
      { name: 'Perfect Financial Solutions Ltd', desc: 'Financial, bookkeeping, tax document and business finance support.' },
      { name: 'Perfect HR & Payroll Solutions', desc: 'Canadian HR and payroll services.' },
      { name: 'Perfect Management Solutions', desc: 'Financial consulting, management consulting and marketing support.' },
      { name: 'Perfect Payroll Tax LLC', desc: 'U.S. payroll tax services.' },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'Are you a payroll software company?', a: 'No. We are not just a software platform. We may help clients work with tools and processes, but our core value is communication, explanation, organization and follow-through.' },
      { q: 'I already have an accountant. Do I still need your service?', a: 'Many clients already have accountants. However, accountants may not manage employee onboarding, termination, HR documents, payroll communication or administrative workflows. We can work alongside your accountant to support the employer side of your business.' },
      { q: 'I only have one or two employees. Is this service suitable for me?', a: 'Yes. Setting up payroll and employee records properly from the beginning helps avoid confusion and risk later.' },
      { q: 'Do you support U.S. businesses?', a: 'Yes. U.S. payroll tax-related services are provided or coordinated through Perfect Payroll Tax LLC.' },
      { q: 'Can you communicate in Mandarin?', a: 'Yes. Mandarin-speaking support is one of our core strengths.' },
    ],
    ctaTitle: 'Start with a 15-minute conversation.',
    ctaBody: 'If you are not sure whether you need payroll, HR, administrative, financial or cross-border payroll tax support, book a consultation. We will review your business location, number of employees, company structure and current challenges, then recommend the next step.',
    ctaBtn1: 'Book a Consultation',
    ctaBtn2: 'Contact Us',
  },
  servicesPage: {
    title: 'Back-office employer support for small business owners',
    body: 'Running a business means managing more than sales and customers. Employers also need to handle payroll, employee records, government requirements, vendor documents, financial information and daily administrative details. Perfect Employer Solutions helps small business owners organize these responsibilities so the business can run with more clarity and confidence. Our services are designed around real employer needs. You may start with payroll, HR documents, administrative organization, U.S. payroll tax support or financial coordination.',
    services: [
      { title: 'Canada HR & Payroll', desc: 'For employers that need Canadian payroll, employee records, T4, ROE and basic HR support.', href: '/services/canada-hr-payroll' },
      { title: 'U.S. Payroll Tax', desc: 'For U.S. LLCs, U.S. employers and Canada-U.S. cross-border businesses.', href: '/services/us-payroll-tax' },
      { title: 'Administrative Outsourcing', desc: 'For small businesses without a dedicated administrative team.', href: '/services/admin-outsourcing' },
      { title: 'Bookkeeping & Financial Support', desc: 'For businesses that need financial document organization, bookkeeping coordination and monthly information support.', href: '/services/bookkeeping' },
      { title: 'Business & Marketing Support', desc: 'For businesses that need process review, financial consulting or Chinese community marketing support.', href: '/services/business-marketing' },
    ],
    cta: 'Not sure which service fits your business? Start with a consultation.',
  },
  canadaHR: {
    title: 'Canada HR & Payroll Support',
    subtitle: 'Mandarin-speaking payroll, employee record and basic HR process support for small businesses in Canada.',
    body: 'Canadian employers need to manage wages, employee records, vacation pay, statutory holidays, onboarding, termination, T4, ROE and payroll remittance responsibilities. For many small business owners, these tasks are important but difficult to manage without dedicated support. Perfect Employer Solutions helps organize your Canadian payroll and basic HR processes with clear communication and practical follow-through.',
    items: ['Payroll setup and process coordination', 'Employee information collection', 'Payroll cycle support', 'T4 support', 'ROE support', 'Payroll remittance reminders', 'Vacation pay and statutory holiday support', 'Employee onboarding checklists', 'Termination checklists', 'Basic HR document templates'],
    suitable: ['Businesses hiring employees for the first time', 'Employers with disorganized payroll processes', 'Restaurants, retail, beauty and service businesses with frequent staff changes', 'Owners who need Mandarin explanations for payroll and HR questions'],
    cta: 'Book a Canada Payroll Consultation',
  },
  usPayroll: {
    title: 'U.S. Payroll Tax Support',
    subtitle: 'Payroll tax support for U.S. LLCs, U.S. employers and Canada-U.S. cross-border businesses through Perfect Payroll Tax LLC.',
    body: 'If your business has a U.S. LLC, U.S. employees, contractors, or plans to expand into the U.S. market, payroll tax responsibilities can become complex. State requirements, federal filings and employer registration rules may all affect your obligations. Perfect Payroll Tax LLC focuses on U.S. payroll-related services and helps business owners understand the process, organize required information and coordinate payroll tax support.',
    items: ['U.S. payroll tax setup coordination', 'Federal and state payroll tax support', 'Employer registration guidance', 'Filing calendar coordination', 'Payroll tax document organization', 'Canada-U.S. employer support coordination'],
    suitable: ['U.S. LLCs', 'Businesses with U.S. employees', 'Canadian companies entering the U.S. market', 'Owners managing both Canadian and U.S. operations', 'Clients who need Mandarin explanations for U.S. payroll tax matters'],
    cta: 'Ask About U.S. Payroll Tax Support',
  },
  adminOutsource: {
    title: 'Administrative Outsourcing for Small Businesses',
    subtitle: 'Organize employee records, forms, documents and daily back-office tasks so owners can focus on the business.',
    body: 'Many small businesses do not have a dedicated administrative team. Employee documents may be scattered, forms may be inconsistent, vendor records may be hard to find, and the owner may be interrupted by small tasks every day. Perfect Employer Solutions can act as your outsourced administrative support team, helping you build simple, clear and sustainable back-office processes.',
    items: ['Employee record organization', 'Vendor document organization', 'Forms and templates', 'Filing and tracking systems', 'Monthly administrative support', 'Business workflow organization', 'Communication and document follow-up'],
    suitable: ['Small businesses without dedicated admin staff', 'Owners handling all documents personally', 'Businesses preparing to grow or hire', 'Companies that want to standardize internal processes'],
    cta: 'Ask About Administrative Support',
  },
  bookkeeping: {
    title: 'Bookkeeping & Financial Support',
    subtitle: 'Financial document organization, bookkeeping coordination and monthly financial information support.',
    body: 'In daily operations, invoices, receipts, bank statements and financial documents accumulate quickly. Many business owners do not have the time to organize them systematically. Perfect Employer Solutions works with Perfect Financial Solutions Ltd to help you build a clear financial document management system for more organized monthly, quarterly and annual financial work.',
    items: ['Bookkeeping coordination', 'Financial document organization', 'Monthly reporting coordination', 'Sales tax document support', 'Liaison with accounting/tax team'],
    suitable: ['Small businesses without dedicated financial staff', 'Businesses needing monthly financial document organization', 'Companies wanting more standardized financial processes', 'Owners who need coordination with their accountant'],
    cta: 'Ask About Financial Support',
  },
  businessMarketing: {
    title: 'Business & Marketing Support',
    subtitle: 'Financial consulting, business process review and Chinese community marketing support.',
    body: 'As small businesses grow, they often need more than daily task management. They need strategic advice on operations, process optimization and market expansion. Perfect Employer Solutions works with Perfect Management Solutions to help businesses grow steadily in both the Chinese-speaking community and local markets.',
    items: ['Business process review', 'Financial management consulting', 'Small business marketing support', 'Chinese community market support', 'Local business growth planning'],
    suitable: ['Businesses looking to optimize operations', 'Companies needing financial and business analysis', 'Businesses wanting to reach Chinese-speaking markets', 'Companies building long-term growth strategies'],
    cta: 'Ask About Business Support',
  },
  about: {
    title: 'About Perfect Employer Solutions',
    body: 'Perfect Employer Solutions Ltd was created to provide practical employer support for small business owners. We saw that many Chinese-speaking businesses were not avoiding payroll or financial software. They simply needed clearer communication, Mandarin-speaking support and a team that could understand their business context and follow through. Over the past 14 years, our work with small businesses has grown into a connected service model covering payroll, HR, administration, financial coordination, management consulting, marketing support and U.S. payroll tax services. We believe small business owners do not need more complexity. They need clear processes, reliable communication and professional support they can work with over time.',
    mission: 'To help Chinese-speaking small businesses in North America manage employer back-office responsibilities with more clarity, professionalism and peace of mind.',
    perfectCompanies: [
      { name: 'Perfect Financial Solutions Ltd', desc: 'Financial, bookkeeping, tax document and business finance support.' },
      { name: 'Perfect HR & Payroll Solutions', desc: 'Canadian HR and payroll services.' },
      { name: 'Perfect Management Solutions', desc: 'Financial consulting, management consulting and marketing support.' },
      { name: 'Perfect Payroll Tax LLC', desc: 'U.S. payroll tax services.' },
    ],
  },
  contact: {
    title: 'Book a Consultation',
    body: 'If you are not sure whether you need payroll, HR, administrative, financial coordination or U.S. payroll tax support, tell us a little about your business. We will review your location, number of employees, business type and current questions, then recommend the next step.',
    name: 'Name',
    company: 'Company Name',
    city: 'City / Country',
    email: 'Email',
    phone: 'Phone',
    language: 'Preferred Language',
    employees: 'Number of Employees',
    serviceNeeded: 'Service Needed',
    message: 'Briefly Describe Your Question',
    submit: 'Submit Consultation',
    note: 'After you submit the form, we will contact you as soon as possible. For urgent matters, please contact us by phone or WeChat.',
    serviceOptions: ['Canada Payroll', 'U.S. Payroll Tax', 'HR', 'Administrative Outsourcing', 'Financial Support', 'Marketing', 'Not Sure'],
    languageOptions: ['Mandarin', 'English'],
    employeeOptions: ['0 (not yet hired)', '1-5', '6-15', '16-50', '50+'],
  },
  common: {
    learnMore: 'Learn More',
    getStarted: 'Get Started',
    contactUs: 'Contact Us',
  },
};

export const content: Record<Lang, SiteContent> = { zh, en };

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/en')) return 'en';
  return 'zh';
}
