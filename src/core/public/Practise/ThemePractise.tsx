import { Box } from "@/components/core";
import Button from "@/components/derived/Buttons/Buttons";
import { useThemeToggler } from "@/hooks/application";

export const ThemePractise = () => {
  const toggler = useThemeToggler();
  return (
    <>
      <Box>
        <Button className="btn btn-primary mt-3 ml-5" onClick={toggler}>
          Theme
        </Button>
      </Box>
    </>
  );
};
