import { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      showLanguagePopup();
    }
  }, []);

  const showLanguagePopup = () => {
    // Define the handler functions outside so we can reference them for removal
    const handleEnglishClick = () => {
      changeLanguage("en");
      Swal.close();
    };

    const handleIndonesianClick = () => {
      changeLanguage("id");
      Swal.close();
    };

    Swal.fire({
      title: "Select Language / Pilih Bahasa",
      html: `
        <div class="flex flex-col space-y-3 mt-4">
          <button 
            id="englishBtn"
            class="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
          >
            English
          </button>
          <button 
            id="indonesianBtn"
            class="px-4 py-2 bg-greenPrimary text-white rounded hover:bg-greenSecondary transition"
          >
            Bahasa Indonesia
          </button>
        </div>
      `,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        document.getElementById("englishBtn").addEventListener("click", handleEnglishClick);
        document.getElementById("indonesianBtn").addEventListener("click", handleIndonesianClick);
      },
      willClose: () => {
        const englishBtn = document.getElementById("englishBtn");
        const indonesianBtn = document.getElementById("indonesianBtn");
        
        if (englishBtn) {
          englishBtn.removeEventListener("click", handleEnglishClick);
        }
        if (indonesianBtn) {
          indonesianBtn.removeEventListener("click", handleIndonesianClick);
        }
      },
    });
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, showLanguagePopup }}
    >
      {children}
    </LanguageContext.Provider>
  );
};