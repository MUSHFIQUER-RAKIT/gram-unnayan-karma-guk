export default function Label({ Labelfor, label, children }) {
  return (
    <div>
      <label
        htmlFor={Labelfor}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
      >
        {label}
      </label>
      <div className="relative">{children}</div>
    </div>
  );
}
