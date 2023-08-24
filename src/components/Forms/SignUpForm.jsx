import * as React from "react";
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/src/firebase/context/FirebaseAuthContext"
import { Card, CardBody } from "@nextui-org/react";

export default function PasswordForm() {

  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { createUserWithEmailAndPassword } = useAuth();


  const onSubmit = event => {
    setError(null)

    if (passwordOne === passwordTwo) {
      createUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          router.push("/login");
        })
        .catch(error => {
          setError(error.message)
        });
    } else {
      setError("The passwords do not match.");
      event.preventDefault();
    }
  };


  const [value, setValue] = React.useState("junior2nextui.org");


  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validationState = React.useMemo(() => {
    if (value === "") return undefined;

    return validateEmail(value) ? "valid" : "invalid";
  }, [value]);

  return (
    <form className="flex-1" onSubmit={onSubmit}>
      {
        error &&
        <Card className="mb-5">
          <CardBody>
            <p className="text-danger">{error}</p>
          </CardBody>
        </Card>
      }
      <Input

        required={true}
        type="email"
        label="Email"
        value={email}
        placeholder="Enter your email"
        color={validationState === "invalid" ? "danger" : "success"}
        errorMessage={validationState === "invalid" && "Please enter a valid email"}
        validationState={validationState}
        onValueChange={setValue}
        onChange={(event) => setEmail(event.target.value)} />
      <Input
        required={true}
        className="mt-3"
        type="password"
        label="Password"
        value={passwordOne}
        placeholder="Enter password here"
        onChange={(event) => setPasswordOne(event.target.value)} />
      <Input
        required={true}
        className="mt-2"
        type="password"
        value={passwordTwo}
        placeholder="Please confirm your password"
        onChange={(event) => setPasswordTwo(event.target.value)} />
      <Button className="mt-3" type="submit" color="primary">Submit</Button>
    </form>
  );
}