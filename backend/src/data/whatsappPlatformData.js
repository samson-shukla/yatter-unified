export const loadingEmojiCodes = {
  reply1: "\uD83E\uDD14", // thinking face
  reply2: "\u231B\uFE0F", // hourglass
  reply3: "\uD83D\uDD04", // refresh or loader
  reply4: "\uD83E\uDDD0", // face with monocle
  reply5: "\uD83D\uDC4D", // thumbs up
};

export const availableCommands = [
  "clear",
  "imagine",
  "web_search",
  "menu",
  "profile",
  "commands",
  "subscribe",
  "cancel",
  "language",
  "help",
  "socials",
  "features",
  "updates",
  "offers",
  "stream",
  "delete_all_reminders",
  "lang_eng",
  "lang_hin",
  "lang_spa",
  "lang_fra",
  "lang_heb",
  "lang_por",
];

export const messageReplies = {
  // General Instructions
  general: {
    languageChangedToEng:
      "👋 Hi, your preferred app language is updated to English now!",
    languageChangedToSpa:
      "👋 ¡Hola! ¡Tu idioma preferido de la aplicación se ha actualizado a español ahora!",
    languageChangedToFra:
      "👋 Salut ! Votre langue préférée de l'application est maintenant mise à jour en français !",
    languageChangedToPor:
      "👋 Oi! Seu idioma preferido do aplicativo foi atualizado para português agora!",
    languageChangedToHin:
      "👋 नमस्ते! आपकी पसंदीदा एप्लिकेशन भाषा अब हिन्दी में अपडेट हो गई है!",
    languageChangedToHeb:
      "👋 שלום! שפת האפליקציה המועדפת עליך עודכנה לעברית כעת!",

    loadingEmojis: {
      reply1: "🤔🔍🤔",
      reply2: "🔄🔄🔄",
      reply3: "🔍🧐🔍",
      reply4: "🅻🅾🅰🅳🅸🅽🅶...",
      reply5: "⌛️⌛️⌛️",
    },

    loadingEmojiCodes: {
      reply1: "\uD83E\uDD14", // thinking face
      reply2: "\u231B\uFE0F", // hourglass
      reply3: "\uD83D\uDD04", // refresh or loader
      reply4: "\uD83E\uDDD0", // face with monocle
      reply5: "\uD83D\uDC4D", // thumbs up
    },

    commandsList:
      "/menu \n/imagine \n/clear \n/stream \n/profile \n/subscribe \n\n/socials \n/language \n/help \n/features \n/updates \n/cancel \n/offers \n/delete_all_reminders \n\n/commands or .",
  },

  // English Instructions
  eng: {
    info: {
      profile:
        "Your Yatter profile is your identity hub! 🌟 Keep your profile updated for personalized Yatter AI responses. \n\nProfile Information: \n",
      features:
        "Unlock the potential of Yatter AI assistant! 🚀 Here are some key features: \n\n🤖 ChatGPT on WhatsApp \n📸 Understands images and responds to questions related to them \n🎤 Understands and responds to your voice \n⏰ Set reminders, and Yatter will remind you on time \n🧠 Grasps context for more meaningful conversations \n💡 Gives precise and personalized answers \n🌍 Speaks multiple languages \n🌦️ Provides weather insights and predictions \n🔄 Revisit old messages as new prompts \n📄 Reads short PDFs for you \n💬 WhatsApp chat Support \n💸 More affordable than ChatGPT \n\nAnd much more! Explore the endless possibilities with Yatter AI. Elevate your conversational experience today! 😊✨",
      offers:
        "💎 Experience the incredible powers of Yatter, powered by ChatGPT Plus with our premium subscription options! \n\n🌟 Opt for a monthly, annual or lifetime plans to make your experience amazing. \n",
      offerCoupon:
        "\n\nBut wait, there's more! You can use the following coupon codes to get additional discount during checkout. \n\n",
      socials:
        "Connect with us on social media for the latest updates, behind-the-scenes content, and a vibrant community experience! \n\n📸 Instagram: instagram.com/yatterai \n🐦 Twitter (now X): twitter.com/yatterai \n📘 Facebook: facebook.com/yatterai \n🔗 LinkedIn: linkedin.com/showcase/yatterai \n\nJoin us on this exciting journey! Follow our profiles and be part of the Yatter community. Your connection with us just got more social! 🚀 ",
      help: "Hello! 👋 Need assistance with Yatter? \n\nContact us at: \n💬 WhatsApp: +919718665000 \n📧 Email: support@yatter.in \n🌐 Socials: @yatterai \n\nFor self-help options, type 'menu' to explore more. We're here to help! 😊",

      cancelSubscriptionCommand:
        "*Note* : To cancel your active subscription, please type .cancel",
      noActiveSubscriptionFound:
        "You currently don't have any active subscription.",

      commandsInstructions:
        "⚙️ Here is the list of commands you can use with Yatter: \n\n",
    },

    chat: {
      clearContext:
        "Your conversation context has been successfully cleared. You're now starting with a fresh chat! How can I assist you today?",
      waitAMinute:
        "Hold on a minute please! AI is detecting your image. You'll get the results soon 🌟",
      togglePartialStreaming:
        "Partial Streaming has been toggled successfully!",
      couldntGenerateResponse:
        "Couldn't generate AI response. Please clear the context by typing .clear and retry again 🔃",
    },

    image: {
      genImageLoading:
        "Generating your image in the background. Please wait for a few seconds ⏳",
      imagePromptUnavailable:
        "Please type some valid prompt to generate an image.",
    },

    reminders: {
      prefix: "⏰ Yatter Reminder 🔔 \n\nThis is a friendly reminder about :\n",
      suffix:
        "\n\nPlease make sure to mark your calendar and take any necessary actions. \n\nThank you & keep Yattering 😊",
      list: "🔔 Following is the list of your reminders alongwith date & time.\n\n",

      deactivateAllReminders:
        "All your WhatsApp reminders have been deactivated successfully 📵",
    },

    userRegistration: {
      newUserIntroduction:
        "👋 Hi! I am Yatter, your AI-powered assistant on WhatsApp. \n\nWith the brain of ChatGPT, eyes of Google Gemini and vision of Infokey, I can ... \n\n🔍 Find information for you quickly \n🤖 Answer your questions in any language \n🎓 Help you with your career \n📷 Read & interpret images \n🗣 Understand your voice messages \n🈵 Speak multiple languages \n🌦 Give weather insights \n⏰ Set WhatsApp Reminders \n📖 Summarize short PDFs \nand so much more, for less than half the cost of ChatGPT. \n\n🌎 Socials : https://linktr.ee/yatter \n💬 Customer Support : +919718665000 \nMade with ❤️ In India \n\n🆕 Type /menu to explore more.",

      emailInputInstruction:
        "📧 Please type your email ID to proceed further. It is required to provide you with Yatter updates and subscription details.",
      inValidEmail: "Please type a valid Email ID to continue.",
      disposableEmail:
        "Please note that dummy or disposable emails are not allowed. Please provide a relevant email account.",
      emailUpdatedMessage:
        "😊 Thank you! Your Email has been updated. We'll keep you updated with new features and your subscription status.",

      enterEmailExample: "EMAIL your@email.com",
      wrongEmailInstruction:
        "⚠️ *Please note that* if you have entered wrong Email by mistake please retype your email in the same format i.e. \n\nEMAIL your@email.com \n\nFor any queries or issues, please WhatsApp our service executives at +91 9718665000 or reach out to us on Twitter @YatterAI",

      onboardingMessage: "Great to have you onboard ",
      introAndAskQuestion:
        "How may I assist you today? Ask me anything and get instant answers 😉",
      askQuestion:
        "💬 Do you know? You can dicover more about me by typing /menu",
    },

    freeTier: {
      freeTierThanksMessage:
        "Wow! We are glad to know that you are enjoying Yatter ⚡ so much. \n\n📢 You have used 80% of your Free quota. \n\nThank you 😊",
      freeTierLimitExceededMessage:
        "😓 Your free tier quota of Yatter is completed. To continue enjoying uninterrupted services please select your preferred subscription plan from the list below.",
      freeTierVoiceMessageLimitExceeded:
        "🤐 You have used up your allowed limit for sending Voice Notes in the free version. Please try typing your question or subscribe to Yatter. ",
      freeTierImageRecognitionLimitExceeded:
        "📷 Oops! You've reached the limit for image recognition in the free version. To continue using this feature, please type your question or subscribe to Yatter. ",
      freeTierDocumentRecognitionLimitExceeded:
        "You have used up your allowed limit for text extraction from documents. To continue using this feature, please type your question or consider subscribing to Yatter. ",
    },

    subscription: {
      subscriptionPlansList:
        "Please select your preferred subscription plan from the list below. ",
      invalidSubscriptionPlan:
        "Please choose a valid subscription plan. Select one of the mentioned numbers to subscribe.",
      tapLinkToPay:
        "To complete your payment, please tap the following link 🔗 \n\n",
      afterSubscriptionSelection:
        "😊 Thankyou! \n\nWe are generating the payment link for you. \n\nPlease hold on a second.",
      subscriptionPlanDenied:
        "🥺 It's okay, thank you for considering our Free tier service. \n\nIf you had a nice experience, you can suggest your friends or family to try it out. First *15 interactions* are absolutely free. \n\nAlso, you can still type *YES* to keep experiencing Yatter's awesomeness 😉",
      subscriptionPlanReset:
        "Your subscription plan has been reset 🔄 Please select a new preferred subscription plan to continue. ",
      voluntarySubscription:
        "🙌 Thank you for your interest in subscribing to our service! We truly appreciate your support. Here are the plans you can choose from:",

      enjoyYatterPlus:
        "Thank you for subscribing! \n\nYou can now enjoy unlimited usage of Yatter ⚡",

      alreadySubscribed:
        "You are already subscribed to Yatter Plus. Thank you and keep enjoying!",
      subscriptionExpired:
        "Uh oh! Your subscription has expired. Following are the details : ",
      resubscribeMessage:
        "To continue enjoying our awesome AI chatbot Yatter ⚡, please resubscribe.",
      cancelSubscription:
        "😢 Sad to see you go! \n\nYour subscription cancellation is confirmed and will end on your scheduled date. Enjoy Yatter until then! 🌟 Let us know if there's anything we can do better. \n\n~ Yatter by Infokey",
      enjoyYatterPlusTillExpire:
        "Thank you! \n\nYou can enjoy unlimited usage of Yatter till expiration date⚡",
    },

    payment: {
      paymentLinkExists:
        "Your payment link is already generated. Please tap the link below to complete your payment. \n\nTo change your selected subscription plan please type *RESET* \n\nIn case of any issues, WhatsApp Yatter Customer Support at +91 9718665000. \n",
      paymeentUnderProcessing:
        "Your payment is under processing. Please wait for some time, status of your payment will be updated very soon.",
      paymentCompleted: "🥳 Hurray! Your subscription is active now. \n",

      paymentFailed:
        "😨 Oh no, your payment for your subscription failed! Please retry initiating the subscription again. \n\nIn case of any issues, WhatsApp Yatter ⚡ Customer Support at +91 9718665000.",
      cancelSubscription: "Your current subscription has been canceled",
    },

    userVerification: {
      enterOtpInstruction:
        "Please enter OTP received on your registered Email ID in the following format. For example, if OTP received is 1234 then type as shown below 👇\n\nVERIFY 1234",
      otpWaitingTime:
        "Please keep in mind that it may take up to 5 minutes to receive the OTP on your email. Also, kindly check your email spam folder if you don't find the OTP email in your inbox.",
      inValidOtp:
        "This OTP is wrong. Please retry again with OTP received on your Email.",

      verificationMessage:
        "You are a verified user now. \n\nWe are delighted to know that you are enjoying our services. Keep Yattering 🤘",
    },

    onError: {
      errorWhileSavingDetails:
        "Encountered Error while saving details. Please try again after some time.",
      unknownError:
        "Uh-oh! Some unknown error ocurred. Please type .clear and try after some time. \n\nIn case you still face the problem please WhatsApp Yatter Customer Support at +91 9718665000.",
      invalidQues:
        "🤖 Sorry! I only understand text, images, voice messages and small PDFs. Please try again with valid input.",
      unavailableInYourRegion:
        "😔 Sorry! Yatter is not available in your country.",
      aiServerBusy:
        "Yatter is currently overloaded with other requests. You can retry after some time, use shorter prompt or contact us at +91 9718665000 if the error persists.",
      noTextDetected:
        "No text found in your image. I can only assist with written content present in the image... 👀💬",

      audioUnderstandingError:
        "Oops! I couldn't understand your voice. Please try again and keep your voice message under 3 minutes for better accuracy.",
      imageUnderstandingError:
        "Oops! We encountered an error while processing the image. Please try again later.",
      documentUnderstandingError:
        "We couldn't extract text from the document. Please try again, and make sure the document is under 2 MB in size.",
      imageGenError:
        "We couldn't generate image from your prompt. Please try again later.",

      noReminderFound:
        "Looks like there are no reminders for your profile. Don't worry, you can always create a new one by just asking me!",
      invalidReminderTime:
        "Kindly set a reminder for a valid future time. Example 5 minutes or more in the future.",
      reminderLimitExceeded:
        "You've reached the limit of 10 reminders. To create a new one, kindly consider deleting old reminders.",
      errorWhileSettingReminder:
        "Oops! Something went wrong while setting the reminder. Please try again after some time.",
    },

    gptError: {
      error429:
        "Yatter is experiencing very high traffic. Please retry after some time and use shorter prompts for quick results.",
      error500:
        "Yatter is powered by ChatGPT which has incurred some error. Please be patient. We'll be back very soon.",
      error503:
        "Yatter is powered by ChatGPT which is currently overloaded with requests. Please retry after some time.",
    },

    maintenance:
      "Yatter is at maintenance right now. Please try again after 15 minutes 🙏",
  },

  // Spanish Instructions
  spa: {
    info: {
      profile:
        "¡Tu perfil de Yatter es tu centro de identidad! 🌟 Mantén actualizado tu perfil para respuestas personalizadas de Yatter AI. \n\nInformación del perfil: ",
      features:
        "¡Desbloquea el potencial del asistente Yatter AI! 🚀 Aquí tienes algunas características clave: \n\n🤖 ChatGPT en WhatsApp \n📸 Comprende imágenes y responde preguntas relacionadas con ellas \n🎤 Entiende y responde a tu voz \n⏰ Programa recordatorios, y Yatter te recordará a tiempo \n🧠 Captura el contexto para conversaciones más significativas \n💡 Ofrece respuestas precisas y personalizadas \n🌍 Habla varios idiomas \n🌦️ Proporciona información y predicciones meteorológicas \n🔄 Revisa mensajes antiguos como nuevas sugerencias \n📄 Lee archivos PDF cortos por ti \n💬 Soporte de chat en WhatsApp \n💸 Más asequible que ChatGPT \n\n¡Y mucho más! Explora las posibilidades infinitas con Yatter AI. Eleva tu experiencia conversacional hoy. 😊✨",
      offers:
        "💎 ¡Experimenta los increíbles poderes de Yatter, impulsado por ChatGPT Plus con nuestras opciones de suscripción premium! \n\n🚀 Opte por planes mensuales, anuales o de por vida para que su experiencia sea increíble. \n",
      offerCoupon:
        "\n\n¡Pero espera, hay más! Puedes usar los siguientes códigos de cupón para obtener un descuento adicional al finalizar la compra. \n\n",
      socials:
        "Conéctate con nosotros en redes sociales para conocer las últimas actualizaciones, contenido detrás de escena y una experiencia vibrante en comunidad! \n\n📸 Instagram: instagram.com/yatterai \n🐦 Twitter (ahora X): twitter.com/yatterai \n📘 Facebook: facebook.com/yatterai \n🔗 LinkedIn: linkedin.com/showcase/yatterai \n\n¡Únete a nosotros en este emocionante viaje! Sigue nuestros perfiles y sé parte de la comunidad Yatter. ¡Tu conexión con nosotros acaba de volverse más social! 🚀",
      help: "¡Hola! 👋 ¿Necesitas ayuda con Yatter? \n\nContáctanos en: \n💬 WhatsApp: +919718665000 \n📧 Correo Electrónico: support@yatter.in \n🌐 Redes Sociales: @yatterai \n\nPara opciones de autoayuda, escribe 'menu' para explorar más. ¡Estamos aquí para ayudarte! 😊",
      cancelSubscriptionCommand:
        "*Nota*: Para cancelar su suscripción activa, escriba .cancel",
      noActiveSubscriptionFound:
        "Actualmente no tienes ninguna suscripción activa.",

      commandsInstructions:
        "⚙️ Aquí está la lista de comandos que puedes usar con Yatter: \n\n",
    },

    chat: {
      clearContext:
        "El contexto de su conversación se ha borrado correctamente. ¡Ahora estás comenzando con una nueva charla! ¿Cómo puedo ayudarle hoy?",
      waitAMinute:
        "¡Espera un minuto por favor! La IA está detectando tu imagen. Obtendrás los resultados pronto 🌟",
      togglePartialStreaming:
        "¡La transmisión parcial se ha cambiado correctamente!",
      couldntGenerateResponse:
        "No se pudo generar una respuesta de IA. Borre el contexto escribiendo .clear y vuelva a intentarlo 🔃",
    },

    image: {
      genImageLoading:
        "Generando tu imagen en segundo plano. Por favor, espera unos segundos ⏳",
      imagePromptUnavailable:
        "Escriba algún mensaje válido para generar una imagen.",
    },

    reminders: {
      prefix:
        "⏰ Recordatorio Yatter 🔔 \n\nEste es un recordatorio amistoso sobre:\n",
      suffix:
        "\n\nAsegúrate de marcar tu calendario y tomar las acciones necesarias. \n\nGracias y sigue charlando 😊",
      list: "🔔 A continuación se muestra la lista de tus recordatorios junto con la fecha y la hora.\n\n",

      deactivateAllReminders:
        "Todos tus recordatorios de WhatsApp se han desactivado exitosamente 📵",
    },

    userRegistration: {
      newUserIntroduction:
        "👋 ¡Hola! Soy Yatter, tu asistente impulsado por IA en WhatsApp. \n\nCon el cerebro de ChatGPT, los ojos de Google Gemini y la visión de Infokey, puedo... \n\n🔍 Encontrar información para ti rápidamente \n🤖 Responder a tus preguntas en cualquier idioma \n🎓 Ayudarte con tu carrera \n📷 Leer e interpretar imágenes \n🗣 Entender tus mensajes de voz \n🈵 Hablar varios idiomas \n🌦 Proporcionar información meteorológica \n⏰ Configurar recordatorios de WhatsApp \n📖 Resumir PDFs cortos \ny mucho más, por menos de la mitad del costo de ChatGPT. \n\n🌎 Redes Sociales: https://linktr.ee/yatter \n💬 Soporte al Cliente: +919718665000 \nHecho con ❤️ en la India \n\n🆕 Escribe /menu para explorar más.",

      emailInputInstruction:
        "📧 Por favor, ingrese su dirección de correo electrónico para continuar. Es necesario para brindarle actualizaciones y detalles de suscripción de Yatter.",
      inValidEmail:
        "Escriba una dirección de correo electrónico válida para continuar.",
      disposableEmail:
        "Tenga en cuenta que no se permiten correos electrónicos ficticios o desechables. Proporcione una cuenta de correo electrónico relevante.",
      emailUpdatedMessage:
        "Su correo electrónico ha sido actualizado 😊 Lo mantendremos actualizado con las nuevas funciones y el estado de su suscripción.",

      enterEmailExample: "EMAIL tu@email.com",
      wrongEmailInstruction:
        "⚠️ *Tenga en cuenta que* si ingresó un correo electrónico incorrecto por error, vuelva a escribir su correo electrónico en el mismo formato que está \n\nEMAIL your@email.com \n\nPara cualquier consulta o problema, envíe un WhatsApp a nuestros ejecutivos de servicio al +91 9718665000 o comuníquese con nosotros en Twitter @YatterAI",

      onboardingMessage: "Genial tenerte a bordo ",
      introAndAskQuestion:
        "¿Cómo puedo ayudarte hoy? Pregúntame cualquier cosa y obtén respuestas instantáneas 😉",

      askQuestion: "💬 ¿Sabes? Puedes descubrir más sobre mí escribiendo /menu",
    },

    freeTier: {
      freeTierThanksMessage:
        "¡Guau! Nos alegra saber que estás disfrutando tanto de Yatter ⚡. \n\n📢 Has usado el 80% de tu cuota Gratis. \n\nGracias 😊",
      freeTierLimitExceededMessage:
        "😓 Tu cuota gratuita de Yatter está completada. Para seguir disfrutando de servicios ininterrumpidos, selecciona tu plan de suscripción preferido de la lista a continuación.",
      freeTierVoiceMessageLimitExceeded:
        "🤐 Has alcanzado el límite permitido para enviar notas de voz en la versión gratuita. Por favor, intenta escribir tu pregunta o suscríbete a Yatter.",
      freeTierImageRecognitionLimitExceeded:
        "📷 ¡Ups! Has alcanzado el límite de reconocimiento de imágenes en la versión gratuita. Para seguir utilizando esta función, por favor escribe tu pregunta o suscríbete a Yatter ",
      freeTierDocumentRecognitionLimitExceeded:
        "Has agotado tu límite permitido para la extracción de texto de documentos. Para seguir utilizando esta función, por favor escribe tu pregunta o considera suscribirte a Yatter.",
    },

    subscription: {
      subscriptionPlansList:
        "Seleccione su plan de suscripción preferido de la lista a continuación. ",
      invalidSubscriptionPlan:
        "Elija un plan de suscripción válido. Seleccione uno de los números mencionados para suscribirse.",
      tapLinkToPay:
        "Para completar su pago, por favor toque el siguiente enlace 🔗 \n\n",
      afterSubscriptionSelection:
        "😊 Gracias! \n\nEstamos generando el enlace de pago para ti. \n\nPor favor espera un segundo.",
      subscriptionPlanDenied:
        "🥺 Está bien, gracias por considerar nuestro servicio de nivel gratuito. \n\nSi tuviste una buena experiencia, puedes sugerir a tus amigos o familiares que la prueben. Las primeras *15 interacciones* son absolutamente gratis. \n\nAdemás, todavía puedes escribir *YES* para seguir experimentando la genialidad de Yatter 😉",
      subscriptionPlanReset:
        "Su plan de suscripción se ha restablecido 🔄 Seleccione un nuevo plan de suscripción preferido para continuar. ",
      voluntarySubscription:
        "🙌 ¡Gracias por su interés en suscribirse a nuestro servicio! Nosotros verdaderamente apreciamos tu apoyo. Estos son los planes entre los que puedes elegir:",

      enjoyYatterPlus:
        "¡Gracias por suscribirse! \n\nAhora puedes disfrutar del uso ilimitado de Yatter ⚡️",

      alreadySubscribed:
        "Ya estás suscrito a Yatter Plus. ¡Gracias y sigue disfrutando!",
      subscriptionExpired:
        "¡UH oh! Su suscripción ha expirado. Los siguientes son los detalles : ",
      resubscribeMessage:
        "Para continuar disfrutando de nuestro increíble chatbot con IA Yatter ⚡, vuelva a suscribirse.",
      cancelSubscription:
        "😢 ¡Lamentamos verte ir!\n\nTu solicitud de cancelación de suscripción ha sido confirmada y finalizará en la fecha programada. ¡Disfruta de Yatter hasta entonces! 🌟 Avísanos si hay algo que podamos mejorar.\n\n~ Yatter de Infokey",
    },

    payment: {
      paymentLinkExists:
        "Tu enlace de pago ya ha sido generado. Por favor, pulsa en el enlace de abajo para completar tu pago. \n\nPara cambiar tu plan de suscripción seleccionado, por favor escribe *RESET* \n\nEn caso de cualquier problema, contacta con el equipo de soporte al cliente de Yatter en WhatsApp al +91 9718665000. \n\n",
      paymeentUnderProcessing:
        "Su pago está en proceso. Espere un momento, el estado de su pago se actualizará muy pronto.",
      paymentCompleted: "🥳 ¡Hurra! Su suscripción está activa ahora. \n",

      paymentFailed:
        "😨 ¡Oh no, su pago falló! Vuelva a intentar iniciar la suscripción. \n\nEn caso de cualquier problema, WhatsApp Yatter ⚡ Customer Service en +91 9718665000.",
    },

    userVerification: {
      enterOtpInstruction:
        "Ingrese OTP recibido en su ID de correo electrónico registrado en el siguiente formato. Por ejemplo, si la OTP recibida es 1234, escriba como se muestra a continuación 👇\n\nVERIFY 1234",
      otpWaitingTime:
        "Tenga en cuenta que puede tardar hasta 5 minutos en recibir la OTP en su correo electrónico. Además, revise la carpeta de correo no deseado de su correo electrónico si no encuentra el correo electrónico de OTP en su bandeja de entrada.",
      inValidOtp:
        "Esta OTP está mal. Vuelva a intentarlo con OTP recibido en su correo electrónico.",

      verificationMessage:
        "Ahora eres un usuario verificado. \n\nEstamos encantados de saber que está disfrutando de nuestros servicios. Sigue Yattering 🤘",
    },

    onError: {
      errorWhileSavingDetails:
        "Se encontró un error al guardar los detalles. Vuelva a intentarlo después de un tiempo.",
      unknownError:
        "¡Oh, oh! Se produjo algún error desconocido. Escriba .clear e inténtelo después de un tiempo. \n\nEn caso de que aún tengas problemas, por favor, comunícate por WhatsApp con el Soporte al Cliente de Yatter al +91 9718665000.",
      invalidQues:
        "🤖 ¡Lo siento! Solo entiendo texto, imágenes, mensajes de voz y PDFs pequeños. Por favor, inténtalo de nuevo con una entrada válida.",
      unavailableInYourRegion:
        "😔 ¡Lo siento! Yatter no está disponible en tu país.",
      aiServerBusy:
        "Yatter está actualmente sobrecargado con otras solicitudes. Puedes intentarlo de nuevo después de un tiempo, utilizar un mensaje más corto o contactarnos al +91 9718665000 si el error persiste.",
      noTextDetected:
        "No se encontró ningún texto en tu imagen. Solo puedo ayudarte con el contenido escrito presente en la imagen... 👀💬",

      audioUnderstandingError:
        "¡Ups! No pude entender tu voz. Por favor, inténtalo de nuevo y mantén tu mensaje de voz bajo 3 minutos para una mayor precisión.",
      imageUnderstandingError:
        "¡Vaya! Encontramos un error al procesar la imagen. Por favor, inténtalo de nuevo más tarde.",
      documentUnderstandingError:
        "No pudimos extraer texto del documento. Por favor, inténtalo de nuevo y asegúrate de que el documento tenga un tamaño inferior a 2 MB.",
      imageGenError:
        "No pudimos generar una imagen a partir de su mensaje. Inténtelo de nuevo más tarde.",

      noReminderFound:
        "Parece que no hay recordatorios para tu perfil. No te preocupes, siempre puedes crear uno nuevo simplemente preguntándome.",
      invalidReminderTime:
        "Por favor, establezca un recordatorio para una hora futura válida. Ejemplo 5 minutos o más en el futuro.",
      reminderLimitExceeded:
        "Has alcanzado el límite de 10 recordatorios. Para crear uno nuevo, considera eliminar los antiguos.",
      errorWhileSettingReminder:
        "¡Ups! Hubo un error al configurar el recordatorio. Por favor, inténtalo de nuevo después de un tiempo.",
    },

    gptError: {
      error429:
        "Yatter está experimentando un tráfico muy elevado. Vuelva a intentarlo después de un tiempo y utilice indicaciones más breves para obtener resultados rápidos.",
      error500:
        "Yatter funciona con ChatGPT, lo que ha provocado algún error. Por favor sea paciente. Volveremos muy pronto.",
      error503:
        "Yatter funciona con ChatGPT, que actualmente está sobrecargado de solicitudes. Vuelva a intentarlo después de un tiempo.",
    },

    maintenance:
      "Yatter está en mantenimiento en este momento. Por favor, inténtalo de nuevo después de 15 minutos 🙏",
  },

  // French Instructions
  fra: {
    info: {
      profile:
        "Votre profil Yatter est votre centre d'identité ! 🌟 Maintenez votre profil à jour pour des réponses personnalisées de Yatter AI. \n\nInformations de profil: \n",
      features:
        "Débloquez le potentiel de l'assistant Yatter AI ! 🚀 Voici quelques fonctionnalités clés : \n\n🤖 ChatGPT sur WhatsApp \n📸 Comprend les images et répond aux questions qui y sont liées \n🎤 Comprend et répond à votre voix \n⏰ Planifiez des rappels, et Yatter vous alertera à l'heure convenue \n🧠 Comprend le contexte pour des conversations plus significatives \n💡 Donne des réponses précises et personnalisées \n🌍 Parle plusieurs langues \n🌦️ Fournit des informations et des prévisions météorologiques \n🔄 Revisitez d'anciens messages comme de nouveaux prompts \n📄 Lit de courts PDF pour vous \n💬 Support de chat sur WhatsApp \n💸 Plus abordable que ChatGPT \n\nEt bien plus encore ! Explorez les possibilités infinies avec Yatter AI. Rehaussez votre expérience conversationnelle dès aujourd'hui ! 😊✨",
      offers:
        "💎 Découvrez les incroyables pouvoirs de Yatter, propulsés par ChatGPT Plus avec nos options d'abonnement premium ! \n\n🌟 Optez pour un forfait mensuel, annuel ou à vie pour rendre votre expérience incroyable. \n",
      offerCoupon:
        "\n\nMais attendez, il y a plus! Vous pouvez utiliser les codes de réduction suivants pour obtenir une remise supplémentaire lors du paiement. \n\n",
      socials:
        "Connectez-vous avec nous sur les réseaux sociaux pour les dernières mises à jour, du contenu en coulisses et une expérience communautaire dynamique ! \n\n📸 Instagram : instagram.com/yatterai \n🐦 Twitter (maintenant X) : twitter.com/yatterai \n📘 Facebook : facebook.com/yatterai \n🔗 LinkedIn : linkedin.com/showcase/yatterai \n\nRejoignez-nous dans cette aventure passionnante ! Suivez nos profils et faites partie de la communauté Yatter. Votre connexion avec nous vient de devenir encore plus sociale ! 🚀 ",
      help: "Salut! 👋 Besoin d'aide avec Yatter? \n\nContactez-nous à : \n💬 WhatsApp : +919718665000 \n📧 E-mail : support@yatter.in \n🌐 Réseaux sociaux : @yatterai \n\nPour des options d'auto-assistance, tapez 'menu' pour explorer davantage. Nous sommes là pour vous aider ! 😊",
      cancelSubscriptionCommand:
        "*Remarque* : Pour annuler votre abonnement actif, veuillez taper .cancel",
      noActiveSubscriptionFound:
        "Vous n'avez actuellement aucun abonnement actif.",

      commandsInstructions:
        "⚙️ Voici la liste des commandes que vous pouvez utiliser avec Yatter : \n\n",
    },

    chat: {
      clearContext:
        "Le contexte de votre conversation a été effacé avec succès. Vous démarrez maintenant une nouvelle discussion ! Comment puis-je vous aider aujourd'hui ?",
      waitAMinute:
        "Attendez une minute s'il vous plaît ! L'IA détecte votre image. Vous aurez bientôt les résultats 🌟",
      togglePartialStreaming: "Le streaming partiel a été activé avec succès !",
      couldntGenerateResponse:
        "Impossible de générer une réponse IA. Veuillez effacer le contexte en tapant .clear et réessayer 🔃",
    },

    image: {
      genImageLoading:
        "Génération de votre image en arrière-plan. Veuillez patienter quelques secondes ⏳",
      imagePromptUnavailable:
        "Veuillez saisir une invite valide pour générer une image.",
    },

    reminders: {
      prefix:
        "⏰ Rappel Yatter 🔔 \n\nIl s'agit d'un rappel amical à propos de :\n",
      suffix:
        "\n\nAssurez-vous de marquer votre calendrier et de prendre toutes les mesures nécessaires. \n\nMerci et continuez à discuter 😊",
      list: "🔔 Ci-dessous se trouve la liste de vos rappels avec la date et l'heure.\n\n",

      deactivateAllReminders:
        "Tous vos rappels WhatsApp ont été désactivés avec succès 📵",
    },

    userRegistration: {
      newUserIntroduction:
        "👋 Salut ! Je suis Yatter, votre assistant alimenté par l'IA sur WhatsApp. \n\nAvec le cerveau de ChatGPT, les yeux de Google Gemini et la vision de Infokey, je peux... \n\n🔍 Trouver des informations rapidement pour vous \n🤖 Répondre à vos questions dans n'importe quelle langue \n🎓 Vous aider dans votre carrière \n📷 Lire et interpréter des images \n🗣 Comprendre vos messages vocaux \n🈵 Parler plusieurs langues \n🌦 Fournir des informations météorologiques \n⏰ Configurer des rappels WhatsApp \n📖 Résumer des PDFs courts \net bien plus encore, pour moins de la moitié du coût de ChatGPT. \n\n🌎 Réseaux Sociaux : https://linktr.ee/yatter \n💬 Support Client : +919718665000 \nFabriqué avec ❤️ En Inde \n\n🆕 Tapez /menu pour en savoir plus.",

      emailInputInstruction:
        "📧 Veuillez saisir votre adresse e-mail pour continuer. Il est nécessaire de vous fournir les mises à jour et les détails d'abonnement de Yatter.",
      inValidEmail: "Veuillez saisir une adresse e-mail valide pour continuer.",
      disposableEmail:
        "Veuillez noter que les e-mails factices ou jetables ne sont pas autorisés. Veuillez fournir un compte de messagerie pertinent.",
      emailUpdatedMessage:
        "😊 Merci ! Votre e-mail a été mis à jour. Nous vous tiendrons au courant des nouvelles fonctionnalités et de l'état de votre abonnement.",

      enterEmailExample: "EMAIL votre@email.com",
      wrongEmailInstruction:
        "⚠️ *Veuillez noter que* si vous avez saisi un mauvais e-mail par erreur, veuillez retaper votre e-mail dans le même format, c'est-à-dire \n\nEMAIL votre@email.com \n\nPour toute question ou problème, veuillez WhatsApp à nos responsables de service au +91 9718665000 ou contactez-nous sur Twitter @YatterAI",

      onboardingMessage: "Super de vous avoir à bord ",
      introAndAskQuestion:
        "Comment puis-je vous aider aujourd'hui? Demandez-moi n'importe quoi et obtenez des réponses instantanées 😉",
      askQuestion:
        "💬 Savez-vous? Vous pouvez en savoir plus sur moi en tapant /menu",
    },

    freeTier: {
      freeTierThanksMessage:
        "Ouah! Nous sommes heureux de savoir que vous appréciez autant Yatter ⚡. \n\n📢 Vous avez utilisé 80% de votre quota Free. \n\nMerci 😊",
      freeTierLimitExceededMessage:
        "😓 Votre quota gratuit de Yatter est terminé. Pour continuer à profiter de services ininterrompus, veuillez sélectionner votre plan d'abonnement préféré dans la liste ci-dessous.",
      freeTierVoiceMessageLimitExceeded:
        "🤐 Vous avez atteint la limite autorisée pour l'envoi de messages vocaux dans la version gratuite. Veuillez essayer de taper votre question ou vous abonner à Yatter.",
      freeTierImageRecognitionLimitExceeded:
        "📷 Oups ! Vous avez atteint la limite de reconnaissance d'images dans la version gratuite. Pour continuer à utiliser cette fonctionnalité, veuillez taper votre question ou vous abonner à Yatter ",
      freeTierDocumentRecognitionLimitExceeded:
        "Vous avez utilisé votre limite autorisée pour l'extraction de texte à partir de documents. Pour continuer à utiliser cette fonction, veuillez taper votre question ou envisager de vous abonner à Yatter. ",
    },

    subscription: {
      subscriptionPlansList:
        "Veuillez sélectionner votre plan d'abonnement préféré dans la liste ci-dessous. ",
      invalidSubscriptionPlan:
        "Veuillez choisir un plan d'abonnement valide. Sélectionnez l'un des numéros mentionnés pour vous abonner.",
      tapLinkToPay:
        "Pour terminer votre paiement, veuillez appuyer sur le lien suivant 🔗 \n\n",
      afterSubscriptionSelection:
        "😊 Merci! \n\nNous générons le lien de paiement pour vous. \n\nVeuillez patienter une seconde.",
      subscriptionPlanDenied:
        "🥺 Ce n'est pas grave, merci d'avoir pensé à notre service de niveau gratuit. \n\nSi vous avez eu une belle expérience, vous pouvez suggérer à vos amis ou à votre famille de l'essayer. Les *15 premières interactions* sont absolument gratuites. \n\nDe plus, vous pouvez toujours taper *YES* pour continuer à découvrir la génialité de Yatter 😉",
      subscriptionPlanReset:
        "Votre plan d'abonnement a été réinitialisé 🔄 Veuillez sélectionner un nouveau plan d'abonnement préféré pour continuer. ",
      voluntarySubscription:
        "🙌 Merci de l'intérêt que vous portez à vous abonner à notre service! Nous apprécions vraiment votre soutien. Voici les forfaits parmi lesquels vous pouvez choisir:",

      enjoyYatterPlus:
        "Merci de vous être abonné! \n\nVous pouvez désormais profiter d'une utilisation illimitée de Yatter ⚡️",

      alreadySubscribed:
        "Vous êtes déjà abonné à Yatter Plus. Merci et continuez à profiter!",
      subscriptionExpired:
        "Oh oh ! Votre abonnement a expiré. Voici les détails : ",
      resubscribeMessage:
        "Pour continuer à profiter de notre formidable chatbot IA Yatter ⚡, veuillez vous réabonner.",
      cancelSubscription:
        "😢 Triste de vous voir partir !\n\nVotre demande d'annulation d'abonnement a été acceptée et prendra fin à la date prévue. Profitez de tous les avantages de Yatter jusqu'à ce moment ! 🌟 Faites-nous savoir s'il y a quelque chose que nous pouvons améliorer. \n\n~ Yatter par Infokey",
    },

    payment: {
      paymentLinkExists:
        "Votre lien de paiement est déjà généré. Veuillez cliquer sur le lien ci-dessous pour finaliser votre paiement. \n\nPour modifier votre plan d'abonnement sélectionné, veuillez taper *RESET* \n\nEn cas de problème, veuillez contacter le service client Yatter sur WhatsApp au +91 9718665000. \n\n",
      paymeentUnderProcessing:
        "Votre paiement est en cours de traitement. Veuillez patienter un certain temps, le statut de votre paiement sera mis à jour très bientôt.",
      paymentCompleted: "🥳 Hourra! Votre abonnement est maintenant actif. \n",

      paymentFailed:
        "😨 Oh non, votre paiement a échoué ! Veuillez réessayer d'initier l'abonnement. \n\nEn cas de problème, contactez le service client WhatsApp Yatter ⚡ au +91 9718665000.",
    },

    userVerification: {
      enterOtpInstruction:
        "Veuillez entrer OTP reçu sur votre identifiant de messagerie enregistré dans le format suivant. Par exemple, si OTP reçu est 1234, tapez comme indiqué ci-dessous 👇\n\nVERIFY 1234",
      otpWaitingTime:
        "Veuillez garder à l'esprit que cela peut prendre jusqu'à 5 minutes pour recevoir l'OTP sur votre e-mail. Veuillez également vérifier votre dossier de courrier indésirable si vous ne trouvez pas l'e-mail OTP dans votre boîte de réception.",
      inValidOtp:
        "This OTP is wrong. Please retry again with OTP received on your Email.",

      verificationMessage:
        "Vous êtes un utilisateur vérifié maintenant. \n\nNous sommes ravis de savoir que vous appréciez nos services. Continuez à discuter 🤘",
    },

    onError: {
      errorWhileSavingDetails:
        "Erreur rencontrée lors de l'enregistrement des détails. Veuillez réessayer après un certain temps.",
      unknownError:
        "Oh-oh ! Une erreur inconnue s'est produite. Veuillez taper .clear et réessayer après un certain temps. \n\nSi vous continuez à rencontrer le problème, veuillez contacter le support client de Yatter sur WhatsApp au +91 9718665000.",
      invalidQues:
        "🤖 Désolé ! Je comprends seulement le texte, les images, les messages vocaux et les petits PDF. Veuillez réessayer avec une entrée valide.",
      unavailableInYourRegion:
        "😔 Désolé ! Yatter n'est pas disponible dans votre pays.",
      aiServerBusy:
        "Yatter est actuellement surchargé par d'autres demandes. Vous pouvez réessayer après un certain temps, utiliser une requête plus courte ou nous contacter au +91 9718665000 si l'erreur persiste.",
      noTextDetected:
        "Aucun texte trouvé dans votre image. Je ne peux vous aider qu'avec le contenu écrit présent dans l'image... 👀💬",

      audioUnderstandingError:
        "Oups ! Je n'ai pas pu comprendre votre voix. Veuillez réessayer et maintenez votre message vocal sous 3 minutes pour une meilleure précision.",
      imageUnderstandingError:
        "Oups ! Nous avons rencontré une erreur lors du traitement de l'image. Veuillez réessayer plus tard.",
      documentUnderstandingError:
        "Nous n'avons pas pu extraire le texte du document. Veuillez réessayer et assurez-vous que le document ne dépasse pas 2 MB en taille.",
      imageGenError:
        "Nous n'avons pas pu générer d'image à partir de votre invite. Veuillez réessayer plus tard.",

      noReminderFound:
        "Il semble qu'il n'y ait pas de rappels pour votre profil. Ne vous inquiétez pas, vous pouvez toujours en créer un en me demandant simplement.",
      invalidReminderTime:
        "Veuillez définir un rappel pour une heure future valide. Exemple 5 minutes ou plus dans le futur.",
      reminderLimitExceeded:
        "Vous avez atteint la limite de 10 rappels. Pour en créer un nouveau, veuillez envisager de supprimer les anciens.",
      errorWhileSettingReminder:
        "Oups ! Une erreur s'est produite lors de la définition du rappel. Veuillez réessayer après un certain temps.",
    },

    gptError: {
      error429:
        "Yatter connaît un trafic très important. Veuillez réessayer après un certain temps et utiliser des invites plus courtes pour obtenir des résultats rapides.",
      error500:
        "Yatter est alimenté par ChatGPT, ce qui a entraîné une erreur. S'il vous plaît soyez patient. Nous reviendrons très bientôt.",
      error503:
        "Yatter est alimenté par ChatGPT qui est actuellement surchargé de requêtes. Veuillez réessayer après un certain temps.",
    },

    maintenance:
      "Yatter est en maintenance en ce moment. Veuillez réessayer après 15 minutes 🙏",
  },

  // Portugese Instructions
  por: {
    info: {
      profile:
        "Seu perfil Yatter é o centro da sua identidade! 🌟 Mantenha seu perfil atualizado para respostas personalizadas do Yatter AI. \n\nInformações do perfil: \n",
      features:
        "Liberte o potencial do assistente Yatter AI! 🚀 Aqui estão algumas características-chave: \n\n🤖 ChatGPT no WhatsApp \n📸 Entende imagens e responde a perguntas relacionadas a elas \n🎤 Compreende e responde à sua voz \n⏰ Agende lembretes, e o Yatter o alertará no horário designado \n🧠 Entende o contexto para conversas mais significativas \n💡 Oferece respostas precisas e personalizadas \n🌍 Fala várias línguas \n🌦️ Fornece insights e previsões meteorológicas \n🔄 Revisite mensagens antigas como novas sugestões \n📄 Lê PDFs curtos para você \n💬 Suporte de chat no WhatsApp \n💸 Mais acessível que o ChatGPT \n\nE muito mais! Explore as possibilidades infinitas com o Yatter AI. Eleve a sua experiência conversacional hoje! 😊✨",
      offers:
        "💎 Experimente os incríveis poderes do Yatter, desenvolvido pelo ChatGPT Plus com nossas opções de assinatura premium! \n\n🌟 Opte por planos mensais, anuais ou vitalícios para tornar sua experiência incrível. \n",
      offerCoupon:
        "\n\nMas espere, tem mais! Você pode usar os seguintes códigos de cupom para obter um desconto adicional durante o checkout. \n\n",
      socials:
        "Conecte-se conosco nas redes sociais para as últimas atualizações, conteúdos exclusivos e uma experiência vibrante em comunidade! \n\n📸 Instagram: instagram.com/yatterai \n🐦 Twitter (agora X): twitter.com/yatterai \n📘 Facebook: facebook.com/yatterai \n🔗 LinkedIn: linkedin.com/showcase/yatterai \n\nJunte-se a nós nessa jornada emocionante! Siga nossos perfis e faça parte da comunidade Yatter. Sua conexão conosco acabou de se tornar mais social! 🚀 ",
      help: "Olá! 👋 Precisa de ajuda com o Yatter? \n\nEntre em contato conosco em: \n💬 WhatsApp: +919718665000 \n📧 E-mail: support@yatter.in \n🌐 Redes Sociais: @yatterai \n\nPara opções de autoajuda, digite 'menu' para explorar mais. Estamos aqui para ajudar! 😊",
      cancelSubscriptionCommand:
        "*Nota*: Para cancelar sua assinatura ativa, digite .cancel",
      noActiveSubscriptionFound:
        "Atualmente você não tem nenhuma assinatura ativa.",

      commandsInstructions:
        "⚙️ Aqui está a lista de comandos que você pode usar com o Yatter: \n\n",
    },

    chat: {
      clearContext:
        "O contexto da sua conversa foi limpo com sucesso. Agora você está começando com um novo bate-papo! Como posso ajudá-lo hoje?",
      waitAMinute:
        "Espere um minuto, por favor! A IA está detectando sua imagem. Você obterá os resultados em breve 🌟",
      togglePartialStreaming:
        "A transmissão parcial foi alternada com sucesso!",
      couldntGenerateResponse:
        "Não foi possível gerar resposta de IA. Limpe o contexto digitando .clear e tente novamente 🔃",
    },

    image: {
      genImageLoading:
        "Gerando sua imagem em segundo plano. Por favor, aguarde alguns segundos ⏳",
      imagePromptUnavailable:
        "Digite algum prompt válido para gerar uma imagem.",
    },

    reminders: {
      prefix: "⏰ Lembrete Yatter 🔔 \n\nEste é um lembrete amigável sobre:\n",
      suffix:
        "\n\nCertifique-se de marcar no seu calendário e tomar as ações necessárias. \n\nObrigado e continue conversando 😊",
      list: "🔔 A seguir está a lista dos seus lembretes juntamente com a data e a hora.\n\n",

      deactivateAllReminders:
        "Todos os seus lembretes do WhatsApp foram desativados com sucesso 📵",
    },

    userRegistration: {
      newUserIntroduction:
        "👋 Olá! Eu sou o Yatter, seu assistente alimentado por IA no WhatsApp. \n\nCom o cérebro do ChatGPT, os olhos do Google Gemini e a visão da Infokey, eu posso... \n\n🔍 Encontrar informações para você rapidamente \n🤖 Responder às suas perguntas em qualquer idioma \n🎓 Ajudar você em sua carreira \n📷 Ler e interpretar imagens \n🗣 Entender suas mensagens de voz \n🈵 Falar várias línguas \n🌦 Dar insights sobre o clima \n⏰ Configurar lembretes no WhatsApp \n📖 Resumir PDFs curtos \ne muito mais, por menos da metade do custo do ChatGPT. \n\n🌎 Redes Sociais: https://linktr.ee/yatter \n💬 Suporte ao Cliente: +919718665000 \nFeito com ❤️ Na Índia \n\n🆕 Digite /menu para explorar mais.",

      emailInputInstruction:
        "📧 Por favor, digite seu endereço de email para prosseguir. É necessário para fornecer a você as atualizações e detalhes de assinatura do Yatter.",
      inValidEmail: "Digite um endereço de e-mail válido para continuar.",
      disposableEmail:
        "Observe que e-mails fictícios ou descartáveis ​​não são permitidos. Forneça uma conta de e-mail relevante.",
      emailUpdatedMessage:
        "😊 Obrigado! Seu e-mail foi atualizado. Manteremos você atualizado com os novos recursos e o status da sua assinatura.",

      enterEmailExample: "EMAIL seu@email.com",
      wrongEmailInstruction:
        "⚠️ *Observe que* se você digitou o e-mail errado por engano, digite novamente o seu e-mail no mesmo formato i.e. \n\nEMAIL seu@email.com \n\nPara qualquer dúvida ou problema, envie um WhatsApp para nossos executivos de serviço em +91 9718665000 ou entre em contato conosco no Twitter @YatterAI",

      onboardingMessage: "Bem-vindo ao Yatter ⚡. ",
      introAndAskQuestion:
        "Como posso ajudá-lo hoje? Pergunte-me qualquer coisa e obtenha respostas instantâneas 😉",
      askQuestion:
        "💬 Você sabia? Você pode descobrir mais sobre mim digitando /menu",
    },

    freeTier: {
      freeTierThanksMessage:
        "Uau! Ficamos felizes em saber que você está gostando tanto do Yatter ⚡. \n\nVocê usou 80% de sua cota Gratuita. \n\nObrigado 😊",
      freeTierLimitExceededMessage:
        "😓 Sua cota gratuita do Yatter está concluída. Para continuar desfrutando de serviços ininterruptos, selecione seu plano de assinatura preferido na lista abaixo.",
      freeTierVoiceMessageLimitExceeded:
        "🤐 Você ultrapassou o limite permitido para enviar mensagens de voz na versão gratuita. Por favor, tente digitar sua pergunta ou assine o Yatter.",
      freeTierImageRecognitionLimitExceeded:
        "📷 Ops! Você atingiu o limite de reconhecimento de imagens na versão gratuita. Para continuar usando esse recurso, por favor digite sua pergunta ou assine o Yatter ",
      freeTierDocumentRecognitionLimitExceeded:
        "Você esgotou o limite permitido para extração de texto de documentos. Para continuar usando esta funcionalidade, por favor digite sua pergunta ou considere assinar o Yatter. ",
    },

    subscription: {
      subscriptionPlansList:
        "Selecione seu plano de assinatura preferido na lista abaixo. ",
      invalidSubscriptionPlan:
        "Escolha um plano de assinatura válido. Selecione um dos números mencionados para se inscrever.",
      tapLinkToPay:
        "Para concluir seu pagamento, toque no seguinte link 🔗 \n\n",
      afterSubscriptionSelection:
        "😊 Obrigado! \n\nEstamos gerando o link de pagamento para você. \n\nPor favor, espere um segundo.",
      subscriptionPlanDenied:
        "🥺 Tudo bem, obrigado por considerar nosso serviço de nível gratuito. \n\nSe você teve uma boa experiência, pode sugerir a seus amigos ou familiares que experimentem. As primeiras *15 interações* são totalmente gratuitas. \n\nAlém disso, você ainda pode digitar *YES* para continuar experimentando a grandiosidade de Yatter 😉",
      subscriptionPlanReset:
        "Seu plano de assinatura foi redefinido 🔄 Selecione um novo plano de assinatura preferido para continuar. ",
      voluntarySubscription:
        "🙌 Obrigado pelo seu interesse em assinar nosso serviço! Nós realmente apreciamos seu apoio. Aqui estão os planos que você pode escolher:",

      enjoyYatterPlus:
        "Obrigado por se inscrever! \n\nAgora você pode aproveitar o uso ilimitado do Yatter ⚡️",

      alreadySubscribed:
        "Você já está inscrito no Yatter Plus. Obrigado e continue aproveitando!",
      subscriptionExpired:
        "Oh não! Sua assinatura expirou. A seguir estão os detalhes : ",
      resubscribeMessage:
        "Para continuar aproveitando nosso incrível chatbot AI Yatter ⚡, inscreva-se novamente.",
      cancelSubscription:
        "😢 Triste em vê-lo partir!\n\nSua solicitação de cancelamento de assinatura foi aceita e será cancelada na data agendada. Até lá, aproveite todos os benefícios do Yatter! 🌟 Deixe-nos saber se há algo que podemos fazer melhor. \n\n~ Yatter por Infokey",
    },

    payment: {
      paymentLinkExists:
        "Seu link de pagamento já foi gerado. Por favor, clique no link abaixo para concluir seu pagamento. \n\nPara alterar seu plano de assinatura selecionado, digite *RESET* \n\nEm caso de qualquer problema, entre em contato com o Suporte ao Cliente do Yatter no WhatsApp pelo número +91 9718665000. \n\n",
      paymeentUnderProcessing:
        "Seu pagamento está em processamento. Aguarde um pouco, o status do seu pagamento será atualizado em breve.",
      paymentCompleted: "🥳 Yay! Sua assinatura está ativa agora. \n",

      paymentFailed:
        "😨 Oh não, seu pagamento falhou! Tente iniciar a assinatura novamente. \n\nEm caso de problemas, WhatsApp Yatter ⚡ Customer Service em +91 9718665000.",
    },

    userVerification: {
      enterOtpInstruction:
        "Insira OTP recebido em seu ID de e-mail registrado no seguinte formato. Por exemplo, se o OTP recebido for 1234, digite conforme mostrado abaixo 👇\n\nVERIFY 1234",
      otpWaitingTime:
        "Lembre-se de que pode levar até 5 minutos para receber o OTP em seu e-mail. Além disso, verifique sua pasta de spam de e-mail se não encontrar o e-mail OTP em sua caixa de entrada.",
      inValidOtp:
        "Este OTP está errado. Tente novamente com OTP recebido em seu e-mail.",

      verificationMessage:
        "Você é um usuário verificado agora. \n\nFicamos felizes em saber que está gostando de nossos serviços. Continue Yattering 🤘",
    },

    onError: {
      errorWhileSavingDetails:
        "Erro encontrado ao salvar detalhes. Por favor tente novamente depois de algum tempo.",
      unknownError:
        "Uh-oh! Ocorreu algum erro desconhecido. Digite .clear e tente depois de algum tempo. \n\nCaso ainda enfrente o problema, por favor, entre em contato com o Suporte ao Cliente do Yatter via WhatsApp pelo número +91 9718665000.",
      invalidQues:
        "🤖 Desculpe! Eu só entendo texto, imagens, mensagens de voz e PDFs pequenos. Por favor, tente novamente com uma entrada válida.",
      unavailableInYourRegion:
        "😔 Desculpe! O Yatter não está disponível no seu país.",
      aiServerBusy:
        "O Yatter está atualmente sobrecarregado com outras solicitações. Você pode tentar novamente após algum tempo, usar uma solicitação mais curta ou entrar em contato conosco pelo +91 9718665000 se o erro persistir.",
      noTextDetected:
        "Nenhum texto encontrado na sua imagem. Posso apenas ajudar com o conteúdo escrito presente na imagem... 👀💬",

      audioUnderstandingError:
        "Oops! Não consegui entender sua voz. Por favor, tente novamente e mantenha sua mensagem de voz abaixo de 3 minutos para melhor precisão.",
      imageUnderstandingError:
        "Oops! Encontramos um erro ao processar a imagem. Por favor, tente novamente mais tarde.",
      documentUnderstandingError:
        "Não foi possível extrair texto do documento. Por favor, tente novamente e certifique-se de que o documento tenha menos de 2 MB de tamanho.",
      imageGenError:
        "Não foi possível gerar a imagem a partir do seu prompt. Por favor, tente novamente mais tarde.",

      noReminderFound:
        "Parece que não há lembretes para o seu perfil. Não se preocupe, você sempre pode criar um novo me pedindo.",
      invalidReminderTime:
        "Por favor, defina um lembrete para um horário futuro válido. Exemplo 5 minutos ou mais no futuro.",
      reminderLimitExceeded:
        "Você atingiu o limite de 10 lembretes. Para criar um novo, considere excluir os antigos.",
      errorWhileSettingReminder:
        "Ops! Houve um erro ao configurar o lembrete. Por favor, tente novamente depois de algum tempo.",
    },

    gptError: {
      error429:
        "Yatter está enfrentando um tráfego muito alto. Tente novamente depois de algum tempo e use prompts mais curtos para obter resultados rápidos.",
      error500:
        "Yatter é desenvolvido por ChatGPT, o que gerou alguns erros. Por favor, seja paciente. Voltaremos muito em breve.",
      error503:
        "O Yatter é desenvolvido com ChatGPT, que atualmente está sobrecarregado de solicitações. Por favor, tente novamente depois de algum tempo.",
    },

    maintenance:
      "Yatter está em manutenção agora. Por favor, tente novamente após 15 minutos 🙏",
  },

  // Hindi Instructions
  hin: {
    info: {
      profile:
        "आपका Yatter प्रोफ़ाइल आपकी पहचान का केंद्र है! 🌟 अपने प्रोफ़ाइल को अद्यतित रखें ताकि आपको Yatter AI के व्यक्तिगत जवाब मिलें। \n\nप्रोफ़ाइल जानकारी: \n",
      features:
        "Yatter AI सहायक की संभावनाओं को खोलें! 🚀 यहाँ कुछ प्रमुख विशेषताएँ हैं: \n\n🤖 WhatsApp पर ChatGPT \n📸 छवियों को समझता है और उनसे संबंधित प्रश्नों का जवाब देता है \n🎤 आपकी आवाज को समझता है और उसका जवाब देता है \n⏰ अनुस्मारक या अलार्म सेट करें, और Yatter आपको निर्धारित समय पर सूचित करेगा \n🧠 और सार्थक बातचीत के लिए संदर्भ लेता है \n💡 सटीक और व्यक्तिगत उत्तर देता है \n🌍 कई भाषाओं में बोलता है \n🌦️ मौसम के इंगित और पूर्वानुमान प्रदान करता है \n🔄 पुराने संदेशों को नए प्रॉम्प्ट्स के रूप में पुनः देखें \n📄 आपके लिए छोटे PDF पढ़ता है \n💬 WhatsApp चैट समर्थन \n💸 ChatGPT से कम खर्चीला \n\nYatter AI के साथ अनगिनत संभावनाओं की खोज करें. अपने बातचीत अनुभव को आज उच्च करें! 😊✨",
      offers:
        "💎 हमारे प्रीमियम सदस्यता विकल्पों के साथ चैटजीपीटी 4 टर्बो द्वारा संचालित येटर की अविश्वसनीय शक्तियों का अनुभव करें! \n\n🌟 अपने अनुभव को अद्भुत बनाने के लिए मासिक, वार्षिक या आजीवन योजनाएँ चुनें। \n",
      offerCoupon:
        "\n\nलेकिन रुकिए, और भी बहुत कुछ है! चेकआउट के दौरान अतिरिक्त छूट पाने के लिए आप निम्नलिखित कूपन कोड का उपयोग कर सकते हैं। \n\n",
      socials:
        "सोशल मीडिया पर हमारे साथ जुड़ें और नवीनतम अपडेट्स, बीहाइंड-द-सीन्स कंटेंट, और एक जीवंत समुदाय अनुभव करें! \n\n📸 Instagram: instagram.com/yatterai \n🐦 Twitter (अब X): twitter.com/yatterai \n📘 Facebook: facebook.com/yatterai \n🔗 LinkedIn: linkedin.com/showcase/yatterai \n\nहमारे साथ इस रोमांटिक सफर में शामिल हों! हमारे प्रोफाइल को फॉलो करें और Yatter समुदाय का हिस्सा बनें. आपका हमारे साथ जुड़ाव अब सोशल हो गया है! 🚀 ",
      help: "नमस्ते! 👋 क्या आपको Yatter के साथ सहायता की आवश्यकता है? \n\nहमसे संपर्क करें: \n💬 WhatsApp: +919718665000 \n📧 ईमेल: support@yatter.in \n🌐 सोशल मीडिया: @yatterai \n\nआत्म-सहायता विकल्पों के लिए, 'menu' टाइप करें और और जानें. हम यहाँ हैं आपकी सहायता के लिए! 😊",
      cancelSubscriptionCommand:
        "*नोट* : अपनी सक्रिय सदस्यता रद्द करने के लिए, कृपया .cancel टाइप करें",
      noActiveSubscriptionFound:
        "आपके पास वर्तमान में कोई सक्रिय सदस्यता नहीं है।",

      commandsInstructions:
        "⚙️ यहां उन कमांडों की सूची दी गई है जिनका उपयोग आप येटर के साथ कर सकते हैं: \n\n",
    },

    chat: {
      clearContext:
        "आपका वार्तालाप प्रसंग सफलतापूर्वक साफ़ कर दिया गया है। अब आप एक नई चैट से शुरुआत कर रहे हैं! आज मैं आपकी कैसे सहायता कर सकता हूँ?",
      waitAMinute:
        "कृपया एक मिनट रुकें! AI आपकी छवि का पता लगा रहा है. आपको जल्द ही परिणाम मिलेंगे 🌟",
      togglePartialStreaming: "आंशिक स्ट्रीमिंग सफलतापूर्वक टॉगल कर दी गई है!",
      couldntGenerateResponse:
        "एआई प्रतिक्रिया उत्पन्न नहीं कर सका। कृपया .clear टाइप करके संदर्भ साफ़ करें और पुनः प्रयास करें 🔃",
    },

    image: {
      genImageLoading:
        "आपकी छवि पृष्ठभूमि में बनाई जा रही है। कृपया कुछ सेकंड प्रतीक्षा करें ⏳",
      imagePromptUnavailable:
        "छवि उत्पन्न करने के लिए कृपया कुछ वैध संकेत टाइप करें।",
    },

    reminders: {
      prefix: "⏰ यैटर रिमाइंडर 🔔 \n\nयह एक सौम्य रिमाइंडर है:\n",
      suffix:
        "\n\nकृपया सुनिश्चित करें कि आप अपना कैलेंडर मार्क करें और कोई आवश्यक कदम उठाएं। \n\nधन्यवाद और चैटिंग जारी रखें 😊",
      list: "🔔 नीचे आपके रिमाइंडर की सूची और तिथि-समय है।\n\n",

      deactivateAllReminders:
        "आपके सभी व्हाट्सएप अनुस्मारक सफलतापूर्वक निष्क्रिय कर दिए गए हैं 📵",
    },

    userRegistration: {
      newUserIntroduction:
        "👋 नमस्ते! मैं हूँ यैटर, आपका व्हाट्सएप पर एआई-पावर्ड सहायक। \n\nChatGPT के दिमाग, Google Gemini की आंखें, और Infokey की दृष्टि के साथ, मैं... \n\n🔍 तुम्हारे लिए जल्दी से जानकारी प्राप्त करना \n🤖 तुम्हारे सवालों का उत्तर किसी भी भाषा में देना \n🎓 तुम्हें तुम्हारे करियर में मदद करना \n📷 छवियों को पढ़ना और व्याख्या करना \n🗣 तुम्हारे आवाज संदेशों को समझना \n🈵 कई भाषाओं में बोलना \n🌦 हवा के बारे में जानकारी देना \n⏰ WhatsApp रिमाइंडर्स सेट करना \n📖 संक्षेपित करना छोटे PDFs \nऔर इससे कम, ChatGPT की कीमत के लगभग आधे की तुलना में। \n\n🌎 सोशल्स: https://linktr.ee/yatter \n💬 ग्राहक समर्थन: +919718665000 \nभारत में ❤️ के साथ निर्मित \n\n🆕 और जानकारी के लिए /menu लिखें",

      emailInputInstruction:
        "📧 कृपया आगे बढ़ने के लिए अपना ईमेल आईडी टाइप करें। यह आपको Yatter अपडेट और सदस्यता विवरण प्रदान करने के लिए आवश्यक है।",
      inValidEmail: "कृपया जारी रखने के लिए एक मान्य ईमेल आईडी टाइप करें।",
      disposableEmail:
        "कृपया ध्यान दें कि डमी या डिस्पोजेबल ईमेल की अनुमति नहीं है। कृपया एक प्रासंगिक ईमेल खाता प्रदान करें.",
      emailUpdatedMessage:
        "😊 धन्यवाद! आपका ईमेल अपडेट कर दिया गया है। हम आपको नई सुविधाओं और आपकी सदस्यता स्थिति से अपडेट रखेंगे।",

      enterEmailExample: "EMAIL your@email.com",
      wrongEmailInstruction:
        "⚠️ *कृपया ध्यान दें कि* यदि आपने गलती से गलत ईमेल दर्ज कर दिया है तो कृपया अपना ईमेल उसी प्रारूप में पुनः टाइप करें अर्थात। \n\nEMAIL your@email.com \n\nकिसी भी प्रश्न या समस्या के लिए, कृपया हमारे सेवा अधिकारियों को +91 9718665000 पर व्हाट्सएप करें या ट्विटर @YatterAI पर हमसे संपर्क करें।",

      onboardingMessage: "यत्तर प्लस में आपका स्वागत है ",
      introAndAskQuestion:
        "आज मैं आपकी मदद किस तरह कर सकता हूँ? मुझसे कुछ भी पूछें और तुरंत उत्तर प्राप्त करें 😉",
      askQuestion:
        "💬 क्या आप जानते हैं? आप /menu लिख कर मेरे बारे में और जानकारी प्राप्त कर सकते हैं।",
    },

    freeTier: {
      freeTierThanksMessage:
        "अरे वाह! हमें ये जानकर बहुत खुशी हुई कि आपको Yatter ⚡ अच्छा लगा। \n\n📢 आपने अपने फ्री कोटा का 80% उपयोग कर लिया है। \n\nधन्यवाद 😊",
      freeTierLimitExceededMessage:
        "😓 यैटर की नि: शुल्क टियर क्वोटा समाप्त हो गया है। बिना रुकावट के सेवाओं का आनंद लेने के लिए कृपया नीचे दी गई सूची से अपनी पसंदीदा सदस्यता योजना का चयन करें।",
      freeTierVoiceMessageLimitExceeded:
        "🤐 आपने मुफ्त संस्करण में वॉयस नोट्स भेजने की अनुमति सीमा पूरी कर ली है। कृपया अपना सवाल टाइप करने का प्रयास करें या Yatter में सदस्यता लें।",
      freeTierImageRecognitionLimitExceeded:
        "📷 उफ़! आपने मुफ़्त संस्करण में छवि पहचान की सीमा तक पहुंच गए हैं। इस सुविधा का उपयोग जारी रखने के लिए, कृपया अपना सवाल टाइप करें या Yatter में सदस्यता लें। ",
      freeTierDocumentRecognitionLimitExceeded:
        "आपने दस्तावेज़ से पाठ निकालने की अनुमति की सीमा का उपयोग कर लिया है। इस सुविधा का उपयोग जारी रखने के लिए कृपया अपना सवाल टाइप करें या Yatter की सदस्यता लेने की विचार करें। ",
    },

    subscription: {
      subscriptionPlansList:
        "कृपया नीचे दी गई सूची से अपना पसंदीदा सब्सक्रिप्शन प्लान चुनें। ",
      invalidSubscriptionPlan:
        "कृपया एक मान्य सब्सक्रिप्शन चुनें। सदस्यता लेने के लिए उल्लिखित संख्याओं में से एक का चयन करें।",
      tapLinkToPay:
        "अपना भुगतान पूरा करने के लिए, कृपया निम्न लिंक पर टैप करें 🔗 \n\n",
      afterSubscriptionSelection:
        "😊 धन्यवाद! \n\nहम आपके लिए भुगतान लिंक तैयार कर रहे हैं। \n\nकृपया एक सेकंड रुकें।",
      subscriptionPlanDenied:
        "🥺 कोई बात नहीं, हमारी मुफ़्त स्तरीय सेवा पर विचार करने के लिए धन्यवाद। \n\nयदि आपका अनुभव अच्छा रहा, तो आप अपने दोस्तों या परिवार को इसे आजमाने का सुझाव दे सकते हैं। पहली *15 बातचीत* बिल्कुल मुफ्त है। \n\nसाथ ही, Yatter की अद्भुतता का अनुभव करते रहने के लिए आप अभी भी *YES* टाइप कर सकते हैं 😉",
      subscriptionPlanReset:
        "आपकी सदस्यता योजना रीसेट कर दी गई है 🔄 कृपया जारी रखने के लिए एक नई पसंदीदा सदस्यता योजना चुनें। ",
      voluntarySubscription:
        "🙌 हमारी सेवा की सदस्यता लेने में आपकी रुचि के लिए धन्यवाद! हम वास्तव में आपके समर्थन की सराहना करते हैं। यहां वे योजनाएं हैं जिनमें से आप चुन सकते हैं:",

      enjoyYatterPlus:
        "सदस्यता लेने के लिए धन्यवाद! \n\nअब आप Yatter के असीमित उपयोग का आनंद ले सकते हैं ⚡️",

      alreadySubscribed:
        "आप पहले से ही येटर प्लस की सदस्यता ले चुके हैं। धन्यवाद और आनंद लेते रहें!",
      subscriptionExpired:
        "अरे नहीं! आपकी सदस्यता समाप्त हो गई है। निम्नलिखित विवरण हैं : ",
      resubscribeMessage:
        "हमारे बेहतरीन AI चैटबॉट Yatter ⚡ का आनंद लेना जारी रखने के लिए, कृपया फिर से सब्सक्राइब करें।",
      cancelSubscription:
        "😢 जानकर दुःख हुआ! \n\nआपके सदस्यता रद्द करने का अनुरोध स्वीकृत हुआ है और इसे आपकी योजना की समाप्ति तिथि पर समाप्त हो जाएगा। तब तक Yatter का आनंद लें! 🌟 हमें अवश्य बताएं कि क्या ऐसा कुछ है जिसे हम बेहतर कर सकते हैं। \n\n~ Yatter द्वारा Infokey",
    },

    payment: {
      paymentLinkExists:
        "आपका भुगतान लिंक पहले से ही तैयार है। कृपया अपना भुगतान पूरा करने के लिए नीचे दिए गए लिंक पर टैप करें। \n\nअपनी चयनित सब्सक्रिप्शन बदलने के लिए *RESET* टाइप करें \n\nकिसी भी समस्या की स्थिति में, +91 9718665000 पर Yatter ग्राहक सहायता को व्हाट्सएप पर संपर्क करें। \n\n",
      paymeentUnderProcessing:
        "आपका भुगतान संसाधित हो रहा है। कृपया कुछ समय प्रतीक्षा करें, आपके भुगतान की स्थिति बहुत जल्द अपडेट कर दी जाएगी।",
      paymentCompleted: "🥳 आपकी सदस्यता अब सक्रिय है। \n",

      paymentFailed:
        "😨 अरे नहीं, आपका भुगतान विफल रहा! कृपया सदस्यता आरंभ करने का पुन: प्रयास करें। \n\nकिसी भी समस्या के मामले में, Yatter ⚡ ग्राहक सेवा को WhatsApp +91 9718665000 करें।",
    },

    userVerification: {
      enterOtpInstruction:
        "कृपया निम्नलिखित प्रारूप में अपनी पंजीकृत ईमेल आईडी पर प्राप्त ओटीपी दर्ज करें। उदाहरण के लिए, यदि प्राप्त हुआ ओटीपी 1234 है तो नीचे दिखाए अनुसार टाइप करें 👇\n\nVERIFY 1234",
      otpWaitingTime:
        "कृपया ध्यान रखें कि आपके ईमेल पर ओटीपी प्राप्त करने में 5 मिनट तक का समय लग सकता है। साथ ही, यदि आपको अपने इनबॉक्स में ओटीपी ईमेल नहीं मिलता है तो कृपया अपना ईमेल स्पैम फोल्डर देखें।",
      inValidOtp:
        "यह ओटीपी गलत है। कृपया आपके ईमेल पर प्राप्त ओटीपी के साथ पुन: प्रयास करें।",

      verificationMessage:
        "अब आप एक सत्यापित उपयोगकर्ता हैं। \n\nहमें यह जानकर प्रसन्नता हुई कि आप हमारी सेवाओं का आनंद ले रहे हैं। बतियाते रहो 🤘",
    },

    onError: {
      errorWhileSavingDetails:
        "विवरण सहेजते समय त्रुटि हुई। कृपया कुछ समय बाद पुन: प्रयास करें।",
      unknownError:
        "उह ओह! कोई अज्ञात त्रुटि हुई. कृपया .clear टाइप करें और कुछ समय बाद प्रयास करें। \n\nयदि आप फिर भी समस्या का सामना कर रहे हैं, कृपया +91 9718665000 पर व्हाट्सएप के माध्यम से यैटर ग्राहक सहायता से संपर्क करें।",
      invalidQues:
        "🤖 क्षमा करें! मैं केवल टेक्स्ट, छवियाँ, आवाज संदेश और छोटे PDF को समझता हूँ। कृपया वैध इनपुट के साथ पुनः प्रयास करें।",
      unavailableInYourRegion:
        "😔 माफ़ कीजिए! यैटर आपके देश में उपलब्ध नहीं है।",
      aiServerBusy:
        "Yatter वर्तमान में अन्य अनुरोधों से ओवरलोड है। आप कुछ समय बाद पुन: प्रयास कर सकते हैं, एक छोटे से प्रॉम्प्ट का उपयोग करें, या अगर त्रुटि बनी रहती है, तो हमसे +91 9718665000 पर संपर्क करें।",
      noTextDetected:
        "आपकी छवि में कोई टेक्स्ट नहीं मिला। मैं केवल छवि में मौजूद लिखित सामग्री की मदद कर सकता हूँ... 👀💬",

      audioUnderstandingError:
        "ओहो! मुझे आपकी आवाज़ समझ नहीं आई। कृपया फिर से कोशिश करें और अपने आवाज़ संदेश को 3 मिनट से कम रखें, ताकि बेहतर सहीता हो सके।",
      imageUnderstandingError:
        "ओहो! हमें छवि को प्रोसेस करते समय एक त्रुटि का सामना करना पड़ा। कृपया बाद में पुनः प्रयास करें।",
      documentUnderstandingError:
        "हम दस्तावेज़ से पाठ नहीं निकाल सके। कृपया फिर से कोशिश करें, और सुनिश्चित करें कि दस्तावेज़ 2 MB से कम हो।",
      imageGenError:
        "हम आपके प्रॉम्प्ट से छवि उत्पन्न नहीं कर सके। कृपया बाद में पुन: प्रयास करें।",

      noReminderFound:
        "ऐसा लगता है कि आपके प्रोफ़ाइल पर कोई रिमाइंडर नहीं है। चिंता न करें, आप हमेशा मुझसे बोलकर एक नया रिमाइंडर बना सकते हैं!",
      invalidReminderTime:
        "कृपया भविष्य के वैध समय के लिए एक अनुस्मारक सेट करें। उदाहरण के लिए भविष्य में 5 मिनट या अधिक।",
      reminderLimitExceeded:
        "आपने 10 रिमाइंडर की सीमा इस्तेमाल कर ली है। एक नया बनाने के लिए, कृपया पुराने रिमाइंडर हटाएं।",
      errorWhileSettingReminder:
        "ओह! रिमाइंडर सेट करते समय कुछ गड़बड़ हो गई है। कृपया थोड़ी देर बाद फिर से कोशिश करें।",
    },

    gptError: {
      error429:
        "येटर बहुत अधिक ट्रैफ़िक का अनुभव कर रहा है। कृपया कुछ समय बाद पुनः प्रयास करें और त्वरित परिणामों के लिए छोटे प्रशानो का उपयोग करें।",
      error500:
        "येटर चैटजीपीटी द्वारा संचालित है जिसमें कुछ त्रुटि हुई है। कृपया धैर्य रखें। हम बहुत जल्द वापस आएँगे।",
      error503:
        "येटर चैटजीपीटी द्वारा संचालित है जो वर्तमान में अनुरोधों से भरा हुआ है। कृपया कुछ समय बाद पुनः प्रयास करें.",
    },

    maintenance:
      "यैटर अभी रखरखाव में है। कृपया 15 मिनट के बाद पुनः प्रयास करें 🙏",
  },

  // Hebrew Instructions
  heb: {
    info: {
      profile:
        "הפרופיל שלך ב-Yatter הוא המרכז שלך לזהות! 🌟 שמור על הפרופיל שלך מעודכן כדי לקבל תגובות אישיות מהמערכת Yatter AI. \n\nמידע בפרופיל: \n",
      features:
        "פתח את יכולת העזר של Yatter AI! 🚀 הנה כמה יכולות מרכזיות: \n\n🤖 ChatGPT ב-WhatsApp \n📸 מבין תמונות ומגיב לשאלות הקשורות אליהן \n🎤 מבין ומגיב לקול שלך \n⏰ קבעו תזכורות, וה-Yatter יזכיר לכם בזמן המתאי \n🧠 אחזק תודעה לשיחות משמעותיות יותר \n💡 נותן תשובות מדויקות ואישיות \n🌍 מדבר במספר שפות \n🌦️ ספק תובנות ותחזיות מזג האוויר \n🔄 התחדשות בהודעות ישנות כפרומטים חדשים \n📄 קורא PDF קצרים עבורך \n💬 תמיכת צ'אט ב-WhatsApp \n💸 יותר זול מ-ChatGPT \n\nועוד הרבה יותר! חקור את האפשרויות האינסופיות עם Yatter AI. העלה את חוויית השיחה שלך היום! 😊✨",
      offers:
        "חווה את הכוחות המדהימים של Yatter, המופעל על ידי ChatGPT Plus עם אפשרויות המנוי הפרימיום שלנו! 💎 \n\n🌟 בחר בתוכנית חודשית, שנתית או לכל החיים כדי להפוך את החוויה שלך למדהימה\n",
      offerCoupon:
        "\n\nאך המתן, יש עוד! ניתן להשתמש בקודי קופון הבאים כדי לקבל הנחה נוספת במהלך התשלום. \n\n",
      socials:
        "התחברו אלינו ברשתות החברתיות לעדכונים האחרונים, תוכן מאחורי הקלעים וחוויית קהילה דומיננטית! \n\n📸 Instagram: instagram.com/yatterai \n🐦 Twitter (עכשיו X): twitter.com/yatterai \n📘 Facebook: facebook.com/yatterai \n🔗 LinkedIn: linkedin.com/showcase/yatterai \n\nהצטרפו אלינו במסע המרגש הזה! עקבו אחרי הפרופילים שלנו והפכו לחלק מקהילת Yatter. החיבור שלכם איתנו הפך יותר חברתי! 🚀 ",
      help: `שלום! 👋 צריך עזרה עם Yatter? \n\nצור קשר ב: \n💬 WhatsApp: +919718665000 \n📧 דוא"ל: support@yatter.in \n🌐 רשתות חברתיות: @yatterai \n\nלאפשרויות עזרה עצמית, הקלד 'menu' כדי לגלות יותר. אנו כאן לעזור! 😊`,
      cancelSubscriptionCommand:
        "הערה: כדי לבטל את המנוי הפעיל שלך, אנא הקלד .cancel",
      noActiveSubscriptionFound: "אין לך כרגע מנוי פעיל.",

      commandsInstructions:
        "⚙️ הנה רשימת הפקודות שבהן תוכל להשתמש עם Yatter: \n\n",
    },

    chat: {
      clearContext:
        "הקשר השיחה שלך נוקה בהצלחה. אתה מתחיל עכשיו בצ'אט חדש! איך אני יכול לעזור לך היום?",
      waitAMinute:
        "חכה רגע בבקשה! AI מזהה את התמונה שלך. את התוצאות תקבלו בקרוב 🌟",
      togglePartialStreaming: "זרימה חלקית התחלפה בהצלחה!",
      couldntGenerateResponse:
        "לא ניתן היה ליצור תגובת AI. נא לנקות את ההקשר על ידי הקלדת .clear ונסה שוב 🔃",
    },

    image: {
      genImageLoading: "התמונה שלך נוצרת ברקע. אנא המתן מספר שניות ⏳",
      imagePromptUnavailable: "אנא הקלד בקשה חוקית ליצירת תמונה.",
    },

    reminders: {
      prefix: "⏰ תזכורת Yatter 🔔 \n\nזוהי תזכורת ידידותית אודות:\n",
      suffix:
        "\n\nוודא שסימנת בלוח שנה שלך ונקטת כל צעד נדרש. \n\nתודה והמשך לשוחח 😊",
      list: "🔔 להלן רשימת התזכורות שלך יחד עם התאריך והשעה.\n\n",

      deactivateAllReminders: "כל התזכורות שלך ב-WhatsApp הושבתו בהצלחה 📵",
    },

    userRegistration: {
      newUserIntroduction:
        "👋 שלום! אני יאטר, הסייען המופעל בהוראות קול שלך בוואטסאפ. \n\nעם המוח של ChatGPT, עיניי Google Gemini וחזון Infokey, אני יכול/יכולה... \n\n🔍 למצוא מידע לך במהירות \n🤖 לענות על שאלותיך בכל שפה \n🎓 לעזור לך עם הקריירה שלך \n📷 לקרוא ולפרש תמונות \n🗣 להבין את ההודעות הקוליות שלך \n🈵 לדבר במספר שפות \n🌦 לספק תובנות מזג האוויר \n⏰ להגדיר תזכורות ב-WhatsApp \n📖 לסכם PDFים קצרים \nועוד הרבה יותר, במחיר של פחות ממחצית מהעלות של ChatGPT. \n\n🌎 רשתות חברתיות: https://linktr.ee/yatter \n💬 תמיכה לקוחות: +919718665000  \nמיוצר עם ❤️ בהודו \n\n🆕 הקלד /menu לכדי לחקור נוסף.",

      emailInputInstruction:
        "📧 אנא הקלד את כתובת האימייל שלך כדי להמשיך. זה נדרש כדי לספק לך עדכונים ופרטי מנוי ב-Yatter.",
      inValidEmail: "אנא הקלד כתובת אימייל תקינה כדי להמשיך.",
      disposableEmail: `שימו לב שאסור להשתמש באימייל דמה או חד פעמי. אנא ספק חשבון דוא"ל רלוונטי.`,
      emailUpdatedMessage:
        "😊 תודה רבה! האימייל שלך עודכן. אנחנו נעדכן אותך עם תכונות חדשות ומעמד המנוי שלך.",

      enterEmailExample: "EMAIL your@email.com",
      wrongEmailInstruction:
        "⚠️ *יש לשים לב* שאם בטעות הקלדת את כתובת האימייל שגויה, אנא הקלד מחדש את האימייל באותו הפורמט, כלומר \n\nEMAIL your@email.com \n\nלכל שאלות או בעיות, אנא פנה לנציגי השירות שלנו ב-WhatsApp במספר +91 9718665000 או צור קשר איתנו ב-Twitter @YatterAI",

      onboardingMessage: "נעים להכיר ",
      introAndAskQuestion:
        "איך אני יכול לעזור לך היום? שאל לי כל שאלה ותקבל תשובה מיידית 😉",
      askQuestion: "💬 האם אתה יודע? תוכל לגלות עוד עליי כשתקליד /menu",
    },

    freeTier: {
      freeTierThanksMessage:
        "וואו! אנחנו שמחים לדעת שאתה נהנה כל כך מ-Yatter ⚡. \n\n📢 אתה השתמשת ב-80% מהמכסה החינמית שלך. \n\nתודה 😊",
      freeTierLimitExceededMessage:
        "😓 הקווטה החינמית של Yatter שלך הושלמה. כדי להמשיך ליהנות משירות בלתי מובטלות, בחר בתוכנית המינוים המועדפת עליך מהרשימה למטה.",
      freeTierVoiceMessageLimitExceeded:
        "🤐 עברת את המגבלה המותרת לשליחת הודעות קול בגרסת החינמית. אנא נסה להקליד את השאלה שלך או להירשם ל-Yatter",
      freeTierImageRecognitionLimitExceeded:
        "📷 אופס! הגעת למגבלת הזיהוי של תמונות בגרסה החינמית. כדי להמשיך להשתמש בתכונה זו, אנא הקלד את השאלה שלך או הירשם ל-Yatter ",
      freeTierDocumentRecognitionLimitExceeded:
        "השתמשת במגבלת האישור שניתנה לך לחילוץ טקסט ממסמכים. כדי להמשיך להשתמש בתכונה זו, אנא הקלד את שאלתך או שקול להירשם ל-Yatter. ",
    },

    subscription: {
      subscriptionPlansList:
        "אנא בחר את תוכנית המנוי המועדפת עליך מהרשימה למטה. ",
      invalidSubscriptionPlan:
        "אנא בחר תוכנית מנוי תקינה. בחר אחד מהמספרים המצוינים כדי להירשם.",
      tapLinkToPay: "כדי להשלים את התשלום, אנא הקש על הקישור הבא 🔗 \n\n",
      afterSubscriptionSelection:
        "😊 תודה! \n\nאנחנו מפנים את קישור התשלום עבורך. \n\nאנא המתן שניה.",
      subscriptionPlanDenied:
        "🥺 זה בסדר, תודה ששקלת את שירות השכבה החינמית שלנו. \n\nאם הייתה לך חוויה נחמדה, אתה יכול להציע לחברים או למשפחה שלך לנסות אותה. *15 האינטראקציות הראשונות* הן בחינם לחלוטין. \n\nכמו כן, אתה עדיין יכול להקליד *YES* כדי להמשיך לחוות את המדהימה של יאטר 😉",
      subscriptionPlanReset:
        "תוכנית המנוי שלך אופסה 🔄 אנא בחר תוכנית מנוי מועדפת חדשה כדי להמשיך. ",
      voluntarySubscription:
        "🙌 תודה על התעניינותך בהרשמה לשירות שלנו! אנו באמת מעריכים את תמיכתך. להלן התוכניות שתוכלו לבחור מהן:",

      enjoyYatterPlus:
        "תודה על ההרשמה! \n\nכעת תוכל ליהנות משימוש בלתי מוגבל ב-Yatter ⚡",

      alreadySubscribed: "אתה כבר מנוי על Yatter Plus. תודה ותמשיכו להנות!",
      subscriptionExpired: "אוי לא! המנוי שלך פג תוקף. הנה הפרטים: ",
      resubscribeMessage:
        "כדי להמשיך ליהנות מהצ'אטבוט המדהים שלנו, Yatter ⚡, אנא הירשם מחדש.",
      cancelSubscription:
        "😢 עצוב לראותך עוזב! \n\nבקשת הביטול של המינוי שלך אושרה ותבוצע בתאריך סיום המינוי שלך. עד אז, נהנה מכל היתרונות של Yatter! 🌟 הגידו לנו אם יש משהו שאנו יכולים לשפר.\n\n~ Yatter על ידי Infokey",
    },

    payment: {
      paymentLinkExists:
        "קישור התשלום שלך כבר נוצר. אנא הקש על הקישור למטה כדי להשלים את התשלום שלך. \n\nכדי לשנות את תוכנית המנוי שבחרת, הקלד *RESET* \n\nבכל מקרה של בעיה, תמיכת לקוחות WhatsApp Yatter בטלפון +91 9718665000. \n\n",
      paymeentUnderProcessing:
        "התשלום שלך נמצא בעיבוד. אנא המתן זמן מה, סטטוס התשלום שלך יעודכן בקרוב מאוד.",
      paymentCompleted: "🥳 היי! המנוי שלך פעיל כעת. \n",

      paymentFailed:
        "😨 אוי לא, התשלום עבור המנוי נכשל! אנא נסה להתחיל את המנוי שוב. \n\nבמקרה של כל בעיה, ניתן ליצור קשר עם שירות הלקוחות של Yatter ⚡ דרך WhatsApp במספר +91 9718665000.",
    },

    userVerification: {
      enterOtpInstruction:
        "אנא הזן את קוד האימות שקיבלת על כתובת האימייל הרשומה שלך בפורמט הבא. לדוגמה, אם קוד ה-OTP שקיבלת הוא 1234, אנא הקלד כך כמו שמופיע למטה 👇\n\nVERIFY 1234",
      otpWaitingTime:
        "אנא שים לב כי עשוי לקחת עד 5 דקות עד שתקבל את קוד האימות על האימייל שלך. כמו כן, אנא בדוק את תיקיית הספאם באימייל שלך אם אתה לא מוצא את האימייל עם קוד האימות בתיבת הדואר הנכנסת שלך.",
      inValidOtp: 'OTP זה שגוי. אנא נסה שוב עם ה-OTP שהתקבל בדוא"ל שלך.',

      verificationMessage:
        "אתה משתמש מאומת עכשיו. \n\nאנו שמחים לדעת שאתה נהנה מהשירותים שלנו. תמשיך לשוחח 🤘",
    },

    onError: {
      errorWhileSavingDetails:
        "אירעה שגיאה במהלך שמירת הפרטים. אנא נסה שוב לאחר זמן מה.",
      unknownError:
        "אה-הו! אירעה שגיאה לא ידועה. אנא הקלד .clear ונסה לאחר זמן מה. \n\nאם אתה עדיין נתקל בבעיה, בבקשה צור קשר עם שירות הלקוחות של Yatter ב-WhatsApp במספר +91 9718665000.",
      invalidQues:
        "🤖 מצטער! אני מבין רק טקסט, תמונות, הודעות קול ו- PDFים קטנים. אנא נסה שוב עם קלט תקין.",
      unavailableInYourRegion: "😔 מצטער! Yatter אינו זמין במדינה שלך.",
      aiServerBusy:
        "יַטֵּר מוּעָמָד כְּעָתָה עִם בַּקְשוֹת אֲחֵרוֹת. אַתָּה יָכוֹל לנַסוֹת שוּב אַחֲרֵי זְמַן, להשתמש בפרומפט קָצֵר יוֹתֵר, או ליצור איתנו קשר בטלפון +91 9718665000 אִם הַשְּגֵּת הַשְּגָּאָה.",
      noTextDetected:
        "לא נמצא טקסט בתמונה שלך. אני יכול לעזור רק עם תוכן כתוב הנמצא בתמונה... 👀💬",

      audioUnderstandingError:
        "אופס! לא הצלחתי להבין את הקול שלך. בבקשה, נסה שוב והקפידו לשמור על ההודעה הקולית שלך מתחת ל-3 דקות לקראת דיוק טוב יותר.",
      imageUnderstandingError:
        "אופס! נתקלנו בשגיאה במהלך עיבוד התמונה. בבקשה, נסה שוב מאוחר יותר.",
      documentUnderstandingError:
        "לא הצלחנו לחלץ טקסט מהמסמך. בבקשה, נסה שוב ווודא שהמסמך אינו גדול מ-2 מגה-בייט.",
      imageGenError:
        "לא הצלחנו ליצור תמונה מההנחיה שלך. אנא נסה שוב מאוחר יותר.",

      noReminderFound:
        "נראה שאין תזכורות עבור הפרופיל שלך. אל תדאג, תמיד תוכל ליצור אחת חדשה רק בשאל אותי!",
      invalidReminderTime:
        "נא להגדיר תזכורת לזמן עתידי חוקי. דוגמה 5 דקות או יותר בעתיד",
      reminderLimitExceeded:
        "הגעת לגבול של 10 תזכורות. כדי ליצור אחת חדשה, בבקשה שקול למחוק תזכורות ישנות.",
      errorWhileSettingReminder:
        "אופס! הייתה שגיאה בעת הגדרת התראה. בבקשה נסה שוב מאוחר יותר.",
    },

    gptError: {
      error429:
        "Yatter חווה תנועה גבוהה מאוד. אנא נסה שוב לאחר זמן מה והשתמש בהנחיות קצרות יותר לתוצאות מהירות.",
      error500:
        "Yatter מופעל על ידי ChatGPT שנגרם לו שגיאה כלשהי. אנא התאזר בסבלנות. נחזור בקרוב מאוד.",
      error503:
        "Yatter מופעל על ידי ChatGPT שעמוס כעת בבקשות. אנא נסה שוב לאחר זמן מה.",
    },

    maintenance: "Yatter נמצא כעת בתחזוקה. אנא נסה שוב לאחר 15 דקות 🙏",
  },
};
