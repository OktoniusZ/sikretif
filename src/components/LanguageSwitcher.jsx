import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Swal from "sweetalert2";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleSwitch = () => {
    Swal.fire({
      title: "Change Language / Ganti Bahasa",
      html: `
        <div class="flex flex-col space-y-3 mt-4">
          <button 
            id="englishBtn"
            class="px-4 py-2 ${
              language === "en"
                ? "bg-primary"
                : "bg-primary"
            } text-white rounded hover:bg-secondary transition w-full"
          >
            English
          </button>
          <button 
            id="indonesianBtn"
            class="px-4 py-2 ${
              language === "id"
                ? "bg-greenPrimary"
                : "bg-greenPrimary"
            } text-white rounded hover:bg-greenSecondary transition w-full"
          >
            Bahasa Indonesia
          </button>
        </div>
      `,
      showConfirmButton: false,
      background: "#f8fafc", // Light gray background
      backdrop: "rgba(0,0,0,0.5)",
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
    });
  };

  return (
    <button
      onClick={handleSwitch}
      className="px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200 text-sm font-medium flex items-center"
    >
      {language === "en" ? (
        <>
          <span className="mr-1"></span> EN
        </>
      ) : (
        <>
          <span className="mr-1"></span> ID
        </>
      )}
    </button>
  );
};

export default LanguageSwitcher;
