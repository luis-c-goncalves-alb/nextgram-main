'use client';

import { useRouter } from 'next/navigation';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';



export function ModalTest({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [opened, { open, close }] = useDisclosure(true);

  const deepLinking = localStorage.getItem("deeplinking")

  function onDismiss() {
    // se não for deepLinking devia só fazer close()
    if(deepLinking === "true"){
      router.push("/for-you")
    }else{
      router.back();
    }
    close()
  }

  
  return (
    <Modal  opened={opened} onClose={onDismiss}>
      {children}
    </Modal>
  );
}
