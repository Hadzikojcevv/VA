"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {useTranslations} from "next-intl";

const ContactPageClient = () => {
  const t = useTranslations();
  const [state, handleSubmit] = useForm("mzzeqaez");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-white text-gray-800 px-6 py-[88px] flex justify-center items-center">
        <div className="flex flex-col justify-center basis-1/2 text-center">
          <h2 className="text-4xl font-medium mb-4 tracking-tighter">{t("contactPage.thanks")}</h2>
          <h3 className="text-2xl font-medium mb-4 tracking-tighter">{t("contactPage.infoTitle")}</h3>
          <p className="mb-4">{t("contactPage.dream")}</p>
          <ul className="space-y-4 text-sm">
            <li>
              <strong>{t("contactPage.phone")}:</strong> +38971333086
            </li>
            <li>
              <strong>Email:</strong> office@conceptsva.com
            </li>
            <li>
              <strong>{t("contactPage.address")}:</strong> Marshal Tito 198, Gevgelija, North Macedonia
            </li>
          </ul>

          <div className="mt-8">
            <h4 className="font-medium mb-2">{t("contactPage.follow")}</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/vaconcepts.mk/?hl=en"
                className="hover:underline"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-[88px] flex justify-center items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 basis-full lg:basis-1/2">
        <div>
          <h2 className="text-3xl font-semibold mb-6 tracking-tighter">{t("contactPage.getInTouch")}</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 text-sm font-medium">{t("contactPage.name")}</label>
              <input
                type="text"
                name="Name:"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder={t("contactPage.yourName")}
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">{t("contactPage.email")}</label>
              <input
                name="Email:"
                type="email"
                className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                placeholder={t("contactPage.yourEmail")}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">{t("contactPage.message")}</label>
              <textarea
                name="Message:"
                className="w-full border border-gray-300 px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                placeholder={t("contactPage.yourMessage")}
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <button
              disabled={state.submitting}
              type="submit"
              className="bg-black text-white px-6 py-3 hover:bg-gray-900 transition"
            >
              {t("contactPage.send")}
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center basis-1/2">
          <h3 className="text-2xl font-medium mb-4 tracking-tighter">{t("contactPage.infoTitle")}</h3>
          <p className="mb-4">{t("contactPage.dream")}</p>
          <ul className="space-y-4 text-sm">
            <li>
              <strong>{t("contactPage.phone")}:</strong> +38971333086
            </li>
            <li>
              <strong>Email:</strong> office@conceptsva.com
            </li>
            <li>
              <strong>{t("contactPage.address")}:</strong> Marshal Tito 198, Gevgelija, North Macedonia
            </li>
          </ul>

          <div className="mt-8">
            <h4 className="font-medium mb-2">{t("contactPage.follow")}</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/vaconcepts.mk/?hl=en"
                className="hover:underline"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageClient;

