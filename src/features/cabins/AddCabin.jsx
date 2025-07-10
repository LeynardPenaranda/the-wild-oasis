import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
// const ModalContext = createContext();
// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <>
//       <Button onClick={() => setIsOpenModal(!isOpenModal)}>
//         Add New Cabin
//       </Button>
//       {isOpenModal && (
//         <ModalContext.Provider value={{ setIsOpenModal, isOpenModal }}>
//           <Modal>
//             <CreateCabinForm />
//           </Modal>
//         </ModalContext.Provider>
//       )}
//     </>
//   );
// }
// export function useHook() {
//   const context = useContext(ModalContext);
//   return context;
// }
export default AddCabin;
