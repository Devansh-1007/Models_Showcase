import { IconXboxX } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Card, Image, Text, Badge, Button, Modal } from "@mantine/core";
import { Details } from "./Details";
import "@mantine/core/styles.css";
export const MCard = (props) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="mx-2 md:mx-auto">
      <Card className="max-w-lg md:max-w-4xl" p={2} radius="md">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={props.thumbnailUrl}
            h={160}
            w={160}
            alt="Norway"
            mx={20}
            my={10}
          />
          <div style={{ flex: "1", minWidth: 0 }}>
            <div>
              <Text fontWeight={800}>
                {props.title}
                {props.featured && (
                  <Badge m={20} color="pink">
                    Featured
                  </Badge>
                )}
              </Text>
              <Text size="sm">{props.body}</Text>
            </div>
            <Modal
              size="auto"
              bg="indigo"
              opened={opened}
              onClose={close}
              title="Description"
              closeButtonProps={{
                icon: <IconXboxX size={20} stroke={1.5} />,
              }}
              overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
              }}
              centered
            >
              <Details title={props.title} url={props.url} body={props.body} />
            </Modal>
            <Button onClick={open} c="white" bg="gray" mt="md" radius="md">
              Read More
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
