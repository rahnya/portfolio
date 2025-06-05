import { Experience, Education, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Trésorière du BDE de ma formation (sur mon temps libre)",
    company: "Association MM'IN",
    period: "Juin 2023 - Présent",
    description: "Gestion des comptes et des finances de l’association. Réalisation des budgets prévisionnels, factures etc.",
    skills: ["comptabilité", "Communication", "autonomie"]
  },
  {
    id: 2,
    title: "Intégratrice Wordpress (Stage)",
    company: "Association les Productions de la Rade",
    period: "Février 2025 - Mars 2025",
    description: "Développement et optimisation d'un site web sous WordPress. Mise en place des réseaux sociaux. Création de templates",
    skills: ["Wordpress", "SliderRevolution", "CSS", "Trello", "Adobe"]
  },
  {
    id: 3,
    title: "Hôte de caisse (CDD Saisonnier)",
    company: "Espace CulturelE. Leclerc",
    period: "Juillet 2024 - Août 2024",
    description: "Conseil et assistance technique sur appareils numériques (PC, smartphones,appareils photo). Support clientèle et hôtesse de la caisse. Interaction avec le public international.",
    skills: ["Anglais", "Espagnol", "Arabe", "Communication", "Travail en équipe"]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "BUT Métiers du Multimédia et de l'Internet",
    institution: "IUT de Toulon",
    period: "2023 - Présent",
    description: "Parcours Développement Web et Dispositifs Interactifs. Formation aux métiers du web, du multimédia et de la communication numérique."
  },
  {
    id: 2,
    degree: "Baccalauréat Général",
    institution: "Lycée Jean Macé (Rennes)",
    period: "2020 - 2023",
    description: "Spécialités Mathématiques et LLCE Espagnol. Section Européenne avec DNL Histoire Géographie Mention Bien."
  }
];

export const skills: Skill[] = [
  { id: 1, name: "HTML5", level: 5, category: "frontend" },
  { id: 2, name: "CSS3", level: 5, category: "frontend" },
  { id: 3, name: "JavaScript", level: 4, category: "frontend" },
  { id: 5, name: "React", level: 4, category: "frontend" },
  { id: 6, name: "Tailwind CSS", level: 4, category: "frontend" },
  { id: 7, name: "Node.js", level: 3, category: "backend" },
  { id: 10, name: "PHP", level: 3, category: "backend" },
  { id: 11, name: "MySQL", level: 3, category: "backend" },
  { id: 12, name: "Figma", level: 4, category: "design" },
  { id: 13, name: "In Design", level: 3, category: "design" },
  { id: 14, name: "Photoshop", level: 3, category: "design" },
  { id: 15, name: "Illustrator", level: 4, category: "design" },
  { id: 9, name: "Canva", level: 4, category: "design" },
  { id: 16, name: "Git", level: 4, category: "tools" },
  { id: 17, name: "GitHub", level: 4, category: "tools" },
  { id: 18, name: "VS Code", level: 5, category: "tools" },
  { id: 19, name: "WordPress", level: 4, category: "tools" },
  { id: 20, name: "Trello", level: 5, category: "tools" },
  { id: 21, name: "Laravel", level: 3, category: "backend" },
  { id: 22, name: "Filament", level: 2, category: "frontend" }
];