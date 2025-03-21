import { Box, Input } from '@chakra-ui/react';
import { useMemo, useState } from 'react';

export default function Lesson3() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);

  const getFullName = useMemo(() => {
    console.log('>>>> getFullName >>>>>> ');
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  // const getFullName = () => {
  //   console.log('>>>> getFullName >>>>>> ');
  //   return `${firstName} ${lastName}`;
  // }

  // const getBirthDay = () => {
  //   console.log('>>>>> getBirthDay >>>>>>');
  //   return 2025 - age;
  // };

  const getBirthDay = useMemo(() => {
    console.log('>>>>> getBirthDay >>>>>>');
    return 2025 - age;
  }, [age]);

  return (
    <Box p={10}>
      <Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="first name"
      />
      <Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="last name"
      />
      <Input
        value={age}
        onChange={(e) => setAge(+e.target.value)}
        placeholder="age"
        type="number"
      />

      <Box>full name: {getFullName}</Box>
      <Box>birth day: {getBirthDay}</Box>
    </Box>
  );
}
