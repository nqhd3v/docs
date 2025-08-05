import Header from "@/components/header";
import PrivacyPolicyContent from "@/components/policy";

export default function PrivacyPolicy() {
  return (
    <section className="w-full min-h-screen">
      <Header className="fixed top-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-md bg-gray-900/0 backdrop-blur-md" />

      <main className="w-[100%-40px] md:max-w-[600px] lg:max-w-[920px] m-auto px-5 pb-5 pt-32 text-justify">
        <PrivacyPolicyContent />
      </main>
    </section>
  );
}
