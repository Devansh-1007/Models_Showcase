import "@mantine/core/styles.css";
import { Image, Text, Badge } from "@mantine/core";
export const Details = (props) => {
  return (
    <div>
      <Badge ml={20} color="pink">
        Featured
      </Badge>
      <Image
        src={props.url}
        h={300}
        fit="content"
        alt="Norway"
        mx="auto"
        my={10}
        fallbackSrc="https://cdn1.vectorstock.com/i/1000x1000/31/20/image-error-icon-editable-outline-vector-30393120.jpg"
      />
      <div className="m-auto justify-center items-center text-center">
        <Text fontWeight={800}>{props.title}</Text>
      </div>
      <Text size="sm">{props.body}</Text>
    </div>
  );
};
