"use client";

import React, { useEffect } from "react";
import { useLocale } from "next-intl";

export default function GoHighLevelForm() {
  const locale = useLocale();
  const isMacedonian = locale === "mk";

  useEffect(() => {
    if (isMacedonian) {
      // Check if script is already loaded
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );

      if (!existingScript) {
        // Load the GoHighLevel form script only if it doesn't exist
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [isMacedonian]);

  if (!isMacedonian) {
    return null;
  }

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="w-[92%] max-w-5xl mx-auto">
        <div className="w-full rounded-[3px]">
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
        </div>
      </div>
    </section>
  );
}
