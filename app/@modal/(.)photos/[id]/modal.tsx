'use client';

import { useRouter } from 'next/navigation';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function ModalTest({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [opened, { open, close }] = useDisclosure(true);

  function onDismiss() {
    router.back();
    close()
  }
  
  return (
    <Modal opened={opened} onClose={onDismiss}>
      {children}
    </Modal>
  );
}
