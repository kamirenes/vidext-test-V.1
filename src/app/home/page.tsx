import { CreateSection } from "./components/CreateSection/CreateSection";
import ShapeList from "./components/ShapesList/ShapesList";

export default async function HomePage() {
  return (
    <div>
      <CreateSection />
      <ShapeList />
    </div>
  );
}
