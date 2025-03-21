import { Box } from '@chakra-ui/react';

export default function ModalTest() {
  console.log('>>>>> ModalTest >>>>>>');
  const arr = Array(100000).fill(0);
  console.log('>>>>> ModalTest >>>>>>', arr.length);

  return <Box>
    {arr.map((item, index) => {
        return <Box key={index}>item {index}</Box>;
    })}
  </Box>;
}
