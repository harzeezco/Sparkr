import useTheme from "../../Hooks/useTheme";

// eslint-disable-next-line react/prop-types
export default function Project({ index, title, manageModal }) {
  const { theme } = useTheme()
  
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="flex w-full cursor-pointer items-center justify-between border-b border-t p-8 transition duration-200 hover:opacity-50"
    >
      <h2 className={`heading-secondary lg:text-6xl text-${theme}`}>{title}</h2>
      <p className="duration-400 text-lg font-light transition-transform">
        Design & Development
      </p>
    </div>
  );
}
