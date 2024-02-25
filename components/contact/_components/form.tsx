// components/ShadowForm.tsx
import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface ShadowFormProps {}

const ShadowForm: React.FC<ShadowFormProps> = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_c0imuig', 'template_p48nfht', form.current, 'm1uUIph7eXSi1Jmj9')
        .then(() => {
          toast("Thanks! I'll get back to you asap :)");
          if (form.current) {
            form.current.reset();
          }
        })
        .catch((error) => {
          console.error(error.text);
        });
    }
  };

  return (
    <div >

    <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-10">
       <div className="grid w-full max-w-sm items-center gap-1.5">
       <Label htmlFor="user" className="text-[#414141]">User name</Label>
       <Input type="text" id="user" placeholder="username" name="user_name"  className='dark:text-slate-200 focus-visible:ring-transparent' required/>
     </div>

       <div className="grid w-full max-w-sm items-center gap-1.5">
       <Label htmlFor="email" className="text-[#414141]">Email</Label>
       <Input type="email" name="user_email" id="email" placeholder="Email"  className='dark:text-slate-200 focus-visible:ring-transparent' required/>
     </div>

       <div className="grid w-full max-w-sm gap-1.5">
       <Label htmlFor="message" className="text-[#414141]">Your message</Label>
       <Textarea placeholder="Type your message here." name="message" id="message" className='dark:text-slate-200 focus-visible:ring-transparent'  required/>
     </div>

       <div className="grid w-full max-w-sm gap-1.5">
         <Button type="submit" value="Submit">Send a message</Button>
       </div>
    </form>
    </div>
  );
};

export default ShadowForm;
