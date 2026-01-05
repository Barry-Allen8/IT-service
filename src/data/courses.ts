import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "1",
    slug: "web-development-fundamentals",
    title: "Основи веб-розробки",
    shortDescription: "Комплексний курс для початківців у веб-розробці",
    description: "Навчіться створювати сучасні вебсайти з нуля. HTML, CSS, JavaScript та основи React.",
    image: "/images/courses/web-dev.jpg",
    duration: "40 годин",
    lessons: 30,
    price: 5000,
    format: "online",
    level: "beginner",
    instructor: {
      name: "Андрій Коваленко",
      bio: "Старший веб-розробник з 8-річним досвідом. Працював над проєктами для міжнародних компаній.",
      image: "/images/instructors/andriy.jpg",
      experience: "8 років досвіду",
    },
    benefits: [
      "Практичні навички веб-розробки",
      "Створення власного портфоліо",
      "Підтримка викладача",
      "Сертифікат після завершення",
    ],
    targetAudience: [
      "Початківці без досвіду програмування",
      "Студенти IT-спеціальностей",
      "Спеціалісти, які хочуть змінити кар'єру",
      "Підприємці, які хочуть створювати сайти",
    ],
    modules: [
      {
        title: "Модуль 1: HTML та CSS",
        lessons: [
          "Вступ до HTML",
          "Семантична розмітка",
          "CSS селектори та властивості",
          "Flexbox та Grid",
          "Адаптивний дизайн",
        ],
      },
      {
        title: "Модуль 2: JavaScript",
        lessons: [
          "Основи JavaScript",
          "DOM маніпуляції",
          "Події та обробники",
          "Асинхронний JavaScript",
          "API та fetch",
        ],
      },
      {
        title: "Модуль 3: React основи",
        lessons: [
          "Компоненти та props",
          "State та lifecycle",
          "Hooks",
          "Робота з формами",
          "Фінальний проєкт",
        ],
      },
    ],
    pricing: [
      {
        name: "Стандарт",
        price: 5000,
        features: [
          "Доступ до всіх уроків",
          "Домашні завдання",
          "Чат підтримки",
          "Сертифікат",
        ],
      },
      {
        name: "Преміум",
        price: 8000,
        features: [
          "Все зі Стандарту",
          "Персональні консультації",
          "Перевірка коду",
          "Допомога з працевлаштуванням",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "2",
    slug: "ai-chatbots-development",
    title: "Розробка AI чат-ботів",
    shortDescription: "Навчіться створювати розумних чат-ботів з AI",
    description: "Створюйте чат-ботів для Telegram, Viber з інтеграцією ChatGPT та Claude.",
    image: "/images/courses/chatbots.jpg",
    duration: "30 годин",
    lessons: 20,
    price: 6000,
    format: "online",
    level: "intermediate",
    instructor: {
      name: "Марія Петренко",
      bio: "Експертка з AI та чат-ботів. Створила понад 50 ботів для різних бізнесів.",
      image: "/images/instructors/maria.jpg",
      experience: "6 років досвіду",
    },
    benefits: [
      "Практичні навички створення ботів",
      "Інтеграція з AI моделями",
      "Монетизація ботів",
      "Реальні кейси",
    ],
    targetAudience: [
      "Розробники з базовими знаннями",
      "Підприємці, які хочуть автоматизувати бізнес",
      "Фахівці з маркетингу",
      "Всі, хто цікавиться AI",
    ],
    modules: [
      {
        title: "Основи чат-ботів",
        lessons: [
          "Що таке чат-боти",
          "Telegram Bot API",
          "Базова структура бота",
          "Обробка команд",
        ],
      },
      {
        title: "Інтеграція з AI",
        lessons: [
          "ChatGPT API",
          "Claude API",
          "Промпт-інжиніринг",
          "Контекст та пам'ять",
        ],
      },
      {
        title: "Продакшн та монетизація",
        lessons: [
          "Деплой бота",
          "Аналітика",
          "Монетизація",
          "Фінальний проєкт",
        ],
      },
    ],
    pricing: [
      {
        name: "Стандарт",
        price: 6000,
        features: ["Доступ до уроків", "Домашні завдання", "Підтримка", "Сертифікат"],
      },
      {
        name: "Преміум",
        price: 9500,
        features: [
          "Все зі Стандарту",
          "Менторство",
          "Код-рев'ю",
          "Допомога з проєктом",
        ],
        recommended: true,
      },
    ],
  },
];
