import RegisterClient from "./RegisterClient";

export const metadata = {
  title: "Register | Digital Journal",
  description: "Register to view your personalized feed",
};

export default function Page() {
  return (
    <main>
      <RegisterClient />
    </main>
  );
}
