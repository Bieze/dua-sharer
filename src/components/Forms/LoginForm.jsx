import * as React from "react";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { useAuth } from "@/src/firebase/context/FirebaseAuthContext";
import { Card, CardBody } from '@nextui-org/react';


export default function LoginPasswordForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();
    const { signInWithEmailAndPassword } = useAuth();

    const onSubmit = event => {
        setError(null)
        signInWithEmailAndPassword(email, password)
            .then(authUser => {
                router.push('/#');
            })
            .catch(error => {
                setError(error.message)
            });
        event.preventDefault();
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
          value={password}
          placeholder="Enter password here" 
          onChange={(event) => setPassword(event.target.value)}/>
        <Button className="mt-3" type="submit" color="primary">Submit</Button>
      </form>
    )

}