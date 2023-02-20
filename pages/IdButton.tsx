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

const IdButton = () => {
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" mt={5}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <Button rightIcon={<ChevronDownIcon />} colorScheme="blue" w="800px">
            /people/[id]
          </Button>
        </PopoverTrigger>
        <PopoverContent _focus={{ boxShadown: "none" }}>
          <PopoverArrow />
          <PopoverCloseButton />

          <PopoverBody w="full">
            <Tabs
              isLazy
              colorScheme="green"
              w="400px"
              placement="bottom"
              justifyContent="center"
            >
              <TabPanels>
                <TabPanel>
                  <ul>
                    <li>
                      The people can go to this page, by clicking the `Get
                      Todos` button in the User Cards
                    </li>
                    <li>
                      All the static HTML files, based on the static paths of
                      the user id, should be created using SSG
                    </li>
                    <li>
                      The HTML files should have the UserID:[id] data present in
                      their HTML pages (Check screenshots for examples)
                    </li>
                    <li>
                      The TodoData should be fetched from
                      https://jsonplaceholder.typicode.com/users/$id/todos using
                      Client Side Rendering, and shown in the UI after the page
                      loads
                    </li>
                    <li>
                      Visting any other dynamic route based on the user id which
                      is not in the API should show the 404 page. For example,
                      from the Users API call, none of the user has the 97 user
                      id, hence, visiting http://localhost:3000/people/97 should
                      return 404 page
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

export default IdButton;
