import { FlexBox, Text } from "../core";
import Button from "../derived/Buttons/Buttons";

interface DataUnavailableProps {
  title?: string;
  description?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  button?: React.ReactElement;
  className?: string;
}

function DataUnavailable(props: DataUnavailableProps): JSX.Element {
  const { title, description, icon, onClick, className } = props;
  return (
    <FlexBox
      align="center"
      justify="center"
      direction="column"
      className={`${className ? className : "app-height p-4"}`}
    >
      {icon}

      <Text variant="h6" typeface="bold" className="mt-3">
        {title}
      </Text>
      <Text className="mt-2 text-center" variant="display1">
        {description}
      </Text>
      {onClick && (
        <Button className="btn btn-primary btn-icon lft mt-3" onClick={onClick}>
          <i className="ic-add"></i>Add
        </Button>
      )}
    </FlexBox>
  );
}

export default DataUnavailable;
