"use client";

import useComponent from "./useComponent";
import ShapeList from "./components/ShapesList/ShapesList";

const HomeLayout = () => {
  const {
    color,
    createShape,
    type,
    size,
    handleSubmit,
    setColor,
    setSize,
    setType,
  } = useComponent();

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          placeholder="Tipo (e.g. circle)"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-1"
        />
        <input
          type="text"
          placeholder="Color (e.g. red)"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border p-1"
        />
        <input
          type="number"
          placeholder="Tamaño"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          className="border p-1"
        />
        <button
          type="submit"
          disabled={createShape.isLoading}
          className="bg-blue-500 text-white px-4 py-1 rounded"
        >
          {createShape.isLoading ? "Creando..." : "Crear figura"}
        </button>
      </form>

      <ShapeList />
    </div>
  );
};

export default HomeLayout;
