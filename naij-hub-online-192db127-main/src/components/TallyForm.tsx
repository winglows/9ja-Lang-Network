import { useEffect } from "react";

interface TallyFormProps {
  formUrl: string;
  title: string;
}

const TallyForm: React.FC<TallyFormProps> = ({ formUrl, title }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ overflow: "hidden", height: "475px", width: "100%" }}>
      <iframe
        data-tally-src={formUrl}
        loading="lazy"
        width="100%"
        height="100%"
        frameBorder="0"
        title={title}
      ></iframe>
    </div>
  );
};

export default TallyForm;