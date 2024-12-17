import AdminHandler from "@/components/admin/AdminHandler";

const Page = async () => {
  const isHere = true; //todo fetch

  return (
    <AdminHandler isHere={isHere} />
  );
}
 
export default Page;