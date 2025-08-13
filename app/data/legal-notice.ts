export interface LegalArticle {
  title: string;
  content: {
    mainText?: string;
    bulletPoints?: string[];
    additionalText?: string[];
    contactInfo?: string;
  }[];
}

export const legalData: LegalArticle[] = [
  {
    title: "Legal Notice",
    content: [
      {
        mainText:
          "This Next.js template is published and managed by Virtuosa on behalf of Template Next.js:",
      },
      {
        bulletPoints: [
          "Template owner and publisher: Virtuosa",
          "Publisher contact: agence@virtuosa.fr",
          "Project represented: Template Next.js",
          "Legal status: Open source template under MIT license",
          "Business sector: Web development and applications",
          "Contact: agence@virtuosa.fr",
          "Publication manager: Virtuosa",
        ],
      },
      {
        additionalText: [
          "Template Next.js is a modern and optimized template project for web application development with Next.js, React and TypeScript.",
          "The template is provided free of charge and can be used for personal and commercial projects according to the terms of the MIT license.",
          "For any technical issues or errors found on the template, contact Virtuosa: agence@virtuosa.fr",
          "For any information regarding web development and templates: agence@virtuosa.fr",
        ],
      },
    ],
  },
  {
    title: "Data Protection (GDPR)",
    content: [
      {
        mainText:
          "The template may include contact forms that collect the following information: name, email and message. This data is collected and processed by Virtuosa solely for:",
      },
      {
        bulletPoints: [
          "Transmitting your support and contact requests via email",
          "No data is stored in a database by default",
          "Information is used solely for sending the message and is then deleted",
          "No subsequent processing is performed on this data",
        ],
      },
      {
        additionalText: [
          "The forms included in the template use spam protection systems that do not affect your privacy.",
          "In accordance with GDPR and the French Data Protection Act of January 6, 1978 as amended, you have the following rights:",
          "Right of access, rectification and deletion of your data",
          "Right to object to or limit processing",
          "Right to data portability",
        ],
      },
      {
        contactInfo: "To exercise your rights: agence@virtuosa.fr",
      },
      {
        mainText:
          "Cookies: The template may use cookies to improve your experience. You can disable them through your browser settings.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      {
        mainText:
          "The template structure, components, styles and all other content are the exclusive property of Virtuosa, unless otherwise stated.",
      },
      {
        bulletPoints: [
          "Any reproduction (total or partial) is prohibited without written authorization from Virtuosa.",
          "The brands and logos appearing on this template are protected and their unauthorized reuse is subject to legal proceedings.",
        ],
      },
    ],
  },
  {
    title: "Terms of Use",
    content: [
      {
        mainText: "By using the Virtuosa Next.js template, you agree to:",
      },
      {
        bulletPoints: [
          "Respect applicable laws and intellectual property rights",
          "Use the template only for legitimate purposes (application development)",
          "Not disrupt the proper functioning of the template (viruses, hacking, etc.)",
        ],
      },
      {
        additionalText: [
          "Responsibilities: Virtuosa strives to ensure the accuracy of the technical information displayed. However, we cannot be held responsible in case of error or malfunction.",
        ],
      },
    ],
  },
  {
    title: "Acceptance",
    content: [
      {
        mainText:
          "By using the Virtuosa Next.js template, you declare that you have read and accepted all of these legal notices and terms of use.",
      },
    ],
  },
];
