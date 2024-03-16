import FooterStickyButtons from "./footerStickyBtns";
import StickyHeader from "./stickyHeader";

export default function Layout({ children }) {
  return (
    <>
      <StickyHeader headerText="Profile" />
      <main className="w-full p-5 mt-[44px] h-[calc(100vh-88px)]">
        {children}
      </main>
      <FooterStickyButtons />
    </>
  );
}
