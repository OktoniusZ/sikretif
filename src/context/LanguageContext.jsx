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
    Swal.fire({
      title: "Select Language / Pilih Bahasa",
      html: `
        <div class="flex flex-col space-y-3 mt-4">
          <button 
            id="englishBtn"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            English
          </button>
          <button 
            id="indonesianBtn"
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Bahasa Indonesia
          </button>
        </div>
      `,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        document.getElementById("englishBtn").addEventListener("click", () => {
          changeLanguage("en");
          Swal.close();
        });
        document
          .getElementById("indonesianBtn")
          .addEventListener("click", () => {
            changeLanguage("id");
            Swal.close();
          });
      },
      willClose: () => {
        document.getElementById("englishBtn")?.removeEventListener("click");
        document.getElementById("indonesianBtn")?.removeEventListener("click");
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
