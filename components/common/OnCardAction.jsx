export default function OnCardAction({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium transition"
    >
      {text}
    </button>
  );
}
