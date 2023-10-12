import ReactDOM from "react-dom";

const GoogleTagPortal = () => {
  return ReactDOM.createPortal(
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-${
          import.meta.env.VITE_GOOGLE_ANALYTICS_ID
        }`}
      ></script>
      <script>
        {` window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments)}
         gtag('js', new Date());

         gtag('config', 'G-${import.meta.env.VITE_GOOGLE_ANALYTICS_ID}');`}
      </script>
    </>,
    document.head,
  );
};

export default GoogleTagPortal;
