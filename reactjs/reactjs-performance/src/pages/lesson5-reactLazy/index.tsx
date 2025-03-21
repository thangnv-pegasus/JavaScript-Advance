import { Box, Button } from '@chakra-ui/react';
import { lazy, Suspense, useState } from 'react';

const ModalTest = lazy(() => import('@/components/ModalTest'));

export default function Lesson5() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Box p={10}>
      <Button onClick={() => setShowModal((pre) => !pre)}>
        {showModal ? 'close modal' : 'open modal'}
      </Button>

      {showModal && (
        <Suspense fallback={<div>Đang tải...</div>}>
          <ModalTest />
        </Suspense>
      )}
    </Box>
  );
}
