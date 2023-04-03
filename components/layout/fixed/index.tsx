import { Button } from "@chakra-ui/react";
import React from "react";
import { FaHeart,FaSearch } from "react-icons/fa";

function index() {
  return (
    <div className="fixedscreen md:hidden z-50 fixed top-0 right-2 flex justify-center items-center">
      
      <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={500}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            <FaHeart />
            <span className='ml-2'> (0)</span>
          </Button>
          <Button
          className="ml-3"
            as={'a'}
            fontSize={'sm'}
            fontWeight={500}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            <FaSearch /> 
          </Button>
    </div>
  );
}

export default index;
