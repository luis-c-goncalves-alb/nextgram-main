import {  ModalTest } from './modal';

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <ModalTest>{photoId}</ModalTest>;
}
