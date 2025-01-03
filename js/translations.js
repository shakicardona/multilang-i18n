i18next
  .use(i18nextHttpBackend) // Enable loading translations from files (optional)
  .init({
    lng: 'en', // Default language
    debug: true, // Logs to help debug
    resources: {
      en: {
        translation: {
          title: "Title",
          subtitle: "Subtitle",
          text: "text",
        }
      },
      es: {
        translation: {
            title: "Título",
            subtitle: "Subtítulo",
            text: "texto",
        }
      }
    }
  }, (err, t) => {
    if (err) return console.error(err);

    // Initial translation
    updateContent();
  });

function changeLanguage(lang) {
  i18next.changeLanguage(lang, updateContent);
}

function updateContent() {
  // Find all elements with the data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    element.textContent = i18next.t(key); // Translate using i18next
  });
}
