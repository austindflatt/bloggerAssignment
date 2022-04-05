import React from 'react'
import { Card, Text } from '@mantine/core';

const Blog = (props) => {
  return (
	  <>
	  <Card shadow="sm" p="xl">
      <Text weight={500} size="lg">
			{props.titleProp} by {props.authorProp}
      </Text>
      <Text size="sm">
			{props.textProp}
      <br />
      <a href=''>Edit blog</a>
			<p>{props.createdProp}</p>
      </Text>
    </Card>
	  </>
  )
}

export default Blog