import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactHeader from "../components/contact/ContactHeader";
import ContactCard from "../components/contact/ContactCard";
import ContactCTA from "../components/contact/ContactCTA";
import { useTranslation } from "../../src/hooks/useTranslation";

const ContactPage = () => {
  const { t } = useTranslation();

  const whatsappNumber = "+6281324582425";
  const email = "sikretif7@gmail.com";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
      {/* Centered card container */}
      <div className="bg-white rounded-xl shadow-sm p-8 sm:p-10 w-full max-w-4xl">
        <ContactHeader
          badgeText={t("Contact Information")}
          title={t("Get in Touch with Us")}
          description={t("Have a question or a special request? We'd love to hear from you! Whether you're looking for a handmade beaded piece, need assistance with an order, or just want to say hello, feel free to reach out. Our team is here to help and ensure you have the best experience with our handcrafted collections. 💖✨")}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <button
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}`,
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="cursor-pointer"
          >
            <ContactCard
              icon={FaWhatsapp}
              contactInfo={whatsappNumber}
              label="WhatsApp"
              iconColor="purple"
              hoverColor="purple"
              whatsappNumber={whatsappNumber}
            />
          </button>

          <button
            onClick={() =>
              window.open(`mailto:${email}`, "_blank", "noopener,noreferrer")
            }
            className="cursor-pointer"
          >
            <ContactCard
              icon={FaEnvelope}
              contactInfo={email}
              label="Email"
              iconColor="pink"
              hoverColor="pink"
            />
          </button>

          <button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/@3.6091036,98.517993,96m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="cursor-pointer"
          >
            <ContactCard
              icon={FaMapMarkerAlt}
              contactInfo="Jl. Dr Wahidin LK. III"
              label={t("Address")}
              iconColor="yellow"
              hoverColor="yellow"
            />
          </button>
        </div>
        <ContactCTA Whatsappmes={t("WhatsApp Us")} emailMes={t("Email Us")} />
      </div>
    </div>
  );
};

export default ContactPage;
