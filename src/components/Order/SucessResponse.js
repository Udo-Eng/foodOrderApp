import Modal from "../UI/Modal";
import Card from "../UI/Card";
import classes from "./orderform.module.css";

const SucessModal = (props) =>{
    return (
      <Modal>
        <Card>
          <div className={classes['sucess-message']}>
            <h2>Order Sucessful</h2>
            <p>Thanks for ordering from us</p>
          </div>
        </Card>
      </Modal>
    );
}

export default SucessModal;