import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "websites",
    title: "Розробка сайтів",
    description: "Створюємо сучасні, швидкі та зручні сайти для вашого бізнесу",
    icon: "globe",
    href: "/services/websites",
    features: [
      "Лендінги та промо-сторінки",
      "Корпоративні сайти",
      "Інтернет-магазини",
      "Веб-додатки",
    ],
  },
  {
    id: "chatbots",
    title: "Чат-боти",
    description: "Автоматизуйте комунікацію з клієнтами за допомогою розумних ботів",
    icon: "bot",
    href: "/services/chatbots",
    features: [
      "Telegram боти",
      "Viber/WhatsApp боти",
      "Веб-чати",
      "Інтеграція з CRM",
    ],
  },
  {
    id: "ai-solutions",
    title: "AI-рішення",
    description: "Впроваджуємо штучний інтелект для оптимізації бізнес-процесів",
    icon: "brain",
    href: "/services/ai-solutions",
    features: [
      "ChatGPT інтеграція",
      "AI-асистенти",
      "Автоматизація процесів",
      "Аналітика даних",
    ],
  },
  {
    id: "mobile-apps",
    title: "Мобільні додатки",
    description: "Розробка нативних та крос-платформних мобільних додатків",
    icon: "smartphone",
    href: "/services/mobile-apps",
    features: [
      "iOS та Android",
      "React Native / Flutter",
      "Дизайн UX/UI",
      "Підтримка та оновлення",
    ],
  },
  {
    id: "cloud",
    title: "Хмарні рішення",
    description: "DevOps, хостинг та налаштування хмарної інфраструктури",
    icon: "cloud",
    href: "/services/cloud",
    features: [
      "AWS / Google Cloud / Azure",
      "CI/CD налаштування",
      "Docker / Kubernetes",
      "Моніторинг та безпека",
    ],
  },
  {
    id: "consulting",
    title: "IT-консалтинг",
    description: "Професійна консультація з питань цифрової трансформації",
    icon: "lightbulb",
    href: "/services/consulting",
    features: [
      "Аудит IT-інфраструктури",
      "Стратегія розвитку",
      "Вибір технологій",
      "Оптимізація процесів",
    ],
  },
];
