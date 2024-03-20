import { useCallback, useEffect, useState } from "react";
import {
  MantineProvider,
  createTheme,
  SimpleGrid,
  Group,
  Paper,
  SegmentedControl,
  Pagination,
} from "@mantine/core";
import { CustomNavbar } from "./CustomNavbar";
import { MCard } from "./MCard";
import pRes from "../api/api";

import "@mantine/core/styles.css";
const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
});

export const Models = () => {
  const [value, setValue] = useState(0);
  const [activePage, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [pResData, setPResData] = useState([]);

  const chunk = useCallback((array, size) => {
    if (!array.length) {
      return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
  }, []);
  console.log(pRes);

  useEffect(() => {
    let filteredData = null;
    if (value === 0) {
      filteredData = pRes;
    } else if (value === -1) {
      filteredData = pRes.filter((e) => e.featured === true);
    } else {
      filteredData = pRes.filter((e) => e.albumId === value);
    }
    const newData = chunk(filteredData, 20);
    setPResData(newData);
  }, [value, chunk]);

  return (
    <div>
      <div className="bg-gray-800 top-0 backdrop-blur-xl w-full px-4 py-3 mx-auto text-white shadow-md ">
        <CustomNavbar />
      </div>
      <div className="pt-16 pb-8 bg-gray-900 text-white min-h-screen m-auto flex">
        <div className="container mx-auto flex">
          <MantineProvider theme={theme}>
            <div>
              <SimpleGrid cols={1} spacing="xl">
                <div className="mx-auto flex">
                  <Paper
                    className="bg-gray-800 p-4 flex "
                    style={{ minWidth: "200px" }}
                  >
                    <SegmentedControl
                      color="rgba(25, 25, 112, 1)"
                      fullWidth
                      radius="xl"
                      value={value}
                      onChange={setValue}
                      data={[
                        { label: "FEATURED", value: -1 },
                        { label: "All", value: 0 },
                        { label: "ID-1", value: 1 },
                        { label: "ID-2", value: 2 },
                        { label: "ID-3", value: 3 },
                        { label: "ID-4", value: 4 },
                        { label: "ID-5", value: 5 },
                        { label: "ID-6", value: 6 },
                        { label: "ID-7", value: 7 },
                        { label: "ID-8", value: 8 },
                        { label: "ID-9", value: 9 },
                        { label: "ID-10", value: 10 },
                      ]}
                    />
                  </Paper>
                </div>
                <div className="flex-grow">
                  <Group>
                    {pResData[activePage - 1]?.map((e) => (
                      <MCard
                        w={40}
                        h={40}
                        key={e.id}
                        title={e.title}
                        thumbnailUrl={e.thumbnailUrl}
                        body={e.body}
                        url={e.url}
                        featured={e.featured}
                      />
                    ))}
                  </Group>
                </div>
              </SimpleGrid>
            </div>
          </MantineProvider>
        </div>
      </div>
      <div className="bg-gray-900 text-white m-auto flex pb-8 ">
        <MantineProvider>
          <Pagination
            total={pResData.length}
            value={activePage}
            onChange={setPage}
            m="auto"
            bg="#7AD1DD"
          />
        </MantineProvider>
      </div>
    </div>
  );
};
