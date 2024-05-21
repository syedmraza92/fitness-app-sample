import Progress from "./components/progress";
import Center from "./pages/Center";
import Left from "./pages/Left";

export default function Home() {
  return (
    <main>
      <div className="flex gap-x-8">
        <Left />
        <Center />
      </div>
    </main>
  );
}
