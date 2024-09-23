import BottomNavigationBar from "@/components/template/layout/navbar/BottomNavigationBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <BottomNavigationBar />
    </>
  );
}

export default layout;
