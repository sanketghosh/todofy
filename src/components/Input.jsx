export default function Input({ placeholder, value, onChange, className }) {
  return (
    <input
      placeholder={placeholder}
      className={`outline-none bg-transparent text-sm md:text-[15px] placeholder:text-gray-500 ${className} focus:ring-1 focus:ring-zinc-500`}
      type="text"
      required
      maxLength={60}
      value={value}
      onChange={onChange}
    />
  );
}
