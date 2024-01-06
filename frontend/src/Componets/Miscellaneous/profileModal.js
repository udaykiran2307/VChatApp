import { ViewIcon } from "@chakra-ui/icons";
import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

const ProfileModal = ({ user, children }) => {
    console.log(user)
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton
          d={{ base: "flex" }}
          icon={<ViewIcon />}
          onClick={onOpen}
        ></IconButton>
      )}
       <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          display={'flex'}
          flexDir={'column'}
          justifyContent={'center'}
          alignItems={'center'}>
          <ModalHeader>{user.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody
         
          >
           <Image
           borderRadius={"full"}
           boxSize={'150px'}
           src={user.pic}
           alt={user.name}
           >

           </Image>
          </ModalBody>
          
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileModal;
