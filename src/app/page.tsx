import Banner from "@/components/Banner";
import InputForm from "@/components/InputForm";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <InputForm />
      </div>
      <div>
        <Banner />
      </div>
    </div>
  );
}
