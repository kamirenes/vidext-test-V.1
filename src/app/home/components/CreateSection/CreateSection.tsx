"use client";
import { Button } from "@/components/ui/button";
import useComponent from "./useComponent";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ColorInput } from "@/components/custom/ColorInput";

export function CreateSection() {
  const {
    color,
    createShape,
    type,
    suggestColor,
    handleColorChange,
    handleSubmit,
    handleSuggestColor,
    isSaveDisable,
    setSize,
    setType,
  } = useComponent();

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Create shape</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
          <div className="w-50 h-[108px]">
            <label
              htmlFor="type"
              className="text-sm font-medium text-foreground"
            >
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
            <label
              htmlFor="type"
              className="text-sm font-medium text-foreground"
            >
              Color
            </label>
            <div className="flex flex-col items-center">
              <ColorInput color={color} handleColorChange={handleColorChange}/>
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
            <label
              htmlFor="type"
              className="text-sm font-medium text-foreground"
            >
              Size
            </label>
            <Input
              type="number"
              placeholder="Size"
              onChange={(e) => setSize(Number(e.target.value))}
              className="border p-1"
              title="Size"
            />
          </div>
          <div className="h-[60px]">
            <Button
              type="submit"
              disabled={createShape.isLoading || isSaveDisable}
              className="ml-4"
            >
              {createShape.isLoading ? "Creating..." : "Create shape"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
