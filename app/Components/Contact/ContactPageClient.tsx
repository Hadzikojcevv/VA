"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const ContactPageClient = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isGreek = locale === "el";
  const isMacedonian = locale === "mk";
  const phoneNumber = isGreek ? "+306988993838" : "+38971333086";
  const emailAddress = isGreek ? "vaconcepts.gr@gmail.com" : "office@conceptsva.com";
  
  // Locale-aware social media links
  const instagramLink = locale === "el" 
    ? "https://www.instagram.com/vaconcepts.gr/" 
    : locale === "mk"
    ? "https://www.instagram.com/vaconcepts.mk/"
    : "https://www.instagram.com/vaconcepts.mk/";
  
  const facebookLink = locale === "el"
    ? "https://www.facebook.com/profile.php?id=61581507848379"
    : locale === "mk"
    ? "https://www.facebook.com/profile.php?id=61574902241239"
    : "https://www.facebook.com/profile.php?id=61574902241239";

  // Load GoHighLevel script for MK and EL locales
  useEffect(() => {
    if (isMacedonian || isGreek) {
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isMacedonian, isGreek]);

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-[88px] flex justify-center items-center">
      <div className="max-w-6xl mx-auto w-full">
        {(isMacedonian || isGreek) && (
          // GoHighLevel form for MK and EL locales
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 tracking-tighter text-center">{t("contactPage.getInTouch")}</h2>
            <div className="w-full mx-auto max-w-[800px] rounded-[3px]">
              {isMacedonian && (
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/mtq06TVfpocLpYvXOX8F"
                  className="w-full border-none rounded-[3px]"
                  style={{
                    minHeight: "800px",
                    height: "auto",
                  }}
                  id="inline-mtq06TVfpocLpYvXOX8F"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="FORMA 1\ Dizajn+Plafon"
                  data-layout-iframe-id="inline-mtq06TVfpocLpYvXOX8F"
                  data-form-id="mtq06TVfpocLpYvXOX8F"
                  title="FORMA 1\ Dizajn+Plafon"
                />
              )}
              {isGreek && (
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/MRPeimBN2HSkNxTLXYkr"
                  className="w-full border-none rounded-[3px]"
                  style={{
                    minHeight: "897px",
                    height: "auto",
                  }}
                  id="inline-MRPeimBN2HSkNxTLXYkr"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="FORM FOR WEBSITE "
                  data-height="897"
                  data-layout-iframe-id="inline-MRPeimBN2HSkNxTLXYkr"
                  data-form-id="MRPeimBN2HSkNxTLXYkr"
                  title="FORM FOR WEBSITE "
                />
              )}
            </div>
          </div>
        )}

        {/* Info section */}
        <div className="flex flex-col justify-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-medium mb-4 tracking-tighter">{t("contactPage.infoTitle")}</h3>
          <p className="mb-4">{t("contactPage.dream")}</p>
          <ul className="space-y-4 text-sm">
            <li>
              <strong>{t("contactPage.phone")}:</strong> {phoneNumber}
            </li>
            <li>
              <strong>Email:</strong> {emailAddress}
            </li>
            <li>
              <strong>{t("contactPage.address")}:</strong> Marshal Tito 198, Gevgelija, North Macedonia
            </li>
          </ul>

          <div className="mt-8">
            <h4 className="font-medium mb-2">{t("contactPage.follow")}</h4>
            <div className="flex gap-4">
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition ease-in-out"
                aria-label="Instagram"
              >
                <Image
                  src="/common/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition ease-in-out"
                aria-label="Facebook"
              >
                <Image
                  src="/common/fb.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageClient;

