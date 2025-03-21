import { Box, Button, Input, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Lesson2() {
  const [state, setState] = useState(0);
  const [name, setName] = useState('');

  console.log('>>> loading Lesson2 component >>> ');

  useEffect(() => {
    console.log('>>> useEffect with dependencies is empty array >>> ');
    console.log('----------------------------------------------------');
  }, []);

  useEffect(() => {
    console.log('>>> useEffect with dependencies is state >>> ', state);
    console.log('----------------------------------------------------');
  }, [state]);

  useEffect(() => {
    console.log('>>> useEffect with dependencies is name >>> ', name);
    console.log('----------------------------------------------------');
  }, [name]);

  useEffect(() => {
    console.log('>>> useEffect without dependencies >>> ');
    console.log('----------------------------------------------------');
  });

  return (
    <Box className="!p-10">
      <h1>State: {state}</h1>
      <Button mt="2" onClick={() => setState((pre) => pre + 1)}>
        Increase
      </Button>
      <Button mt="2" ml="2" onClick={() => setState((pre) => pre + 1)}>
        Decrease
      </Button>

      <VStack mt="10">
        <Input mt="2" value={name} onChange={(e) => setName(e.target.value)} />
      </VStack>
    </Box>
  );
}
