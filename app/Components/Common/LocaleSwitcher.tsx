"use client";

import {useLocale} from "next-intl";
import {Link, usePathname} from "../../../i18n/navigation";
import {locales, type Locale} from "../../../i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-xs tracking-widest">
      {locales.map((l) => (
        <Link
          key={l}
          href={pathname}
          locale={l}
          className={`px-2 py-1 border ${
            l === locale ? "border-black text-black" : "border-transparent text-gray-600 hover:text-black"
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

