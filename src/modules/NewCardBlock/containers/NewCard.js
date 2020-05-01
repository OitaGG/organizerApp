import * as React from "react";
import ReactDOM from 'react-dom'
import {connect} from "react-redux";
import NewCard from '../components/NewCard';
import {fetchNewCaseTemplateActionCreator, patchSingleCase} from "../../../store/templates/actions";
import {useState} from "react";
import {rewriteCurrentCard, toggleNewCardActionCreator} from "../../../store/newCard/actions";
import {useEffect} from "react";

type Props = {
    onCancel: void,
    onCreate: void,
    visible: boolean,
    fetchNewCase: void
}

const NewCardContainer = (props: Props) => {
    const {currentTemplate, visible} = props;
    const [title, setTitle] = useState(props.title ? props.title : '');
    const [description, setDescription] = useState(props.description ? props.description : '');
    useEffect(() => {
        setTitle(props.title)
    }, [props.title]);
    useEffect(() => {
        setDescription(props.description)
    }, [props.description]);
    const onCreateForDays = () => {
        if(!props._id) {
            props.fetchNewCase({title: title, description: description});
            setDescription('');
            setTitle('');
            props.toggleNewCard();
        } else {
            props.patchSingleCase({id: props._id,title: title, description: description});
            props.toggleNewCard();
            props.rewriteCurrentCard({id: '', title: '', description: ''})
        }
    };
    return (
      <NewCard
          visible={visible}
          currentTemplate={currentTemplate}
          onCancel={props.toggleNewCard}
          onCreate={onCreateForDays}
          newList={props.newList}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
      />)
};

const mapStateToProps = (store: any): any => ({
    visible: store.newCard.visible,
    title: store.newCard.title,
    description: store.newCard.description,
    _id: store.newCard._id,
    currentTemplate: store.templates.currentTemplate
});

const mapDispatchToProps = {
    fetchNewCase: fetchNewCaseTemplateActionCreator,
    toggleNewCard: toggleNewCardActionCreator,
    patchSingleCase: patchSingleCase,
    rewriteCurrentCard: rewriteCurrentCard
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCardContainer);