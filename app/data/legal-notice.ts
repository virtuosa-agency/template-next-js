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
          "This website is published by Your Company. Replace the details below with your legal information:",
      },
      {
        bulletPoints: [
          "Company name: Your Company",
          "Publisher contact: hello@yourdomain.com",
          "Publication manager: Your Name",
          "Legal status: [Company legal form]",
          "Business sector: [Your sector]",
          "Contact: hello@yourdomain.com",
        ],
      },
      {
        additionalText: [
          "Replace this text with a short description of your company and website.",
          "For any questions regarding this website, contact: hello@yourdomain.com",
        ],
      },
    ],
  },
  {
    title: "Data Protection (GDPR)",
    content: [
      {
        mainText:
          "This website may include contact forms that collect the following information: name, email and message. This data is collected and processed solely for:",
      },
      {
        bulletPoints: [
          "Transmitting your contact requests via email",
          "No data is stored in a database by default",
          "Information is used solely for sending the message and is then deleted",
          "No subsequent processing is performed on this data",
        ],
      },
      {
        additionalText: [
          "The forms included on this website use spam protection systems that do not affect your privacy.",
          "In accordance with GDPR and the French Data Protection Act of January 6, 1978 as amended, you have the following rights:",
          "Right of access, rectification and deletion of your data",
          "Right to object to or limit processing",
          "Right to data portability",
        ],
      },
      {
        contactInfo: "To exercise your rights: hello@yourdomain.com",
      },
      {
        mainText:
          "Cookies: This website may use cookies to improve your experience. You can disable them through your browser settings.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      {
        mainText:
          "The website structure, components, styles and all other content are the exclusive property of Your Company, unless otherwise stated.",
      },
      {
        bulletPoints: [
          "Any reproduction (total or partial) is prohibited without written authorization from Your Company.",
          "The brands and logos appearing on this website are protected and their unauthorized reuse is subject to legal proceedings.",
        ],
      },
    ],
  },
  {
    title: "Terms of Use",
    content: [
      {
        mainText: "By using this website, you agree to:",
      },
      {
        bulletPoints: [
          "Respect applicable laws and intellectual property rights",
          "Use the website only for legitimate purposes",
          "Not disrupt the proper functioning of the website (viruses, hacking, etc.)",
        ],
      },
      {
        additionalText: [
          "Responsibilities: Your Company strives to ensure the accuracy of the information displayed. However, we cannot be held responsible in case of error or malfunction.",
        ],
      },
    ],
  },
  {
    title: "Acceptance",
    content: [
      {
        mainText:
          "By using this website, you declare that you have read and accepted all of these legal notices and terms of use.",
      },
    ],
  },
];
