import Image from "next/image";

type Props = {
  value: string;
  keyName: string;
  inputType: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: string;
  label: string;
};

const TextField = ({
  value,
  keyName,
  inputType,
  handleChange,
  placeholder,
  icon,
  label,
}: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-y-sm" dir="rtl">
      <label htmlFor={keyName} className="font-bold text-lg">
        {label}
      </label>
      <div className="w-full flex items-center">
        {typeof window !== "undefined" && (
          <button
            type="button"
            title={keyName}
            className="bg-primary border border-primary rounded-r-lg overflow-hidden py-1 px-2"
          >
            <Image
              src={icon}
              alt={keyName}
              width={50}
              height={50}
              className="w-9 h-9 p-0.5"
            />
          </button>
        )}

        <input
          dir="rtl"
          type={inputType}
          value={value}
          name={keyName}
          id={keyName}
          onChange={handleChange}
          className="w-full bg-secondary rounded-l-lg p-2.5 placeholder:text-dark-gray border border-dark-gray border-r-0 outline-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextField;
