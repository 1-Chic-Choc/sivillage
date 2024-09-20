import BottomNavigationBar from "@/components/navbars/BottomNavigationBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BottomNavigationBar />
    </>
  );
}

export default layout;
