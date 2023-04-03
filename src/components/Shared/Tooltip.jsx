export default function Tooltip({ children }) {
  return (
    <div className="hs-tooltip">
      <div className="hs-tooltip-toggle">
        {children}
        <span
          className="hs-tooltip-content invisible absolute z-10 inline-block rounded bg-black py-1 px-2 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
          role="tooltip"
        >
          In development
        </span>
      </div>
    </div>
  );
}
