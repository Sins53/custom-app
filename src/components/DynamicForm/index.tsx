import { FormikErrors } from "formik";
import Creatable from "react-select/creatable";
import { Input } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";
// import StyledSelect from '../StyledSelect/StyledSelect';

export interface OptionType {
  label: string;
  value: string | number;
}
interface Validation {
  type: "nullable" | "max-length" | "min-length" | "required" | "matches" | "";
  options: [any, string];
}
export interface ItemType {
  id: number;
  name: string;
  label?: string;
  value?: number;
}
export type FormType = "requisition" | "master";

export interface StockSpecification {
  isRequisition?: boolean;
  requisitionOptions: OptionType[] | undefined;
  id?: number;
  itemId?: number | string | null;
  fieldName: string;
  label?: string;
  dataType?: string | number;
  validationDetail: Validation[];
  item?: ItemType;
  formType?: FormType;
  value?: OptionType;
  code?: string;
}

interface Props {
  specification: StockSpecification;
  index?: string | number;
  values: { [key: string]: number | string | any };
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<any>>;
  setFieldTouched: (
    field: string,
    touched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<any>>;
  name: string;
  type?: InputType | undefined;
  isNumber?: boolean;
}

const InputForm = ({
  specification,
  setFieldValue,
  setFieldTouched,
  name,
  values,
  type,
  isNumber,
}: Props) => {
  return (
    <Input
      type={type || "text"}
      name={`${name}[${specification?.fieldName}]`}
      value={values?.[name]?.[specification?.fieldName || ""]?.value || ""}
      onBlur={() =>
        setFieldTouched(`${name}[${specification?.fieldName}]`, true)
      }
      onChange={(e) => {
        setFieldValue(`${name}[${specification?.fieldName}]`, {
          label: specification.label,
          value: isNumber ? Number(e.target.value) : e.target.value,
        });
      }}
    />
  );
};
export const ObjectForm = ({
  specification,
  setFieldValue,
  setFieldTouched,
  name,
  values,
}: Props) => {
  return (
    <>
      <Creatable
        isMulti
        name={`${name}[${specification?.fieldName}]`}
        value={
          values[specification?.fieldName || ""] ||
          (Array.isArray(
            values?.[name]?.[specification?.fieldName || ""]?.value
          ) &&
            values[name]?.[specification?.fieldName || ""]?.value?.map(
              (map: string | number) => {
                return { label: map, value: map };
              }
            )) ||
          ""
        }
        onBlur={() => {
          setFieldTouched(`${name}[${specification?.fieldName}]`, true);
        }}
        onChange={(value) => {
          setFieldValue(`${name}[${specification?.fieldName}]`, {
            label: specification?.label,
            ...(value && value.length > 0
              ? {
                  value:
                    value?.map((filter) => {
                      return filter.value;
                    }) || "",
                }
              : { value: "" }),
          });

          setFieldValue(specification?.fieldName || "", value);
        }}
      />
    </>
  );
};
const BooleanForm = ({
  specification,
  setFieldValue,
  name,
  values,
  index,
}: Props) => {
  return (
    <div>
      <div className="form-check  form-check-inline">
        <input
          className="form-check-input"
          id={`yes${index}`}
          type={"radio"}
          value={"true"}
          name={`${name}[${specification?.fieldName}]`}
          onChange={() => {
            setFieldValue(`${name}[${specification?.fieldName}]`, {
              label: specification?.label,
              value: true,
            });
          }}
          checked={
            values?.[name]?.[specification?.fieldName || ""]?.value === true
          }
        />
        <label className="form-check-label" htmlFor={`yes${index}`}>
          Yes
        </label>
      </div>
      <div className="form-check  form-check-inline">
        <input
          className="form-check-input"
          id={`no${index}`}
          type={"radio"}
          value={"false"}
          name={`${name}[${specification?.fieldName}]`}
          onChange={() => {
            setFieldValue(`${name}[${specification?.fieldName}]`, {
              label: specification?.label,
              value: false,
            });
          }}
          checked={
            values?.[name]?.[specification?.fieldName || ""]?.value === false
          }
        />
        <label className="form-check-label" htmlFor={`no${index}`}>
          No
        </label>
      </div>
    </div>
  );
};

const DynamicForm = ({
  specification,
  setFieldValue,
  setFieldTouched,
  name,
  values,
  index,
}: Props) => {
  switch (specification.dataType) {
    case "string":
      return (
        <InputForm
          type="text"
          index={index}
          name={name}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          specification={specification}
          values={values}
        />
      );
    case "number":
      return (
        <InputForm
          type="number"
          isNumber
          index={index}
          name={name}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          specification={specification}
          values={values}
        />
      );
    case "boolean":
      return (
        <BooleanForm
          index={index}
          name={name}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          specification={specification}
          values={values}
        />
      );
    case "object":
      return (
        <ObjectForm
          index={index}
          name={name}
          setFieldValue={setFieldValue}
          setFieldTouched={setFieldTouched}
          specification={specification}
          values={values}
        />
      );

    default:
      return <></>;
  }
};

export default DynamicForm;
