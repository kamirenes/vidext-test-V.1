"use client";
import { Button } from "@/components/ui/button";
import useComponent from "./useComponent";
import { Input } from "@/components/ui/input";

export function CreateSection() {
  const {
    color,
    createShape,
    type,
    size,
    suggestColor,
    handleSubmit,
    handleSuggestColor,
    setColor,
    setSize,
    setType,
  } = useComponent();

  return (
    <div>
      <label htmlFor="type" className="text-xl font-medium text-foreground">
        Create shape
      </label>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
        <div className="w-50 h-[108px]">
          <label htmlFor="type" className="text-sm font-medium text-foreground">
            Type
          </label>
          <Input
            type="text"
            placeholder="Type (e.g. circle)"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-1"
            title="Type"
          />
        </div>
        <div className="w-50">
          <label htmlFor="type" className="text-sm font-medium text-foreground">
            Color
          </label>
          <div className="flex flex-col items-center">
            <Input
              type="text"
              placeholder="Color (e.g. red)"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="border p-1"
              title="Color"
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleSuggestColor}
              className="mt-3"
            >
              {suggestColor.isLoading ? "Loading..." : "AI Color suggestion"}
            </Button>
          </div>
        </div>
        <div className="w-50 h-[108px]">
          <label htmlFor="type" className="text-sm font-medium text-foreground">
            Color
          </label>
          <Input
            type="number"
            placeholder="Size"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="border p-1"
            title="Size"
          />
        </div>
        <div className="h-[60px]">
          <Button
            type="submit"
            disabled={createShape.isLoading}
            className="ml-4"
          >
            {createShape.isLoading ? "Creating..." : "Create shape"}
          </Button>
        </div>
      </form>
    </div>
  );
}
