interface TextInputProps {
  value: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const TextInput = ({
  value,
  placeholder,
  onChange,
  className,
}: TextInputProps) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
};

export default TextInput;
