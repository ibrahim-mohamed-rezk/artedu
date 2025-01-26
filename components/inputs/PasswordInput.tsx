import { useState } from "react";

interface PasswordInputProps {
  changePassword: (password: string) => void;
  className?: string;
  value?: string;
}

const PasswordInput = ({
  changePassword,
  className,
  value,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`relative border rounded-[15px] border-[#F1F1F2] ${className}`}>
      <input
        type={showPassword ? "text" : "password"}
        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-100 text-gray-900 text-sm font-medium"
        placeholder="*******"
        value={value || ""}
        onChange={(e) => {
          changePassword(e.target.value);
        }}
      />
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3.33331C10.4 3.33331 12.4 4.66665 14 7.33331C12.4 9.99998 10.4 11.3333 8 11.3333C5.6 11.3333 3.6 9.99998 2 7.33331C3.6 4.66665 5.6 3.33331 8 3.33331Z"
              stroke="#ACB5BB"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 9.33331C9.10457 9.33331 10 8.43789 10 7.33331C10 6.22874 9.10457 5.33331 8 5.33331C6.89543 5.33331 6 6.22874 6 7.33331C6 8.43789 6.89543 9.33331 8 9.33331Z"
              stroke="#ACB5BB"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.05671 7.05794C6.8067 7.30804 6.66628 7.64721 6.66634 8.00085C6.6664 8.35448 6.80694 8.6936 7.05704 8.94361C7.30714 9.19362 7.64631 9.33404 7.99994 9.33398C8.35358 9.33392 8.6927 9.19338 8.94271 8.94328M11.1207 11.1154C10.1855 11.7005 9.1031 12.0073 8 12C5.6 12 3.6 10.6667 2 8.00002C2.848 6.58669 3.808 5.54802 4.88 4.88402M6.78667 4.12002C7.18603 4.03917 7.59254 3.99897 8 4.00002C10.4 4.00002 12.4 5.33335 14 8.00002C13.556 8.74002 13.0807 9.37802 12.5747 9.91335M2 2L14 14"
              stroke="#ACB5BB"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
