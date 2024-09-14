import { ForwardRefExoticComponent } from "react";

export interface InputFieldData {
  label?: React.ReactNode;
  name: string;
  inputElement: ForwardRefExoticComponent<any>;
  placeholder?: string;
  description?: React.ReactNode;
  props?: object;
}

export interface CheckboxFieldData {
  label?: React.ReactNode;
  id: string;
  name: string;
  description?: React.ReactNode;
}
