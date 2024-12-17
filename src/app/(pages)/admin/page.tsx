import AdminHandler from "@/components/admin/AdminHandler";
import {getPosition} from "@/lib/utils";

const Page = async () => {
  const isHere = await getPosition() || false;

  return (
    <AdminHandler isHere={isHere} />
  );
}
 
export default Page;