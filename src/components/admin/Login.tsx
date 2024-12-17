import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Form } from "@nextui-org/form";


const Login = ({setIsLogged} : {setIsLogged:Function}) => {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();

      if (res.success) {
        setIsLogged(true);
      } else {
        alert("Incorrect password");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <div className="flex flex-col gap-1">
          <h1 className="text-large text-default-500 font-medium">Sign in to your account</h1>
        </div>

        <Form className="flex flex-col gap-3" validationBehavior="native" onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={"password"}
            variant="bordered"
          />

          <Button className="w-full" color="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}
 
export default Login;