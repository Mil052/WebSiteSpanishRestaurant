'use client'
import { useRef } from "react";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import styles from './MessageForm.module.css';

const queryClient = new QueryClient();

async function sendMessage (formData: FormData) {
    const response = await fetch('/api/contact', {
        method: "POST",
        // headers: {"Content-Type": "multipart/form-data"}; boundary=MyBoundaryString,
        body: formData,
    });
    
    if (!response.ok) {
        throw new Error('An error occurred while sending message. Please try again leter.');
    }

    return response.json();
}

export default function MessageForm () {
    const formRef = useRef<HTMLFormElement>(null);

    const { mutate, isPending, isSuccess, isError, error, reset } = useMutation({
        mutationFn: sendMessage
    })

    const submitMesage = async (formData: FormData) => {
        await mutate(formData);
        formRef.current!.reset();
    }

    return (
            <form action={submitMesage} ref={formRef} className={styles.messageForm}>
                <div className={styles.textControl}>
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name"/>
                </div>
                <div className={styles.textControl}>
                    <label htmlFor="email">e-mail</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div className={styles.textControl}>
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" id="title"/>
                </div>
                <div className={styles.messageControl}>
                    <label htmlFor="message">message</label>
                    <textarea name="message" id="message" cols={30} rows={10}></textarea>
                </div>
                <div className={styles.statusInfoBox}>
                    { isPending && 'Sending message...' }
                    { isSuccess && 'Your message has been sent.' }
                    { isError && error.message }
                </div>
                <button type="submit" className={styles.buttonSecondary}>SEND</button>
            </form>
    )
}

// https://tanstack.com/query/latest/docs/react/guides/mutations