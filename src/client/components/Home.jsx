import React, { useEffect, useMemo, useState } from "react";

export default function Home() {
  const egLanguages = [
    "ruby",
    "bash",
    "go",
    "perl",
    "php",
    "csharp",
    "c",
    "lua",
    "rust",
  ];
  let languageIndex = 0;
  const [language, setLanguage] = useState(egLanguages[languageIndex]);

  const nextLanguageIndex = function* () {
    while (true) {
      yield languageIndex < egLanguages.length - 1
        ? (languageIndex += 1)
        : (languageIndex = 0);
    }
  };

  const indexGenerator = useMemo(() => nextLanguageIndex(), []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLanguage(egLanguages[indexGenerator.next().value]);
    }, 1500);

    return () => clearInterval(intervalId);
  }, [egLanguages, indexGenerator]);

  return (
    <div>
      <br />
      <p>
        If you can't find your preferred language in this list then you can
        navigate by adding your language in url with followed by popular route.
      </p>
      <p>For Example:</p>
      <code>
        https://domain/<b>popular/{language}/</b>
      </code>
    </div>
  );
}
