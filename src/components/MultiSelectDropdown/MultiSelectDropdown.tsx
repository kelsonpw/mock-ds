import * as React from "react";
import MultiSelect from "react-multi-select-component";
import { Option } from "react-multi-select-component/dist/lib/interfaces";

interface MultiSelectDropdownProps {
  options: Option[];
  onChange: (selectedOptions: Option[]) => void;
  value: Option[];
  disabled?: boolean;
  // value for aria-labelledby
  labelledBy: string;
}

const MultiSelectDropdown = (props: MultiSelectDropdownProps) => {
  const { options, onChange, value, disabled, labelledBy } = props;
  return (
    <MultiSelect
      options={options}
      value={value}
      onChange={onChange}
      labelledBy={labelledBy}
      disabled={disabled}
    />
  );
};

export default MultiSelectDropdown;
