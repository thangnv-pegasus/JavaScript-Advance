import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import { memo, useCallback, useEffect, useState } from 'react';

export default function Lesson4() {
  const [list, setList] = useState<string[]>([]);
  const [name, setName] = useState('');
  const [state, setState] = useState(0);

  const removeChild = useCallback(() => {
    setList((pre) => [...pre.slice(0, -1)]);
  }, [state]);

  useEffect(() => {
    console.log('>>> function remove child re-created >>>');
  }, [removeChild]);

  return (
    <Box p={10}>
      <Input
        value={name}
        placeholder="input name ...."
        onChange={(e) => setName(e.target.value)}
      />
      <NameItem name={name} handleClick={removeChild} />
      <Text p={4}>State: {state}</Text>
      <Flex gapX={10} mt={2}>
        <Button onClick={() => setState((pre) => pre + 1)}>Update state</Button>
        <Button onClick={() => setList([...list, name])} colorScheme="teal">
          Add name
        </Button>
      </Flex>
      <Text mt={10}> list name </Text>
      <Items list={list} state={state} />
    </Box>
  );
}

interface IItemProps {
  list: string[];
  state: number;
}
const Items = memo(({ list = [], state = 1 }: IItemProps) => {
  console.log('>>> items component render >>> ');

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          {index + 1} =&gt; {item}
          <Text>state: {state}</Text>
        </li>
      ))}
    </ul>
  );
});

const NameItem = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: () => void;
}) => {
  console.log('>>> name component render >>> ');

  return (
    <>
      <Text>{name}</Text>
      <Button onClick={handleClick} mt={10}>
        Remove child
      </Button>
    </>
  );
};
