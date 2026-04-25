import type { Locale } from "@/lib/i18n";

export type HomeExperienceContent = {
  hero: {
    microcopy: string;
    scrollIndicator: string;
    links: Array<{ label: string; target: string }>;
  };
  philosophy: {
    title: string;
    intro: string;
    body: string;
    principles: Array<{ title: string; text: string }>;
  };
  sourcing: {
    title: string;
    intro: string;
    points: string[];
  };
  chefStory: {
    title: string;
    story: string;
    styleTitle: string;
    style: string;
    quote: string;
  };
  diningExperience: {
    title: string;
    cards: Array<{ title: string; text: string }>;
  };
  privateEvents: {
    title: string;
    text: string;
    bullets: string[];
  };
  giftCards: {
    title: string;
    text: string;
    cta: string;
  };
  testimonials: {
    title: string;
    items: Array<{ quote: string; author: string; context: string }>;
  };
  gallerySplit: {
    title: string;
    tabs: {
      food: string;
      interior: string;
      atmosphere: string;
    };
    items: {
      food: Array<{ caption: string; image: string }>;
      interior: Array<{ caption: string; image: string }>;
      atmosphere: Array<{ caption: string; image: string }>;
    };
  };
  location: {
    title: string;
    text: string;
    transport: string;
    parking: string;
  };
  openingHours: {
    title: string;
    openNow: string;
    closedNow: string;
    today: string;
    schedule: Array<{ day: string; hours: string }>;
  };
  faq: {
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  micro: {
    todaySpecial: { title: string; name: string; text: string };
    popularTimes: { title: string; times: string[] };
    chefNote: { title: string; text: string };
  };
  reserveModal: {
    fab: string;
    title: string;
    subtitle: string;
    occasion: string;
    occasionPlaceholder: string;
    submit: string;
    close: string;
    successTitle: string;
    successText: string;
    summaryLabel: string;
  };
};

const en: HomeExperienceContent = {
  hero: {
    microcopy: "Smart casual welcomed. Last seating at 22:30.",
    scrollIndicator: "Scroll to discover the evening",
    links: [
      { label: "Philosophy", target: "#home-story" },
      { label: "Experience", target: "#home-experience" },
      { label: "Location", target: "#home-location" },
      { label: "FAQ", target: "#home-faq" },
    ],
  },
  philosophy: {
    title: "Philosophy",
    intro:
      "Our kitchen is built around restraint: fewer components, stronger intention, cleaner flavor arcs.",
    body:
      "Every plate at Aurelien begins with one question: what is this ingredient trying to say in this exact season? We design menus to let that answer remain clear, while service quietly shapes the rhythm of the room.",
    principles: [
      {
        title: "Season over spectacle",
        text: "Techniques support produce; they never outshine it.",
      },
      {
        title: "Precision in pacing",
        text: "Course timing is tuned to conversation and comfort.",
      },
      {
        title: "Warm minimalism",
        text: "Details are quiet but intentional, from lighting to tableware.",
      },
    ],
  },
  sourcing: {
    title: "Ingredients & Sourcing",
    intro:
      "Farm-to-table is a weekly practice, not a slogan. We partner with small growers, line-caught fisheries, and regional dairies.",
    points: [
      "Morning harvest deliveries from three family farms within 90 km.",
      "Line-caught coastal fish selected to match each service period.",
      "Whole-animal butchery and root-to-stem vegetable use to reduce waste.",
    ],
  },
  chefStory: {
    title: "Chef Story",
    story:
      "Adrien Voss trained in Lyon under classical French brigades, then spent six years in Copenhagen refining fermentation and fire-led techniques. Aurelien combines both chapters in a style that feels elegant but grounded.",
    styleTitle: "Kitchen style",
    style:
      "Contemporary European cuisine with coastal brightness, open-fire depth, and restrained sauce work.",
    quote:
      "A memorable dinner is not loud. It is balanced, paced, and honest to the ingredient.",
  },
  diningExperience: {
    title: "Dining Experience",
    cards: [
      {
        title: "Atmosphere",
        text: "Low amber light, generous spacing, and a soundtrack that stays below conversation.",
      },
      {
        title: "Service",
        text: "Attentive and adaptive. We read pace, occasion, and dietary nuance without interrupting flow.",
      },
      {
        title: "Cuisine",
        text: "Layered flavors with clean finishes. Richness is balanced by acidity, texture, and temperature.",
      },
    ],
  },
  privateEvents: {
    title: "Private Events",
    text:
      "From intimate business dinners to milestone celebrations, our private dining team builds bespoke menus and service formats.",
    bullets: [
      "Chef's table for up to 12 guests",
      "Private salon for 18 seated guests",
      "Full venue booking on selected Sundays",
    ],
  },
  giftCards: {
    title: "Gift Cards",
    text:
      "Gift an evening, not just a meal. Digital and printed cards include optional sommelier pairing upgrades.",
    cta: "Request gift card",
  },
  testimonials: {
    title: "Guest Notes",
    items: [
      {
        quote:
          "We booked for an anniversary and were struck by how naturally the team guided the evening. Nothing felt scripted, yet every detail landed exactly on time.",
        author: "Marina L.",
        context: "Dinner tasting, Friday seating",
      },
      {
        quote:
          "The menu had real structure: bright opening, deeper mains, and a dessert finish that felt complete but not heavy. Rare level of coherence.",
        author: "Thomas R.",
        context: "Chef's counter, late seating",
      },
      {
        quote:
          "Service understood allergies without making it the center of attention. The alternatives felt designed, not improvised.",
        author: "Nadia S.",
        context: "Private dining inquiry",
      },
    ],
  },
  gallerySplit: {
    title: "Gallery by Mood",
    tabs: {
      food: "Food",
      interior: "Interior",
      atmosphere: "Atmosphere",
    },
    items: {
      food: [
        {
          caption: "Sea bass finishing with herb oil",
          image:
            "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80",
        },
        {
          caption: "Seasonal plating at chef's pass",
          image:
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      interior: [
        {
          caption: "Main room before first seating",
          image:
            "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
        },
        {
          caption: "Private salon table layout",
          image:
            "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
        },
      ],
      atmosphere: [
        {
          caption: "Evening facade in Old Harbour",
          image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        },
        {
          caption: "Late-night candle line",
          image:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
        },
      ],
    },
  },
  location: {
    title: "Location Experience",
    text:
      "Aurelien sits in the restored Old Harbour district, surrounded by galleries, boutique hotels, and evening promenade routes.",
    transport: "5-minute walk from Harbour Metro, tram line T3 stops at Dock Square.",
    parking: "Valet available from 18:00. Nearby covered parking: Mariner Garage (2-minute walk).",
  },
  openingHours: {
    title: "Opening Hours",
    openNow: "Open now",
    closedNow: "Closed now",
    today: "Today",
    schedule: [
      { day: "Monday", hours: "Closed" },
      { day: "Tuesday", hours: "17:30 - 23:30" },
      { day: "Wednesday", hours: "17:30 - 23:30" },
      { day: "Thursday", hours: "17:30 - 23:30" },
      { day: "Friday", hours: "17:30 - 00:00" },
      { day: "Saturday", hours: "13:00 - 15:30, 17:30 - 00:00" },
      { day: "Sunday", hours: "13:00 - 15:30, 17:30 - 22:30" },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Do you accommodate dietary restrictions?",
        a: "Yes. Please note allergies and dietary needs while booking; our team prepares alternatives in advance.",
      },
      {
        q: "Is there a dress code?",
        a: "Smart casual is recommended. Jackets are welcome but not required.",
      },
      {
        q: "How long is the tasting menu experience?",
        a: "Typically 2 to 2.5 hours depending on pacing and wine pairing format.",
      },
      {
        q: "Do you offer non-alcoholic pairings?",
        a: "Yes. We curate a full zero-proof pairing flight with ferments and botanical infusions.",
      },
      {
        q: "Can I book for a group larger than 8?",
        a: "Absolutely. Use our private events inquiry or contact us directly for group planning.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Reservations can be changed or canceled up to 24 hours before the seating time.",
      },
    ],
  },
  micro: {
    todaySpecial: {
      title: "Today's special",
      name: "Langoustine with saffron emulsion",
      text: "Limited 18 portions tonight.",
    },
    popularTimes: {
      title: "Popular times",
      times: ["19:00 - 20:30 (high demand)", "21:00 (best availability)", "Saturday lunch fills by Thursday"],
    },
    chefNote: {
      title: "Chef's note",
      text: "This week we focus on spring peas, white asparagus, and line-caught sea fish from the northern coast.",
    },
  },
  reserveModal: {
    fab: "Reserve",
    title: "Reserve your table",
    subtitle: "A quick request takes under one minute. We confirm by phone or email.",
    occasion: "Occasion",
    occasionPlaceholder: "Anniversary, business dinner, birthday...",
    submit: "Send request",
    close: "Close",
    successTitle: "Request sent",
    successText: "Thank you. We have received your preferred date and will confirm shortly.",
    summaryLabel: "Reservation summary",
  },
};

const es: HomeExperienceContent = {
  ...en,
  hero: {
    microcopy: "Smart casual recomendado. Último turno a las 22:30.",
    scrollIndicator: "Desplázate para descubrir la noche",
    links: [
      { label: "Filosofía", target: "#home-story" },
      { label: "Experiencia", target: "#home-experience" },
      { label: "Ubicación", target: "#home-location" },
      { label: "FAQ", target: "#home-faq" },
    ],
  },
  philosophy: {
    title: "Filosofía",
    intro:
      "Nuestra cocina se basa en la contención: menos elementos, más intención y recorridos de sabor limpios.",
    body:
      "Cada plato en Aurelien empieza con una pregunta: qué quiere expresar este ingrediente en esta temporada exacta. Diseñamos el menú para mantener esa respuesta clara.",
    principles: [
      { title: "Temporada antes que espectáculo", text: "La técnica acompaña al producto, nunca lo eclipsa." },
      { title: "Precisión en el ritmo", text: "El tempo de cada pase se ajusta a la conversación y al confort." },
      { title: "Minimalismo cálido", text: "Detalles discretos pero intencionales, de la luz a la vajilla." },
    ],
  },
  sourcing: {
    title: "Ingredientes y origen",
    intro:
      "Farm-to-table aquí es práctica semanal, no discurso. Trabajamos con pequeños productores, pesca de línea y lácteos regionales.",
    points: [
      "Entrega de cosecha matinal desde tres fincas familiares a menos de 90 km.",
      "Pescado costero de captura de línea adaptado a cada servicio.",
      "Aprovechamiento integral para reducir desperdicio en cocina.",
    ],
  },
  chefStory: {
    title: "Historia del chef",
    story:
      "Adrien Voss se formó en Lyon y pasó seis años en Copenhague perfeccionando fermentación y fuego. Aurelien une ambas etapas en un estilo elegante y cercano.",
    styleTitle: "Estilo de cocina",
    style:
      "Cocina europea contemporánea con brillo costero, profundidad de fuego abierto y salsas contenidas.",
    quote:
      "Una cena memorable no necesita ser ruidosa. Debe ser equilibrada, bien medida y honesta con el producto.",
  },
  diningExperience: {
    title: "Experiencia en sala",
    cards: [
      { title: "Atmósfera", text: "Luz ámbar baja, espacio generoso y una banda sonora por debajo de la conversación." },
      { title: "Servicio", text: "Atento y adaptable. Leemos ritmo, ocasión y necesidades dietéticas sin romper el flujo." },
      { title: "Cocina", text: "Capas de sabor con finales limpios, balance entre acidez, textura y temperatura." },
    ],
  },
  privateEvents: {
    title: "Eventos privados",
    text:
      "Desde cenas de negocio íntimas hasta celebraciones, nuestro equipo diseña menú y formato de servicio a medida.",
    bullets: [
      "Mesa del chef para hasta 12 personas",
      "Salón privado para 18 comensales",
      "Reserva completa del local en domingos seleccionados",
    ],
  },
  giftCards: {
    title: "Tarjetas regalo",
    text:
      "Regala una experiencia, no solo una comida. Formato digital o impreso con opción de maridaje sommelier.",
    cta: "Solicitar tarjeta regalo",
  },
  testimonials: {
    title: "Voces de nuestros invitados",
    items: [
      {
        quote:
          "Reservamos por aniversario y nos impresionó cómo el equipo condujo la noche con naturalidad. Nada se sintió forzado.",
        author: "Marina L.",
        context: "Menú degustación, viernes",
      },
      {
        quote:
          "El menú tuvo estructura real: apertura fresca, principales profundos y cierre de postre ligero y completo.",
        author: "Thomas R.",
        context: "Barra del chef, turno tarde",
      },
      {
        quote:
          "Gestionaron alergias con discreción y criterio. Las alternativas parecían diseñadas desde el inicio.",
        author: "Nadia S.",
        context: "Consulta de cena privada",
      },
    ],
  },
  gallerySplit: {
    ...en.gallerySplit,
    title: "Galería por ambiente",
    tabs: { food: "Platos", interior: "Interior", atmosphere: "Atmósfera" },
  },
  location: {
    title: "Experiencia de ubicación",
    text:
      "Aurelien está en el renovado distrito Old Harbour, rodeado de galerías, hoteles boutique y paseo nocturno.",
    transport: "A 5 minutos a pie de Harbour Metro; tranvía T3 en Dock Square.",
    parking: "Valet desde las 18:00. Parking cubierto cercano: Mariner Garage (2 minutos).",
  },
  openingHours: {
    ...en.openingHours,
    title: "Horario",
    openNow: "Abierto ahora",
    closedNow: "Cerrado ahora",
    today: "Hoy",
    schedule: [
      { day: "Lunes", hours: "Cerrado" },
      { day: "Martes", hours: "17:30 - 23:30" },
      { day: "Miércoles", hours: "17:30 - 23:30" },
      { day: "Jueves", hours: "17:30 - 23:30" },
      { day: "Viernes", hours: "17:30 - 00:00" },
      { day: "Sábado", hours: "13:00 - 15:30, 17:30 - 00:00" },
      { day: "Domingo", hours: "13:00 - 15:30, 17:30 - 22:30" },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "¿Adaptan el menú a restricciones alimentarias?",
        a: "Sí. Indica alergias y preferencias al reservar para preparar opciones con antelación.",
      },
      { q: "¿Hay código de vestimenta?", a: "Recomendamos smart casual; la chaqueta es opcional." },
      {
        q: "¿Cuánto dura la experiencia degustación?",
        a: "Entre 2 y 2.5 horas según el ritmo de mesa y el tipo de maridaje.",
      },
      {
        q: "¿Ofrecen maridaje sin alcohol?",
        a: "Sí, con fermentados e infusiones botánicas diseñadas para cada pase.",
      },
      {
        q: "¿Puedo reservar para más de 8 personas?",
        a: "Claro. Usa el formulario de eventos privados o contáctanos directamente.",
      },
      {
        q: "¿Cuál es la política de cancelación?",
        a: "Puedes modificar o cancelar hasta 24 horas antes del turno reservado.",
      },
    ],
  },
  micro: {
    todaySpecial: {
      title: "Especial de hoy",
      name: "Langostino con emulsión de azafrán",
      text: "Solo 18 porciones esta noche.",
    },
    popularTimes: {
      title: "Horas más solicitadas",
      times: ["19:00 - 20:30 (alta demanda)", "21:00 (mejor disponibilidad)", "El almuerzo del sábado se completa el jueves"],
    },
    chefNote: {
      title: "Nota del chef",
      text: "Esta semana trabajamos guisante de primavera, espárrago blanco y pesca de línea del norte.",
    },
  },
  reserveModal: {
    fab: "Reservar",
    title: "Reserva tu mesa",
    subtitle: "La solicitud tarda menos de un minuto. Confirmamos por teléfono o email.",
    occasion: "Ocasión",
    occasionPlaceholder: "Aniversario, cena de negocios, cumpleaños...",
    submit: "Enviar solicitud",
    close: "Cerrar",
    successTitle: "Solicitud enviada",
    successText: "Gracias. Hemos recibido tu preferencia y confirmaremos en breve.",
    summaryLabel: "Resumen de reserva",
  },
};

const ru: HomeExperienceContent = {
  ...en,
  hero: {
    microcopy: "Smart casual приветствуется. Последняя посадка в 22:30.",
    scrollIndicator: "Прокрутите, чтобы почувствовать атмосферу вечера",
    links: [
      { label: "Философия", target: "#home-story" },
      { label: "Опыт", target: "#home-experience" },
      { label: "Локация", target: "#home-location" },
      { label: "FAQ", target: "#home-faq" },
    ],
  },
  philosophy: {
    title: "Философия",
    intro:
      "Наша кухня построена на сдержанности: меньше элементов, больше смысла и чище вкусовая линия.",
    body:
      "Каждое блюдо в Aurelien начинается с вопроса: что именно этот продукт хочет сказать в этот сезон. Мы выстраиваем подачу так, чтобы ответ оставался ясным.",
    principles: [
      { title: "Сезон важнее эффекта", text: "Техника поддерживает продукт, а не спорит с ним." },
      { title: "Точный ритм", text: "Темп курсов настроен под разговор и комфорт гостей." },
      { title: "Теплый минимализм", text: "Сдержанные, но продуманные детали в свете, звуке и сервировке." },
    ],
  },
  sourcing: {
    title: "Ингредиенты и поставки",
    intro:
      "Farm-to-table для нас это рабочий процесс каждую неделю. Мы сотрудничаем с небольшими хозяйствами, рыбаками line-caught и региональными сыроварнями.",
    points: [
      "Утренняя поставка урожая от трех семейных ферм в радиусе 90 км.",
      "Прибрежная рыба line-caught под конкретный формат сервиса.",
      "Подход whole-animal и root-to-stem для снижения отходов.",
    ],
  },
  chefStory: {
    title: "История шефа",
    story:
      "Адриен Восс прошел классическую школу в Лионе и шесть лет работал в Копенгагене, углубляясь в ферментацию и открытый огонь. В Aurelien эти подходы объединены в элегантный, но живой стиль.",
    styleTitle: "Стиль кухни",
    style:
      "Современная европейская кухня с прибрежной свежестью, глубиной открытого огня и сдержанной соусной работой.",
    quote:
      "Запоминающийся ужин не должен быть громким. Он должен быть честным, точным и сбалансированным.",
  },
  diningExperience: {
    title: "Опыт ужина",
    cards: [
      { title: "Атмосфера", text: "Мягкий янтарный свет, свободная рассадка и звук ниже уровня разговора." },
      { title: "Сервис", text: "Внимательный и адаптивный. Мы считываем ритм, повод и диетические нюансы без лишних пауз." },
      { title: "Кухня", text: "Многослойный вкус с чистым финишем: баланс кислотности, текстуры и температуры." },
    ],
  },
  privateEvents: {
    title: "Private Events",
    text:
      "От камерных деловых ужинов до частных праздников: команда private dining собирает формат сервиса и меню под ваш сценарий.",
    bullets: [
      "Chef's table до 12 гостей",
      "Отдельный салон на 18 посадок",
      "Полный выкуп ресторана в отдельные воскресенья",
    ],
  },
  giftCards: {
    title: "Подарочные карты",
    text:
      "Подарите не просто ужин, а впечатление. Доступны цифровой и печатный форматы с опцией винной пары.",
    cta: "Запросить gift card",
  },
  testimonials: {
    title: "Отзывы гостей",
    items: [
      {
        quote:
          "Мы бронировали на годовщину, и команда провела вечер настолько естественно, будто все происходило само. При этом тайминг был идеальным.",
        author: "Марина Л.",
        context: "Дегустационный ужин, пятница",
      },
      {
        quote:
          "У меню была четкая драматургия: яркий старт, глубокий центр и очень чистый десертный финал. Редкий уровень цельности.",
        author: "Томас Р.",
        context: "Chef's counter, поздняя посадка",
      },
      {
        quote:
          "Команда корректно учла аллергию без лишнего акцента. Альтернативы выглядели как часть концепции, а не замена на ходу.",
        author: "Надия С.",
        context: "Запрос private dining",
      },
    ],
  },
  gallerySplit: {
    ...en.gallerySplit,
    title: "Галерея по настроению",
    tabs: { food: "Блюда", interior: "Интерьер", atmosphere: "Атмосфера" },
  },
  location: {
    title: "Локация",
    text:
      "Aurelien находится в обновленном районе Old Harbour рядом с галереями, бутик-отелями и вечерней прогулочной линией.",
    transport: "5 минут пешком от Harbour Metro, трамвай T3 останавливается у Dock Square.",
    parking: "Valet с 18:00. Ближайший крытый паркинг: Mariner Garage (2 минуты пешком).",
  },
  openingHours: {
    ...en.openingHours,
    title: "Часы работы",
    openNow: "Сейчас открыто",
    closedNow: "Сейчас закрыто",
    today: "Сегодня",
    schedule: [
      { day: "Понедельник", hours: "Выходной" },
      { day: "Вторник", hours: "17:30 - 23:30" },
      { day: "Среда", hours: "17:30 - 23:30" },
      { day: "Четверг", hours: "17:30 - 23:30" },
      { day: "Пятница", hours: "17:30 - 00:00" },
      { day: "Суббота", hours: "13:00 - 15:30, 17:30 - 00:00" },
      { day: "Воскресенье", hours: "13:00 - 15:30, 17:30 - 22:30" },
    ],
  },
  faq: {
    title: "FAQ",
    items: [
      {
        q: "Учитываете ли вы пищевые ограничения?",
        a: "Да. Укажите аллергию и предпочтения при бронировании, и кухня подготовит альтернативы заранее.",
      },
      { q: "Есть ли дресс-код?", a: "Рекомендуем smart casual. Пиджак приветствуется, но не обязателен." },
      {
        q: "Сколько длится дегустационный ужин?",
        a: "Обычно 2-2.5 часа в зависимости от ритма стола и формата пары.",
      },
      {
        q: "Есть ли безалкогольные пары?",
        a: "Да, мы предлагаем полноценный zero-proof pairing с ферментами и ботаническими инфузиями.",
      },
      {
        q: "Можно ли забронировать стол для компании больше 8 гостей?",
        a: "Да, используйте форму private events или свяжитесь с нами напрямую.",
      },
      {
        q: "Какая у вас политика отмены?",
        a: "Бронирование можно изменить или отменить не позднее чем за 24 часа до посадки.",
      },
    ],
  },
  micro: {
    todaySpecial: {
      title: "Спешл дня",
      name: "Лангустин с шафрановой эмульсией",
      text: "Сегодня доступно только 18 порций.",
    },
    popularTimes: {
      title: "Популярные слоты",
      times: ["19:00 - 20:30 (высокий спрос)", "21:00 (лучшая доступность)", "Субботний ланч заполняется к четвергу"],
    },
    chefNote: {
      title: "Заметка шефа",
      text: "На этой неделе в фокусе зеленый горошек, белая спаржа и line-caught рыба северного побережья.",
    },
  },
  reserveModal: {
    fab: "Бронь",
    title: "Забронировать стол",
    subtitle: "Заполнение заявки занимает меньше минуты. Подтверждаем по телефону или email.",
    occasion: "Повод",
    occasionPlaceholder: "Годовщина, деловой ужин, день рождения...",
    submit: "Отправить заявку",
    close: "Закрыть",
    successTitle: "Заявка отправлена",
    successText: "Спасибо. Мы получили ваши данные и свяжемся с вами для подтверждения.",
    summaryLabel: "Детали брони",
  },
};

const contentByLocale: Record<Locale, HomeExperienceContent> = { en, es, ru };

export const getHomeExperienceContent = (locale: Locale): HomeExperienceContent =>
  contentByLocale[locale];
