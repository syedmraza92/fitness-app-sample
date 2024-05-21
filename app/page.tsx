import Center from "./pages/Center";
import Left from "./pages/Left";

export default function Home() {
  return (
    <main>
      <div className="flex gap-x-8 bg-[#CECECE] w-[100%] p-36">
        <div className="mt-10">
          <Left />
        </div>
        <Center />
      </div>
    </main>
  );
}
