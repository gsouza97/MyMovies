export function getLanguageName(language: string) {
  switch (language) {
    case "en":
      return "English";
    case "pl":
      return "Polish";
    case "da":
      return "Danish";
    case "no":
      return "Norwegian";
    case "uk":
      return "Ukrainian";
    case "ca":
      return "Catalan";
    case "hu":
      return "Hungarian";
    case "ru":
      return "Russian";
    case "sv":
      return "Swedish";
    case "fr":
      return "French";
    case "ja":
      return "Japanese";
    case "ko":
      return "Korean";
    case "nl":
      return "Dutch";
    case "el":
      return "Greek";
    case "ar":
      return "Arabic";
    case "pt":
      return "Portuguese";
    case "es":
      return "Spanish";
    case "it":
      return "Italian";
    case "de":
      return "German";
    case "zh":
      return "Chinese";

    default:
      return "English";
  }
}
