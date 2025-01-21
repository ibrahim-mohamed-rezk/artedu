'use client'
import { useState } from 'react';
// import { countries } from './countries';

interface PhoneInputProps {
  value: string;
  onChangeFun: (value: string) => void;
  className?: string;
}

const PhoneInput = ({ value, onChangeFun, className = '' }: PhoneInputProps) => {
    const countries: any[] = []
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (country: typeof countries[0]) => {
    setSelectedCountry(country);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '');
    onChangeFun(`${selectedCountry.dialCode}${input}`);
  };

  return (
    <div className={`flex items-center border rounded-[15px] overflow-hidden ${className}`}>
      <div className="relative">
        <select
          value={selectedCountry?.code}
          onChange={(e) => {
            const country = countries?.find(c => c.code === e.target.value);
            if (country) handleCountryChange(country);
          }}
          className="appearance-none bg-transparent border-r px-2 py-2 focus:outline-none"
        >
          {countries?.map((country) => (
            <option key={country.code} value={country.code}>
              {country.flag} {country.dialCode}
            </option>
          ))}
        </select>
      </div>
      <input
        type="tel"
        value={value}
        onChange={handlePhoneChange}
        placeholder="Enter phone number"
        className="flex-1 px-3 py-2 focus:outline-none"
      />
    </div>
  );
};

export default PhoneInput;
