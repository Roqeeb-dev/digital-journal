import LoginClient from "./loginClient";

export const metadata = {
  title: "Login | Digital Journal",
  description: "This is the author's portal to adding more content",
};

export default function Page() {
  return (
    <>
      <LoginClient />
    </>
  );
}
