import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const PageButton = () => {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" mt={5}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <Button rightIcon={<ChevronDownIcon />} colorScheme="blue" w="800px">
            /people
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: "none" }}>
          <PopoverArrow />
          <PopoverCloseButton />

          <PopoverBody w="full">
            <Tabs isLazy colorScheme="green" w="300px" justifyContent="center">
              <TabPanels>
                <TabPanel>
                  <ul>
                    <li>
                      The people can go to this page, by clicking the `People`
                      tab in the Navbar
                    </li>
                    <li>
                      The data should be fetched from
                      https://jsonplaceholder.typicode.com/users (Users API
                      call) using Static Site Generation (SSG) for this page.
                    </li>
                    <li>
                      Hence the people page will be rendered from the server,
                      with all the data present in the HTML file itself
                    </li>
                  </ul>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
};

export default PageButton;
