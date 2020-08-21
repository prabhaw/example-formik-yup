import AutoComplete from "./Autocomplete.component";
import {
  Box,
  Divider,
  Badge,
  Flex,
  Avatar,
  Text,
  Stack,
} from "@chakra-ui/core";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/core";
import { IoMdCart, IoIosArrowDown } from "react-icons/io";
import SignupBtn from "./SignUp.component";
const NavbarTop = (props) => {
  return (
    <>
      <div className='container-space mb-2'>
        <div className='row justify-content-center '>
          <div className='col-md-3 p-0 mt-1'>
            <img src='/logo.png' className='logo ' alt='logo' />
          </div>
          <div className='col-10 pt-2 col-md-6'>
            <AutoComplete />
          </div>
          <div className='col-md-3 '>
            <div className='float-right d-flex col-for-login mt-2'>
              <Box as={IoMdCart} size='30px' color='main' mt='4px' />
              <Badge
                variant='solid'
                variantColor='gray'
                position='absolute'
                rounded='7px'
              >
                9
              </Badge>
              <Divider orientation='vertical' borderColor='second' />
              <Popover>
                <PopoverTrigger>
                  <Flex cursor='pointer'>
                    <Avatar
                      src='https://bitly/sage-adebayo'
                      size='sm'
                      my='2px'
                    />
                    <Box ml='3'>
                      <Text isTruncated fontSize='sm' mb='0'>
                        Namaste, Sign In
                      </Text>
                      <Stack isInline>
                        <Text fontSize='sm' mt='0' fontWeight='bold'>
                          My Account
                        </Text>{" "}
                        <Box as={IoIosArrowDown} size='18px' color='main' />
                      </Stack>
                    </Box>
                  </Flex>
                </PopoverTrigger>
                <PopoverContent w='200px' placement='bottom-end' zIndex={4}>
                  <PopoverArrow />

                  <PopoverBody>
                    <SignupBtn />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <div className='clear'></div>
      <style jsx>{`
        .logo {
          height: 40px;
        }
        .clear {
          clear: both;
        }
        .col-for-login {
          height: 40px;
        }
      `}</style>
    </>
  );
};

export default NavbarTop;
