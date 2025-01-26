"use client";

import styles from "./inputsStyles.module.css";

interface PhoneInputProps {
  value: string;
  onChangeFun: (value: string) => void;
  className?: string;
  countryCode: string;
  onCountryCodeChange: (country: string) => void;
}

const PhoneInput = ({
  value,
  onChangeFun,
  className = "",
  countryCode,
  onCountryCodeChange,
}: PhoneInputProps) => {
  const countries = [
    { code: "EG", dialCode: "+20", flag: "/images/login/egyptFlag.png" },
  ];

  const currentCountry =
    countries.find((country) => country.dialCode === countryCode) ||
    countries[0];

  return (
    <div
      className={`${styles.PhoneInput} flex items-center border border-[#F1F1F2] rounded-[15px] overflow-hidden ${className}`}
    >
      <div className="relative">
        <div
          className={`${styles.phoneSelect} flex items-center bg-transparent border-r px-2 py-2 focus:outline-none`}
        >
          <img src={currentCountry.flag} alt="flag" className="mr-2" />
          <select
            value={countryCode}
            onChange={(e) => onCountryCodeChange(e.target.value)}
            className="bg-transparent appearance-none focus:!ring-0 focus:!border-0 focus:!outline-none"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.dialCode}>
                {country.dialCode}
              </option>
            ))}
          </select>
        </div>
      </div>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChangeFun(e.target.value)}
        placeholder="Enter phone number"
        className={`flex-1 px-3 py-2 focus:outline-none`}
      />
    </div>
  );
};

export default PhoneInput;
