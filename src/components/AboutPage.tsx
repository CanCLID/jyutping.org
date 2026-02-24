import { IconBrandGithub, IconMail, IconKeyboard } from "@tabler/icons-react";
import { getTranslations } from "@/i18n/pages/about";

interface AboutPageProps {
  locale: string;
}

const AboutPage: React.FC<AboutPageProps> = ({ locale }) => {
  const t = getTranslations(locale);

  return (
    <div className="container mx-auto px-4 py-4 text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-4">
        <div className="prose max-w-none">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
            {t.acknowledgementsTitle}
          </h2>
          <p className="mb-4">{t.acknowledgementsP1}</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>{t.acknowledgementsP2}</li>
            <li>{t.acknowledgementsP3}</li>
            <li>{t.acknowledgementsP4}</li>
            <li>{t.acknowledgementsP5}</li>
            <li>{t.acknowledgementsP6}</li>
          </ul>
        </div>
        {/* Develop & Contribute Column */}
        <div className="prose max-w-none">
          <h2 className="text-3xl font-semibold mb-4 border-b pb-2">
            {t.developContributeTitle}
          </h2>
          <p className="mb-4">{t.developContributeP1}</p>
          <ul className="list-none space-y-3">
            <li className="flex items-start">
              <IconMail className="mr-3 mt-1 flex-shrink-0 h-5 w-5 text-gray-500" />{" "}
              <span>{t.emailText}</span>
            </li>
            <li className="flex items-start">
              <IconBrandGithub className="mr-3 mt-1 flex-shrink-0 h-5 w-5 text-gray-500" />{" "}
              <span>{t.githubText}</span>
            </li>
            {/* Conditionally render keyboard link if text exists for the locale */}
            {t.keyboardText && (
              <li className="flex items-start">
                <IconKeyboard className="mr-3 mt-1 flex-shrink-0 h-5 w-5 text-gray-500" />{" "}
                <span>{t.keyboardText}</span>
              </li>
            )}
          </ul>
          <p className="mt-6 italic text-sm">{t.finalParagraph}</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
