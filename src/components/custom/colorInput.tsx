import { Input } from "../ui/input";

function ColorInput({
  color,
  handleColorChange,
}: {
  color: string;
  handleColorChange: (val: string) => void;
}) {
  return (
    <div className="relative w-full">
      <span
        className="absolute left-3 top-1/2 h-4 w-4 rounded-full -translate-y-1/2 border border-muted-foreground"
        style={{ backgroundColor: color }}
      />
      <Input
        type="text"
        placeholder="#000000"
        value={color}
        onChange={(e) => handleColorChange(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}

export { ColorInput };
