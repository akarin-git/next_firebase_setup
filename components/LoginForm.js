// import Input from '../components/Base/Input';
import { useState } from "react";
import { FormLabel,Input,FormControl,Box,Container,Button } from "@chakra-ui/react";




export default function LoginForm({onSubmit}) {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const submit = (e) => {
        console.log("hi");
        e.preventDefault();
        console.log(name,email,password);
        onSubmit({ name,email,password });
    }

    return (
        <Container pb={["20","10"]} mt={["5","0"]}>
        <form onSubmit={submit}>
            <Box mt={["5","7"]} mb="10">
            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
             </FormControl>
             <FormControl id="email" isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input 
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
             </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input 
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
           </Box>
            <button>
            SignUp
            </button>
        </form>
        </Container>
    )
  
}
