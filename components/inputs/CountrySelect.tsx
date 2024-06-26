import useCountries from "@/app/hooks/useCountries";
import React from "react";
import Select from "react-select";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <section>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <article className="flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500  ml-1">{option.region}</span>
            </div>
          </article>
        )}
        classNames={{ control: () => "p-2 border-2", input: () => "text-lg", option:()=>'text-lg' }}
        theme={(theme)=>({
            ...theme,
            borderRadius: 6,
            colors:{
                ...theme.colors,
                primary: 'black',
            }
        })}
      />
    </section>
  );
};

export default CountrySelect;
