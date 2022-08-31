import Modal from "../UI/Modal";
import Card from "../UI/Card";
import classes from "./orderform.module.css";

const ResponseModal = (props) => {

    const  {title,content} = props;

    return (
      <Modal>
        <Card>
          <div className={classes['sucess-message']}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </Card>
      </Modal>
    );
}

export default ResponseModal;