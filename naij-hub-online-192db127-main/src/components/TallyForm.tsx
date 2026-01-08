import { useEffect } from "react";

const TallyForm = () => {
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
        data-tally-src="https://tally.so/r/pby5aP?transparentBackground=1"
        loading="lazy"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Contact Us"
      ></iframe>
    </div>
  );
};

export default TallyForm;