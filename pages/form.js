import React from 'react'
import LoginForm from '../components/LoginForm'
import { Container,Button,Icon,Text,Box } from "@chakra-ui/react";
import Link from 'next/link';
// import Image from 'next/image';

export default function form() {
    const submit = async({name,email,password}) => {
        console.log("post");
        // await signUp({name,email,password});
       
    };
    
        return (
            <>
                <Link href={`/`}>
                 <Button variant="ghost">
                    <Text>back</Text>
                </Button>
                </Link>
                <Container w="full" align="center">
                <Box>
                    <Box mb={["1","0"]}>
                    <Text align="center" fontSize="xl">
                        login ?
                    </Text>
                    <Text align="center" fontSize="sm">
                        ログインはこちらから
                    </Text>
                    </Box>
                </Box>
                    <LoginForm
                        onSubmit={submit}
                    />
              
                </Container>
            </>
        )
}
