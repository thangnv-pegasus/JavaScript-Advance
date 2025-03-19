import { Box, Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"

export default function Lesson1() {

  const [state, setState] = useState(0);

  console.log('>>> loading Lesson1 component >>> ')

  useEffect(() => {
    console.log('>>> Lesson1 running >>>');
  }, [])

  return (
    <Box p={10}>
      <h1>Lesson1</h1>

      <Button onClick={() => setState(state + 1)}>Click me</Button>
      <Text>state: {state}</Text>
    </Box>
  )
}