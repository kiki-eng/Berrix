export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  problems: string[];
  deliverables: string[];
  tools: string[];
}

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Solution",
    slug: "custom-software-development",
    shortDescription: "Tailored applications built to solve your specific business challenges.",
    description: "We build custom software solutions that align perfectly with your business processes and requirements. From web applications to enterprise systems, we deliver scalable, maintainable code that grows with your business.",
    problems: [
      "Off-the-shelf software doesn't fit your unique workflows",
      "Legacy systems are holding back productivity",
      "You need integration between multiple tools",
      "Your team requires specialized functionality"
    ],
    deliverables: [
      "Fully functional custom application",
      "Comprehensive documentation",
      "Deployment and hosting setup",
      "Training and support materials",
      "Ongoing maintenance plan"
    ],
    tools: [
      "Next.js, React, TypeScript",
      ".NET, C#",
      "Node.js, Python",
      "PostgreSQL, SQL Server",
      "Azure App Service"
    ]
  },
  {
    id: "cloud-azure",
    title: "Cloud & Azure Solutions",
    slug: "cloud-azure-solutions",
    shortDescription: "Azure-first architecture designed for scale, security, and reliability.",
    description: "We architect and deploy cloud solutions on Microsoft Azure, leveraging the platform's full capabilities to build resilient, scalable systems. From infrastructure setup to application deployment, we ensure your cloud journey is smooth and cost-effective.",
    problems: [
      "On-premises infrastructure is costly and inflexible",
      "Scaling requires significant upfront investment",
      "Disaster recovery is complex and expensive",
      "You need global reach with low latency"
    ],
    deliverables: [
      "Azure architecture design and documentation",
      "Infrastructure as Code (ARM/Bicep)",
      "Deployed and configured cloud resources",
      "Security and compliance setup",
      "Cost optimization recommendations",
      "Monitoring and alerting configuration"
    ],
    tools: [
      "Azure App Service, Functions, Container Apps",
      "Azure SQL Database, Cosmos DB",
      "Azure Storage, Key Vault",
      "Azure DevOps, GitHub Actions",
      "Azure Monitor, Application Insights"
    ]
  },
  {
    id: "devops",
    title: "DevOps & Engineering Enablement",
    slug: "devops-engineering-enablement",
    shortDescription: "Streamline deployments, automate workflows, and accelerate delivery.",
    description: "We help teams ship faster and more reliably through modern DevOps practices. From CI/CD pipelines to infrastructure automation, we enable your engineering team to focus on building great products.",
    problems: [
      "Deployments are manual and error-prone",
      "Development and production environments differ",
      "Team velocity is slowed by infrastructure concerns",
      "You lack visibility into system health"
    ],
    deliverables: [
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Automated testing and quality gates",
      "Monitoring and observability tools",
      "Documentation and runbooks",
      "Team training and best practices"
    ],
    tools: [
      "Azure DevOps, GitHub Actions",
      "Docker, Kubernetes",
      "Terraform, Bicep",
      "Azure Pipelines, Azure Container Registry",
      "Prometheus, Grafana, Application Insights"
    ]
  },
  {
    id: "identity-access",
    title: "Identity & Access Management",
    slug: "identity-access-management",
    shortDescription: "Secure access control with Microsoft Entra ID (Azure AD) integration.",
    description: "We implement robust identity and access management solutions using Microsoft Entra ID, ensuring your applications and data are protected while providing seamless user experiences.",
    problems: [
      "Users struggle with multiple passwords",
      "Security policies are inconsistently enforced",
      "You need single sign-on across applications",
      "Compliance requirements demand better access controls"
    ],
    deliverables: [
      "Entra ID integration and configuration",
      "Single Sign-On (SSO) implementation",
      "Multi-factor authentication setup",
      "Role-based access control (RBAC)",
      "Security policies and compliance documentation",
      "User training and support"
    ],
    tools: [
      "Microsoft Entra ID (Azure AD)",
      "Microsoft Graph API",
      "OAuth 2.0, OpenID Connect",
      "SAML, WS-Federation",
      "Azure AD B2C (for customer identity)"
    ]
  },
  {
    id: "automation-ai",
    title: "Automation & AI Solutions",
    slug: "automation-ai-solutions",
    shortDescription: "Intelligent automation that reduces manual work and drives efficiency.",
    description: "We build automation solutions and integrate AI capabilities to eliminate repetitive tasks, improve decision-making, and unlock new possibilities for your business.",
    problems: [
      "Repetitive manual tasks consume valuable time",
      "Data processing requires significant human effort",
      "You need intelligent insights from your data",
      "Customer service is overwhelmed with routine inquiries"
    ],
    deliverables: [
      "Automated workflows and processes",
      "AI-powered applications and integrations",
      "Custom AI models and training",
      "Documentation and process maps",
      "Integration with existing systems",
      "Performance metrics and ROI analysis"
    ],
    tools: [
      "Azure OpenAI, Azure AI Services",
      "Power Automate, Logic Apps",
      "Azure Functions, Azure Cognitive Services",
      "Python, LangChain",
      "Azure Machine Learning"
    ]
  },
  {
    id: "data-bi",
    title: "Data & Business Intelligence",
    slug: "data-business-intelligence",
    shortDescription: "Turn your data into actionable insights and informed decisions.",
    description: "We help you unlock the value in your data through modern data pipelines, analytics, and business intelligence solutions. From data warehouses to real-time dashboards, we make data-driven decision-making accessible.",
    problems: [
      "Data is scattered across multiple systems",
      "Reports take days or weeks to generate",
      "You lack visibility into key business metrics",
      "Decision-making relies on intuition rather than data"
    ],
    deliverables: [
      "Data warehouse or data lake architecture",
      "ETL/ELT pipelines",
      "Interactive dashboards and reports",
      "Data models and schemas",
      "Documentation and data governance",
      "Training on analytics tools"
    ],
    tools: [
      "Azure Synapse Analytics, Azure Data Factory",
      "Power BI, Azure Analysis Services",
      "SQL Server, Azure SQL Database",
      "Azure Data Lake Storage",
      "Python, Spark, dbt"
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

